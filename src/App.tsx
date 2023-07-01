import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import UneteANosotros from './pages/nosotros/UneteANosotros';
import PetShop from './pages/tienda/PetShop';
import InicioSesion from './pages/inicio/InicioSesion';
import Registrate from './pages/registro/FormRegistrate';
import SocialIcons from './pages/socialIcons/SocialIcons';
import Landing from './pages/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import PetDetail from '../src/pages/PetDetail/PetDetail';


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <SocialIcons />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<UneteANosotros />} />
                <Route path="/tienda" element={<PetShop />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
                <Route path="/registrato" element={<Registrate />} />
                <Route path="/pet/:id" element={<Registrate />} />
                <Route path="/pets/:id" element={<PetDetail/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;