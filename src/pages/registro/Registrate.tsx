import { useState, ChangeEvent, MouseEvent, useEffect} from 'react'
import { Link } from 'react-router-dom'
import style from './Registro.module.css'
import { UserService } from "../../services/UserService"
import { typeUsers } from '../../services/UserService'
import { getUsersType } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


interface FormState {
  type: string;
  UsersTypeId: string;
  name: string;
  //surname: string;
  //fechaNacimiento: string;
  address: string;
  //estadoProvincia: string;
  //ciudad: string;
  phone: string;
  email: string;
  passwordKey: string;
}

const Registro = () => {
  const [form, setForm] = useState<FormState>({
    type: '',
    UsersTypeId: '',
    name: '',
    //surname: '',
    //fechaNacimiento: '',
    address: '',
    //estadoProvincia: '',
    //ciudad: '',
    phone: '',
    email: '',
    passwordKey: '',
  })

  const [error, setError] = useState<FormState>({
    type: '',
    UsersTypeId: '',
    name: '',
    //surname: '',
    //fechaNacimiento: '',
    address: '',
    //estadoProvincia: '',
    //ciudad: '',
    phone: '',
    email: '',
    passwordKey: '',
  });

  const dispatch = useDispatch()
  useEffect(() => {
    (async function(){
      const response = await typeUsers.getUsersType()
      dispatch(getUsersType(response.data))
    })()
  }, [dispatch])

  const usersType = useSelector((state:any) => state.UsersType)
  
  //const [userTypes, setUserTypes] = useState<string[]>([])

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const property = event.target.name
    const value = event.target.value
    setForm({ ...form, [property]: value })
    setError(validate({ ...form, [property]: value } as FormState))
    console.log(value)
  }

  const validate = (input: FormState): FormState => {
    let error: FormState = {
      type: '',
      UsersTypeId: '',
      name: '',
      //surname: '',
      //fechaNacimiento: '',
      address: '',
      //estadoProvincia: '',
      //ciudad: '',
      phone: '',
      email: '',
      passwordKey: '',
    };

    if (!input.type) {
      error.type = 'Debe seleccionar un tipo de usuario'
    } else error.type = ''

    if (!input.name.match(/^[a-zA-Z_]+([a-zA-Z_]+)*$/)) {
      error.name = 'Solo se permiten letras y no debe haber espacios al final.'
    } else error.name = ''

/*     if (!input.surname.match(/^[a-zA-Z_]+([a-zA-Z_]+)*$/)) {
      error.surname = 'Solo se permiten letras y no debe haber espacios al final.'
    } else error.surname = '' */

    if (!input.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)) {
      error.email = 'El correo es inválido.'
    } else error.email = ''

    return error
  }

  const handlerSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (error.type === '' && error.name === '' && error.email === '') {
      (async function () {
        await UserService.PostUser(form)
        
      })()
      alert('Usuario creado')
      setForm({
        type: '',
        UsersTypeId: '',
        name: '',
        //surname: '',
        //fechaNacimiento: '',
        address: '',
        //estadoProvincia: '',
        //ciudad: '',
        phone: '',
        email: '',
        passwordKey: '',
      })
    } else {alert("Completar los campos requeridos.")}
  }

  return (
    <div className={style.container}>
      <div>
        <form className={style.form}>
          <div >
            <div>
              <label htmlFor="type">Registrarme como: </label>
            </div>
            {usersType.map((userType: any) => (
            <div key={userType.id}>
              <input type="radio" value={userType.name} name="type" checked={form.type === userType.name} onChange={handlerChange}/>
              <label htmlFor={userType.id}>{userType.name}</label>
            </div>
          ))}
          </div>
          {error.type && <p className={style.error}>{error.type}</p>}

          <div>
            <label htmlFor="name" >Nombre Completo: </label>
            <input type="text" name="name" value={form.name} onChange={handlerChange} />
            {/* <label htmlFor="surname" className={style.label}>Apellido: </label>
            <input type="text" name="surname" value={form.surname} onChange={handlerChange}/> */}
          </div>
          {error.name && <p className={style.error}>{error.name}</p>}
          {/* {error.surname && <p className={style.error}>{error.surname}</p>} */}

          {/* <div>
            <label htmlFor="fechaNacimiento">Fecha de nacimiento: </label>
            <input type="date" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handlerChange}/>
          </div> */}

          <div>
            <label htmlFor="phone">Teléfono: </label>
            <input type="tel" name="phone" value={form.phone} onChange={handlerChange}/>
          </div>

          <div>
            <label htmlFor="address">Pais: </label>
            <input type="text" name="address" value={form.address} onChange={handlerChange}/>
            {/* <label htmlFor="estado/provincia" className={style.label}>Estado/Provincia: </label>
            <input type="text" name="estadoProvincia" value={form.estadoProvincia} onChange={handlerChange}/>
            <div>
              <label htmlFor="ciudad">Ciudad: </label>
              <input type="text" name="ciudad" value={form.ciudad} onChange={handlerChange}/>
            </div> */}
          </div>

          <div>
            <label htmlFor="email">Correo: </label>
            <input type="text" name="email" value={form.email} onChange={handlerChange}/>
          </div>
          {error.email && <p className={style.error}>{error.email}</p>}

          <div>
            <label htmlFor="passwordKey">Contraseña: </label>
            <input type="password" name="passwordKey" value={form.passwordKey} onChange={handlerChange} />
          </div>

          <button type="submit" onClick={handlerSubmit} className={style.boton}>
            Registrarme
          </button>

          <h1 className={style.h1}>
            ¿Ya tienes cuenta?<Link to="/login">Iniciar Sesión</Link>
          </h1>
        </form>
      </div>
    </div>
  )
}

export default Registro