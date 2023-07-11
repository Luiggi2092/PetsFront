import React, { useState,useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import { BsHouseDoorFill, BsPersonPlus,BsBagFill, BsBoxArrowInRight, BsCart3 } from 'react-icons/bs';
import Logo from '../../assets/logo.png';
import ModalShop from "../../components/ModalShop/ModalShop"
import { useSelector } from 'react-redux';
import './navbar.css'
import {Link,Outlet} from "react-router-dom"

interface Props {
  setPagina?: (value: number) => void;
}


const Navbar: React.FC<Props> = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const count = useSelector((state:any)=> state.count);
  const Car = useSelector((state:any)=> state.Shop);
 

  const [counts,setCount] = useState(count)
  console.log(counts);
   const getData = ()=> {
      return localStorage.getItem('contShop')
    
   }

   
  const [logueado,setLogueado] = useState<any>({
    token:"",
    tipo:"",
  })


  const getToken = ()=> {
    return localStorage.getItem('TokenUsu')
  
 }

 const getTipo = ()=> {
  return localStorage.getItem('TypoUsu')

}


  useEffect(()=> {

      setLogueado({...logueado,token:getToken(),tipo:getTipo()})
         
  },[])
 


   useEffect(()=>{
       setCount(getData()); 
   },[])
 
   
   useEffect(()=> {
    if(Car){
    localStorage.setItem('cartItems', JSON.stringify(Car))
    }
 },[Car])



  const handleCart = () => {
    setOpenModal(!openModal);
    // Agregar lógica para mostrar el carrito de compras
  };

  

  return (
    <main>
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link to="/" className="navbar-brand">
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
                <Link to="/petshop" className="nav-link">
                  <BsBagFill /> PetShop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <BsBoxArrowInRight /> Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registro" className="nav-link">
                  <BsPersonPlus /> Registro
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleCart}>
                  <BsCart3 />
                  <span className='cart-count'>{count}</span>
                </button>
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    </nav>
    <Outlet/>
    </main>
  );
};

export default Navbar;
