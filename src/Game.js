const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.cards = [];
    this.deck = [];
    this.round;
  }
  start(cardsArr) {
    cardsArr.forEach(cardObj => {
      const card = new Card(cardObj.id, cardObj.question, cardObj.answers, cardObj.correctAnswer);
      this.cards.push(card);
   });
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. **ROUND: ${this.round.currentRound}**
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;