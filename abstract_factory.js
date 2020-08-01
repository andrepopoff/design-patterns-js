class Z4 {
    info() {
        return "Z4 is a sport car"
    }
}

class I3 {
    info() {
        return "I3 is a family car"
    }
}

// Abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory

}

// Factories
function sportCarFactory() {
    return new Z4()
}

function familyCarFactory() {
    return new I3()
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = produce();

console.log(myCar.info()); // Z4 is a sport car
