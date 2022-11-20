import React, { useState, useEffect } from 'react'
import Botton from './Botton'

import { getRecommendations } from '../api/movies'
// import Select from './Select'

function Recommendations() {
  const [recArry, setRecArry] = useState([])
  const [genre, setGenre] = useState()
  const [origin, setOrigin] = useState()

  useEffect(() => {
    getRecommendations()
      .then((recommedations) => {
        setRecArry(recommedations)
      })
      .catch((err) => err.message)
  }, [])

  const genreHandler = (evt) => {
    setGenre(evt.target.value)
  }

  const originHandler = (evt) => {
    setOrigin(evt.target.value)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="book_tile">
      <label htmlFor="title">Genre</label>
      <p>
        <select id="title" name="title" value={genre} onChange={genreHandler}>
          <option> Select your favorite </option>
          {recArry.map((rec) => (
            <option value={rec.genre} key={rec.id}>
              {rec.genre}
            </option>
          ))}
        </select>
      </p>

      <label htmlFor="origin">Origin</label>
      <p>
        <select
          id="origin"
          name="origin"
          value={origin}
          onChange={originHandler}
        >
          <option> Select your favorite </option>
          {recArry.map((rec) => (
            <option value={rec.origin} key={rec.id}>
              {rec.origin}
            </option>
          ))}
        </select>
      </p>

      <br />
      <Botton genreProp={genre} originProp={origin} />
    </form>
  )
}

export default Recommendations
