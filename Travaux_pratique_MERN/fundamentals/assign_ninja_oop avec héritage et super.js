class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`I am ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank a sake and gained 10 health points`);
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
console.log(`I am ${ninja1.name}`);
ninja1.sayName().showStats().drinkSake().showStats();
console.log("*******************************************");

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        const message = super.drinkSake();
        const message1 = "What one programmer can do in one month, two programmers can do in two months."
        console.log(message1);
    }
}
const supersensei = new Sensei("Master Splinter");
supersensei.speakWisdom();
supersensei.showStats();
console.log("*******************************************");