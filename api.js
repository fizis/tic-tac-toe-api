const express = require('express');
const gamesController = require('./controllers/gamesController');

const api = express();
const port = 3333;

api.listen(port, () => console.log(`API is listening on port ${port}!`));

// TODO: move to routes file
api.get('/', (req, res) => res.send('Tic Tac Toe Game API'));

api.post('/games', gamesController.createGame);
api.get('/games', gamesController.getAllGames);
api.get('/games/:id', gamesController.getGame);
api.post('/games/:id/moves', gamesController.makeMove);