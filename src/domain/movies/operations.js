import Boom from '@hapi/boom';

import container from '../../container.js';

const moviesOperations = {
  getAllMovies: async () => {
    try {
      const movies = await container.cradle.moviesRepository.getAll();

      if (movies.length > 0) {
        return movies;
      }

      throw Boom.notFound('No movies found!');
    } catch (error) {
      console.error(error);
    }
  },
  getMovieById: async (movieId) => {
    try {
      const movie = await container.cradle.moviesRepository.getById(movieId);

      return movie;

      // throw Boom.notFound('No movie with this ID was found')
    } catch (error) {
      console.error(error);
    }
  },
  createMovie: async (movie) => {
    try {
      const movieId = await container.cradle.moviesRepository.create(movie);

      if (movieId === null) {
        throw Boom.badRequest('Error creating movie');
      }

      return movieId;
    } catch (error) {
      console.error(error);
    }
  },
};

export default moviesOperations;
