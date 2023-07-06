import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import './HomeCliente.css';
import 'react-multi-carousel/lib/styles.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormularioAdopcion from '../formAdopcion/FormularioAdopcion';


const HomeCliente = () => {
  const welcomeMessage = 'Bienvenido a tu hogar de mascotas';

  const accountType = 'Cliente de mascota';

  const adoptedPet = {
    image: 'https://www.elblogdeyes.com/wp-content/uploads/2018/03/happy-young-woman-with-her-dog-in-the-summer-LSAJHKD.jpg',
    breed: 'Caniche',
    age: 2,
    petType: 'Perro',
    adoptionDate: '20/03/2007',
    status: 'sano',
  };

  const carouselPets = [
    {
      id: 1,
      image: 'https://www.eluniverso.com/resizer/a7NOVorxPIDXjiC3-ipw5g36UAI=/960x640/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/NULVDXAF55CHBGYG6XW5SSDU4E.jpg',
      name: 'Nombre de la mascota',
      breed: 'Raza de la mascota',
      age: 'Edad de la mascota',
      organization: 'Organización',
    },

    {
      id: 2,
      image: 'https://www.diainternacionalde.com/imagenes/dias-raros/enero/01-14_dia-internacional-vestir-mascota-2023.jpg',
      name: 'Nombre de la mascota',
      breed: 'Raza de la mascota',
      age: 'Edad de la mascota',
      organization: 'Organización',
    },
    
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJFBccEWuaqHTrnUSmdCzhOOCqI3zA9nHqQ&usqp=CAU',
      name: 'Nombre de la mascota',
      breed: 'Raza de la mascota',
      age: 'Edad de la mascota',
      organization: 'Organización',
    },


    
  ];

  const carouselArticles = [
    {
      id: 1,
      image: 'https://www.dd2.com.ar/image/cache/ML/MLA1193266493_0_4d0fc42c2e6aa1009976437a72758bdc-250x250.jpg',
      name: 'Nombre del artículo',
      size: 'Talle del artículo',
      price: 'Precio del artículo',
    },

    {
      id: 2,
      image: 'https://www.semana.com/resizer/awohQivhUz5vipjOZhno-o9S-b4=/arc-anglerfish-arc2-prod-semana/public/VJFOZVFBKVHW3L7Y4XESSND6GM.jpg',
      name: 'Nombre del artículo',
      size: 'Talle del artículo',
      price: 'Precio del artículo',
    },

    {
      id: 1,
      image: 'https://vetmarketportal.com.ar/uploads/noticias/5/20210423122931_acc1.jpg',
      name: 'Nombre del artículo',
      size: 'Talle del artículo',
      price: 'Precio del artículo',
    },

    {
      id: 1,
      image: 'https://st.depositphotos.com/1177973/2464/i/600/depositphotos_24648519-stock-photo-pet-accessories-isolated-on-white.jpg',
      name: 'Nombre del artículo',
      size: 'Talle del artículo',
      price: 'Precio del artículo',
    },
    
  ];

  const recentItems = [
    {
      id: 1,
      type: 'article',
      name: 'Artículo reciente 1',
      size: 'S',
      price: '$5',
      image: 'https://img.freepik.com/fotos-premium/accesorios-mascotas-aislados-blanco_392895-200221.jpg',
    },
    {
      id: 2,
      type: 'pet',
      name: 'Mascota reciente 2',
      breed: 'Raza reciente 2',
      age: '1 año',
      organization: 'Organización reciente 1',
      image: 'https://ae01.alicdn.com/kf/H967928a7fd2e4fc3821c71a25ac166eaI/Bola-de-comida-con-fugas-para-mascotas-vaso-de-juego-autom-tico-para-gatos-y-perros.jpg',
    },

    {
      id: 1,
      type: 'article',
      name: 'Artículo reciente 3',
      size: 'S',
      price: '$5',
      image: 'https://img.freepik.com/fotos-premium/accesorios-mascotas-aislados-blanco_392895-200221.jpg',
    },

    {
      id: 4,
      type: 'pet',
      name: 'Mascota reciente 4',
      breed: 'Raza reciente 4',
      age: '1 año',
      organization: 'Organización reciente 1',
      image: 'https://hips.hearstapps.com/hmg-prod/images/accesorios-para-mascotas-1560513612.jpg?crop=0.644xw:1.00xh;0.280xw,0&resize=1200:*',
    },
    
    // Más objetos de artículos o mascotas recientes
  ];

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h2>{welcomeMessage}</h2>
      </div>

      <div className="account-type">
        <p>Tipo de cuenta: {accountType}</p>
      </div>

      <div className="right-section">
        <div className="adopted-pet-card">
          <img src={adoptedPet.image} alt="Imagen de la mascota adoptada" />
          <p>Raza: {adoptedPet.breed}</p>
          <p>Edad: {adoptedPet.age}</p>
          <p>Tipo de mascota: {adoptedPet.petType}</p>
          <p>Estado: {adoptedPet.status}</p>
          <p>Fecha de adopción: {adoptedPet.adoptionDate}</p>
        </div>
      </div>

      <div className="center-section">
        <h3>Mascotas en adopción</h3>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt="Imagen de la mascota" />
              <p>Nombre: {pet.name}</p>
              <p>Raza: {pet.breed}</p>
              <p>Edad: {pet.age}</p>
              <p>Organización: {pet.organization}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="articles-section">
        <h3>Artículos nuevos</h3>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt="Imagen del artículo" />
              <p>Nombre: {article.name}</p>
              <p>Talle: {article.size}</p>
              <p>Precio: {article.price}</p>
              <button>Comprar</button>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="recent-items-section">
        <h3>Artículos y mascotas recientes</h3>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {recentItems.map((item) =>
            item.type === 'article' ? (
              <div key={item.id} className="recent-article-card">
                <img src={item.image} alt="Imagen del artículo" />
                <p>Nombre: {item.name}</p>
                <p>Talle: {item.size}</p>
                <p>Precio: {item.price}</p>
                <button>Comprar</button>
              </div>
            ) : (
              <div key={item.id} className="recent-pet-card">
                <img src={item.image} alt="Imagen de la mascota" />
                <p>Nombre: {item.name}</p>
                <p>Raza: {item.breed}</p>
                <p>Edad: {item.age}</p>
                <p>Organización: {item.organization}</p>
                  <div className="adopt-button">
                    <Link to="/formulario-adopcion">
                      <button>Adoptar</button>
                    </Link>
                  </div>
                  </div>
              
            )
          )}
          {mostrarFormulario && <FormularioAdopcion />}
        </Carousel>
      </div>

      <footer className="footer">
        <div className="contact">
          <p>Contactanos</p>
          {/* Agrega la información de contacto */}
        </div>
        <div className="social-media">
          <p>Redes sociales</p>
          <a href="https://www.instagram.com">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.whatsapp.com">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook className="social-icon" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2023 PetMatch</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeCliente;
