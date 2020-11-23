module.exports = {
  development: {
    client: 'pg',
    connection: `postgresql://postgres:desafioiliapw@postgres:5432/desafioilia2`,
    migrations: {
      directory: './src/infra/database/migrates',
    },
    seeds: {
      directory: './src/infra/database/seeds',
    },
  },
};
