import container from '../../../container.js'

module.exports = async function (fastify) {
  fastify.get('/movies', getAllMoviesHandler)
}

const getAllMoviesHandler = () => {
  const movies = container.cradle.getAllMovies()
  return movies
}
