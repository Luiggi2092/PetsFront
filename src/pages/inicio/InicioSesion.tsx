import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './inicioSesion.module.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    axios
      .post('/api/users', { email, password })
      .then(response => {
        if (response.status === 200) {
          loginWithRedirect();
        } else {
          console.error('Error en el inicio de sesión');
        }
      })
      .catch(error => {
        console.error('Error en el inicio de sesión', error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithRedirect({connection: 'google-oauth2'});
  }

  return (
    <div className={style.containerForm}>
      <h2>Inicio de sesión</h2>
      <input type='email' placeholder='ejemplo@hotmail.com' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
      <p>¿No tienes cuenta?</p> <Link to='/registro'><button>Registrate</button></Link>
    </div>
  )
}

export default Login;