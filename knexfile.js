const knexfile = {
  development: {
    client: 'pg',
    connection: `postgresql://postgres:desafioiliapw@postgres:5432/desafioilia`,
    migrations: {
      directory: './src/infra/database/migrates',
    },
  },
};

export default knexfile;
