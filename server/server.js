const path = require('path')
const express = require('express')

// const books = require('./routes/books')
const movies = require('./routes/movies')
const recommendations = require('./routes/recs')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/books', books)
server.use('/api/v1/movies', movies)
server.use('/api/v1/recs', recommendations)

module.exports = server
