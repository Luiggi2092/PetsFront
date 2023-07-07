import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './form.css'

const FormularioAdopcion = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');
    const [codigoPais, setCodigoPais] = useState('');
    const [situacionEconomica, setSituacionEconomica] = useState('');
    const [experienciaMascotas, setExperienciaMascotas] = useState('');
    const [reaccionAlergica, setReaccionAlergica] = useState('');
    const [hogarAdecuado, setHogarAdecuado] = useState(false);
    const [tiempoDedicado, setTiempoDedicado] = useState('');
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
        if (!nombre || !apellido || !direccion || !email || !numeroContacto || !codigoPais || !situacionEconomica || !experienciaMascotas || !tiempoDedicado) {
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
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />

                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />

                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <FaGoogle />
                        </span>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <label htmlFor="numero-contacto">Número de contacto:</label>
                    <div className="input-group">
                        {obtenerCodigoArea()}
                        <input
                            type="text"
                            id="numero-contacto"
                            placeholder="Número de contacto"
                            value={numeroContacto}
                            onChange={(e) => setNumeroContacto(e.target.value)}
                        />
                    </div>

                    <label htmlFor="situacion-economica">Situación económica o estabilidad laboral:</label>
                    <textarea
                        id="situacion-economica"
                        value={situacionEconomica}
                        onChange={(e) => setSituacionEconomica(e.target.value)}
                    ></textarea>

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
                        value={tiempoDedicado}
                        onChange={(e) => setTiempoDedicado(e.target.value)}
                    />

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