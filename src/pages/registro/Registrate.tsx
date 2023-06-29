import { useState, ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import style from './Registro.module.css'

interface FormState {
  tipoDeUsuario: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  pais: string;
  estadoProvincia: string;
  ciudad: string;
  correo: string;
  contraseña: string;
}

const Registro = () => {
  const [form, setForm] = useState<FormState>({
    tipoDeUsuario: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    pais: '',
    estadoProvincia: '',
    ciudad: '',
    correo: '',
    contraseña: '',
  })

  const [error, setError] = useState<FormState>({
    tipoDeUsuario: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    pais: '',
    estadoProvincia: '',
    ciudad: '',
    correo: '',
    contraseña: '',
  });

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const property = event.target.name
    const value = event.target.value
    setForm({ ...form, [property]: value })
    setError(validate({ ...form, [property]: value } as FormState))
  }

  const validate = (input: FormState): FormState => {
    let error: FormState = {
      tipoDeUsuario: '',
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      pais: '',
      estadoProvincia: '',
      ciudad: '',
      correo: '',
      contraseña: '',
    };

    if (!input.tipoDeUsuario) {
      error.tipoDeUsuario = 'Debe seleccionar un tipo de usuario'
    } else error.tipoDeUsuario = ''

    if (!input.nombre.match(/^[a-zA-Z_]+([a-zA-Z_]+)*$/)) {
      error.nombre = 'Solo se permiten letras y no debe haber espacios al final.'
    } else error.nombre = ''

    if (!input.apellido.match(/^[a-zA-Z_]+([a-zA-Z_]+)*$/)) {
      error.apellido = 'Solo se permiten letras y no debe haber espacios al final.'
    } else error.apellido = ''

    if (!input.correo.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)) {
      error.correo = 'El correo es inválido.'
    } else error.correo = ''

    return error
  }

  const handlerSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (error.tipoDeUsuario === '' && error.nombre === '' && error.apellido === '' && error.correo === '') {
      //dispatch 
      alert('Usuario creado')
      setForm({
        tipoDeUsuario: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        pais: '',
        estadoProvincia: '',
        ciudad: '',
        correo: '',
        contraseña: '',
      })
    } else {alert("Completar los campos requeridos.")}
  }

  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style.registrarmeInp}>
          <div>
            <label htmlFor="tipoDeUsuario">Registrarme como: </label>
          </div>
          <input type="radio" value="usuario" name="tipoDeUsuario" checked={form.tipoDeUsuario === 'usuario'} onChange={handlerChange}/>
          <label htmlFor="usuario">Usuario</label>
          <input type="radio" value="proveedor" name="tipoDeUsuario" checked={form.tipoDeUsuario === 'proveedor'} onChange={handlerChange}/>
          <label htmlFor="proveedor">Proveedor</label>
          <input type="radio" value="organizacion" name="tipoDeUsuario" checked={form.tipoDeUsuario === 'organizacion'} onChange={handlerChange}/>
          <label htmlFor="organizacion">Organización</label>
        </div>
        {error.tipoDeUsuario && <p className={style.error}>{error.tipoDeUsuario}</p>}

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" name="nombre" value={form.nombre} onChange={handlerChange} />
          <label htmlFor="apellido">Apellido: </label>
          <input type="text" name="apellido" value={form.apellido} onChange={handlerChange} />
        </div>
        {error.nombre && <p className={style.error}>{error.nombre}</p>}
        {error.apellido && <p className={style.error}>{error.apellido}</p>}

        <div>
          <label htmlFor="fechaNacimiento">Fecha de nacimiento: </label>
          <input type="date" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handlerChange}/>
        </div>

        <div>
          <label htmlFor="pais">Pais: </label>
          <input type="text" name="pais" value={form.pais} onChange={handlerChange} />
          <label htmlFor="estado/provincia">Estado/Provincia: </label>
          <input type="text" name="estadoProvincia" value={form.estadoProvincia} onChange={handlerChange}/>
          <label htmlFor="ciudad">Ciudad: </label>
          <input type="text" name="ciudad" value={form.ciudad} onChange={handlerChange} />
        </div>

        <div>
          <label htmlFor="correo">Correo: </label>
          <input type="text" name="correo" value={form.correo} onChange={handlerChange} />
        </div>
        {error.correo && <p className={style.error}>{error.correo}</p>}

        <div>
          <label htmlFor="contraseña">Contraseña: </label>
          <input type="text" name="contraseña" value={form.contraseña} onChange={handlerChange} />
        </div>

        <button type="submit" onClick={handlerSubmit}>
          Registrarme
        </button>

        <h1>
          ¿Ya tienes cuenta?<Link to="/iniciarSesión">Iniciar Sesión</Link>
        </h1>
      </form>
    </div>
  )
}

export default Registro
