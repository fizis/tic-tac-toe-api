const Move = require('./move');

const firstMoveMarker = 'x';

class Game {
    constructor(id) {
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

    makeMove(x, y) {
        if (x < 0 || x > 2) return;
        if (y < 0 || y > 2) return;
        if (this.board[x][y] !== '') return;
        
        let marker = this._getMoveMarker();
        let move = new Move(x, y, marker);
    
        this.moves.push(move);
    
        this._updateBoard(move);
        this._checkWinner();
        this._checkEnded();
    }
    
    _getMoveMarker() {
        let marker = firstMoveMarker;

        if (this.moves.length > 0) {
            let lastMove = this.moves[this.moves.length - 1];
            let lastMoveMarker = lastMove.marker;

            if (lastMoveMarker === 'x') {
                marker = 'o';
            } else {
                marker = 'x';
            }
        }

        return marker;
    }

    _updateBoard(move) {
        this.board[move.x][move.y] = move.marker;
    }

    _checkWinner() {
        let winner = this._getWinnerByCol(this.board);

        if (winner !== '') {
            this.winner = winner;
            return;
        }

        var transposedBoard = this.board[0].map((col, i) => this.board.map(row => row[i]));
        
        winner = this._getWinnerByCol(transposedBoard);

        if (winner !== '') {
            this.winner = winner;
            return;
        }

        this.winner = this._getWinnerByDiag(this.board);
    }

    _getWinnerByCol(board) {
        for(let i = 0; i < board.length; i++) {
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

    _getWinnerByDiag(board) {
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

    _checkEnded() {
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
}

module.exports = Game;