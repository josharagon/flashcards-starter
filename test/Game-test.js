const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

    describe('Game', function(){

        it('should be a function', function() {
            const game = new Game();
            expect(Game).to.be.a('function');
        });

        it('should be able to create a new game', function() {
            const game = new Game();
            game.start(prototypeData);
            expect(game.cards[0]).to.be.a.instanceOf(Card);
            expect(game.deck).to.be.a.instanceOf(Deck);
            expect(game.round).to.be.a.instanceOf(Round);
            expect(game.deck.cards.length).to.equal(30);
            expect(game.currentRound).to.equal(1);
        });
    });