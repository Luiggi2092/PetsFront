import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import './HomeCliente.css';
import 'react-multi-carousel/lib/styles.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';



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

  
 
  return (
    <>
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
        {/* <Carousel
          //additionalTransfrom={1}
          //arrows
          //autoPlaySpeed={3000}
          centerMode={false}
          className=""
          //containerClass="carousel-container"
          //dotListClass=""
          //draggable
          //focusOnSelect={false}
          //infinite={true}
          //itemClass=""
          //keyBoardControl
          //minimumTouchDrag={80}
          //renderButtonGroupOutside={false}
          //renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 5,
              partialVisibilityGutter: 20
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
          slidesToSlide={4}
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
        </Carousel> */}
      </div>

      <div className="articles-section">
        <h3>Artículos nuevos</h3>
        {/* <Carousel
          additionalTransfrom={1}
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
              items: 5,
              partialVisibilityGutter: 20
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
          slidesToSlide={4}
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
        </Carousel> */}
      </div>

      <div className="recent-items-section">
        <h3>Artículos y mascotas recientes</h3>
        {/* <Carousel
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
              items: 5,
              partialVisibilityGutter: 20,
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
          slidesToSlide={4}
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
        </Carousel> */}
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
    </>
  );
};

export default HomeCliente;