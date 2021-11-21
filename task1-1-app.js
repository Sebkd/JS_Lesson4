'use strict'
// task1-1

// es5
/**
 * Конструктор класса ES5
 * @param {*} name 
 * @param {*} price 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 0.25;
}
Product.prototype.showPrice = function () {
    alert(`Продукт ${this.name} имеет стоимость ${this.price}`);
}

const product1 = new Product('Хлеб нарезной', 42);
product1.showPrice();
product1.make25PercentDiscount();
product1.showPrice();

// es6

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }

    showPrice() {
        alert(`Продукт ${this.name} имеет стоимость ${this.price}`);
    }
}

const product2 = new ProductEs6('Хлеб нарезной', 42);
product2.showPrice();
product2.make25PercentDiscount();
product2.showPrice();
