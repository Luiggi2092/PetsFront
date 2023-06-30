import {DogsItems} from '../../data/indextb';
import React from 'react';
import styles from './detail.module.css'
import { useParams,Link } from 'react-router-dom';





const PetDetail: React.FC = () => {


    const {id} = useParams();

    console.log(id);


       const pet=[];
       const petId= DogsItems.filter(e=> e.id === Number(id));     
       pet.push({
          id: petId[0].id,
          image: petId[0].image,
          name : petId[0].title,
          age: petId[0].age,
          sterilization:petId[0].sterilization,
          type: petId[0].type.map(e=> e.type),
          vaccines: petId[0].vaccines.map(e=> e.name)
       });
     
   



    return (
        <>
        
        <div className={styles.detailContainer}>
            <div className={styles.nameImage}>
                <img src={pet[0].image} alt={pet[0].name}/>
                <div className={styles.nameContainer}>
                    <h1>{pet[0].name}</h1>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <p> Edad: {pet[0].age}</p>
                    <p>Esterelización: {petId[0].sterilization ? 'Si' : 'No'}</p>
                    
                        <div>
                            <h3>Especie:</h3>
                            <p>{pet[0].type}</p>
                        </div>
                    
                        <div>
                            <h3>Vacunado:</h3>
                            <p>{pet[0].vaccines}</p>
                        </div>
                </div>
                <div className={styles.btns}>
                    <button>Donativo</button>
                    <button>Adoptar!</button>
                </div>
            </div>
        </div>
        <Link to={"/home"}>
        <div className={styles.back}>
            <button>Back</button>
        </div>
        </Link>
        </>
    );
};

export default PetDetail