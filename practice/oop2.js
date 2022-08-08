class Animal {
    constructor(color = "yellow", energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at:", this.energy)
        } else if (this.energy <= 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log("Energy is increasing, currently at:", this.energy)
    }
    getColor() {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = "chirp", canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option = true) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option = false) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false,  sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option = true) {
        if (option) {
            super.makeSound();
        } 
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var polly = new Parrot(true);
var fiji = new Parrot(false);

polly.makeSound();
fiji.makeSound();

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();

leo.makeSound(false);
leo.makeSound(true);

var cuddles = new Tiger();

cuddles.makeSound(false);
cuddles.makeSound(true);