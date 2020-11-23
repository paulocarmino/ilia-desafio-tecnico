import container from '../src/container.js';

describe('Integration :: API calls for managing movies', () => {
  const { app, server } = container.cradle;

  beforeAll(async () => {
    app({ server });
  });

  it('/movies :: POST :: Should create a movie', async () => {
    const response = await server.inject({
      url: '/movies',
      method: 'POST',
      body: {
        title: 'movie',
      },
    });

    expect(response.statusCode).toBe(200);
  });

  it('/movies :: GET :: Should return a list of movies', async () => {
    const response = await server.inject({
      url: '/movies',
      method: 'GET',
    });

    expect(response.statusCode).toBe(200);
  });

  it('/movies/:movieId :: GET :: Should return a movie', async () => {
    const response = await server.inject({
      url: '/movies/1',
      method: 'GET',
    });

    expect(response.statusCode).toBe(200);
  });
});
