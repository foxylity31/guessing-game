class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.numberMin = min;
        this.numberMax = max;
    }

    guess() {
        return this.number = Math.round((this.numberMax + this.numberMin)/2);
    }

    lower() {
       this.numberMax = this.number; 
    }

    greater() {
        this.numberMin = this.number; 
    }
}

module.exports = GuessingGame;
