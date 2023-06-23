import React from 'react'
import Landing from './view/Landing'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = "/" Component={Landing}/>
      </Routes>
    </div>
  )
}

export default App
