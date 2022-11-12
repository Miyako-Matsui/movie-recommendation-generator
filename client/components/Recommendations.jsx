import React, { useState, useEffect } from 'react'

import { getRecommendations } from '../api/movies'

function Recommendations() {
  getRecommendations()
  const [recArry, setRecArry] = useState([])

  useEffect(() => {
    getRecommendations()
      .then((recommedations) => {
        setRecArry(recommedations)
      })
      .catch((err) => err.message)
  }, [])
  console.log('hi', recArry)

  return (
    <form>
      <label htmlFor="title">Genre</label>
      <p>
        <select id="title" name="title">
          <option> Select your favorite </option>
          {recArry.map((rec) => (
            <option value={rec.id} key={rec.id}>
              {rec.genre}
            </option>
          ))}
        </select>
      </p>

      <label htmlFor="origin">Origin</label>
      <p>
        <select id="origin" name="origin">
          <option> Select your favorite </option>
          {recArry.map((rec) => (
            <option value={rec.id} key={rec.id}>
              {rec.origin}
            </option>
          ))}
        </select>
      </p>

      <br />
      <button>Reccomendation!</button>
    </form>
  )
}

export default Recommendations
