import { asFunction, asValue, createContainer } from 'awilix'

import application from './app/application.js'
import createServer from './interfaces/http/server.js'

import moviesRepository from './infra/database/repositories/moviesRepository.js'
import moviesController from './app/controllers/moviesController.js'
import moviesManager from './domain/movies/manager.js'
import moviesOperations from './domain/movies/operations.js'

const container = createContainer()

// System
container.register({
  app: asFunction(application).singleton(),
  server: asFunction(createServer).singleton(),
})

// Repositories
container.register({
  moviesRepository: asValue(moviesRepository),
})

// Managers
container.register({
  movieManager: asValue(moviesManager),
})

// Operations
container.register({
  moviesOperations: asValue(moviesOperations),
})

// Controllers
container.register({
  moviesController: asValue(moviesController),
})

export default container
