const httpMocks = require('node-mocks-http');
const Game = require('../models/game');
const GameRepository = require('../repositories/gameRepository');
const GamesController = require('../controllers/gamesController');

const gameRepository = new GameRepository();
const gamesController = new GamesController(gameRepository);

const mockResponse = () => {
  const res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);

  return res;
};

it('creates game', () => {
  const req = httpMocks.createRequest({});
  const res = mockResponse();

  gamesController.createGame(req, res);
    
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(expect.any(Game)); // TODO: check for particular Game
});

it('gets all games', () => {
  const req = httpMocks.createRequest({});
  const res = mockResponse();

  gamesController.getAllGames(req, res);
    
  expect(res.status).toHaveBeenCalledWith(200);
  //expect(res.send).toHaveBeenCalledWith(expect.any([])); // TODO: check for particular array (two cases: both empty and not)
});