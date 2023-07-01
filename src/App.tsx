import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import UneteANosotros from './Pages/nosotros/UneteANosotros';
import PetShop from './Pages/Tienda/PetShop';
import Registrate from './Pages/registro/FormRegistrate';
import SocialIcons from './Pages/socialIcons/SocialIcons';
import Landing from './Pages/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import PetDetail from '../src/Pages/PetDetail/PetDetail';
import Login from './Pages/inicio/InicioSesion';


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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
