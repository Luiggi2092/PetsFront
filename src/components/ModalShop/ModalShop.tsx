import './ModalShop.css'
import {Carrito} from '../../interfaces/Products'
import {useDispatch} from 'react-redux'
import {removeCart} from '../../redux/actions'
import { useSearchParams } from 'react-router-dom'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>

interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
    Car:[]

}





const ModalShop: React.FC<Props> = ({openModal,cambiarEstado,Car}) => {
   

    const dispatch = useDispatch();

    const handleRemove = (name:string) => {
        dispatch(removeCart(name));
    }
    

     return (
        <>
        {openModal && 
        <div>
                    <div className="Overlay">
                        <div className='ContenedorModal'>
                           <div className='EncabezadoModal'> 
                            <h2>Carrito de Compra</h2>
                            </div>
                            <div className="BotonCerrar" onClick={() => cambiarEstado(false)}>
                            X
                           </div>
                           <div className='contendor'>
                            <table className="table table-striped">
                               <th>Imagen</th>
                               <th>  Producto</th>
                               <th>Precio</th>
                               <th>Cantidad</th>
                               <th>SubTotal</th>
                             <tbody>  
                            {Car?.map((e:Carrito,index)=>(
                                <tr>   
                                 <td><img className='imageProd' key={index} src={e.imagen}/></td>
                                 <td><p> {e.name}</p></td>
                                 <td>{e.precio}</td>
                                 <td>{e.cantidad}</td>
                                 <td>{e.precio * e.cantidad}</td>
                                 <td><button onClick={()=>handleRemove(e.name)}>Remove</button></td>
                                 </tr>
                                 ))}
                                 </tbody>
                                 </table>  
                
                            </div>
                        </div>
                        
                </div>
                
     </div>

}
</>)}

export default ModalShop;