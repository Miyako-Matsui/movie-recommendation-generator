const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getRecommendations()
    .then((recArry) => {
      res.json(recArry)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
