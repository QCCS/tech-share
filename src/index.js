/**
 * Created by zhouli on 18/9/15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './js/react-components/tag';
class Car {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs " + this.price);
    }
}

var car1 = new Car("BMW", 100);
car1.getInfo();

var car2 = new Car("XOX", 100000);

//webpack是不认识react,jsx,语法，依赖loader去解析
//所有要配置loader
ReactDOM.render(
    <h1>
        <span>Hello, world!</span>
        <Tags tags={["tag1","tag2"]}></Tags>
    </h1>,
    document.getElementById('body')
);