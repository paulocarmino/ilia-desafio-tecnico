import { asFunction, asValue, createContainer } from 'awilix'

import application from './app/application.js'
import createServer from './interfaces/http/server.js'

import moviesRepository from './infra/database/repositories/moviesRepository.js'

const container = createContainer()

container.register({
  getAllMovies: asValue(moviesRepository.getAllMovies),
})

container.register({
  app: asFunction(application).singleton(),
  server: asFunction(createServer).singleton(),
})

export default container
