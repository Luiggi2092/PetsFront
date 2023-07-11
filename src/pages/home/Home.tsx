import React, { useState,useEffect } from 'react';
import Card from '../../components/Card/Card';
import ModalPet from '../../components/ModalPet/ModalPet';
import Pagination from '../../components/pagination/Pagination';
import { useDispatch,useSelector } from 'react-redux';
import { PetsService } from '../../services/PetsService';
import {getPets,getTypesPet} from '../../redux/actions' 
import {Pet,TypePet} from '../../interfaces/Pets'
import './home.css';

const Home: React.FC = () => {

 const [filtros, setFiltros] = useState<any>({
      breed: "",
      PetTypeId:"",
      age:"",
  });
 
  let Pets = useSelector((state:any)=> state.Pets);
  let TypePets = useSelector((state:any)=> state.TypePet);
 

  const dispatch = useDispatch();

  useEffect(()=>{
    (async function(){
     const response = await PetsService.getPets();
      dispatch(getPets(response.data));   
    })();
    (async function(){
      const response = await PetsService.getPetsTypes();
       dispatch(getTypesPet(response.data));   
     })();
    
     
},[])
   

   useEffect(()=> {
    (async function(){
      const response = await PetsService.getPets();
       dispatch(getPets(response.data)); 
       const aplyFil = applyAllFilters(response.data,filtros);
       console.log("filtros pet", aplyFil,filtros);
       dispatch(getPets(applyAllFilters(response.data,filtros)))  
     })();
     



   },[filtros])




  const backgroundImage = 'https://s1.1zoom.me/big3/95/395959-svetik.jpg';

  const itemsPerPage = 6; // Cantidad de mascotas por página
  const totalPages = Math.ceil(Pets.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMolal,setOpenModal] = useState(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleType = (event: React.ChangeEvent<HTMLSelectElement>)=>{
   
    setFiltros({...filtros,PetTypeId:event.target.value})
 
  }

  const handleVacu = (event: React.ChangeEvent<HTMLInputElement>)=> {
      setFiltros({...filtros,age: parseInt(event.target.value)}) 
  }

  const handleRaza = (event: React.ChangeEvent<HTMLInputElement>)=> {
      
    setFiltros({...filtros,breed:event.target.value})

  }


  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Pets.slice(startIndex, endIndex);
  };
 
  const handleModal = () => {
    setOpenModal(!openMolal);
 }

  
 function applyAllFilters(arrayAllPets:Pet[],filters:Pet): Pet[] {
   return arrayAllPets.filter(pet=> {
     let razaMatch = true;
     let AgeMatch = true;
     let typeMath  = true;


     if(filters.PetTypeId !=="0" &&
        filters.PetTypeId){
          typeMath = pet.PetTypeId === filters.PetTypeId;
        }
     
     if(filters.breed){
          razaMatch = pet.breed.toLowerCase().includes(filters.breed.toLowerCase());
     }
     
     if(filters.age){
       
      AgeMatch =  pet.age === filters.age;
                 
        } 
    
     return typeMath && razaMatch && AgeMatch;
     

   })

    
 }

 



  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button onClick={handleModal}>NEW MASCOTA</button>
      <div className="sections">
      <div className="section">
            <button className="button">
              <label className='subtitulos'>Animal :</label>
              <select onChange={handleType}>
                <option value="0">Seleccione :</option>
                {TypePets.map((e:TypePet,index:any)=>{
                   return <option key={index} value={e.id}>{e.type}</option>
                
                })}
                
              </select>
            </button>
          </div>
          

          <div className="section">
            <button className="button">
              <label className='subtitulos'>Raza :</label>
              <input type='text' onChange={handleRaza}/>
            </button>
          </div>

          <div className="section">
            <button className="button">
              <label className='subtitulos'>Age :</label>
                <input type='text' onChange={handleVacu}/>
            </button>
          </div>
        </div>
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

