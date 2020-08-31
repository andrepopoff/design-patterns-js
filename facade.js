class Conveyor {
    setBody() {}
    setEngine() {}
    getEngine() {}
    setInterior() {}
    getInterior() {}
    setExterior() {}
    setWheels() {}
    addElectronics() {}
    paint() {}
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
    }
    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint()
    }
    changeEngine() {
        this.car.getEngine();
        this.car.setEngine()
    }
    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();