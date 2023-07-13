import React, { ChangeEvent, useState } from 'react';
import { useParams} from 'react-router-dom';
import { PetsService } from '../../../services/PetsService';

import './form.css'

const FormularioAdopcion = () => {
    // const [nombre, setNombre] = useState('');
    // const [apellido, setApellido] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [email, setEmail] = useState('');
    // const [numeroContacto, setNumeroContacto] = useState('');
    //const [codigoPais, setCodigoPais] = useState('');
    // const [situacionEconomica, setSituacionEconomica] = useState('');
    //const [experienciaMascotas, setExperienciaMascotas] = useState('');
    //const [reaccionAlergica, setReaccionAlergica] = useState('');
    //const [hogarAdecuado, setHogarAdecuado] = useState(false);
    // const [tiempoDedicado, setTiempoDedicado] = useState('');
    const [terminosCondiciones, setTerminosCondiciones] = useState(false);
    //const [mayorEdad, setMayorEdad] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const isToken:string = localStorage.getItem('idUsu') || "" ;

    const cleanedUUIDString = isToken.replace(/"/g, '');

    
    const {id} = useParams();

    console.log(id);
    console.log(isToken);
        
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("hola");
        // Validaciones
        if (!form.name || !form.lastName || !form.address || !form.email || !form.phone || !form.pais || !form.economicSituation || !form.previousPetExperience || !form.dailyPetTime) {
            console.log("nombre: " + form.name, "di: " + form.address, " email " + form.email, " nume "+form.phone, " cod "+ form.pais," situa "+ form.economicSituation,"exp "+form.previousPetExperience, "tiempo "+form.dailyPetTime);
            
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

        // Marcarel formulario como enviado exitosamente
        (async function () {

            const response = await PetsService.PostForm(form);
            console.log(response.data);
            
        })();
        setEnviado(true);

    };

    //  ------------------- validaciones -----------------------------
    interface FormState {
        name: string;
        lastName: string;
        address: string;
        email: string;
        phone: string;
        economicSituation: string;
        previousPetExperience: string;
        petAllergy:string;
        id:string;
        petId:string;
        dailyPetTime: string;
        properHome:boolean;
        over18:boolean;
        pais:string;


    }
        
    const [form, setForm] = useState<FormState>({
        name: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        economicSituation: "",
        previousPetExperience: "",
        petAllergy:"",
        id:cleanedUUIDString,
        petId:id || "",
        dailyPetTime: "",
        properHome:false,
        over18:false,
        pais:""
    })



    const [error, setError] = useState<FormState>({
        name: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        economicSituation: "",
        previousPetExperience: "",
        petAllergy:"",
        id:"",
        petId:"",
        dailyPetTime: "",
        properHome:false,
        over18:false,
        pais:""
    });

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const property = event.target.name
        const value = event.target.value
        setForm({ ...form, [property]: value })
        setError(validate({ ...form, [property]: value } as FormState))
        console.log(value)
    }

    // const handlerChangeText = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    //     const property = event.target.name;
    //     const value = event.target.value;
    //     setForm({ ...form, [property]: value });
    //     setError(validate({ ...form, [property]: value } as FormState));
    //     console.log(value);
    //   };

    const validate = (input: FormState): FormState => {
        let error: FormState = {
            name: "",
            lastName: "",
            address: "",
            email: "",
            phone: "",
            economicSituation: "",
            previousPetExperience: "",
            petAllergy:"",
            id:"",
            petId:"",
            dailyPetTime: "",
            properHome:false,
            over18:false,
            pais:""
        }

        if(!input.name.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)) {
            error.name = "No se permiten numeros o caracteres especiales";
        } else error.name = "";
        
        const regexApellido: RegExp = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
        if(!input.lastName.match(regexApellido)) {
            error.lastName = "No se permiten numeros o caracteres especiales";
        } else error.lastName = "";
        
        // if(!input.address.match(/^[a-zA-Z0-9,]+$/)) {
        //     error.address = "No se permiten caracteres especiales";
        // } else error.address = "";
        
        // if(!input.email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)) {
        //     error.email = "formato esperado: ejemplo@hotmail.com";
        // } else error.email = "";
        
        // if(!input.phone.match(/^[0-9-]{11}$/)) {
        //     error.phone = "Formato esperado ejemplo: 22222-22222 . No se permiten caracteres especiales o letras";
        // } else error.phone = "";
        
        // if(!input.economicSituation.match(/^[a-zA-Z0-9() ,.]+$/)) {
        //     error.economicSituation = "No se permiten caracteres especiales";
        // } else error.economicSituation = "";

        // if(!input.experienciaMascotas === true) {
        //     error.experienciaMascotas = "No se permiten caracteres especiales";
        // } else error.experienciaMascotas = "";

        // if(!input.dailyPetTime.match(/^[a-zA-Z0-9() ,.]+$/)) {
        //     error.dailyPetTime = "No se permiten caracteres especiales";
        // } else error.dailyPetTime = "";

        return error;
    }

    return (
        <div className='formulario-adopcion'>
            <h2>Formulario de Adopción</h2>
            {enviado ? (
                <p>Formulario enviado exitosamente. Nos pondremos en contacto contigo pronto.</p>
            ) : (
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({...form,name:e.target.value})}
                    />
                    {error.name && <span >{error.name}</span>} 
                    {/* ^-Ejemplo no mas-^*/}

                    <label htmlFor="lastName">Apellido:</label>
                    <input
                        type="text"
                        id="lastName"
                        name='lastName'
                        value={form.lastName}
                        onChange={(e) => setForm({...form,lastName:e.target.value})}
                    />
                    {error.lastName && <span >{error.lastName}</span>}

                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name='address'
                        value={form.address}
                        onChange={(e) => setForm({...form,address:e.target.value})}
                    />
                    {error.address && <span >{error.address}</span>} 
                    
                    <label htmlFor="pais">Pais :</label>
                    <input
                        type="text"
                        id="pais"
                        name='pais'
                        value={form.pais}
                        onChange={(e) => setForm({...form,pais:e.target.value})}
                    />

                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={form.email}
                            onChange={handlerChange}
                        />
                        {error.email && <span >{error.email}</span>} 

                    </div>

                    <label htmlFor="numero-contacto">Número de contacto:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="numero-contacto"
                            placeholder="Número de contacto"
                            name='numeroContacto'
                            value={form.phone}
                            onChange={(e) => setForm({...form,phone:e.target.value})}
                        />
                        {error.phone && <span >{error.phone}</span>} 

                    </div>

                    <label htmlFor="situacion-economica">Situación económica o estabilidad laboral:</label>
                    <textarea
                        id="situacion-economica"
                        name='situacionEconomica'
                        value={form.economicSituation}
                        onChange={(e) => setForm({...form,economicSituation:e.target.value})}
                    ></textarea>
                    {error.economicSituation && <span >{error.economicSituation}</span>} 

                    <label htmlFor="experiencia-mascotas">¿Tienes experiencia previa con mascotas?</label>
                    <select
                        id="experiencia-mascotas"
                        value={form.previousPetExperience}
                        onChange={(e) => setForm({...form,previousPetExperience:e.target.value})}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>

                    <label htmlFor="reaccion-alergica">¿Algún miembro de la familia tiene reacción alérgica a las mascotas?</label>
                        <div className="radio-option">
                        <input
                            type="radio"
                            id="reaccion-alergica-si"
                            name="reaccion-alergica"
                            value="si"
                            checked={form.petAllergy === 'si'}
                            onChange={() => setForm({...form,petAllergy:'si'})}
                        />
                        <label htmlFor="reaccion-alergica-si">Sí</label>
                          </div>
                            <div className="radio-option"> 
                        <input
                            type="radio"
                            id="reaccion-alergica-no"
                            name="reaccion-alergica"
                            value="no"
                            checked={form.petAllergy === 'no'}
                            onChange={() => setForm({...form,petAllergy:'no'})}
                        />
                        <label htmlFor="reaccion-alergica-no">No</label>
                   
                        </div>
                    <label htmlFor="hogar-adecuado">¿Cuentas con un hogar adecuado para la mascota?</label>
                        <div className="radio-option">
                    <input
                        type="checkbox"
                        id="hogar-adecuado"
                        checked={form.properHome}
                        onChange={(e) => setForm({...form,properHome:e.target.checked})}
                    />
                        </div>
                    <label htmlFor="dailyPetTime">¿Cuánto tiempo podrías dedicarle a la mascota diariamente?</label>
                    <input
                        type="text"
                        id="dailyPetTime"
                        name='dailyPetTime'
                        value={form.dailyPetTime}
                        onChange={(e) => setForm({...form,dailyPetTime:e.target.value})}
                    />
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
                            onChange={(e) => setForm({...form,over18:e.target.checked})}
                        />
                        Declaro que soy mayor de 18 años
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
};

export default FormularioAdopcion;