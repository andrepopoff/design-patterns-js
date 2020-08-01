class TeslaCar {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed
    }
    produce() {
        return new TeslaCar(this.model, this.price, this.maxSpeed)
    }
}

// Produce base car
const prototypeCar = new TeslaCar('S', 3600000, 210);

// Cloning of base car
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular car
car1.maxSpeed = 240;
car1.price = 3900000;