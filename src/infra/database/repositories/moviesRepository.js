import db from '../db'

const moviesRepository = {
  getAll: async () => {
    const movies = db('movies').select()
    return movies
  },
  getById: async (movieId) => {
    const movie = db('movies').where({ id: movieId })
    return movie
  },
  create: async (movie) => {
    const createdMovie = await db('movies').insert({ ...movie }, 'id')
    return { id: createdMovie[0] }
  },
}

export default moviesRepository
