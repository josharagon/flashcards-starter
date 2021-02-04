const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function(){
    
    it('should be a function', function(){
        const deck = new Deck();
        expect(Deck).to.be.a('function')
    });

    it('should take in the entire card deck', function(){
        const cards = [new Card(), new Card(), new Card()];
        const deck = new Deck(cards)
        expect(deck.cards).to.be.a('array');
    });

    it('should be able to count the cards', function(){
        const cards = [new Card(), new Card(), new Card()];
        const deck = new Deck(cards);
        expect(deck.countCards()).to.equal(3)
    });
});