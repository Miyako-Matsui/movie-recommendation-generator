import React from 'react'

import Home from './Home'
import Select from './Select'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </div>
    </>
  )
}
export default App
