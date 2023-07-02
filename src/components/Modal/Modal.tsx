import style from './modal.module.css';
import {useState} from "react"
import {useDispatch} from "react-redux"
import { PostProduct } from "../../redux/actions"
import { ProductService } from '../../services/ProductService';

interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
    CateProd:[];
}







const Modal: React.FC<Props> = ({ openModal, cambiarEstado,CateProd }) => {
    
const [image,setImage] = useState<string | Blob>('');
const dispatch = useDispatch();

const [form,setForm]= useState({
       name: "",
       imagen:"",
       price: 0.0,
       available:0,
       averageRating:1.0,
       typeId:""

})



const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null) {
      setImage(evt.target.files[0]); //error
    }
  }; 


const ChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>)=> {
       let property = evt.target.name;
       let value = evt.target.value;

       setForm({
         ...form,
          [property]:value
       })

}


const ChangeHandleSelect = (evt: React.ChangeEvent<HTMLSelectElement>)=> {
        let property = evt.target.name;
        let value = evt.target.value;


        setForm({
            ...form,
            [property]:value
        })
       




}

    
const cargarImagen =  (event:any)=>{
     event.preventDefault();
    
    
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","Products")
    data.append("cloud-name","dpq8kiocc")

    fetch("https://api.cloudinary.com/v1_1/dpq8kiocc/image/upload",{
        method: 'post',
        body:data
    })
    .then((res)=> res.json())
    .then(data => {
        setForm({...form,imagen:data.url})
    })
    .catch(error => {
        console.log('Error al cargar',error);
        
    });
};


    const submitHandler = (event:any)=> {
        event.preventDefault(); 
        
        console.log("holaafuera");
        if(form.name && 
           form.imagen &&
           form.price &&
           form.available &&
           form.averageRating &&
           form.typeId ){
              console.log("hola");
             (async function(){
                const response = await ProductService.PostProduct(form);
                dispatch(PostProduct(response.data))
             })();
             
           }  

          
    }


    return (
        <>
            {openModal && <form onSubmit={submitHandler} >
                <div className={style.Overlay}>
                    <div className={style.ContenedorModal}>
                        <div className={style.EncabezadoModal}>
                            <h2>Producto</h2>
                        </div>
                        <div className={style.contendor}>
                            <input type="file" onChange={handleImageUpload}></input>
                            <button onClick={cargarImagen}>UPLOAD</button>
                            <label>Producto</label>
                            <input type="text" name="name" onChange={ChangeHandle}></input>
                            <label>Price :</label>
                            <input type="number" name="price" onChange={ChangeHandle}></input>
                            <label>Available</label>
                            <input type="number" name="available" onChange={ChangeHandle}></input>
                            <label>Categoría</label>
                            <select name="typeId" onChange={ChangeHandleSelect} >
                                <option>Seleccione</option>
                                {CateProd?.map((e:any,index)=>{
                                    return <option key={index} value={e.id}>{e.name}</option>  
                                })}
                            </select>

                        </div>
                        <div className={style.BotonCerrar} onClick={() => cambiarEstado(false)}>
                            X
                        </div>

                        <button type="submit" onClick={submitHandler}>
                            Create Product
                        </button>

                    </div>
                </div>
            </form>}
        </>
    )
}

export default Modal;