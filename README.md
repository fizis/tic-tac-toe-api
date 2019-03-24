# Tic Tac Toe Game API

Game description: https://en.wikipedia.org/wiki/Tic-tac-toe

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