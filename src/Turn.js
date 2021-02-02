class Turn {
    constructor(guess, card) {
        this.guess = guess,
        this.card = card
    }
    returnGuess() {
        return guess;
    }
    returnCard() {
        return card
    }
    evaluateGuess() {
        if (guess === card.correctAnswer) {
            return true
        } else {
            return false
        }
    }
    giveFeedsback() {
        if (guess === card.correctAnswer) {
            return 'correct!'
        } else {
            return 'incorrect!'
        }
    }
}

module.exports = Turn;