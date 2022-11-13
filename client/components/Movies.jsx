import React, { useState } from 'react'

import { getMovies } from '../api/movies'

// import AddMovie from './AddMovie'
import MovieTile from './MoviesTile'

function Movies() {
  const [movies, setMovies] = useState([]) //insomiaのデータ ここのArryを忘れない！エラー出る！

  // useEffect(() => {
  //   refreshMovies()
  // }, [])

  const refreshMovies = () => {
    getMovies()
      .then((newMovies) => {
        const randomMovie =
          newMovies[Math.floor(Math.random() * newMovies.length)]
        setMovies([randomMovie])
      })
      .catch((err) => err.message)
  }

  return (
    <>
      <button onClick={refreshMovies}>Random Movie</button>
      <div>
        {movies.map((movie) => (
          <MovieTile key={movie.id} movieProp={movie} />
        ))}
      </div>
    </>
  )
}

export default Movies
