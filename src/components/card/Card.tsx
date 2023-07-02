import React, { useState } from 'react';
import { FaHeart, FaStar, FaInfoCircle, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './petCards.css';

interface CardProps {
    id:string;
    name: string;
    age: number;
    breed:string;
    image: string;
}

const Card: React.FC<CardProps> = ({ id,name, age, image }) => {
    //const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [likes, setLikes] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setLikes((prevLikes) => prevLikes + 1);
        setIsLiked(true);
    };

    const handleFavoriteClick = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    const handleDetailClick = () => {
        console.log(`Redirigiendo al detalle de ${name}`);
    };

   // const handlePrevClick = () => {
    //     setSelectedImageIndex((prevIndex) => {
    //         if (prevIndex === 0) {
    //             return images.length - 1;
    //         }
    //         return prevIndex - 1;
    //     });
    // };

    // const handleNextClick = () => {
    //     setSelectedImageIndex((prevIndex) => {
    //         if (prevIndex === images.length - 1) {
    //             return 0;
    //         }
    //         return prevIndex + 1;
    //     });
    // };

    return (
        <div className="card">
            <div id={`carousel-${name}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                        <div>
                            <img src={image} className="d-block w-100 pet-image" alt={name} />
                        </div>
                    
                </div>
                    <>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carousel-${name}`}
                            data-bs-slide="prev"
                           // onClick={handlePrevClick}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carousel-${name}`}
                            data-bs-slide="next"
                            //onClick={handleNextClick}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </>
                
            </div>
            <div className="details">
                <div className="name">
                    {/* {certified && (
                        <span className="certified">
                            <FaCheckCircle className="fa-check-circle" />
                            <span className="certification-text"></span>
                        </span>
                    )} */}
                    {name}
                </div>
                <div className="age">Edad: {age}</div>
                <div className="icons">
                    <FaHeart className={`icon ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick} />
                    <FaStar className={`icon ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick} />
                    <FaInfoCircle className="icon" onClick={handleDetailClick} />
                    <Link to={`/detail/${id}`} className="detail-link">
                        <FaBook />
                    </Link>
                </div>
            </div>
            <div className="likes">Likes: {likes}</div>
        </div>
    );
};

export default Card;
