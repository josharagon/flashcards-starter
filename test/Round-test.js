const { should } = require('chai');
const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card')
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function(){

  it('should be a function', function(){
    const round = new Round()
    expect(Round).to.be.a('function')
  });

  it('should have a method that returns the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.returnCurrentCard()).to.a.instanceOf(Card)
  });
    
  it('should be able to update the turn count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    round.takeTurn('sea otter')
    expect(round.turns).to.equal(1)
  });

  it('should evaluate a guess and return feedback', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('pug')).to.equal('incorrect!')
  });

  it('should add cards with incorrect guesses into an array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    round.takeTurn('pug')
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should calculate the total percentage of correct answers', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('Fitzgerald')
    expect(round.calculatePercentCorrect()).to.equal('67%')
  });

  it('should return a message when the round ends', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('Fitzgerald')
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });

});