import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import style from './inicioSesion.module.css'
import { UserService } from "../../services/UserService";
import { useEffect } from "react"
import jwt_decode from "jwt-decode";
import logo from '../../assets/sinfondo blanco.png'

declare const google: any;

const Login = () => {
  const navigate = useNavigate();

  

  const [form, setForm] = useState({
    email: "",
    password: "",
    token: "",
    Type:"",
  })

  const [user, setUser] = useState<any>({})

  function handleCallbackResponse(response: any) {
    console.log("Enconded JWT ID token" + response.credential)
    const userObject:any = jwt_decode(response.credential);
    console.log(userObject.iss)
    localStorage.setItem('TokenUsu', JSON.stringify(response.credential));
    localStorage.setItem('TypoUsu', JSON.stringify(userObject.iss));      
    setUser(userObject)
  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: "455768951489-dpmia14fe22vcrimo4fmgbtqnngab2b7.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

    google.accounts.id.prompt();
  }, [])


  // const handleGoogleLogin = () => {
  //   loginWithRedirect({connection: 'google-oauth2'});
  // }

  const handleHome = () => {
    navigate('/');
  }

  const ChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const property = evt.target.name;
    const value = evt.target.value;

    setForm({
      ...form,
      [property]: value
    })
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (form.email &&
      form.password) {
      (async function () {
        const response = await UserService.PostLogueo(form);
        
        if(response.data.accessToken){
          localStorage.setItem('TokenUsu', JSON.stringify(response.data.accessToken));
          localStorage.setItem('TypoUsu', JSON.stringify(response.data.user.UsersType.name));
           navigate('/homecliente');
         
        }
      })();
    }
  }

  return (
    <section>
      <div className={style.content}>
        <div className={style.left}>
          <img src={logo} alt='Logotipo-PetMatch' />
        </div>
        <div className={style.right}>
          <div className={style.titulo}>
            <h2>Bienvenido de nuevo</h2>
          </div>
          <div className={style.form}>
            <form onSubmit={submitHandler} >
              <div className={style.inputBox}>
                <label>Correo:</label>
                <input type='email' placeholder='ejemplo@hotmail.com' name="email" onChange={ChangeHandle} required />
              </div>
              <div className={style.inputBox}>
                <label>Contraseña:</label>
                <input type='password' placeholder='Contraseña' name="password" onChange={ChangeHandle} required />
              </div>
              <div className={style.iniciar}>
                <button type="submit" onClick={submitHandler}>Iniciar sesión</button>
              </div>
              
                <div id="signInDiv" onClick={handleHome} >

                </div>
              <div className={user ? "profile" : "hidden"}>
                {user.picture && <Link to={'/homecliente'}>
                  <img src={user.picture} alt="" />
                </Link>}
              </div> 
              <div className={style.adicional}>
                <p>¿No tienes cuenta? <Link to='/registro'><span>Registrate</span></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login;