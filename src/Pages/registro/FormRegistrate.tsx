import './registrate.css'
import {useState} from "react"
import {useDispatch} from "react-redux";
import {UserService} from "../../services/UserService";


const FormRegistrate = () => {

   const dispatch = useDispatch();
   const [form,setForm] = useState({
        email:"",
        passwordKey:"",
        name:"",
        address:"",
        phone:"",
        UsersTypeId:"e9cfc5ae-9a64-4d01-82c2-eb54bc3d9e20",
        type:"usuario"
        
          
   })  

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
   
   console.log(property);
   console.log(value);

  

  setForm({
      ...form,
      [property]:value
  })
 




}
   

const submitHandler=(event:any)=> {
      event.preventDefault();
     if(form.email &&
        form.passwordKey &&
        form.name &&
        form.address && 
        form.phone &&
        form.UsersTypeId && 
        form.type){
             (async function(){
                  const response = await UserService.PostUser(form);
                  console.log(response.data);
             })();
        }
}

  return (
    <form onSubmit={submitHandler}>
       <h1>Registrate Aquí</h1>
       <label>email</label>
       <input type='text' name="email" onChange={ChangeHandle}/>
       <label>Password</label>
       <input type="password" name="passwordKey" onChange={ChangeHandle}/>
       <label>Name</label>
       <input type="text" name="name" onChange={ChangeHandle}/>
       <label>address</label>
       <input type="text" name="address" onChange={ChangeHandle}/>
       <label>phone</label>
       <input type="text" name="phone" onChange={ChangeHandle}/>
       <select name="type" onChange={ChangeHandleSelect} >
         <option value="usuario" >usuario</option>
       </select>
       <button type="submit" onClick={submitHandler}>
                            Create User
                        </button>

    </form>
  )
}

export default FormRegistrate