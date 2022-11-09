exports.up = (knex) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('director')
    table.string('genre')
    table.integer('rating')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('movies')
}
