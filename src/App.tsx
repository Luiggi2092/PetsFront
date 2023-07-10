import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './components/Nav/Nav';
import Home from './Pages/home/Home';
import UneteANosotros from './Pages/nosotros/UneteANosotros';
import PetShop from './Pages/Tienda/PetShop';
import SocialIcons from './Pages/socialIcons/SocialIcons';
import Landing from './Pages/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import PetDetail from '../src/Pages/PetDetail/PetDetail';
import HomeCliente from './components/ClientHome/homeCliente/HomeCliente';
import Login from './Pages/inicio/InicioSesion';
import Registro from './Pages/registro/Registrate';
import OrgDashboard from './Pages/orgDashboard/orgDashboard';
import FormularioAdopcion from '../src/components/ClientHome/formAdopcion/FormularioAdopcion'

const App: React.FC = () => {
    const shouldRenderNavbar = true;

    return (
        <HashRouter>
            <SocialIcons />
            <Routes>
                <Route index path="/" element={<Landing />} />
                <Route path="/home" element={shouldRenderNavbar ? 
                (<><Nav /> <Home/></>) :( <Home/> )}/>
                <Route path="/nosotros" element={<UneteANosotros />} />
                <Route path="/petshop" element={shouldRenderNavbar ? 
                (<><Nav/><PetShop /></> ):(<PetShop/>)} />
                <Route path="/login" element={ shouldRenderNavbar ? 
                (<><Nav/><Login /> </>): (<Login/>)} />
                <Route path="/registro" element={ shouldRenderNavbar ?
                 (<><Navbar/><Registro /></>):(<Registro/>)} />
                <Route path="/homecliente" element={<HomeCliente />} />
                <Route path="/detail/:id" element={ shouldRenderNavbar ?
                (<><Navbar/><PetDetail/></>):(<PetDetail/>)}/>
                <Route path="/organizacion" element={ shouldRenderNavbar ?
                (<><Navbar/><OrgDashboard/></>):(<OrgDashboard/>)}/>
                <Route path="/homecliente" element={ shouldRenderNavbar ?
                (<><Nav/><HomeCliente /></>):(<HomeCliente />)} />
                <Route path="/detail/:id" element={ shouldRenderNavbar ?
                (<><Nav/><PetDetail/></>):(<PetDetail/>)}/>
                <Route path="/formulario" element={ shouldRenderNavbar ? 
                (<><Nav/><FormularioAdopcion/></>):(<FormularioAdopcion/>)}/>
            </Routes>
            </HashRouter>
    );
};

export default App;
