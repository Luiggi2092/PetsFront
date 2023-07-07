import style from './modal.module.css';
import {useState} from "react"
import {useDispatch} from "react-redux"
import { PostProduct,getProductos,getTypesProducts } from "../../redux/actions"
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
    
        console.log(value);

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
        
        if(form.name && 
           form.imagen &&
           form.price &&
           form.available &&
           form.averageRating &&
           form.typeId ){
             (async function(){
                const response = await ProductService.PostProduct(form);
                const response1 = await ProductService.getProducts();
                const response2 = await ProductService.getTypesProducts();
                if(response.data){   
                dispatch(PostProduct(response.data))
                dispatch(getProductos(response1.data))
                dispatch(getTypesProducts(response2.data)); 
                setForm({...form,imagen:"https://res.cloudinary.com/dpq8kiocc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688335705/Products/uqejaqpcos3lp630roqi.jpg?_s=public-apps"})
                alert(`Su producto ${response.data.name} se creo con exito`);
                }
             })();
             
           }  

          
    }
    console.log(CateProd);


    return (
        <>
            {openModal && <form onSubmit={submitHandler} >
                <div className={style.Overlay}>
                    <div className={style.ContenedorModal}>
                        <div className={style.EncabezadoModal}>
                            <h2>Producto</h2>
                        </div>
                        <div className={style.contendor}>
                            <img src={form.imagen== "" ? "https://res.cloudinary.com/dpq8kiocc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688335705/Products/uqejaqpcos3lp630roqi.jpg?_s=public-apps": form.imagen} className={style.imaupload}/>
                            <br/>
                            <input type="file" onChange={handleImageUpload}></input>
                            <br/>
                            <button onClick={cargarImagen}>UPLOAD</button>
                            <br/>
                            <label>Producto:</label>
                            <br/>
                            <input type="text" name="name" onChange={ChangeHandle}></input>
                            <br/>
                            <label>Precio:</label>
                            <br/>
                            <input type="number" name="price" onChange={ChangeHandle}></input>
                            <br/>
                            <label>Unidades dispobibles:</label>
                            <br/>
                            <input type="number" name="available" onChange={ChangeHandle}></input>
                            <br/>
                            <label>Categoría:</label>
                            <br/>
                            <select name="typeId" onChange={ChangeHandleSelect} >
                                <option>Seleccione</option>
                                {CateProd?.map((e:any)=>{
                                    return <option key={e.id} value={e.id}>{e.name}</option>  
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