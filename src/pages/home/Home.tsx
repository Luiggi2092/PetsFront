import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Pagination from '../../components/pagination/Pagination';
import './home.css';

const Home: React.FC = () => {
  const petData = [
    {
      id: 1,
      name: 'Mascota 1',
      age: 3,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxVqxSoEyhMig6_qMuZOTPdNyiFdwqAlV9AtMxiENV8gzctx1kG8eAGsnc3cXLVSfu5E&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DhvIXDzGzjCDpvYbEqKlsQK3hD_oUooe8ycK8KEWimJd1vX_9YpTAl24E6RhooimmU0&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmymPXsPeA_3GsuAZe6w_UcGQrzmcGbNyRhQiwUQisq1i2Zl4n-ou_Jj3dWWnYtkMma6o&usqp=CAU', '/images/luna3.jpg'],
    },
    {
      id: 2,
      name: 'Mascota 2',
      age: 3,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWebRiHdexO8-H_iTgHbBRDM-d_G4wwZzkw&usqp=CAU', 'imagen5.jpg', 'imagen6.jpg'],
    },

    {
      id: 3,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0EcOoSfxLC_YYA2skLEyvAtVNPI6vbtQD4cna02J047W1MbDM7wffN-LcZO_uYLzlg&usqp=CAU', '/images/luna2.jpg', 'imagen6.jpg'],
    },

    {
      id: 4,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CwlhEphFrg4Ttt0l5cKnVR9ntQqjjzeqIg&usqp=CAU', 'imagen5.jpg', 'imagen6.jpg'],
    },

    {
      id: 5,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CwlhEphFrg4Ttt0l5cKnVR9ntQqjjzeqIg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE_Wy8wtSb8Urb1caSOZK1qlBLjWInLhTCg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0etEXFOgTkjTpDZUp_sPfQQbo4CZ3gBz8jxPdMkZjDUcgTdBO8Cm101TtYK4dSMdwwg&usqp=CAU'],
    },

    {
      id: 6,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gYEsaRPfz6y9wBd8gUNdELX4J0Vq6Me0KxtDCOO4JMjD7xvo7iKejksuU2tT-h9mbdU&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsN0EVqvzS6Oy_wPx8xRXuP-uVbT8GFuCfsIVzXorzZCJkify53owAQqoa7EkCb_92SI&usqp=CAU'],
    },

    {
      id: 7,
      name: 'Mascota 1',
      age: 3,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxVqxSoEyhMig6_qMuZOTPdNyiFdwqAlV9AtMxiENV8gzctx1kG8eAGsnc3cXLVSfu5E&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DhvIXDzGzjCDpvYbEqKlsQK3hD_oUooe8ycK8KEWimJd1vX_9YpTAl24E6RhooimmU0&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmymPXsPeA_3GsuAZe6w_UcGQrzmcGbNyRhQiwUQisq1i2Zl4n-ou_Jj3dWWnYtkMma6o&usqp=CAU', '/images/luna3.jpg'],
    },
    {
      id: 8,
      name: 'Mascota 2',
      age: 3,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWebRiHdexO8-H_iTgHbBRDM-d_G4wwZzkw&usqp=CAU', 'imagen5.jpg', 'imagen6.jpg'],
    },

    {
      id: 9,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0EcOoSfxLC_YYA2skLEyvAtVNPI6vbtQD4cna02J047W1MbDM7wffN-LcZO_uYLzlg&usqp=CAU', '/images/luna2.jpg', 'imagen6.jpg'],
    },

    {
      id: 10,
      name: 'Mascota 2',
      age: 2,
      certified: true,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CwlhEphFrg4Ttt0l5cKnVR9ntQqjjzeqIg&usqp=CAU', 'imagen5.jpg', 'imagen6.jpg'],
    },
    // Agrega más objetos de mascotas si lo deseas
  ];

  const backgroundImage = 'https://s1.1zoom.me/big3/95/395959-svetik.jpg';

  const itemsPerPage = 6; // Cantidad de mascotas por página
  const totalPages = Math.ceil(petData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return petData.slice(startIndex, endIndex);
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="titulo">TU NUEVA MASCOTA</h1>
        <div className="pet-cards">
          {getPaginatedData().map((pet) => (
            <Card
              key={pet.id}
              name={pet.name}
              age={pet.age}
              certified={pet.certified}
              images={pet.images}
            />
          ))}
        </div>

        <div className="sections">
          <div className="section">
            <button className="button">
              <Link to="/servicios">Servicios</Link>
            </button>
          </div>

          <div className="section">
            <button className="button">
              <Link to="/proveedores">Proveedores</Link>
            </button>
          </div>

          <div className="section">
            <button className="button">
              <Link to="/organizaciones">Organizaciones</Link>
            </button>
          </div>

          <div className="section">
            <button className="button">
              <Link to="/otro">Algo mas</Link>
            </button>
          </div>
        </div>
<div className='pagination'>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        </div>
      </div>
    </div>
  );
};

export default Home;

