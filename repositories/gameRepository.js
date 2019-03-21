const uuidv1 = require('uuid/v1');
const Game = require('../models/game');

const games =  [];

exports.createGame = function() {
    //let id = uuidv1(); // TODO: use UUID later, after testing
    let game = new Game("test_id");

    games.push(game);

    return game;
};

exports.getAllGames = function() {
    return games;
};

exports.getGame = function(id) {
    return games.find(g => g.id === id);
};

exports.updateGame = function(game) {
    let gameToUpdate = games.find(g => g.id === game.id);

    gameToUpdate = game;
};