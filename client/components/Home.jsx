import React from 'react'

import Movies from './Movies'
import Recommendations from './Recommendations'

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Take me to the Movie!</h2>
      <Movies />
      <br />
      <Recommendations />
    </div>
  )
}

export default Home
