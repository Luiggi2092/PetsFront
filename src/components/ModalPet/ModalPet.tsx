import style from "./Modalpet.module.css"
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {getTypesPet,PostPet,getPets,getVaccines}  from "../../redux/actions" 
import { PetsService } from '../../services/PetsService';
import {Vaccines} from '../../interfaces/Pets';
import axios from "axios";

interface Props {
    
    openModal:boolean;
    cambiarEstado : (value:boolean)=> void;
}


const url = 'https://api.cloudinary.com/v1_1/dpq8kiocc/image/upload'
const UPLOAD_PRESET = 'PetsMat'



const ModalPet:React.FC<Props> = ({openModal,cambiarEstado}) => {

    //const [image,setImage] = useState<string | Blob>('');
    const petTypes = useSelector((state:any)=> state.TypePet);
    let Vacu = useSelector((state:any)=> state.Vaccines);
    const dispatch = useDispatch();
    const [avance,setAvance]= useState(0);
    

     const [form,setForm]= useState({
         name: "",
         image:"",
         age: 0,
         breed:"",
         sterilization:false,
         vaccine:"",
         typeId:""
 
  })

 useEffect (()=> {
    (async function(){
        const response = await PetsService.getPetsTypes();
          dispatch(getTypesPet(response.data))   
       })();
       (async function(){
        const response = await PetsService.getVaccines();
         dispatch(getVaccines(response.data))   
       })();     
 },[])



 const handleImageUpload = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = evt.target.files && evt.target.files[0];

    const formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await axios.post(url,formData,{
         headers: {
            'Content-Type': 'multipart/formData'
         },
         onUploadProgress(e){
            const progress = Math.round((100 * e.loaded || 1) / (e.total || 1));
            setAvance(progress);
         }
    });
    console.log(res);
    setForm({...form,image:res.data.secure_url})


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


const ChangeHandleSelect = (evt: React.ChangeEvent<HTMLSelectElement>)=> {
    let property = evt.target.name;
    let value = evt.target.value;

    console.log(value);

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


}

 
 


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
                console.log("formulario" + form);
                console.log("data api" + response);
                const response1 = await PetsService.getPets();
                if(response.data){
                     
                  dispatch(getPets(response1.data)); 
                  dispatch(PostPet(response.data))
                  alert("Mascota creada con Exito visita a " + " " + response.data.name)
                  setForm({...form,name:"",image:"",breed:"",age:0,sterilization:false,vaccine:"0",typeId:""})
               
                }
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
                      <input className={style.input} type="file" onChange={handleImageUpload} accept="image/*"></input>
                      <progress value={avance} max={100} id="progress-bar"/>       
                       <br/>
                      <label>Nombre :</label>
                      <input className={style.input} type="text" onChange={ChangeHandle} name="name"></input>
                      <br/>
                      <label>Age :</label>
                      <input  className={style.input} type="number" onChange={ChangeHandle} name="age" value={form.age > 0 ? form.age : 0}></input>
                      <br/>
                      <label>breed :</label>
                     <input  className={style.input} type="string" onChange={ChangeHandle} name="breed"></input>
                     <label>Sterization</label>
                      <input type="checkbox" onChange={ChangeHandleCheked} name="sterilization" />
                      {/* <br/> */}
                     <label>Vaccines</label>
                     <select onChange={changeHandleCombo} className={style.select}>
                      {Vacu?.map((e:Vaccines)=>{
                        return <option key={e.id}>{e.name}</option>
                      })}                           
                    </select>
                     {/* <br/>
                     <br/> 
                     <br/>    */}
                     <label>Tipo Mascota</label>
                     <select name="typeId" onChange={ChangeHandleSelect}  className={style.select}>
                     <option>Seleccione</option>
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