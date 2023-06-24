import React from "react";
import Cards from "../../components/cards/Cards";
import style from "./PetShop.module.css"
import Paginado from "../../components/paginado/Paginado";


const PetShop: React.FC = () => {

  return (

    <div>
      <h1 className={style.titulo}>Pets Shop</h1>

      <div className={style.container}>
        <Cards />
      </div>
      <Paginado />
    </div>

  )


}

export default PetShop;