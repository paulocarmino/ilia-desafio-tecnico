import container from '../../../container'
const { moviesController } = container.cradle

module.exports = async function (fastify) {
  fastify.get('/movies', moviesController.index)
  fastify.get('/movies/:movieId', moviesController.show)
  fastify.post('/movies', moviesController.create)
}
