import container from '../../container.js';

const moviesOperations = {
  getAllMovies: async () => {
    try {
      const movies = await container.cradle.moviesRepository.getAll();

      return movies;
    } catch (error) {
      console.error(error);
    }
  },
  getMovieById: async (movieId) => {
    try {
      const movie = await container.cradle.moviesRepository.getById(movieId);

      return movie;
    } catch (error) {
      console.error(error);
    }
  },
  createMovie: async (movie) => {
    try {
      const movieId = await container.cradle.moviesRepository.create(movie);

      return movieId;
    } catch (error) {
      console.error(error);
    }
  },
};

export default moviesOperations;
