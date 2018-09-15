/**
 * Created by zhouli on 18/9/15
 */
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
