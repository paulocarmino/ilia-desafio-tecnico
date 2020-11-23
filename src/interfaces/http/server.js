import fastify from 'fastify'
import AutoLoad from 'fastify-autoload'
import path from 'path'

const createServer = () => {
  const server = fastify({ logger: { prettyPrint: true } })

  // General error handler
  server.setErrorHandler((error, req, res) => {
    const msgError = error.toString()

    req.log.error(msgError)
    res.send({ error: msgError })
  })

  // Autoload routes
  server.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
  })

  return server
}

export default createServer
