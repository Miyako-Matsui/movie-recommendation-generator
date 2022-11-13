import React from 'react'

function MovieTile({ movieProp }) {
  // console.log('movieProp', movieProp) 結果ランダム映画
  return (
    <>
      <div className="book_tile">
        <p>Title: {movieProp.title}</p>
        <p>Director: {movieProp.director}</p>
        <p>Genre: {movieProp.genre}</p>
        <p>Rating: {movieProp.rating}</p>
      </div>
    </>
  )
}

export default MovieTile
