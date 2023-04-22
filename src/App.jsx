import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
