class GuessingGame {
    constructor() {
    	this.first=0;
    	this.last=0;
    	this.solution=0;
    }

    setRange(min, max) {
    	if (min<max) {
    	this.first=min;
    	this.last=max;
    	this.solution= Math.round(this.first + (this.last-this.first)/2);
     }
    }

    guess() {
    	return this.solution;

    }

    lower() {
    	this.last=this.solution;
    	this.solution=Math.round(this.first + (this.last-this.first)/2);
    	return this.solution;
    }

    greater() {
    	
    	this.first=this.solution;
    	this.solution=Math.round(this.first+(this.last-this.first)/2);
    	return this.solution;
    }
}

module.exports = GuessingGame;
