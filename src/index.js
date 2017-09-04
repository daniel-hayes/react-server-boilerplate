import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config';

import initialState from './server/initialState';

// start express server
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser(config.jwtSecret));

// allow public assets path
server.use(express.static('public'));

// use initial state for all routes
server.get(['/', '/about'], initialState);

server.listen(config.port, config.host, () => {
  console.log('Express listening on port ', config.port);
});
