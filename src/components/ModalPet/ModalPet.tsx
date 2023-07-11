import style from "./Modalpet.module.css"
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {getTypesPet,PostPet,getPets, getVacunas}  from "../../redux/actions" 
import { PetsService } from '../../services/PetsService';
import {Vaccines} from '../../interfaces/Pets';

interface Props {
    
    openModal:boolean;
    cambiarEstado : (value:boolean)=> void;
}

const ModalPet:React.FC<Props> = ({openModal,cambiarEstado}) => {

    const [image,setImage] = useState<string | Blob>('');
    const petTypes = useSelector((state:any)=> state.TypePet);
    let Vacu = useSelector((state:any)=> state.Vaccines);
    const dispatch = useDispatch();

    interface Vaccinas {
        name: string
    }

    interface FormState {
        name: string;
        image: string;
        age: string;
        breed: string;
        sterilization: boolean;
        vaccine: Vaccinas[];
        typeId: string;
    }

    const [form,setForm]= useState<FormState>({
        name: "",
        image:"",
        age: "",
        breed:"",
        sterilization:false,
        vaccine:[],
        typeId:""
 
    })

    const [error, setError] = useState<FormState>({
        name: "",
        image:"",
        age: "",
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
        (async function(){
            const response = await PetsService.getVaccines();
            dispatch(getVacunas(response.data))   
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
        setError(validate({ 
            ...form, 
            [property]: value 
        } as FormState))
    }

    // --------------- Validaciones ---------------------
    const validate = (input: FormState) => {
        let error: FormState = {
            name: "",
            image:"",
            age:"",
            breed:"",
            sterilization:false,
            vaccine:[],
            typeId:""
        }

        if(!input.name.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)) {
            error.name = 'No se permiten números ni símbolos de puntuación.'
        } else error.name = '';
        
        if (input.image === "") {
            error.image = "Hay que seleccionar una imagen"
        } else error.image = "";

        const regexAge: RegExp = /^[0-9]+$/;
        if( !input.age.match(regexAge)) {
            error.age = "Solamente se permite numeros"
        } else error.age = "";

        if(!input.breed.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)) {
            error.breed = 'No se permiten números ni símbolos de puntuación.'
        } else error.breed = '';

        if(input.typeId === null) {
            error.typeId = "Hay que seleccinonar un tipo de animal"
        } else error.typeId = "";

        return error;
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
                    console.log("formulario" + form);
                    console.log("data api" + response);
                    const response1 = await PetsService.getPets();
                    if(response.data){
                        
                    dispatch(getPets(response1.data)); 
                    dispatch(PostPet(response.data))
                    alert("Mascota creada con Exito visita a " + " " + response.data.name)
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
                      
                        <input className={style.input} type="file" onChange={handleImageUpload}></input>
                        <button className={style.upload} onClick={cargarImagen}>UPLOAD</button>
                        {error.breed && <span className={style.error}>{error.breed}</span>}
                        <br/>
                        
                        <label>Nombre :</label>
                        <input className={style.input} type="text" onChange={ChangeHandle} name="name"></input>
                        {error.name && <span className={style.error}>{error.name}</span>} {/* <---Ejemplo no mas*/}
                        <br/>
                        
                        <label>Age :</label>
                        <input  className={style.input} type="number" min={0} onChange={ChangeHandle} name="age"></input>
                        {error.age && <span className={style.error}>{error.age}</span>}
                        <br/>
                      
                        <label>breed :</label>
                        <input  className={style.input} type="string" onChange={ChangeHandle} name="breed"></input>
                        {error.breed && <span className={style.error}>{error.breed}</span>}

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
                        {error.typeId && <span className={style.error}>{error.typeId}</span>}
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


