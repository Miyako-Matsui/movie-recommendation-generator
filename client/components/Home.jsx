import React from 'react'

import Movies from './Movies'
import Recommendations from './Recommendations'
import Comments from './Comments'

function Home() {
  return (
    <div>
      <img
        src="https://3.bp.blogspot.com/-9wNOOflM8GI/VMItkAskJbI/AAAAAAAAqvU/Bi14dEAI4UM/s800/line_movie.png"
        alt="line"
      ></img>
      <h1>Welcome!</h1>
      <h2>💖 Take me to the Movie! 💖</h2>
      <Movies />
      <br />
      <Recommendations />
      <br />
      <Comments />
      <br />
      <p>&copy;都</p>
      <img
        src="https://1.bp.blogspot.com/-aQcAUnRVScE/XL8GiDp1jTI/AAAAAAABSgk/DgdEnOnw6SU8PmYqG7r0nWVXFsoDEsLoQCLcBGAs/s800/animal_mizugi_set.png"
        alt="line"
      ></img>
    </div>
  )
}

export default Home
