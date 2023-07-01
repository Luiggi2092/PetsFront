import React, { useState } from 'react';
import { Collapse, NavDropdown } from 'react-bootstrap';
import {
    BsHouseDoorFill,
    BsHeartFill,
    BsBagFill,
    BsBoxArrowInRight,
    BsSearch,
    BsCart3,
    BsPersonCircle,
    BsCaretDownFill,
    BsGearFill,
    BsChatDotsFill,
    BsPerson,
    BsFileText,
    BsHeart,
    BsCart,
    BsPencilSquare,
} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/sinfondo.png';
import './navbarCliente.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    
    const [activeMenu, setActiveMenu] = useState('');

    const [organizations, setOrganizations] = useState([
        { id: 1, name: 'Organización 1' },
        { id: 2, name: 'Organización 2' },
        { id: 3, name: 'Organización 3' }
    ]);

    const stores = [
        { id: 1, name: 'Tienda 1', link: '/store1' },
        { id: 2, name: 'Tienda 2', link: '/store2' },
        { id: 3, name: 'Tienda 3', link: '/store3' },
    ];

    const veterinaries = [
        { id: 1, name: 'Veterinaria A', link: '/veterinaria-a' },
        { id: 2, name: 'Veterinaria B', link: '/veterinaria-b' },
        { id: 3, name: 'Veterinaria C', link: '/veterinaria-c' },
    ];

    const customers = [
        { id: 1, name: 'Cliente 1', link: '/customer1' },
        { id: 2, name: 'Cliente 2', link: '/customer2' },
        { id: 3, name: 'Cliente 3', link: '/customer3' },
        // Agrega más objetos de clientes si es necesario
    ];

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
        // Agregar lógica para realizar la búsqueda de productos
    };

    const handleCart = () => {
        console.log('Mostrando carrito de compras...');
        // Agregar lógica para mostrar el carrito de compras
    };

    const [products, setProducts] = useState([
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 },
    ]);

    const handleMenuToggle = (menu: string) => {
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    const handleLogout = () => {
        console.log('Cerrando sesión...');
        // Agregar lógica para cerrar la sesión del usuario
    };

    // Calcular el total a pagar sumando los precios de los productos en el carrito
    const total = products.reduce((accumulator, product) => accumulator + product.price, 0);

    // Generar el enlace de pago con el total a pagar
    const paymentLink = `https://example.com/payment?total=${total}`;

    const handleOrganizationClick = (organizationId: number) => {
        console.log('Se hizo clic en la organización con ID:', organizationId);
        // Agregar lógica para manejar el clic en una organización
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link to="/home" className="navbar-brand">
                    <img src={Logo} alt="Logo" />
                </Link>
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
                                <Link to="/" className="nav-link">
                                    <BsHouseDoorFill /> Home
                                </Link>
                            </li>
                            <li className={`nav-item dropdown ${activeMenu === 'organizations' ? 'show' : ''}`}>
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
                            </li>
                            <li className={`nav-item dropdown ${activeMenu === 'stores' ? 'show' : ''}`}>
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={() => handleMenuToggle('stores')}
                                >
                                    Tiendas
                                </Link>
                                <ul className={`dropdown-menu ${activeMenu === 'stores' ? 'show' : ''}`}>
                                    {stores.map((store) => (
                                        <li key={store.id}>
                                            <Link to={store.link} className="dropdown-item">
                                                {store.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className={`nav-item dropdown ${activeMenu === 'customers' ? 'show' : ''}`}>
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
                            </li>
                            <li className="nav-item">
                                <Link to="/donations" className="nav-link">
                                    Donaciones
                                </Link>
                            </li>
                            <li className={`nav-item dropdown ${activeMenu === 'veterinaries' ? 'show' : ''}`}>
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
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearch}>
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
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleCart}>
                                    <BsCart3 />
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
                                        <Link to="/purchases" className="nav-link">
                                            <BsPerson /> Mi Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/purchases" className="nav-link">
                                            <BsCart /> Mis Compras
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/purchases" className="nav-link">
                                            <BsHeart /> Favoritos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/purchases" className="nav-link">
                                            <BsPencilSquare /> Publicar una Mascota
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/settings" className="dropdown-item">
                                            <BsGearFill /> Configuración
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/messages" className="dropdown-item">
                                            <BsChatDotsFill /> Mensajes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="dropdown-item" onClick={handleLogout}>
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




