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
    this.currentRound;
  }
  start() {
    const card1 = new Card(cardData)
    const card2 = new Card(cardData)
    const card3 = new Card(cardData)
    const card4 = new Card(cardData)
    const card5 = new Card(cardData)
    new Deck
    new Round
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;