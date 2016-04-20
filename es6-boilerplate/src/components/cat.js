
class Animal {
    constructor(data) {
        this.type = data.type;
        this.age = data.age;
        this.name=data.name;

    }

    getDetails() {
        return `${this.age} ${this.type} ${this.name}`;
    }
}

export default class Cat extends Animal {
    constructor(data) {
        super(data);
        this.isPurring = data.isPurring;
        this.isDrinkingMilk = data.isDrinkingMilk;

    }

    getDetails() {
        if (this.isPurring)
        return `${super.getDetails()} IsPurring: ${this.isPurring} isDrinkingMilk: ${this.isDrinkingMilk}`;
    }
}


