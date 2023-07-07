import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { BsHouseDoorFill, BsPersonPlus, BsHeartFill, BsBagFill, BsBoxArrowInRight, BsSearch, BsCart3 } from 'react-icons/bs';
import Logo from '../../assets/logo.png';
import ModalShop from "../../components/ModalShop/ModalShop"
import { useSelector,useDispatch } from 'react-redux';
import {FillName,Fill,SetPagina} from '../../redux/actions'
import './navbar.css'
import {Link} from "react-router-dom"
import VaccinesFilter from '../Filters/Vaccines';

interface Props {
  setPagina?: (value: number) => void;
}


const Navbar: React.FC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const count = useSelector((state:any)=> state.count);
  const Car = useSelector((state:any)=> state.Shop);
  const dispatch = useDispatch();
  

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(searchQuery){
    dispatch(FillName(searchQuery));
    dispatch(Fill(true));
    dispatch(SetPagina(1));
    
    
    }else{
      dispatch(Fill(false));
    }

    
    // Agregar lógica para realizar la búsqueda de productos
  };

  const handleCart = () => {
    setOpenModal(!openModal);
    // Agregar lógica para mostrar el carrito de compras
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
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
                <a href="/" className="nav-link">
                  <BsHouseDoorFill /> Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="/join" className="nav-link">
                  <BsPersonPlus /> Unete a nosotros
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="/petmatch" className="nav-link">
                  <BsHeartFill /> Petmatch
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/petshop" className="nav-link">
                  <BsBagFill /> PetShop
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  <BsBoxArrowInRight /> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="/registrato" className="nav-link">
                  <BsPersonPlus /> Registro
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <form className="d-flex" onSubmit={handleSearch}>
                  {/* <input
                    className="form-control me-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  /> */}
                  {/* <button className="btn btn-outline-light" type="submit">
                    <BsSearch />
                  </button> */}
                </form>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleCart}>
                  <BsCart3 />
                  <span className='cart-count'>{count}</span>
                </button>
              </li>
            </ul>
          </div>
        </Collapse>
        <VaccinesFilter></VaccinesFilter>
      </div>
    </nav>
  );
};

export default Navbar;
