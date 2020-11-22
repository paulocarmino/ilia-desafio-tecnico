import fastify from 'fastify'

const createServer = () => {
  const server = fastify({ logger: { prettyPrint: true } })

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
  })

  return server
}

export default createServer
