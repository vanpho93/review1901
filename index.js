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
    const index = singers.findIndex(singer => singer.id === +id);
    if (index === -1) return res.send('Khong tim thay ca si.');
    singers.splice(index, 1);
    res.redirect('/');
});

app.post('/add', parser, (req, res) => {
    const { name, link, image } = req.body;
    const singer = new Singer(name, link, image);
    singers.push(singer);
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
