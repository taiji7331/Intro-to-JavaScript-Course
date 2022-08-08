// The template for this practice was the exercise for OOP. It provided some useful classes with which to practice different loops

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
        this.energy = this.energy + 10
    }
    doSomethingFun() {
        this.energy = this.energy - 10
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork() {
        this.xp = this.xp + 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker(0, 10, "Bob", 21, 110)
    intern.goToWork()
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker(100, 30, "Alice", 30, 120)
    manager.doSomethingFun()
    return manager
}


// ------------! Below this point is new practice using the above objects ----------------!
let intern1 = intern();
let manager1 = manager();

function displayPropsOf(object) {
    for (key of Object.keys(object)) {
        console.log(key, ":", object[key]);
    }
}

function displayPropsIn(object) {
    for (key in object) {
        console.log(key, ":", object[key]);
    }
}

displayPropsOf(intern1);
displayPropsIn(manager1);

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

var sweater = Object.create(clothingItem)
sweater.material = "wool"

displayPropsOf(clothingItem);
displayPropsIn(sweater);
