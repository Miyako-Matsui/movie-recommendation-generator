import React from 'react'

import Movies from './Movies'
import Recommendations from './Recommendations'
import Comments from './Comments'

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Take me to the Movie!</h2>
      <Movies />
      <br />
      <Recommendations />
      <br />
      <Comments />
      <br />
      <p>&copy;都</p>
    </div>
  )
}

export default Home
