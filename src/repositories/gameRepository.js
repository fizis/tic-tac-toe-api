const uuidv1 = require('uuid/v1');
const Game = require('../models/game');

// TODO: write UTs
class GameRepository {
    constructor() {
        this._games = [];
    }

    createGame() {
        const id = uuidv1();
        const game = new Game(id);
    
        this._games.push(game);
    
        return game;
    }
    
    getAllGames() {
        return this._games;
    }
    
    getGame(id) {
        return this._games.find(g => g.id === id);
    }
}

module.exports = GameRepository;