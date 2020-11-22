import db from '../db'

module.exports = {
  getAllMovies: async () => {
    const movies = db('movies').select()
    return movies
  },
}
