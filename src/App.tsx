import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import UneteANosotros from './Pages/nosotros/UneteANosotros';
import PetShop from './Pages/Tienda/PetShop';
import InicioSesion from './Pages/inicio/InicioSesion';
import Registrate from './Pages/registro/FormRegistrate';
import SocialIcons from './Pages/socialIcons/SocialIcons';
import Landing from './Pages/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import PetDetail from '../src/Pages/PetDetail/PetDetail';


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <SocialIcons />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<UneteANosotros />} />
                <Route path="/petshop" element={<PetShop />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
                <Route path="/registrato" element={<Registrate />} />
                <Route path="/pet/:id" element={<Registrate />} />
                <Route path="/pets/:id" element={<PetDetail/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
