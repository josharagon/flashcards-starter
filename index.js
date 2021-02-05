const http = require('http');
const Card = require('./src/Card');
const { prototypeData } = require('./src/data');
const Game = require('./src/Game');
const Round = require('./src/Round');
const Turn = require('./src/Turn');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 

const game = new Game();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

game.start(prototypeData);

function restartGame() {
  shuffle(prototypeData);
  game.start(prototypeData);
}


module.exports.restartGame = restartGame;