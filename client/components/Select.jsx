import React, { useEffect, useState } from 'react'
import { getRecommendations } from '../api/movies'
import { Link, useSearchParams } from 'react-router-dom'

function Select() {
  const [searchParams] = useSearchParams()
  const [recommedations, setRecommedations] = useState([])

  useEffect(() => {
    getRecommendations()
      //ここのrecsはgetRecommendationsの内容が入っている
      .then((recs) => {
        // console.log(recs) レコメンデーションのテーブルの内容
        const genre = searchParams.get('genre')
        const origin = searchParams.get('origin')

        const filteredRecs = recs.filter(
          (rec) => rec.genre === genre && rec.origin === origin
        )
        setRecommedations(filteredRecs)
      })
      .catch((err) => console.debug(err))
  }, [])

  return (
    <>
      <h1>Enjoy Movie!</h1>

      {recommedations.length === 0 ? (
        <p>Sorry, no recommedations</p>
      ) : (
        recommedations.map((rec) => (
          <div key={rec.id} className="book_tile">
            <p>Title: {rec.title}</p>
            <p>Director: {rec.director}</p>
          </div>
        ))
      )}
      <Link to={'/'}>Home</Link>
    </>
  )
}
export default Select
