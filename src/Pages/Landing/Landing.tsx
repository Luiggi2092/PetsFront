import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { quienesSomos, nuestrosServ, sinFondoNegro, sinFondoBlanco, Amberlis, John, Luis, Ricardo, Matheus, Magali, Nelson, David } from './imagenes/index';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import fondo from './imagenes/landing.jpg';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/home");
    };

    const [mostrarDescripcion1, setMostrarDescripcion1] = useState(false);
    const [mostrarDescripcion2, setMostrarDescripcion2] = useState(false);
    const handleMouseEnter1 = () => { setMostrarDescripcion1(true) };
    const handleMouseLeave1 = () => { setMostrarDescripcion1(false) };
    const handleMouseEnter2 = () => { setMostrarDescripcion2(true) };
    const handleMouseLeave2 = () => { setMostrarDescripcion2(false) };

    const [hoveredImage, setHoveredImage] = useState('');

    const handleMouseEnter = (nombre: string) => {
        setHoveredImage(nombre);
    };

    const handleMouseLeave = () => {
        setHoveredImage('');
    };

    return (
        <div className={style.contain}>
            <div className={style.primerDiv}>
                <img src={fondo} className={style.fondo} />
                <img src={sinFondoNegro} alt="logo" className={style.logo} />
                <button onClick={clickHandler} className={style.boton}>
                    <h1>¡Haz match!</h1>
                    <h2>Con tu nueva mascota</h2>
                </button>
                {/* <img src={iconoPatita} alt="icono patita" className={style.icono} /> */}
            </div>

            <div className={style.segundoDiv}>
                <div id="circulo1" className={style.circulo1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <img
                        src={quienesSomos}
                        alt="Imagen del círculo 1"
                        className={style.imagenCirculo}
                    />
                    <span className={style.textoCirculo}>¿Quiénes somos?</span>
                </div>
                <div id="circulo2" className={style.circulo2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                    <img
                        src={nuestrosServ}
                        alt="Imagen del círculo 2"
                        className={style.imagenCirculo} 
                    />
                    <span className={style.textoCirculo}>Nuestros servicios</span>
                </div>
            </div>

            <div className={style.segundoDivSub}>
                {mostrarDescripcion1 && (<div id="descripción1" className={`${style.descripción} ${style.show}`}>
                    <p className={style.p}>Somos un equipo de desarrolladores comprometidos en conectar a los animales en adopción con personas que desean brindarles un hogar amoroso. Nuestra pasión por los animales nos impulsa a crear una plataforma fácil de usar y segura para facilitar la adopción y promover el bienestar de las mascotas. Estamos emocionados de tenerlos como parte de nuestra comunidad. ¡Únete a nosotros en esta maravillosa aventura!</p>
                </div>)}

                {mostrarDescripcion2 && (<div id="descripción2" className={`${style.descripción} ${style.show}`}>
                    <ul>
                        <li className={style.p}>Conectamos a personas interesadas en adoptar perros y gatos con organizaciones que tienen animales disponibles para adopción, facilitando un proceso sencillo y seguro.</li>
                        <li className={style.p}>Proveemos un espacio donde proveedores pueden exhibir y vender productos relacionados con el cuidado de animales, brindando a los usuarios acceso a una amplia gama de opciones para satisfacer las necesidades de sus mascotas.</li>
                        <li className={style.p}>Ofrecemos un sistema de donaciones para apoyar a las organizaciones registradas, permitiendo a las personas contribuir directamente al cuidado y bienestar de los animales necesitados.</li>
                    </ul>
                </div>)}
            </div>
            <div className={style.tercerDiv}>
                <div className={style.tercerD}>
                    <div className={style.tercerDivSub}>
                        <h1 className={style.h1}>Developers PetMatch</h1>
                        {/* <img src={sinFondoBlanco} alt="logo" className={style.logo} /> */}
                    </div>
                </div>
                <div className={style.tercerDivSub1}>
                        <img
                            src={Amberlis}
                            alt="Foto Amerlis"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Amberlis Laya')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Amberlis Laya' ? 'Amberlis Laya' : ''}
                        />
                        <img
                            src={Magali}
                            alt="Foto Magali"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Magali Martín')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Magali Martín' ? 'Magali Martín' : ''}
                        />
                        <img
                            src={John}
                            alt="Foto John"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('John Rivera')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'John Rivera' ? 'John Rivera' : ''}
                        />
                        <img
                            src={Luis}
                            alt="Foto Luis"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Luis Seminario')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Luis Seminario' ? 'Luis Seminario' : ''}
                        />
                    
                     <img
                            src={David}
                            alt="Foto David"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('David Perez')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'David Perez' ? 'David Perez' : ''}
                        />
                        <img
                            src={Nelson}
                            alt="Foto Nelson"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Nelson Ortega')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Nelson Ortega' ? 'Nelson Ortega' : ''}
                        />
                        <img
                            src={Matheus}
                            alt="Foto Matheus"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Matheus Alves')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Matheus Alves' ? 'Matheus Alves' : ''}
                        />
                        <img
                            src={Ricardo}
                            alt="Foto Ricardo"
                            className={style.imagen}
                            onMouseEnter={() => handleMouseEnter('Ricardo Diaz')}
                            onMouseLeave={handleMouseLeave}
                            title={hoveredImage === 'Ricardo Diaz' ? 'Ricardo Diaz' : ''}
                        />
                    
                </div>
            </div>
            <div className={style.cuartoDiv}>
                <img src={sinFondoBlanco} alt="logo" className={style.logo4} />
                <div className={style.contacto}>
                    <div className={style.h1D}>
                        <h2>Contacto</h2>
                    </div>
                </div>
                <div className={style.contacto2}>
                    <div className={style.detcont}>
                        <p>
                            Amberlis Laya M
                            <a href="https://www.instagram.com/soyamberlis/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/amberlis-laya-m" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+5491122781197" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Magali A. Martin
                            <a href="https://www.instagram.com/magali_martin/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/magali-alejandra-martin/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+5493492226051" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Jhon E. Rivera Naranjo
                            <a href="https://www.instagram.com/jhon_rivera/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/john-edward-rivera-naranjo-5a5031220" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+573167064670" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Luis F. Seminario Lopez
                            <a href="https://www.instagram.com/luis_seminario/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/luis-seminario-lopez-93454668" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+51947133008" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            David Perez Tiburcio
                            <a href="https://www.instagram.com/davidp_tiburcio/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/reydavid1/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+522227824943" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Nelson Ortega Beltrán
                            <a href="https://www.instagram.com/nelson_ortega/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/nelortegab/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+573223071344" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Matheus Alves Melo
                            <a href="https://www.instagram.com/matheus_melo/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/matheus-melo" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+5493446379556" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                        <p>
                            Ricardo Dionel Diaz
                            <a href="https://www.instagram.com/ricardo_diaz/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href=" https://www.linkedin.com/in/ricardo-dionel-diaz-1b6802236" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/+5493888542608" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </p>
                    </div>

                    <div className={style.contacto3}>
                        <div className={style.links}>
                            <Link to="/inicarSesión">Inicar sesión</Link>
                            <Link to="/registrarme">Registrarme</Link>
                            <Link to="/PetShop">Productos</Link>
                            <Link to="/donar">Quiero donar</Link>
                        </div>
                    </div>
                    <div className={style.copy}>
                        <h1 className={style.h1copy}>© Copyright 2023 , PetMatch.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
