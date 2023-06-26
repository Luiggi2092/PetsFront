import React, {useState, ChangeEvent} from 'react'
import style from './Registro.module.css'

const Registro = () => {
  const [tipoDeUsuario, setTipoDeUsuario] = useState<string>("")
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setTipoDeUsuario(e.target.value)
  }

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    pais: "",
    estadoProvincia: "",
    correo: "",
    contraseña: "",
  })

  return (
    <div className={style.container}>
      <form>
        <div>
          <div> <label htmlFor="tipoDeUsuario">Registrarme como: </label> </div>
          <label htmlFor="usuario">Usuario</label>
          <input type="radio" value="usuario" name={tipoDeUsuario} checked={tipoDeUsuario === 'usuario'} onChange={handleSelect}  />
          <label htmlFor="proveedor">Proveedor</label>
          <input type="radio" value="proveedor" name={tipoDeUsuario} checked={tipoDeUsuario === 'proveedor'} onChange={handleSelect}/>
          <label htmlFor="organizacion">Organización</label>
          <input type="radio" value="organizacion" name={tipoDeUsuario}  checked={tipoDeUsuario === 'organizacion'} onChange={handleSelect}/>
          <p>{tipoDeUsuario}</p>
        </div>

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" name="nombre" value={form.nombre}/>
          <label htmlFor="apellido">Apellido: </label>
          <input type="text" name="apellido" value={form.apellido}/>
        </div>

        <div>
          <label htmlFor="fechaNacimiento">Fecha de nacimiento: </label>
          <input type="date" name="fechaNacimiento" value={form.fechaNacimiento} />
        </div>

        <div> 
          <label htmlFor="pais">Pais: </label>
          <input type="text" name="pais" value={form.pais}/>
          <label htmlFor="estado/provincia">Estado/Provincia: </label>
          <input type="text" name="estado/provincia" value={form.estadoProvincia}/>
        </div>

        <div>
          <label htmlFor="correo">Correo: </label>
          <input type="text" name="correo" value={form.correo}/>
        </div>

        <div>
          <label htmlFor="contraseña">Contraseña: </label>
          <input type="text" name="contraseña" value={form.contraseña}/>
        </div>
        <button type='submit'>Registrarme</button>
        <button >Registarme con </button>
      </form>
    </div>
  )
}

export default Registro