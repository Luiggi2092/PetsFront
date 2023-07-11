import React, { ChangeEvent, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './form.css'

const FormularioAdopcion = () => {
    // const [nombre, setNombre] = useState('');
    // const [apellido, setApellido] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [email, setEmail] = useState('');
    // const [numeroContacto, setNumeroContacto] = useState('');
    const [codigoPais, setCodigoPais] = useState('');
    // const [situacionEconomica, setSituacionEconomica] = useState('');
    const [experienciaMascotas, setExperienciaMascotas] = useState('');
    const [reaccionAlergica, setReaccionAlergica] = useState('');
    const [hogarAdecuado, setHogarAdecuado] = useState(false);
    // const [tiempoDedicado, setTiempoDedicado] = useState('');
    const [terminosCondiciones, setTerminosCondiciones] = useState(false);
    const [mayorEdad, setMayorEdad] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const obtenerCodigoArea = () => {
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
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validaciones
        if (!form.nombre || !form.apellido || !form.direccion || !form.email || !form.numeroContacto || !codigoPais || !form.situacionEconomica || !experienciaMascotas || !form.tiempoDedicado) {
            console.log("nombre: " + form.nombre, "di: " + form.direccion, " email " + form.email, " nume "+form.numeroContacto, " cod "+codigoPais," situa "+ form.situacionEconomica,"exp "+experienciaMascotas, "tiempo "+form.tiempoDedicado);
            
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        if (!terminosCondiciones) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }

        if (!mayorEdad) {
            alert('Debes ser mayor de 18 años para enviar el formulario.');
            return;
        }

        // Marcarel formulario como enviado exitosamente
        setEnviado(true);
    };

    //  ------------------- validaciones -----------------------------
    interface FormState {
        nombre: string;
        apellido: string;
        direccion: string;
        email: string;
        numeroContacto: string;
        codigoPais: string;
        situacionEconomica: string;
        // experienciaMascotas: string;
        tiempoDedicado: string;
    }
        
    const [form, setForm] = useState<FormState>({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        numeroContacto: "",
        codigoPais: "",
        situacionEconomica: "",
        // experienciaMascotas: "",
        tiempoDedicado: "",
    })

    const [error, setError] = useState<FormState>({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        numeroContacto: "",
        codigoPais: "",
        situacionEconomica: "",
        // experienciaMascotas: "",
        tiempoDedicado: "",
    });

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const property = event.target.name
        const value = event.target.value
        setForm({ ...form, [property]: value })
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
            nombre: "",
            apellido: "",
            direccion: "",
            email: "",
            numeroContacto: "",
            codigoPais: "",
            situacionEconomica: "",
            // experienciaMascotas: "",
            tiempoDedicado: "",
        }

        if(!input.nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)) {
            error.nombre = "No se permiten numeros o caracteres especiales";
        } else error.nombre = "";
        
        const regexApellido: RegExp = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
        if(!input.apellido.match(regexApellido)) {
            error.apellido = "No se permiten numeros o caracteres especiales";
        } else error.apellido = "";
        
        if(!input.direccion.match(/^[a-zA-Z0-9,]+$/)) {
            error.direccion = "No se permiten caracteres especiales";
        } else error.direccion = "";
        
        if(!input.email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)) {
            error.email = "formato esperado: ejemplo@hotmail.com";
        } else error.email = "";
        
        if(!input.numeroContacto.match(/^[0-9-]{11}$/)) {
            error.numeroContacto = "Formato esperado ejemplo: 22222-22222 . No se permiten caracteres especiales o letras";
        } else error.numeroContacto = "";
        
        if(!input.situacionEconomica.match(/^[a-zA-Z0-9() ,.]+$/)) {
            error.situacionEconomica = "No se permiten caracteres especiales";
        } else error.situacionEconomica = "";

        // if(!input.experienciaMascotas === true) {
        //     error.experienciaMascotas = "No se permiten caracteres especiales";
        // } else error.experienciaMascotas = "";

        if(!input.tiempoDedicado.match(/^[a-zA-Z0-9() ,.]+$/)) {
            error.tiempoDedicado = "No se permiten caracteres especiales";
        } else error.tiempoDedicado = "";

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
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handlerChange}
                    />
                    {error.nombre && <span >{error.nombre}</span>} 
                    {/* ^-Ejemplo no mas-^*/}

                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name='apellido'
                        value={form.apellido}
                        onChange={handlerChange}
                    />
                    {error.apellido && <span >{error.apellido}</span>}

                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name='direccion'
                        value={form.direccion}
                        onChange={handlerChange}
                    />
                    {error.direccion && <span >{error.direccion}</span>} 


                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <FaGoogle />
                        </span>
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
                        {obtenerCodigoArea()}
                        <input
                            type="text"
                            id="numero-contacto"
                            placeholder="Número de contacto"
                            name='numeroContacto'
                            value={form.numeroContacto}
                            onChange={handlerChange}
                        />
                        {error.numeroContacto && <span >{error.numeroContacto}</span>} 

                    </div>

                    <label htmlFor="situacion-economica">Situación económica o estabilidad laboral:</label>
                    <textarea
                        id="situacion-economica"
                        name='situacionEconomica'
                        value={form.situacionEconomica}
                        onChange={handlerChangeText}
                    ></textarea>
                    {error.situacionEconomica && <span >{error.situacionEconomica}</span>} 

                    <label htmlFor="experiencia-mascotas">¿Tienes experiencia previa con mascotas?</label>
                    <select
                        id="experiencia-mascotas"
                        value={experienciaMascotas}
                        onChange={(e) => setExperienciaMascotas(e.target.value)}
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
                            checked={reaccionAlergica === 'si'}
                            onChange={() => setReaccionAlergica('si')}
                        />
                        <label htmlFor="reaccion-alergica-si">Sí</label>
                          </div>
                            <div className="radio-option"> 
                        <input
                            type="radio"
                            id="reaccion-alergica-no"
                            name="reaccion-alergica"
                            value="no"
                            checked={reaccionAlergica === 'no'}
                            onChange={() => setReaccionAlergica('no')}
                        />
                        <label htmlFor="reaccion-alergica-no">No</label>
                   
                        </div>
                    <label htmlFor="hogar-adecuado">¿Cuentas con un hogar adecuado para la mascota?</label>
                        <div className="radio-option">
                    <input
                        type="checkbox"
                        id="hogar-adecuado"
                        checked={hogarAdecuado}
                        onChange={(e) => setHogarAdecuado(e.target.checked)}
                    />
                        </div>
                    <label htmlFor="tiempo-dedicado">¿Cuánto tiempo podrías dedicarle a la mascota diariamente?</label>
                    <input
                        type="text"
                        id="tiempo-dedicado"
                        name='tiempoDedicado'
                        value={form.tiempoDedicado}
                        onChange={handlerChange}
                    />
                    {error.tiempoDedicado && <span >{error.tiempoDedicado}</span>}

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
                            checked={mayorEdad}
                            onChange={(e) => setMayorEdad(e.target.checked)}
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