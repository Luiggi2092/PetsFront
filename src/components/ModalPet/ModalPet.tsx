import style from "./Modalpet.module.css"
import {useState} from "react";

interface Props {
    
    openModal:boolean;
    cambiarEstado : (value:boolean)=> void;
}



const ModalPet:React.FC<Props> = ({openModal,cambiarEstado}) => {

    const [image,setImage] = useState<string | Blob>('');

    const [form,setForm]= useState({
        name: "",
        imagen:"",
        Age: 0,
        breed:"",
 
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
 
 const cargarImagen =  (event:any)=>{
    event.preventDefault();
   
   
   const data = new FormData();
   data.append("file",image);
   data.append("upload_preset","PetsMat")
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


    
   
    return (
        <>
        { openModal && 
             <div className={style.Overlay}>
            <div className={style.ContenedorModal}>
                <div className={style.EncabezadoModal}>
                      <h2>New Pet</h2>
                </div>
                <div className={style.contenedor}>
                       <input type="file" onChange={handleImageUpload}></input>
                       <button onClick={cargarImagen}>UPLOAD</button>
                       <br/>
                      <label>Nombre :</label>
                      <input type="text" onChange={ChangeHandle}></input>
                      <br/>
                      <label>Age :</label>
                      <input type="number" onChange={ChangeHandle}></input>
                      <br/>
                      <label>breed :</label>
                     <input type="string" onChange={ChangeHandle}></input> 
                </div>
                 <div className={style.BotonCerrar} onClick={()=> cambiarEstado(false)}>
                         X
              </div> 

              <button type="submit">
                Create Product
              </button>


            </div>
            </div>  
                
                
                
              
            
            
            
            
            
            }
          
        </>
    )
       

}


export default ModalPet;