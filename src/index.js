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


//这里用es6，jsx，语法写，可以编译，但是浏览器会报错说是require没有定义
//就是因为新版的babel有一些关键字不会深入编译，只是简单翻译，需要借助模块打包工具
ReactDOM.render(
    <h1>
        <span>Hello, world!</span>
        <Tags tags={["tag1","tag2"]}></Tags>
    </h1>,
    document.getElementById('body')
);