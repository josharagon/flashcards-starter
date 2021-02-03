const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck,
        this.turns = 0,
        this.incorrectGuesses = [],
        this.turns = 0

    }
    returnCurrentCard() {
        return this.deck[0]
    }

    takeTurn(guess) {
        this.turns++
        turn = new Turn(guess, this.deck[0]);
        turn.giveFeedback();
    }
    
    calculatePercentCorrect() {
        return (this.turns / this.incorrectGuesses);
    }
}


module.exports = Round;