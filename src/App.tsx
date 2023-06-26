import Landing from './Pages/Landing/Landing'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registro from './Pages/registro/Registrate'

function App() {
  return (   
    <div className='App'>
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/registro" element={<Registro/>}/>
    </Routes>
    </div>
  )
}

export default App
