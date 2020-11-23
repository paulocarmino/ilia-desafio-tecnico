exports.up = function (knex) {
  return knex.schema.createTable('translations', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('english_name');
    table.string('title');
    table.text('overview');
    table.string('homepage');
    table.integer('movie_id').references('movies.id').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('translations');
};
