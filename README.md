# Tic Tac Toe Game API

Game description: https://en.wikipedia.org/wiki/Tic-tac-toe

## Endpoints

Currently the API supports such actions:
createGame
getAllGames
getGame
makeMove

### Usage

The API is designed to work with [**Tic Tac Toe Game UI**](https://github.com/fizis/tic-tac-toe-ui), but also is completely UI agnostic.

## Launch and Test

### Prerequisites

Install Node.js
https://nodejs.org/en/download/

Install Docker (optional)
https://docs.docker.com/install/

### Run

`npm start`

### Test

`npm test`

### Docker

The API can be launched on Docker.

Build image:
`docker build -t [image name] .`

Run container from image built on port 3333:
`docker run -p 3333:3333 [image name]`

The port can be configured in the .env file.