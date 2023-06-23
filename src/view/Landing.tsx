import { useNavigate } from 'react-router-dom'
import iconoPatita from './iconoPatita.png'
import sinFondoNegro from './sinfondonegro.png'
import sinFondoBlanco from './sinfondoblanco.png'
import fondo from './landing.jpg'
import style from './Landing.module.css'

const Landing = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
       navigate("/home")
    }

    return (
        <div className={style.contain}>
            <div className={style.primerDiv}>
                    <img src={fondo} className={style.fondo}/>
                    <img src={sinFondoNegro} alt="logo" className={style.logo}/>
                <button onClick={clickHandler} className={style.boton}>
                    <h1>¡Haz match!</h1>
                    <h2>Con tu nueva mascota</h2>
                </button>
                    <img src={iconoPatita} alt="icono patita" className={style.icono}/>
            </div>

            <div className={style.segundoDiv}>
                <div id="circulo" className={style.circulo}>¿Quienes somos?</div>
                <div id="descripción" className={style.descripción}>
                    <p>Somos un equipo de desarrolladores comprometidos en conectar a los animales en adopción con personas que desean brindarles un hogar amoroso. Nuestra pasión por los animales nos impulsa a crear una plataforma fácil de usar y segura para facilitar la adopción y promover el bienestar de las mascotas. Estamos emocionados de tenerlos como parte de nuestra comunidad. ¡Únete a nosotros en esta maravillosa aventura!</p>
                </div>
                <div id="circulo" className={style.circulo}>Nuestros servicios </div>
                <div id="descripción" className={style.descripción}>
                    <p>Conectamos a personas interesadas en adoptar perros y gatos con organizaciones que tienen animales disponibles para adopción, facilitando un proceso sencillo y seguro.</p>
                    <p>Proveemos un espacio donde proveedores pueden exhibir y vender productos relacionados con el cuidado de animales, brindando a los usuarios acceso a una amplia gama de opciones para satisfacer las necesidades de sus mascotas.</p>
                    <p>Ofrecemos un sistema de donaciones para apoyar a las organizaciones registradas, permitiendo a las personas contribuir directamente al cuidado y bienestar de los animales necesitados.</p>
                </div>
            </div>
            <div className={style.tercerDiv}>
                <h1>Grupo</h1>
                <img src={sinFondoBlanco} alt="logo" className={style.logo}/>
                <img src="" alt="Foto Magali" />
                <img src="" alt="Foto Amerlis" />
                <img src="" alt="Foto John" />
                <img src="" alt="Foto Luis" />
                <img src="" alt="Foto David" />
                <img src="" alt="Foto Nelson" />
                <img src="" alt="Foto Matheus" />
                <img src="" alt="Foto Ricardo" />
            </div>
        </div> 
    )
}

export default Landing