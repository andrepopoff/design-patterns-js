let instance;

class Counter {
    constructor() {
        if (!instance) {
            instance = this;
            instance.count = 0
        }
        return instance
    }
    getCount() {
        return instance.count
    }
    increaseCount() {
        instance.count++
    }
}

let counter1 = new Counter();
let counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
counter2.increaseCount();
counter2.increaseCount();

console.log(counter1.getCount()); // 4
console.log(counter2.getCount()); // 4