const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = []
    this.currentRound = 1;
  }
  returnCurrentCard() {
    return this.deck.cards[0];
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
    this.currentRound++;
    const finalScore = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${finalScore} of the questions correctly!`)
    if (parseInt(finalScore) < 90) {
      console.log('Minimum passing score is 90%... Let\'s try again!')
      setTimeout(function(){ console.log("Starting new game in 3..."); }, 1000);
      setTimeout(function(){ console.log("2"); }, 2000);
      setTimeout(function(){ console.log("1"); }, 3000);
      setTimeout(function(){ console.clear(); }, 4000);
      //CANT FIGURE OUT HOW TO RESTART GAME!!!!!!!
    }
  }
}


module.exports = Round;