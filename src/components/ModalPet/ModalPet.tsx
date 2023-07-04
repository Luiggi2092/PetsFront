import style from "./Modalpet.module.css"
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {getTypesPet,PostPet,getPets}  from "../../redux/actions" 
import { PetsService } from '../../services/PetsService';
import {Pet} from "../../interfaces/Pets"

interface Props {
    
    openModal:boolean;
    cambiarEstado : (value:boolean)=> void;
}



const ModalPet:React.FC<Props> = ({openModal,cambiarEstado}) => {

    const [image,setImage] = useState<string | Blob>('');
    const petTypes = useSelector((state:any)=> state.TypePet);

    const dispatch = useDispatch();

    

     const [form,setForm]= useState({
         name: "",
         image:"",
         age: 0,
         breed:"",
         sterilization:false,
         vaccine:[],
         typeId:""
 
  })

 useEffect (()=> {
    (async function(){
        const response = await PetsService.getPetsTypes();
          dispatch(getTypesPet(response.data))   
       })();
 },[])



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

const ChangeHandleCheked = (evt: React.ChangeEvent<HTMLInputElement>)=> {
    let property = evt.target.name;
    let value = evt.target.checked;

    setForm({
      ...form,
       [property]:value
    })

}



const changeHandleCombo = (evt: React.ChangeEvent<HTMLSelectElement>)=>{
      
    let property = evt.target.name;
    let value = evt.target.value;

    if(property !== "typeId" && value!=="0" &&
        property !== "sterization" && value!=="0"){
        let arr:any=[];
        arr.push(...form.vaccine,value);
        console.log(arr);
        setForm({...form,vaccine:arr});
    }

   

    if(property == "typeId" && value!=="0"){
        let arr = value;
        console.log(arr);
        setForm({...form,typeId:arr});
    }

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
       setForm({...form,image:data.url})
       
   })
   .catch(error => {
       console.log('Error al cargar',error);
       
   });
};


const submitHandler=(event:any)=> {
      event.preventDefault();
      console.log(form);
      if(form.name && 
         form.image &&
         form.breed &&
         form.age &&
         form.sterilization &&
         form.vaccine
         && form.typeId ){
            (async function(){
                const response = await PetsService.PostPets(form);
                const response1 = await PetsService.getPets();
                dispatch(getPets(response1.data)); 
                dispatch(PostPet(response.data))
            })()
         }
}

    
   
    return (
        <>
        { openModal && <form onSubmit={submitHandler}>
             <div className={`${style.Overlay}`}>
             <div className={style.contenedor}>
            <div className={style.ContenedorModal}>
                <div className={style.EncabezadoModal}>
                      <h2 className={style.h2}>New Pet</h2>
                      <img src={form.image== "" ? "https://res.cloudinary.com/dpq8kiocc/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688335705/Products/uqejaqpcos3lp630roqi.jpg?_s=public-apps": form.image} className={style.imaupload}/>      
                      <input className={style.input} type="file" onChange={handleImageUpload}></input>
                       <button className={style.upload} onClick={cargarImagen}>UPLOAD</button>
                       <br/>
                      <label>Nombre :</label>
                      <input className={style.input} type="text" onChange={ChangeHandle} name="name"></input>
                      <br/>
                      <label>Age :</label>
                      <input  className={style.input} type="number" onChange={ChangeHandle} name="age"></input>
                      <br/>
                      <label>breed :</label>
                     <input  className={style.input} type="string" onChange={ChangeHandle} name="breed"></input>
                     <label>Sterization</label>
                      <input type="checkbox" onChange={ChangeHandleCheked} name="sterilization" />
                      {/* <br/> */}
                     <label>Vaccines</label>
                     <select onChange={changeHandleCombo} className={style.select}>
                          <option>Rabia</option>
                          <option>Moquillo</option>
                          <option>Parvovirosis</option>
                          <option>Hepatitis</option>
                     </select>
                     {/* <br/>
                     <br/> 
                     <br/>    */}
                     <label>Tipo Mascota</label>
                     <select onChange={changeHandleCombo} name="typeId" className={style.select}>
                        {petTypes?.map((e:any)=> {
                            return <option key={e.id} value={e.id}>{e.type}</option>
                             
                        })}  
                     </select>
                </div>
                </div>
                
                      
                 <div className={style.BotonCerrar} onClick={()=> cambiarEstado(false)}>
                         X
              </div> 
              {/* <br/> 
              <br/>         */}
              <button type="submit"  onClick={submitHandler}>
                Create Pet
              </button>


            </div>
            </div>  
                
                
                
              
            
            
            
            
            
            </form>}
          
        </>
    )
       

}


export default ModalPet;