import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import UneteANosotros from './pages/nosotros/UneteANosotros';
import PetShop from './pages/tienda/PetShop';
import Registrate from './pages/registro/Registrate';
import SocialIcons from './pages/socialIcons/SocialIcons';
import Landing from './pages/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import PetDetail from '../src/pages/PetDetail//PetDetail';
import Login from './pages/inicio/InicioSesion';
import HomeCliente from './components/ClientHome/homeCliente/HomeCliente';
import NavbarCliente from './components/ClientHome/Navbarcient/NavbarCliente'
import FormularioAdopcion from './components/ClientHome/formAdopcion/FormularioAdopcion';


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
                <Route path="/login" element={<Login />} />
                <Route path="/registrato" element={<Registrate />} />
                <Route path="/pet/:id" element={<Registrate />} />
                <Route path="/detail/:id" element={<PetDetail/>}/>
                <Route path="/" element={<HomeCliente />} />
                <Route path="/formulario-adopcion" element={<FormularioAdopcion />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
