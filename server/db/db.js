const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBooks,
  getmovies,
}

function getBooks(db = connection) {
  return db('books').select()
}

function getmovies(db = connection) {
  return db('movies').select()
}
