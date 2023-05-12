# Project web service
this project was created by Muhammad Yousuf Ali, 18044950 for my final year project.
## Description
This is the server for my final year project, the service it provides is that it sends and receives https requests from the website and mobile app and sends them to the raspberry pi. it also keeps any client side device synced and updates them with any changes made. 

| Env Variable   | Description                                                                 | Example               |
|----------------|-----------------------------------------------------------------------------|-----------------------|
| Port           | you need to set the port the web service will listen for websocket requests | 3000                  |

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

