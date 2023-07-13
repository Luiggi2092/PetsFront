import React, { useState,useEffect } from 'react';
import { Collapse } from 'react-bootstrap';

import {
    BsHouseDoorFill,
    BsBoxArrowInRight,
    BsCart3,
    BsPersonCircle,
    //BsGearFill,
    //BsChatDotsFill,
    BsPerson,
    BsHeart,
    //BsPencilSquare,
} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/sinfondo.png';
import ModalShop from "../../ModalShop/ModalShop"
import './navbarCliente.css';
import { Link } from 'react-router-dom';
import { useSelector }from "react-redux"

const Navbar: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    
    const count = useSelector((state:any)=> state.count);
    const Car = useSelector((state:any)=> state.Shop);
    //const [counts] = useState(count);
 
    // const getData = ()=> {
        
    //     return localStorage.getItem('contShop')
      
    //  }
  
     useEffect(()=>{
      // setCount(getData()); 
    },[])
  
    
   useEffect(()=> {
    if(Car){
    localStorage.setItem('cartItems', JSON.stringify(Car))
    }
 },[Car])

 
  
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const [activeMenu, setActiveMenu] = useState('');

   
    

    
    

    const handleCart = () => {
        console.log('Mostrando carrito de compras...');
        setOpenModal(!openModal);
        // Agregar lógica para mostrar el carrito de compras
    };

    
    const handleMenuToggle = (menu: string) => {
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    const handleLogout = () => {
        console.log('Cerrando sesión...');
        localStorage.removeItem('TokenUsu');
        localStorage.removeItem('TypoUsu');
       
        // Agregar lógica para cerrar la sesión del usuario
    };

    // Calcular el total a pagar sumando los precios de los productos en el carrito
    
  

    // Generar el enlace de pago con el total a pagar
   
    
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link to="/home" className="navbar-brand">
                    <img src={Logo} alt="Logo" />
                </Link>
                <ModalShop openModal={openModal} cambiarEstado={setOpenModal} Car={Car} />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isCollapsed}
                    aria-label="Toggle navigation"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <Collapse in={isCollapsed}>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <BsHouseDoorFill /> Home
                                </Link>
                            </li>
                            {/* <li className={`nav-item dropdown ${activeMenu === 'organizations' ? 'show' : ''}`}>
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('organizations')}
                                >
                                    Organizaciones
                                </Link>
                                <ul className={`dropdown-menu ${activeMenu === 'organizations' ? 'show' : ''}`}>
                                    {organizations.map((organization) => (
                                        <li
                                            key={organization.id}
                                            onClick={() => handleOrganizationClick(organization.id)}
                                        >
                                            <Link to={`/organization/${organization.id}`} className="dropdown-item">
                                                {organization.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li> */}
                            <li className={`nav-item dropdown ${activeMenu === 'stores' ? 'show' : ''}`}>
                                <Link
                                    to="/petshop"
                                    className="nav-link"
                                    role="button"
                                    //data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('stores')}
                                >
                                    Tiendas
                                    
                                </Link>
                                {/* <ul className={`dropdown-menu ${activeMenu === 'stores' ? 'show' : ''}`}>
                                    {stores.map((store) => (
                                        <li key={store.id}>
                                            <Link to={store.link} className="dropdown-item">
                                                {store.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul> */}
                            </li>
                            {/* <li className={`nav-item dropdown ${activeMenu === 'customers' ? 'show' : ''}`}>
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('customers')}
                                >
                                    Nuestros Clientes
                                </Link>
                                <ul className={`dropdown-menu ${activeMenu === 'customers' ? 'show' : ''}`}>
                                    {customers.map((customer) => (
                                        <li key={customer.id}>
                                            <Link to={customer.link} className="dropdown-item">
                                                {customer.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to="/donations" className="nav-link">
                                    Donaciones
                                </Link>
                            </li> */}
                            {/* <li className={`nav-item dropdown ${activeMenu === 'veterinaries' ? 'show' : ''}`}>
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('veterinaries')}
                                >
                                    Veterinarias
                                </Link>
                                <ul className={`dropdown-menu ${activeMenu === 'veterinaries' ? 'show' : ''}`}>
                                    {veterinaries.map((vet) => (
                                        <li key={vet.id}>
                                            <Link to={vet.link} className="dropdown-item">
                                                {vet.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar productos"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-light" type="submit">
                                <BsSearch />
                            </button>
                        </form> */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleCart}>
                                    <BsCart3 />
                                    <span className='cart-count'>{count}</span>
                                </button>
                            </li>
                            <li className={`nav-item dropdown ${activeMenu === 'profile' ? 'show' : ''}`}>
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('profile')}
                                >
                                    <BsPersonCircle /> Perfil
                                </Link>
                                <ul className={`dropdown-menu ${activeMenu === 'profile' ? 'show' : ''}`}>
                                    <li>
                                        <Link to="/home" className="nav-link" >
                                            <BsPerson />Mascotas
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link to="/petshop" className="nav-link">
                                            <BsHeart />Productos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="dropdown-item" onClick={handleLogout}>
                                            <BsBoxArrowInRight /> Cerrar sesión
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </div>
        </nav>
    );
};

export default Navbar;
