const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getmovies,
  addMovie,
  getRecommendations,
}

function getmovies(db = connection) {
  return db('movies').select()
}

function getRecommendations(db = connection) {
  return db('reccomendations').select()
}

function addMovie(newMovie, db = connection) {
  return db('movies').insert(newMovie)
}
