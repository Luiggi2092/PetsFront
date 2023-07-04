
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { quienesSomos, nuestrosServ, sinFondoNegro, sinFondoBlanco, Amberlis, John, Luis, Ricardo, Matheus, Magali, David } from './imagenes/index';
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


    const handleMouseEnter = (nombre:string) => {

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
                    <p className={style.p}>Somos un equipo de desarrolladores comprometidos en conectar a los animales en adopción con personas que desean brindarles un hogar amoroso. Nuestra pasión por los animales nos impulsa a crear una plataforma fácil de usar y segura para facilitar la adopción y promover el bienestar de los animales en necesidad.</p>
                </div>)}
                {mostrarDescripcion2 && (<div id="descripción2" className={`${style.descripción} ${style.show}`}>
                    <p className={style.p}>Ofrecemos una amplia gama de servicios relacionados con la adopción y cuidado de mascotas. Desde la búsqueda y selección de tu compañero peludo ideal, hasta la asesoría y recursos para garantizar su bienestar a largo plazo. Nuestro objetivo es brindarte el apoyo necesario para que puedas disfrutar de una relación feliz y saludable con tu mascota.</p>
                </div>)}
            </div>

            <div className={style.tercerDiv}>
                <h2 className={style.titulo}>Nuestro equipo</h2>
                <div className={style.equipo}>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'Amberlis' ? Amberlis : sinFondoBlanco}
                            alt="Foto de Amberlis"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('Amberlis')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>Amberlis Laya Madera</h3>
                            <p className={style.puesto}>Desarrolladora Frontend</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/amberlis-laya-m" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+5491122781197" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/soyamberlis/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'Magali' ? Magali : sinFondoBlanco}
                            alt="Foto de Magali"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('Magali')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>Magali Martin</h3>
                            <p className={style.puesto}>Diseñadora Frontend</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/magali-alejandra-martin/" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+5493492226051" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/magali_martin/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'John' ? John : sinFondoBlanco}
                            alt="Foto de John"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('John')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>John Rivera</h3>
                            <p className={style.puesto}>Desarrollador Backend</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/john-edward-rivera-naranjo-5a5031220" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+573167064670" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/jhon_rivera/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'Luis' ? Luis : sinFondoBlanco}
                            alt="Foto de Luis"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('Luis')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>Luis Seminario Lopez</h3>
                            <p className={style.puesto}>Desarrollador Full Stack</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/luis-seminario-lopez-93454668" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+51947133008" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/luis_seminario/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'Ricardo' ? Ricardo : sinFondoBlanco}
                            alt="Foto de Ricardo"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('Ricardo')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>Ricardo Diaz</h3>
                            <p className={style.puesto}>Desarrollador Full Stack</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/ricardo-dionel-diaz-1b6802236" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+5493888542608" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/ricardo_diaz/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'Matheus' ? Matheus : sinFondoBlanco}
                            alt="Foto de Matheus"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('Matheus')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>Matheus Melo</h3>
                            <p className={style.puesto}>Desarrollador Frontend</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/matheus-melo" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+5493446379556" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/matheus_melo/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.miembro}>
                        <img
                            src={hoveredImage === 'David' ? David : sinFondoBlanco}
                            alt="Foto de David"
                            className={style.fotoMiembro}
                            onMouseEnter={() => handleMouseEnter('David')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className={style.informacion}>
                            <h3 className={style.nombre}>David Hernández</h3>
                            <p className={style.puesto}>Desarrollador Backend</p>
                            <div className={style.redes}>
                                <a href="https://www.linkedin.com/in/reydavid1/" target="_blank"><i className="fab fa-linkedin icono-red"></i></a>
                                <a href="https://wa.me/+522227824943" target="_blank"><i className="fab fa-whatsapp icono-red"></i></a>
                                <a href="https://www.instagram.com/davidp_tiburcio/" target="_blank"><i className="fab fa-instagram icono-red"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerc}>
            <div className={style.cuartoDiv}>
                <h2 className={style.titulo1}>¡Contáctanos!</h2>
                <p className={style.p}>Si tienes alguna pregunta, sugerencia o simplemente quieres decir adoptar, no dudes en ponerte en contacto con nosotros.</p>
                <Link to="/contacto" className={style.botonContacto}>
                    Contacto
                </Link>
            </div>

            <footer className={style.footer}>
                <div className={style.links}>
                    <Link to="/iniciarSesion">Iniciar sesión</Link>
                    <Link to="/registrarme">Registrarme</Link>
                    <Link to="/PetShop">Productos</Link>
                    <Link to="/donar">Quiero donar</Link>
                </div>
                <p className={style.footerTexto}>© 2023 PetMatch. Todos los derechos reservados.</p>
            </footer>
            </div>
        </div>
    );
};

export default Landing;

