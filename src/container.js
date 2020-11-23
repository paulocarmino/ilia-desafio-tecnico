import { asFunction, asValue, createContainer } from 'awilix';

import application from './app/application.js';
import createServer from './interfaces/http/server.js';

import moviesRepository from './infra/database/repositories/moviesRepository.js';
import moviesOperations from './domain/movies/operations.js';
import moviesController from './app/controllers/moviesController.js';

import translationsRepository from './infra/database/repositories/translationsRepository.js';
import translationsOperations from './domain/translations/operations.js';
import translationsController from './app/controllers/translationsController.js';

const container = createContainer();

// System
container.register({
  app: asFunction(application).singleton(),
  server: asFunction(createServer).singleton(),
});

// endpoint `/movies`
container.register({
  moviesRepository: asValue(moviesRepository),
  moviesOperations: asValue(moviesOperations),
  moviesController: asValue(moviesController),
});

// endpoint `/movies/:movieId/translations`
container.register({
  translationsRepository: asValue(translationsRepository),
  translationsOperations: asValue(translationsOperations),
  translationsController: asValue(translationsController),
});

export default container;
