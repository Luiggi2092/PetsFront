import React from 'react';
import { getPetsid } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import styles from './detail.module.css'
import { useParams, Link } from 'react-router-dom';
import { PetsService } from '../../services/PetsService';

const PetDetail: React.FC = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const Pe = useSelector((state: any) => state.PetsFill);

    useEffect(() => {
        (async function () {
            const petId = await PetsService.getPetsId(`${id}`);
            dispatch(getPetsid(petId.data));
        })();
    }, [])

    const obj: any = {
        id: Pe.id,
        name: Pe.name,
        age: Pe.age,
        breed: Pe.breed,
        sterilization: Pe.sterilization,
        image: Pe.image
    }


    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.nameImage}>
                    {<><img src={obj.image} alt={obj.name} /><div className={styles.nameContainer}>
                        <h1>{obj.name}</h1>
                    </div></>}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <p> Edad: {obj.age}</p>
                        <p>Esterelización: {obj.sterilization ? 'Si' : 'No'}</p>

                        <div>
                            <h3>Especie:</h3>
                            {<p>{obj.breed}</p>}
                        </div>

                        {/* <div>
                            <h3>Vacunado:</h3>
                            <p>{pet[0].vaccines}</p> }
    </div> */}
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