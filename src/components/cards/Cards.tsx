import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './petCards.css'
import {Pet} from "../../interfaces/Pets"
import {Link} from "react-router-dom"

interface Props {
    Pets:[];
}


const Card: React.FC<Props> = ({Pets}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

   
    return (
        <div className="pet-card">
            <Carousel activeIndex={currentSlide} onSelect={handleSlideChange}>
                {Pets.map((item:Pet, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/detail/${item.id}`}>
                        <img className="d-block w-100" src={item.image} alt={item.name} />
                        <div className="pet-card-content">
                            <br/>   
                        <h2>{item.name}</h2>
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
















