module.exports = {
  development: {
    client: 'pg',
    connection: `postgresql://postgres:desafioiliapw@127.0.0.1:5442/desafioilia`,
    migrations: {
      directory: './src/infra/database/migrates',
    },
  },
};
