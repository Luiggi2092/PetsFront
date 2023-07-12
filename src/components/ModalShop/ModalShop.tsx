import './ModalShop.css'
import {useNavigate} from "react-router-dom"
import {Carrito} from '../../interfaces/Products'
import {useDispatch} from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import Swal from 'sweetalert2'
import {removeCart} from '../../redux/actions'
import axios from "axios"
import {formatNumber} from "../../utils/formatNumber"
import  {Elements,CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>

interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
    Car:[]

}

const stripePromise = loadStripe("pk_test_51NSt7LL6F2IdUTVBPoMT68rlt3D9jAldzQW8HtmXnDW81yhXUASDuC2fGlwD7gbehRv6XUjRHvYNLMlEikFdyvDv00PYM7vJuv");




const ModalShop: React.FC<Props> = ({openModal,cambiarEstado,Car}) => {
   

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (name:string) => {
        dispatch(removeCart(name));
    }

    const calcularSubtotal = () => {
       return Car.reduce((total:number,products:any)=>{
            return total + products.precio * products.cantidad;
       },0)
    }


   const  CheckoutForm = () =>{

   
    const stripe:any = useStripe(); 
    const elements = useElements();   
    
    const handleSubmit = async(e:any)=> {
       e.preventDefault();

     const {error,paymentMethod} = await stripe.createPaymentMethod({
          type:'card',
          card: elements?.getElement(CardElement)   
       })

      const {id} = paymentMethod;

      
     const isToken = localStorage.getItem('TokenUsu');
     const Tipo = localStorage.getItem('TypoUsu');
     const convert = Tipo ? JSON.parse(Tipo) : null;


    if(isToken && convert === "usuario" || 
    isToken && convert === "https://accounts.google.com"){
      const res = await axios.post('http://localhost:3001/api/checkout',{
        id,
        amount:Math.round(calcularSubtotal() * 100)
      })

      if(res.data){
        Swal.fire({
          title:'Pago se realizo con exito',
          icon:'success',
          confirmButtonText:'Ok'});
        localStorage.removeItem('cartItems');
         Car.map((e:any)=> {
              dispatch(removeCart(e.name))
         })
        cambiarEstado(false);


    }else{
     Swal.fire({
         title:'Tuvimos un error al procesar el pago',
         icon:'error',
         confirmButtonText:'Ok'});
       
    }
    }else{
        cambiarEstado(false);
        Swal.fire({
            title:'Debe iniciar sesion',
            icon:'info',
            confirmButtonText:'Ok'});
          
       
         navigate("/login");
    }
      

      
    }

    console.log(calcularSubtotal());

    return <form onSubmit={handleSubmit}>
      <CardElement/>  
       <button>
        Buy
       </button>
    </form>
    
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
                               <thead> 
                                <tr>
                               <th>Imagen</th>
                               <th>Producto</th>
                               <th>Precio</th>
                               <th>Cantidad</th>
                               <th>SubTotal</th>
                               </tr>
                               </thead>
                             <tbody>  
                            {Car?.map((e:Carrito,index:number)=>(
                                <tr key={index}>   
                                 <td><img className='imageProd' key={index} src={e.imagen}/></td>
                                 <td><p > {e.name}</p></td>
                                 <td  >{e.precio}</td>
                                 <td  >{e.cantidad}</td>
                                 <td  >{e.precio * e.cantidad}</td>
                                 <td  ><button  onClick={()=>handleRemove(e.name)}>Remove</button></td>
                                 </tr>
                                 ))}
                                 </tbody>
                                 </table>  
                               <h3>Total : S/. {formatNumber(calcularSubtotal())}</h3> 
                               
                            </div>
                           <Elements stripe={stripePromise}>
                               <CheckoutForm/>
                           </Elements>
                        </div>
                        
                </div>
                
     </div>

}
</>)}

export default ModalShop;