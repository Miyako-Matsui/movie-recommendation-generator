exports.up = (knex) => {
  return knex.schema.createTable('reccomendations', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('director')
    table.string('genre')
    table.string('origin')
    table.string('summary')
    table.string('img')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('reccomendations')
}
