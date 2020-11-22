import fastify from 'fastify'
import AutoLoad from 'fastify-autoload'
import path from 'path'

const createServer = () => {
  const server = fastify({ logger: { prettyPrint: true } })

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
  })

  server.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
  })

  return server
}

export default createServer
