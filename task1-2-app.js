'use strict'
// task1-1

// es5


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (otherText) {
    this.text = otherText;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

AttachedPost.prototype.showLight = function () {
    alert(`Текущее состояние ${this.author} параметра ${this.highlighted}`);
}

AttachedPost.prototype.showText = function () {
    alert(`Текстовка: ${this.text}`);
}

const mail1 = new AttachedPost('Андрей-ES5', 'Входящее сообщение', '21/11/2021');
mail1.showLight();
mail1.showText();
mail1.makeTextHighlighted();
mail1.showLight();
mail1.edit('Изменяемое сообщение ES5')
mail1.showText();

//es6

class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(otherText) {
        this.text = otherText;
    };
};

class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    };

    makeTextHighlighted() {
        this.highlighted = true;
    }

    showLight() {
        alert(`Текущее состояние ${this.author} параметра ${this.highlighted}`)
    }

    showText() {
        alert(`Текстовка: ${this.text}`);
    }
}

const mail2 = new AttachedPost('Андрей-ES6', 'Входящее сообщение ES6', '22/11/2021');
mail2.showLight();
mail2.showText();
mail2.makeTextHighlighted();
mail2.showLight();
mail2.edit('Изменяемое сообщение ES6')
mail2.showText();
