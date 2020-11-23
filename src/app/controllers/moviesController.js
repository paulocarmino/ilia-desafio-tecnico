import container from '../../container.js'

const moviesController = {
  index: async (req, reply) => {
    const { getAllMoviesEvent } = container.cradle.movieManager
    const { getAllMovies } = container.cradle.moviesOperations

    await getAllMoviesEvent.on('SUCCESS', (movies) => {
      console.log(movies)
      reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(movies)
    })

    getAllMovies()
  },
  show: async (req, reply) => {
    const { movieId } = req.params
    const { getMovieByIdEvent } = container.cradle.movieManager
    const { getMovieById } = container.cradle.moviesOperations

    await getMovieByIdEvent.on('SUCCESS', (movies) => {
      console.log(movies)
      reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(movies)
    })

    getMovieById(movieId)
  },
  create: async (req, reply) => {
    const { body: movie } = req
    const { createMovieEvent } = container.cradle.movieManager
    const { createMovie } = container.cradle.moviesOperations

    await createMovieEvent.on('SUCCESS', (movies) => {
      console.log(movies)
      reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(movies)
    })

    createMovie(movie)
  },
}

export default moviesController
