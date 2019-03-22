const Move = require('./move');

const firstMoveMarker = 'x';

// TODO: use class syntax instead
const Game = function(id) {
    this.id = id;
    this.moves = [];
    this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

Game.prototype.makeMove = function(x, y) {
    // TODO: validate if it's possible to make such a move
    // e.g. valid coords and not a duplicate move
    
    let marker = firstMoveMarker;

    // TODO: extract to private method
    if (this.moves.length > 0) {
        let lastMove = this.moves[this.moves.length - 1];
        let lastMoveMarker = lastMove.marker;

        if (lastMoveMarker === 'x') {
            marker = 'o';
        } else {
            marker = 'x';
        }
    }

    let move = new Move(x, y, marker);

    this.moves.push(move);
    this.updateBoard(move);
}

// TODO: make this private
Game.prototype.updateBoard = function(move) {
    this.board[move.x][move.y] = move.marker;
}

module.exports = Game;