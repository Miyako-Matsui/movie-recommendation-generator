import React from 'react'
import { useSelector } from 'react-redux'
import AddComment from './AddComment'

function Comments() {
  const commentsArr = useSelector((globalState) => {
    return globalState.comments
  })

  return (
    <div className="book_tile">
      <ul className="ul">
        <h3 htmlFor="comment">Let's me know your favorite movies: </h3>
        {commentsArr.map((comment) => {
          return <li key={comment}>{comment}</li>
        })}
      </ul>
      <AddComment />
    </div>
  )
}

export default Comments
