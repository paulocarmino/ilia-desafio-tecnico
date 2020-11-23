import container from '../../container.js';

const moviesOperations = {
  getTranslations: async (movieId) => {
    try {
      const translationsFromDB = await container.cradle.translationsRepository.getByMovieId(movieId);
      var translationsFormatted = [];
      translationsFromDB.map((translation) => {
        const translationWithNewFormat = {
          name: translation.name,
          englishName: translation.english_name,
          data: {
            title: translation.title,
            overview: translation.overview,
            homepage: translation.homepage,
          },
        };
        translationsFormatted.push(translationWithNewFormat);
      });

      const translations = {
        id: movieId,
        translations: translationsFormatted,
      };

      return translations;
    } catch (error) {
      console.error(error);
    }
  },
  createTranslation: async (translation, movieId) => {
    try {
      const translationCreated = await container.cradle.translationsRepository.create(translation, movieId);

      return translationCreated;
    } catch (error) {
      console.error(error);
    }
  },
};

export default moviesOperations;
