import container from '../../container.js'

const moviesOperations = {
  getAllMovies: async () => {
    const { getAllMoviesEvent } = container.cradle.movieManager

    try {
      const movies = await container.cradle.moviesRepository.getAll()
      getAllMoviesEvent.emit('SUCCESS', movies)
    } catch (error) {
      getAllMoviesEvent.emit('ERROR', error)
      console.error(error)
    }
  },
  getMovieById: async (movieId) => {
    const { getMovieByIdEvent } = container.cradle.movieManager

    try {
      const movies = await container.cradle.moviesRepository.getById(movieId)
      getMovieByIdEvent.emit('SUCCESS', movies)
    } catch (error) {
      getMovieByIdEvent.emit('ERROR', error)
      console.error(error)
    }
  },
  createMovie: async (movie) => {
    const { createMovieEvent } = container.cradle.movieManager

    try {
      const movies = await container.cradle.moviesRepository.create(movie)
      createMovieEvent.emit('SUCCESS', movies)
    } catch (error) {
      createMovieEvent.emit('ERROR', error)
      console.error(error)
    }
  },
}

export default moviesOperations
