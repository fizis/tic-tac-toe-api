const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const GameRepository = require('./repositories/gameRepository');
const GamesController = require('./controllers/gamesController');

const gameRepository = new GameRepository();
const gamesController = new GamesController(gameRepository);

const api = express();

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.get('/', (req, res) => res.send('Tic Tac Toe Game API'));
api.post('/games', (req, res) => gamesController.createGame(req, res));
api.get('/games', (req, res) => gamesController.getAllGames(req, res));
api.get('/games/:id', (req, res) => gamesController.getGame(req, res));
api.post('/games/:id/moves', (req, res) => gamesController.makeMove(req, res));

const port = 3333;

api.listen(port, () => console.log(`API is listening on port ${port}!`));