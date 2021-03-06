class Singer {
    constructor(name, link, image) {
        this.id = Math.round(Math.random() * 10000);
        this.name = name;
        this.link = link;
        this.image = image;
    }
    static add(name, link, image) {
        const singer = new Singer(name, link, image);
        singers.push(singer);
    }

    static remove(id) {
        const index = singers.findIndex(singer => singer.id === +id);
        if (index === -1) return false;
        singers.splice(index, 1);
        return true;
    }

    static update(id, name, link, image) {
        const singer = singers.find(s => s.id === +id);
        if (!singer) return false;
        singer.name = name;
        singer.link = link;
        singer.image = image;
        return true;
    }
}

const singers = [
    new Singer('Karik', 'https://mp3.zing.vn/nghe-si/Karik', 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/a/0/a0927398989d4c5b18c56880bd56442b_1509531352.jpg'),
    new Singer('Đức Phúc', 'https://mp3.zing.vn/nghe-si/Duc-Phuc', 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg'),
    new Singer('Châu Khải Phong', 'https://mp3.zing.vn/nghe-si/Chau-Khai-Phong', 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/a/ca59799621e1c9fd8652cd947713acfa_1509951552.jpg')
];

module.exports = { Singer, singers };
