const Move = require('./move');

const firstMoveMarker = 'x';

// TODO: use class syntax instead
const Game = function(id) {
    this.id = id;
    this.ended = false;
    this.winner = '';
    this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    this.moves = [];
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

    this.checkWinner();
    this.checkEnded();
}

// TODO: make this private
Game.prototype.updateBoard = function(move) {
    this.board[move.x][move.y] = move.marker;
}

// TODO: make this private
Game.prototype.checkWinner = function() {
    console.log(this.board);

    let winner = this.getWinnerByCol(this.board);

    if (winner !== '') {
        this.winner = winner;
        return;
    }

    var transposedBoard = this.board[0].map((col, i) => this.board.map(row => row[i]));

    console.log(transposedBoard);
    
    winner = this.getWinnerByCol(transposedBoard);

    if (winner !== '') {
        this.winner = winner;
        return;
    }

    this.winner = this.getWinnerByDiag(this.board);
}

// TODO: make this private
Game.prototype.getWinnerByCol = function(board) {
    for(let i = 0; i < board.length; i++) {
        // console.log(board[i])
        let col = board[i].join('');

        if (col === 'ooo') {
            return 'o';
        }

        if (col === 'xxx') {
            return 'x';
        }
    }
    
    return '';
}

// TODO: make this private
Game.prototype.getWinnerByDiag = function(board) {
    let diag1 = '';
    let diag2 = '';

    for(let i = 0; i < board.length; i++) {
        diag1 += board[i][i];
        diag2 += board[i][board.length - i - 1];
    }
    
    if (diag1 === 'ooo' || diag2 === 'ooo') {
        return 'o';
    }

    if (diag1 === 'xxx' || diag2 === 'xxx') {
        return 'x';
    }

    return '';
}

// TODO: make this private
Game.prototype.checkEnded = function() {
    this.ended = this.winner !== ''
    
    if (!this.ended) {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] === '') {
                    return;
                }
            }
        }

        this.ended = true;
    }
}

module.exports = Game;