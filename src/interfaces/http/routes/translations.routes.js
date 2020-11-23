import container from '../../../container';
const { translationsController } = container.cradle;

module.exports = async function (fastify) {
  fastify.get('/movies/:movieId/translations', translationsController.show);
  fastify.post('/movies/:movieId/translations', translationsController.create);
};
