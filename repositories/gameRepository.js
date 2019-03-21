const uuidv1 = require('uuid/v1');
const Game = require('../models/game');

const games =  [];

exports.createGame = function() {
    let id = uuidv1();
    let game = new Game(id);

    games.push(game);

    return game;
};

exports.getAllGames = function() {
    return games;
};

exports.getGame = function(id) {
    return games.find(g => g.id === id);
};