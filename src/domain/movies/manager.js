import { EventEmitter } from 'events'

const movieManager = {
  getAllMoviesEvent: new EventEmitter(),
  getMovieByIdEvent: new EventEmitter(),
  createMovieEvent: new EventEmitter(),
}

export default movieManager
