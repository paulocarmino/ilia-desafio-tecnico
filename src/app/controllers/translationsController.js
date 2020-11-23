const translationsController = {
  show: async (req) => {
    const { movieId } = req.params;
    const { getTranslations } = req.container.cradle.translationsOperations;

    const translation = await getTranslations(movieId);
    return translation;
  },
  create: async (req) => {
    const { body: translation } = req;
    const { movieId } = req.params;

    const { createTranslation } = req.container.cradle.translationsOperations;

    const translationId = await createTranslation(translation, movieId);
    return translationId;
  },
};

export default translationsController;
