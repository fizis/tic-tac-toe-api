const httpMocks = require('node-mocks-http');
const Game = require('../models/game');
const GameRepository = require('../repositories/gameRepository');
const GamesController = require('../controllers/gamesController');

const gameRepository = new GameRepository();

const mockResponse = () => {
  const res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);

  return res;
};

it('creates game', () => {
  const game = new Game('test_id');
  
  gameRepository.createGame = jest.fn(() => {
    return game;
  });
  
  const gamesController = new GamesController(gameRepository);
  const req = httpMocks.createRequest({});
  const res = mockResponse();

  gamesController.createGame(req, res);
  
  expect(gameRepository.createGame).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(game);
});

it('gets all games', () => {
  const games = [new Game('test_id')];
  
  gameRepository.getAllGames = jest.fn(() => {
    return games;
  });

  const req = httpMocks.createRequest({});
  const res = mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.getAllGames(req, res);
  
  expect(gameRepository.getAllGames).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(games);
});