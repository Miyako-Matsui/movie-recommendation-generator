//youtube Hihi 2022 - W5D2 - API react chats

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCommentAction } from '../actions'

function AddComment() {
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState('') //トラックタイピング

  const handleChange = (evt) => {
    setNewComment(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addNewCommentAction(newComment))

    console.log('new', newComment)
    setNewComment('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="comment" value={newComment} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddComment
