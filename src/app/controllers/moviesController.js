import container from '../../container.js';

const moviesController = {
  index: async () => {
    const { getAllMovies } = container.cradle.moviesOperations;
    const movies = await getAllMovies();

    return movies;
  },
  show: async (req) => {
    const { movieId } = req.params;
    const { getMovieById } = req.container.cradle.moviesOperations;

    const movie = await getMovieById(movieId);
    return movie;
  },
  create: async (req) => {
    const { body: movie } = req;
    const { createMovie } = container.cradle.moviesOperations;

    const movieId = await createMovie(movie);
    return movieId;
  },
};

export default moviesController;
