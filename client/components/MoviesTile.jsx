import React from 'react'

function MovieTile({ movieProp }) {
  console.log(movieProp)
  return (
    <>
      <div className="book_tile">
        <p>{movieProp.title}</p>
        <p>{movieProp.director}</p>
        <p>{movieProp.genre}</p>
        <p>{movieProp.rating}</p>
      </div>
    </>
  )
}

export default MovieTile
