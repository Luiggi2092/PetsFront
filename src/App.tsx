import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import PetShop from './pages/tienda/PetShop';
import InicioSesion from './pages/inicio/InicioSesion';
import Registrate from './pages/registro/Registrate';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/tienda" element={<PetShop />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
                <Route path="/registrate" element={<Registrate />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;

