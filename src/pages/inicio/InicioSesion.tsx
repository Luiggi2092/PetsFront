import { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import style from './inicioSesion.module.css'
import {useEffect} from "react"
import jwt_decode from "jwt-decode";

declare const google: any;


const Login = () => {

   const navigate = useNavigate();
  
  interface user1 {
    name: string | null;
    iat?:number,
    iss?:string,
    picture?:string
  }


  const [user,setUser] = useState<any>({})

 
   function handleCallbackResponse(response:any){
       console.log("Enconded JWT ID token" + response.credential)

       var userObject = jwt_decode(response.credential);
       console.log(userObject)
       setUser(userObject)
      

   }


  useEffect(()=> {
         // global google
         google.accounts.id.initialize({
               client_id:"455768951489-dpmia14fe22vcrimo4fmgbtqnngab2b7.apps.googleusercontent.com",
               callback: handleCallbackResponse
         })
         google.accounts.id.renderButton(
           document.getElementById("signInDiv"),
          {theme: "outline", size: "large"}
         )

         google.accounts.id.prompt();
  },[])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('/api/users', { email, password })
      .then(response => {
        if (response.status === 200) {
         // loginWithRedirect();
        } else {
          console.error('Error en el inicio de sesión');
        }
      })
      .catch(error => {
        console.error('Error en el inicio de sesión', error);
      });
  };

  // const handleGoogleLogin = () => {
  //   loginWithRedirect({connection: 'google-oauth2'});
  // }

  const handleHome = () => {

     navigate('/');
        
  }



  return (
    <div className={style.containerForm}>
      <h2>Inicio de sesión</h2>
      <input type='email' placeholder='ejemplo@hotmail.com' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
{      
      <div id="signInDiv" onClick={handleHome} >
          
      </div>}
      <div className={user? "profile":"hidden"}>
        {user.picture && <Link to={'/home'}>
        <img  src={user.picture} alt=""/>
        </Link>}
      </div>
      <p>¿No tienes cuenta?</p> <Link to='/registro'><button>Registrate</button></Link>
    </div>
  )
}

export default Login;