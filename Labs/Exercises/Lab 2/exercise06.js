class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    info() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${super.info()} \n${this.model} has a balance of \$${this.balance}`;
    }
}

const car2 = new Car("Phonetic Firebird", 1976);
console.log(car2.info());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());