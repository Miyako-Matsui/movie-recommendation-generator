import React, { useState, useEffect } from 'react'
import MovieTile from './MoviesTile'

import { getMovies } from '../api/movies'

function Movies() {
  const [movies, setMovies] = useState([]) //insomiaのデータ ここのArryを忘れない！エラー出る！

  useEffect(() => {
    getMovies()
      .then((moviesArry) => setMovies(moviesArry))
      .catch((err) => err.message)
  }, [])

  return (
    <>
      <h1>Take me to the Movie!</h1>
      <p>{console.log(movies)}</p>
      {movies.map((movie) => (
        <MovieTile key={movie.id} movieProp={movie} />
      ))}
    </>
  )
}

export default Movies
