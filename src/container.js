import { asFunction, createContainer } from 'awilix'

import application from './app/application.js'
import createServer from './interfaces/http/server.js'

const container = createContainer()

container.register({
  app: asFunction(application).singleton(),
  server: asFunction(createServer).singleton(),
})

export default container
