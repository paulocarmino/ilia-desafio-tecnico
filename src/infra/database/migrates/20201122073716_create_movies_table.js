exports.up = function (knex) {
  return knex.schema.createTable('movies', function (table) {
    table.increments()
    table.boolean('adult')
    table.string('backdrop_path')
    table.integer('budget')
    table.string('homepage')
    table.string('imdb_id')
    table.string('original_language')
    table.string('original_title')
    table.text('overview')
    table.float('popularity')
    table.string('poster_path')
    table.string('release_date')
    table.integer('revenue')
    table.integer('runtime')
    table.string('status')
    table.text('tagline')
    table.string('title')
    table.boolean('video')
    table.float('vote_average')
    table.integer('vote_count')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
