import React, { useState } from 'react'

function AddMovie() {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    raiting: 0,
  })

  const handleType = (evt) => {
    const value = evt.target.value
    const name = evt.target.name
    // console.log('things changed!', name, value)
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('things are submitted! the new movie is', formData.name)
  }
  ;<form onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" name="title" onChange={handleType} />

    <label htmlFor="director">Director</label>
    <input type="text" id="director" name="director" onChange={handleType} />

    <label htmlFor="genre">Genre</label>
    <input type="text" id="genre" name="genre" onChange={handleType} />

    <label htmlFor="raiting">Raiting</label>
    <input type="number" id="raiting" name="raiting" onChange={handleType} />

    <button>Add Movie</button>
  </form>
}

export default AddMovie
