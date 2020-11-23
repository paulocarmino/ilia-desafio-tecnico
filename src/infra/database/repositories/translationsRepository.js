import db from '../db';

const translationsRepository = {
  getByMovieId: async (movieId) => {
    const translations = await db('translations').where({ movie_id: movieId });
    return translations;
  },
  create: async (translation, movieId) => {
    const createdTranslation = await db('translations').insert({ movie_id: movieId, ...translation }, 'id');
    return { id: createdTranslation[0] };
  },
};

export default translationsRepository;
