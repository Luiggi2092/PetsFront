import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home/Home';
import UneteANosotros from './pages/nosotros/UneteANosotros';
import PetShop from './pages/tienda/PetShop';
import InicioSesion from './pages/inicio/InicioSesion';
import Registrate from './pages/registro/FormRegistrate';
import SocialIcons from './pages/socialIcons/SocialIcons';
import Landing from './pages/Landing/Landing'
import PetDetail from './pages/detail/detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';


const App: React.FC = () => {

    return (
        <HashRouter>
            <SocialIcons />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<UneteANosotros />} />
                <Route index path="/petshop" element={<PetShop />} />
                <Route path="/inicio-sesion" element={<InicioSesion />} />
                <Route path="/registrato" element={<Registrate />} />
                <Route path="/pet/:id" element={<Registrate />} />
                <Route path="/detail/:id" element={<PetDetail/>}/> 
            </Routes>
        </HashRouter>
    );
};

export default App;