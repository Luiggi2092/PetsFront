import style from './modal.module.css';
import {useState} from "react"
import axios from "axios";
import {useDispatch} from "react-redux"
import { PostProduct,getProductos,getTypesProducts } from "../../redux/actions"
import { ProductService } from '../../services/ProductService';

interface Props {
    openModal: boolean;
    cambiarEstado: (value: boolean) => void;
    CateProd:[];
}

const url = 'https://api.cloudinary.com/v1_1/dpq8kiocc/image/upload'
const UPLOAD_PRESET = 'Products'




const Modal: React.FC<Props> = ({ openModal, cambiarEstado,CateProd }) => {
    
const dispatch = useDispatch();

const [form,setForm]= useState({
       name: "",
       imagen:"",
       price: 0.0,
       available:0,
       averageRating:1.0,
       typeId:""

})

const [avance,setAvance]= useState(0);



const handleImageUpload = async (evt: React.ChangeEvent<HTMLInputElement>) => {

    const file:any = evt.target.files && evt.target.files[0];

    const formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await axios.post(url,formData, {
        headers: {
            'Content-Type': 'multipart/formData'
        },
        onUploadProgress(e){
            console.log(Math.round((100 * e.loaded || 1) / (e.total || 1 )));
            const progress = Math.round((100 * e.loaded || 1) / (e.total || 1 ));
            setAvance(progress);
        }
      
    });

    console.log(res);
    setForm({...form,imagen:res.data.secure_url})
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
                setForm({...form,name:"",imagen:"",price:0,available:0,averageRating:0,typeId:""})
                cambiarEstado(false);
                  }
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
                            <img id="img-preview" src={form.imagen== "" ? "https://res.cloudinary.com/dpq8kiocc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688335705/Products/uqejaqpcos3lp630roqi.jpg?_s=public-apps": form.imagen} className={style.imaupload}/>
                            <br/>
                            <input type="file" onChange={handleImageUpload} id="imageText" accept='image/*' />
                            <progress value={avance} max={100} id="progress-bar"/>
                            <br/>
                            <br/>
                            <label>Producto:</label>
                            <br/>
                            <input type="text" name="name" onChange={ChangeHandle}></input>
                            <br/>
                            <label>Precio:</label>
                            <br/>
                            <input type="number" name="price" onChange={ChangeHandle} value={form.price > 0 ? form.price:0}></input>
                            <br/>
                            <label>Unidades dispobibles:</label>
                            <br/>
                            <input type="number" name="available" onChange={ChangeHandle} value={form.available > 0 ? form.available:0 }></input>
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