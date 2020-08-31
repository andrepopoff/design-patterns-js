class Engine2 {
    simpleInterface() {
        console.log("Engine 2.0 - tr-tr-tr")
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log("Engine V8 - wroom wroom")
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine
    }
    simpleInterface() {
        this.engine.complicatedInterface()
    }
}

class Car {
    startEngine(engine) {
        engine.simpleInterface()
    }
}

// Engine 2.0
const myCar1 = new Car();
const oldEngine = new Engine2();
myCar1.startEngine(oldEngine);

// Engine V8 with adapter
const myCar2 = new Car();
const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar2.startEngine(engineAdapter);

// Engine V8 without adapter
const myCar3 = new Car();
const newEngine = new EngineV8();
myCar3.startEngine(newEngine); // error