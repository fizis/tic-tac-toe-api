const gameRepository = require('../repositories/gameRepository');

exports.createGame = function(req, res) {
    let game = gameRepository.createGame();
 
    res.status(200).send(game);
};

exports.getAllGames = function(req, res) {
    let games = gameRepository.getAllGames();
 
    res.status(200).send(games);
};

exports.getGame = function(req, res) {
    let game = gameRepository.getGame(req.params.id);
 
    res.status(200).send(game);
};

exports.makeMove = function(req, res) {
    // TODO: implement
    res.json({"id": req.params.id});
};