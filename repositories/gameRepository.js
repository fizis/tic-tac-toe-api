const uuidv1 = require('uuid/v1');
const Game = require('../models/game');

// TODO: write UTs
class GameRepository {
    constructor() {
        this._games = [];
    }

    createGame() {
        let id = uuidv1();
        let game = new Game(id);
    
        this._games.push(game);
    
        return game;
    }
    
    getAllGames() {
        return this._games;
    }
    
    getGame(id) {
        return this._games.find(g => g.id === id);
    }
    
    updateGame(game) {
        let gameToUpdate = this._games.find(g => g.id === game.id);
    
        gameToUpdate = game;
    }
}

module.exports = GameRepository;