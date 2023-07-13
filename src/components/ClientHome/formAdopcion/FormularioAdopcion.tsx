import React, { ChangeEvent, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './form.css'
import { FormAdoption } from '../../../services/UserService';

const FormularioAdopcion = () => {
    /* const [codigoPais, setCodigoPais] = useState('');
    const [hogarAdecuado, setHogarAdecuado] = useState(false); */
    // const [tiempoDedicado, setTiempoDedicado] = useState('');
    const [terminosCondiciones, setTerminosCondiciones] = useState(false);
    const [enviado, setEnviado] = useState(false);

    /* const obtenerCodigoArea = () => {
        const codigosArea: { [key: string]: string } = {
            AR: '+54', // Argentina
            BR: '+55', // Brasil
            CL: '+56', // Chile
            CO: '+57', // Colombia
            CR: '+506', // Costa Rica
            CU: '+53', // Cuba
            DO: '+1-809', // República Dominicana
            EC: '+593', // Ecuador
            ES: '+34', // España
            GT: '+502', // Guatemala
            HN: '+504', // Honduras
            MX: '+52', // México
            NI: '+505', // Nicaragua
            PA: '+507', // Panamá
            PE: '+51', // Perú
            PY: '+595', // Paraguay
            SV: '+503', // El Salvador
            UY: '+598', // Uruguay
            VE: '+58', // Venezuela
        };

        const opcionesCodigoArea = Object.entries(codigosArea).map(([pais, codigoArea]) => (
            <option key={pais} value={codigoArea}>
                {pais} - {codigoArea}
            </option>
        ));

        return (
            <select
                id="codigo-pais"
                value={codigoPais}
                onChange={(e) => setCodigoPais(e.target.value)}
            >
                <option value="">Selecciona un país</option>
                {opcionesCodigoArea}
            </select>
        );
    }; */

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validaciones
        if (!form.name || !form.lastName || !form.address || !form.email || !form.phone || !form.economicSituation || !form.previousPetExperience || !form.dailyPetTime || !form.petAllergy) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        if (!terminosCondiciones) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }

        if (!form.over18) {
            alert('Debes ser mayor de 18 años para enviar el formulario.');
            return;
        }

        if (!form.properHome) {
            alert('Debes contar con un hogar apto para tu mascota.')
        }
        // Marcarel formulario como enviado exitosamente
        setEnviado(true);
    }; 

    //  ------------------- validaciones -----------------------------
    interface FormState {
        name: string;
        lastName: string;
        address: string;
        pais: string;
        email: string;
        phone: string;
        economicSituation: string;
        previousPetExperience: string;
        petAllergy: string;
        properHome: boolean;
        dailyPetTime: string;
        over18: boolean;
    }
        
    const [form, setForm] = useState<FormState>({
        name: "",
        lastName: "",
        address: "",
        pais: "",
        email: "",
        phone: "",
        economicSituation: "",
        previousPetExperience: "",
        petAllergy: "",
        properHome: false,
        dailyPetTime: "",
        over18: false,
    })

    const [error, setError] = useState<FormState>({
        name: "",
        lastName: "",
        address: "",
        pais: "",
        email: "",
        phone: "",
        economicSituation: "",
        previousPetExperience: "",
        petAllergy: "",
        properHome: false,
        dailyPetTime: "",
        over18: false,
    });

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const property = event.target.name
        const value = event.target.value
        if (property === 'petAllergy') { 
            setForm({ ...form, petAllergy: value }); 
          } else if (property === 'previousPetExperience') { 
            setForm({ ...form, previousPetExperience: value }); 
          } else {
            setForm({ ...form, [property]: value });
          }
        setError(validate({ ...form, [property]: value } as FormState))
        console.log(value)
    }

    const handlerChangeText = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
        setError(validate({ ...form, [property]: value } as FormState));
        console.log(value);
      };

    const validate = (input: FormState): FormState => {
        let error: FormState = {
            name: "",
            lastName: "",
            address: "",
            pais: "",
            email: "",
            phone: "",
            economicSituation: "",
            previousPetExperience: "",
            petAllergy: "",
            properHome: false,
            dailyPetTime: "",
            over18: false,
        }

        if(!input.name.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)) {
            error.name = "No se permiten numeros o caracteres especiales";
        } else error.name = "";
        
        const regexApellido: RegExp = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
        if(!input.lastName.match(regexApellido)) {
            error.lastName = "No se permiten numeros o caracteres especiales";
        } else error.lastName = "";
        
        if(!input.address.match(/^[a-zA-Z0-9,]+$/)) {
            error.address = "No se permiten caracteres especiales";
        } else error.address = "";
        
        if(!input.pais.match(/^[a-zA-Z0-9,]+$/)) {
            error.pais = "No se permiten caracteres especiales";
        } else error.pais = "";

        if(!input.email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)) {
            error.email = "formato esperado: ejemplo@hotmail.com";
        } else error.email = "";
        
        /* if(!input.phone.match(/^[0-9-]{11}$/)) {
            error.phone = "Formato esperado ejemplo: 22222-22222 . No se permiten caracteres especiales o letras";
        } else error.phone = ""; */
        
        if(!input.economicSituation.match(/^[a-zA-Z0-9() ,.]+$/)) {
            error.economicSituation = "No se permiten caracteres especiales";
        } else error.economicSituation = "";

        // if(!input.experienciaMascotas === true) {
        //     error.experienciaMascotas = "No se permiten caracteres especiales";
        // } else error.experienciaMascotas = "";

        if(!input.dailyPetTime.match(/^[a-zA-Z0-9() ,.]+$/)) {
            error.dailyPetTime = "No se permiten caracteres especiales";
        } else error.dailyPetTime = "";

        return error;
    }

    const handlerSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (error.name === null && error.lastName === null && error.address === null &&error.email === null && error.phone === null && error.economicSituation === null && error.dailyPetTime === null){
        (async function(){
            await FormAdoption.createForm(form)
            console.log(form);
        })()
        setForm({
            name: "",
            lastName: "",
            address: "",
            pais: "",
            email: "",
            phone: "",
            economicSituation: "",
            previousPetExperience: "",
            petAllergy: "",
            properHome: false,
            dailyPetTime: "",
            over18: false,
        })}
        else {alert("Completar los campos requeridos.")
        
    }
    }
    

    return (
        <div className='formulario-adopcion'>
            <h2>Formulario de Adopción</h2>
            {enviado ? (
                <p>Formulario enviado exitosamente. Nos pondremos en contacto contigo pronto.</p>
            ) : (
                <form className='form' /* onSubmit={handleSubmit} */>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="name" value={form.name} onChange={handlerChange}/>
                    {error.name && <span >{error.name}</span>} 

                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name='lastName'value={form.lastName} onChange={handlerChange}/>
                    {error.lastName && <span >{error.lastName}</span>}

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" name='address' value={form.address} onChange={handlerChange}/>
                    {error.address && <span >{error.address}</span>} 

                    <label htmlFor="pais">País: </label>
                    <input type="text" id="pais" name="pais" value={form.pais} onChange={handlerChange}/>
                    {error.pais && <span>{error.pais}</span>}

                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <FaGoogle />
                        </span>
                        <input type="email" id="email" name='email' value={form.email} onChange={handlerChange}/>
                        {error.email && <span >{error.email}</span>} 

                    </div>

                    <label htmlFor="numero-contacto">Número de contacto:</label>
                    <div className="input-group">{/* 
                        {obtenerCodigoArea()} */}
                        <input type="text" id="numero-contacto" placeholder="Número de contacto" name='phone' value={form.phone} onChange={handlerChange}/>
                        {/* {error.phone && <span >{error.phone}</span>}  */}
                    </div>

                    <label htmlFor="situacion-economica">Situación económica o estabilidad laboral:</label>
                    <textarea id="situacion-economica" name='economicSituation' value={form.economicSituation} onChange={handlerChangeText}
                    ></textarea> 
                    {error.economicSituation && <span >{error.economicSituation}</span>} 

                    <label htmlFor="experiencia-mascotas">¿Tienes experiencia previa con mascotas?</label>
                    <div className="radio-option">
                        <input type="radio" id="experience-si" name="previousPetExperience" value="si" checked={form.previousPetExperience === 'si'} onChange={handlerChange}/>
                        <label htmlFor="experience-si">Sí</label>
                          </div>
                            <div className="radio-option"> 
                        <input type="radio" id="experience-no" name="previousPetExperience" value="no" checked={form.previousPetExperience === 'no'} onChange={handlerChange}/>
                        <label htmlFor="experience-no">No</label>
                        </div>
                    {/* <select id="experiencia-mascotas" name='previousPetExperience' onChange={(e) => setExperienciaMascotas(e.target.value)}>
                        <option value="">Selecciona una opción</option>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select> */}

                    <label htmlFor="reaccion-alergica">¿Algún miembro de la familia tiene reacción alérgica a las mascotas?</label>
                        <div className="radio-option">
                        <input type="radio" id="reaccion-alergica-si" name="petAllergy" value="si" checked={form.petAllergy === 'si'} onChange={handlerChange}/>
                        <label htmlFor="reaccion-alergica-si">Sí</label>
                          </div>
                            <div className="radio-option"> 
                        <input type="radio" id="reaccion-alergica-no" name="petAllergy" value="no" checked={form.petAllergy === 'no'} onChange={handlerChange}/>
                        <label htmlFor="reaccion-alergica-no">No</label>
                        </div>
                   
                    <label htmlFor="hogar-adecuado">¿Cuentas con un hogar adecuado para la mascota?</label>
                        <div className="radio-option">
                    <input
                        type="checkbox"
                        id="hogar-adecuado"
                        checked={form.properHome}
                        onChange={(e) => setForm({ ...form, properHome: e.target.checked })}/>
                        </div>

                    <label htmlFor="tiempo-dedicado">¿Cuánto tiempo podrías dedicarle a la mascota diariamente?</label>
                    <input type="text" id="tiempo-dedicado" name='dailyPetTime' value={form.dailyPetTime} onChange={handlerChange}/>
                    {error.dailyPetTime && <span >{error.dailyPetTime}</span>}

                    <label>
                        
                        <input
                            type="checkbox"
                            checked={terminosCondiciones}
                            onChange={(e) => setTerminosCondiciones(e.target.checked)}
                        />
                        Acepto los términos y condiciones
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={form.over18}
                            onChange={(e) => setForm({ ...form, over18: e.target.checked })}
                        />
                        Declaro que soy mayor de 18 años
                    </label>

                    <button type="submit" onClick={handlerSubmit}>Enviar</button>
                </form>
            )} 
        </div>
    );
};

export default FormularioAdopcion;