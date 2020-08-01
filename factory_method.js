class BMW {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed
    }
}

class BMWFactory {
    create(type) {
        if (type === 'X5') {
            return new BMW(type, 3100000, 180)
        }
        if (type === 'X6') {
            return new BMW(type, 5400000, 210)
        }
    }
}

const factory = new BMWFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');
