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

    if (game) {
        res.status(200).send(game);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
};

exports.makeMove = function(req, res) {
    let game = gameRepository.getGame(req.params.id);

    if (game) {
        game.makeMove(req.body.x, req.body.y);

        gameRepository.updateGame(game);

        res.status(200).send(game.moves[game.moves.length - 1]);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
};