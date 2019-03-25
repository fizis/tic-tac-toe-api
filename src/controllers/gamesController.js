class GamesController {
    constructor(gameRepository) {
        this._gameRepository = gameRepository;
    }

    createGame(req, res) {
        const game = this._gameRepository.createGame();
     
        res.status(200).send(game);
    }

    getAllGames(req, res) {
        const games = this._gameRepository.getAllGames();
     
        res.status(200).send(games);
    }
    
    getGame(req, res) {
        const game = this._gameRepository.getGame(req.params.id);
    
        if (game) {
            res.status(200).send(game);
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    }
    
    makeMove(req, res) {
        const game = this._gameRepository.getGame(req.params.id);
    
        if (game) {
            const move = game.makeMove(req.body.x, req.body.y);
            
            res.status(200).send(move);
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    }
}

module.exports = GamesController;