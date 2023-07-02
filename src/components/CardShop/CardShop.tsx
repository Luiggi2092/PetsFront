import React from 'react'
import style from './CardShop.module.css'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment, CarritoCompas } from '../../redux/actions';


interface Props {
  id: number;
  name: string;
  imagen: string;
  price : number;
}


const cardShop: React.FC<Props> = ({ name, imagen, price }) => {

  const [contador, setContador] = useState(1);
  const [carrito,setCarrito] = useState({
         name:name,
         imagen:imagen,
         precio:price,
         cantidad:contador

  })
  const dispatch = useDispatch();

  const incrementar = () => {
    setContador(contador + 1);
    setCarrito({...carrito,cantidad:contador + 1})
  }

  const decrementar = () => {
    setContador(contador - 1);
    setCarrito({...carrito,cantidad:contador - 1})
  }


 const handleCarroShop = ()=> {
     
     dispatch(increment());
     dispatch(CarritoCompas(carrito))
    
 }




  return (
    <div>
      <div className={style.card}>
        <img src={imagen} alt="producto" />
        <p>{name}</p>
        <div className={style.botones}>
          <button className={style.cant} onClick={incrementar}>+</button>
          <span className={style.cont} onInput={(e:any)=> setCarrito(e.target.innerText)} >{contador >= 1 ? contador : 1}</span>
          <button className={style.cant} onClick={decrementar}>-</button>
          </div>
          <span className={style.price} > S/. {price}</span>
          <button className={style.agregar} onClick={handleCarroShop}>Agregar</button>
        
      </div>
    </div>
  )


}




export default cardShop