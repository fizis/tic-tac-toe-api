const httpMockUtil = require('./httpMockUtil');
const Move = require('../models/move');
const Game = require('../models/game');
const GameRepository = require('../repositories/gameRepository');
const GamesController = require('../controllers/gamesController');

const gameRepository = new GameRepository();

it('creates a game', () => {
  const game = new Game('test_id');
  
  gameRepository.createGame = jest.fn(() => { return game; });
  
  const gamesController = new GamesController(gameRepository);
  const req = {};
  const res = httpMockUtil.mockResponse();

  gamesController.createGame(req, res);
  
  expect(gameRepository.createGame).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(game);
});

it('gets all games', () => {
  const games = [new Game('test_id')];
  
  gameRepository.getAllGames = jest.fn(() => { return games; });

  const req = {};
  const res = httpMockUtil.mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.getAllGames(req, res);
  
  expect(gameRepository.getAllGames).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(games);
});

it('gets a game if found', () => {
  const gameId = 'test_id';
  const game = new Game(gameId);
  
  gameRepository.getGame = jest.fn(() => { return game; });

  const req = { params: { id: gameId } };
  const res = httpMockUtil.mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.getGame(req, res);
  
  expect(gameRepository.getGame).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(game);
});

it('does not get a game if not found', () => {
  const gameId = 'test_id';
  
  gameRepository.getGame = jest.fn(() => { return undefined; });

  const req = { params: { id: gameId } };
  const res = httpMockUtil.mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.getGame(req, res);
  
  expect(gameRepository.getGame).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({ message: 'Game not found' });
});

it('makes a move if game found', () => {
  const gameId = 'test_id';
  const game = new Game(gameId);
  const move = new Move(1, 0, 'x');
  const updatedGame = new Game(gameId);
  updatedGame.moves = [move];
  updatedGame.board[1][0] = 'x';
  
  gameRepository.getGame = jest.fn(() => { return game; });
  gameRepository.updateGame = jest.fn();

  const req = { params: { id: gameId }, body: { x: 1, y: 0 } };
  const res = httpMockUtil.mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.makeMove(req, res);
  
  expect(gameRepository.updateGame).toHaveBeenCalledWith(updatedGame);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith(move);
});

it('does not make a move if game not found', () => {
  const gameId = 'test_id';
  
  gameRepository.getGame = jest.fn(() => { return undefined; });
  gameRepository.updateGame = jest.fn();

  const req = { params: { id: gameId }, body: { x: 1, y: 0 } };
  const res = httpMockUtil.mockResponse();
  const gamesController = new GamesController(gameRepository);

  gamesController.makeMove(req, res);
  
  expect(gameRepository.updateGame).toHaveBeenCalledTimes(0);
  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({ message: 'Game not found' });
});