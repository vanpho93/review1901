const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { Singer, singers } = require('./Singer');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { singers });
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    const removed = Singer.remove(id);
    if (!removed) return res.send('Khong tim thay ca si.');
    res.redirect('/');
});

app.post('/add', parser, (req, res) => {
    const { name, link, image } = req.body;
    Singer.add(name, link, image);
    res.redirect('/');
});

app.post('/update/:id', parser, (req, res) => {
    const { name, link, image } = req.body;
    const { id } = req.params;
    const updated = Singer.update(id, name, link, image);
    if (!updated) return res.send('Khong tim thay ca si.');
    res.redirect('/');
});

app.get('/add', (req, res) => res.render('add'));

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const singer = singers.find(s => s.id === +id);
    if (!singer) return res.send('Khong tim thay ca si.');
    res.render('update', { singer });
});

app.listen(3000, () => console.log('Server started!'));
reload(app);
