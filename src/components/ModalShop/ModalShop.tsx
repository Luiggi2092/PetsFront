import './ModalShop.css'
import {Carrito} from '../../interfaces/Products'


interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
    Car:[]

}



const ModalShop: React.FC<Props> = ({openModal,cambiarEstado,Car}) => {

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

                            {Car?.map((e:Carrito,index)=>(
                                 <div>
                                 <img className='imageProd' key={index} src={e.imagen}/>
                                 <p>{e.name}</p>
                                 <p>{e.precio}</p>
                                 <p>{e.cantidad}</p>
                                 <p>{e.precio * e.cantidad}</p>
                                 </div>
                                 ))}
                
                
                            </div>
                        </div>
                        
                </div>
                
     </div>

}
</>)}

export default ModalShop;