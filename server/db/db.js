const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getmovies,
  addMovie,
}

function getmovies(db = connection) {
  return db('movies').select()
}

function addMovie(newMovie, db = connection) {
  return db('movies').insert(newMovie)
}
