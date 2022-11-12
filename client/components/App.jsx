import React from 'react'

import Movies from './Movies'
import Recommendations from './Recommendations'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome!</h1>
      <Movies />
      <Recommendations />
    </div>
  )
}
export default App
