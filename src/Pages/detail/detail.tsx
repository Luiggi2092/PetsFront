import React from 'react';
import styles from './detail.module.css'
// import { Link } from 'react-router-dom';

interface PetDetailProps {
    pet: Pet;
}

interface Pet {
    id: string;
    name: string;
    type?: Type[];
    age: number;
    // breed: string;
    sterilization: boolean;
    vaccines?: Vaccine[];
    image?: string;
}

interface Type {
    id: string;
    type: string;
}

interface Vaccine {
    id: string;
    name: string;
}

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
    return (
        <><div className={styles.detailContainer}>
            <div className={styles.nameImage}>
                {pet.image && <img src={pet.image} alt={pet.name} />}
                <div className={styles.nameContainer}>
                    <h1>{pet.name}</h1>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <p> Edad: {pet.age}</p>
                    <p>Esterelización: {pet.sterilization ? 'Si' : 'No'}</p>
                    {pet.type && (
                        <div>
                            <h3>Especie:</h3>
                            {pet.type.map((type) => (
                                <p key={type.id}>{type.type}</p>
                            ))}
                        </div>
                    )}
                    {pet.vaccines && (
                        <div>
                            <h3>Vacunado:</h3>
                            {pet.vaccines.map((vaccine) => (
                                <p key={vaccine.id}>{vaccine.name}</p>
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.btns}>
                    <button>Donativo</button>
                    <button>Adoptar!</button>
                </div>
            </div>
        </div>
        <div className={styles.back}>
            <button>Back</button>
        </div>
        </>
    );
};

export default PetDetail