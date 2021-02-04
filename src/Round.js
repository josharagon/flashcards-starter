const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck,
        this.turns = 0,
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        return this.deck.cards[0]
    }

    takeTurn(newGuess) {
        this.turns++    
        const turn = new Turn(newGuess, this.deck.cards[0]);
        if (newGuess === this.deck.cards[0].correctAnswer) {
            this.deck.cards.shift();
            return turn.giveFeedback();
        } else {
            this.incorrectGuesses.push(this.deck.cards[0].id);
            this.deck.cards.shift();
            return turn.giveFeedback();
        }
    }
    
    calculatePercentCorrect() {
        const finalPercent = this.incorrectGuesses.length * 100 / this.turns
        return `${100 - Math.round(finalPercent)}%`;
    }

    endRound() {
        return(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
    }
}


module.exports = Round;