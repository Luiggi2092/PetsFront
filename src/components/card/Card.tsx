import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './petCards.css'
import {Link} from "react-router-dom"
import {DogsItems} from "../../data/indextb"




const Card: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    //const [currentLikes, setCurrentLikes] = useState(likes);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    // const handleLike = () => {
    //    //  setCurrentLikes((prevLikes) => prevLikes + 1);
    // };

    // const handleDetail = () => {
    //     window.location.href = '/detail';
    // };

    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     const value = event.currentTarget.value;
    //     // Aquí puedes realizar cualquier acción que necesites con el valor
    //     console.log(value);
    //   };
    return (
        <div className="pet-card">
            <Carousel activeIndex={currentSlide} onSelect={handleSlideChange}>
                {DogsItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/detail/${item.id}`}>
                        <img className="d-block w-100" src={item.image} alt={item.title} />
                        <div className="pet-card-content">
                            <br/>   
                        <h2>{item.title}</h2>
                        </div>
                        <div className="pet-card-content">
                 {/* <div className="likes">
                    <button className="like-button" onClick={handleLike}>
                        <FontAwesomeIcon icon={faHeart} color="red" />
                         {currentLikes} Likes 
                    </button>
                </div>  */}
                <button className="detail-button">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Ver detalle
                </button>
            </div>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>

            
        </div>
    );
};

export default Card;






















