const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getmovies()
    .then((moviesArry) => {
      res.json(moviesArry)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newMovie = req.body

  db.addMovie(newMovie)
    .then((idArr) => {
      // const reqMovie = { ...req.body, id: idArr[0] }
      res.json({ id: idArr[0] })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
