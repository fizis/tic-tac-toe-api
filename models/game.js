const Move = require('./move');

const firstMoveMarker = 'x';

// TODO: use class syntax instead
const Game = function(id) {
    this.id = id;
    this.moves = [];
}

Game.prototype.makeMove = function(x, y) {
    // TODO: validate if it's possible to make such a move
    // e.g. valid coords and not a duplicate move
    let move = new Move(x, y);

    // TODO: extract to private method
    if (this.moves.length == 0) {
        move.marker = firstMoveMarker;
    }
    else {
        let lastMove = this.moves[this.moves.length - 1];
        let lastMoveMarker = lastMove.marker;

        if (lastMoveMarker === 'x') {
            move.marker = 'o';
        } else {
            move.marker = 'x';
        }
    }

    this.moves.push(move);
}

module.exports = Game;