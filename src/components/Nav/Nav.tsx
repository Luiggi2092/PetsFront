import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarLogueado from "../ClientHome/Navbarcient/NavbarCliente";



const Nav:React.FC = ()=> {
  
    const isToken = localStorage.getItem('TokenUsu');
    const Tipo = localStorage.getItem('TypoUsu');
    const convert = Tipo ? JSON.parse(Tipo) : null;

      
    if(isToken && convert === "usuario" || 
       isToken && convert === "https://accounts.google.com"){
        return <NavbarLogueado/>;
    }else{
        return <Navbar/>
    }

   

}


export default Nav;