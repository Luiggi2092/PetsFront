import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ModalPet from '../../components/ModalPet/ModalPet';
import Pagination from '../../components/pagination/Pagination';
import { useDispatch,useSelector } from 'react-redux';
import { PetsService } from '../../services/PetsService';
import {getPets} from '../../redux/actions' 
import {Pet} from '../../interfaces/Pets'
import './home.css';

const Home: React.FC = () => {

 
  let Pets = useSelector((state:any)=> state.Pets);

  const dispatch = useDispatch();

  useEffect(()=>{
    (async function(){
     const response = await PetsService.getPets();
      dispatch(getPets(response.data));   
    })();
},[]) 



  const backgroundImage = 'https://s1.1zoom.me/big3/95/395959-svetik.jpg';

  const itemsPerPage = 6; // Cantidad de mascotas por página
  const totalPages = Math.ceil(Pets.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMolal,setOpenModal] = useState(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Pets.slice(startIndex, endIndex);
  };

  
  const handleModal = () => {
    setOpenModal(!openMolal);
 }


  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button onClick={handleModal}>NEW MASCOTA</button>
      <ModalPet openModal={openMolal} cambiarEstado={setOpenModal} />
      <div className="container">
        <h1 className="titulo">TU NUEVA MASCOTA</h1>
        <div className="pet-cards">
          {getPaginatedData().map((pet:Pet) => (
            <Card
              key={pet.id}
              id={pet.id}
              name={pet.name}
              age={pet.age}
              breed={pet.breed}
              image={pet.image}
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

