class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    showStats() {
        console.log(`Name: ${this.name}, COST: ${this.cost}`);
        return this;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resi) {
        super(name, cost);
        this.power = power;
        this.resi = resi;
    }
    showStats() {
        console.log(`Name: ${this.name}, COST: ${this.cost}, POWER: ${this.power}, RESI: ${this.resi}`);
        return this;
    }
}

class Effect extends Card {
    constructor(name, cost, text, state, magnitude) {
        super(name, cost);
        this.text = text;
        this.state = state;
        this.magnitude = magnitude;
    }
    showStats() {
        console.log(`Name: ${this.name}, COST: ${this.cost}, TEXT: ${this.text}, STATE: ${this.state}, MAGNITUDE: ${this.magnitude}`);
        return this;
    }
}

/* *****************TEST************ */
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's resilience by 2", "resilience", +2);
console.log("-------------------------------------------");
unit1.showStats();
console.log("*******************************************");
unit2.showStats();
console.log("*******************************************");
effect1.showStats();
console.log("*******************************************");
effect2.showStats();
console.log("*******************************************");
effect3.showStats();
console.log("*******************************************");