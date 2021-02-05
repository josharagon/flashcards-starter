const Card = require('../src/Card')
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should take in a guess and a flashcard', function(){
    const card = new Card(1, 'What is my favorite animal', ['dog', 'cat', 'tiger'], 'polar bear')
    const turn = new Turn('my guess', card)
    expect(turn.guess).to.equal('my guess')
    expect(turn.card).to.be.a('object')
  });

  it('should be able to return the user guess', function() {
    const card = new Card(1, 'What is my favorite animal', ['dog', 'cat', 'tiger'], 'polar bear')
    const turn = new Turn('dog', card)
    expect(turn.returnGuess()).to.equal('dog')
  });

  it('should be able to return the flashcard', function(){
    const card = new Card(1, 'What is my favorite animal', ['dog', 'cat', 'tiger'], 'polar bear')
    const turn = new Turn('cat', card)
    expect(turn.returnCard()).to.be.an.instanceof(Card)
  });

  it('should be able to return a boolean value if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What is my favorite animal', ['dog', 'cat', 'tiger'], 'polar bear')
    const turn = new Turn('cat', card)
    const card2 = new Card(2, 'What is my favorite car', ['rx7', 'supra', 'wrx sti'], 'skyline gtr')
    const turn2 = new Turn('skyline gtr', card2)
    expect(turn.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  });

  it('should tell the user if they are correct or not', function(){
    const card = new Card(1, 'What is my favorite animal', ['dog', 'cat', 'tiger'], 'polar bear')
    const turn = new Turn('polar bear', card)
    const card2 = new Card(2, 'What is my favorite car', ['rx7', 'supra', 'wrx sti'], 'skyline gtr')
    const turn2 = new Turn('rx7', card2)
    expect(turn.giveFeedback()).to.equal('correct!')
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  });
});