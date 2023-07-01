import React, { useState } from 'react';
import { FaHeart, FaStar, FaInfoCircle, FaCheckCircle, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './petCards.css';

interface CardProps {
    name: string;
    age: number;
    certified: boolean;
    images: string[];
}

const Card: React.FC<CardProps> = ({ name, age, certified, images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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

    const handlePrevClick = () => {
        setSelectedImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleNextClick = () => {
        setSelectedImageIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    return (
        <div className="card">
            <div id={`carousel-${name}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item${index === selectedImageIndex ? ' active' : ''}`}>
                            <img src={image} className="d-block w-100 pet-image" alt={name} />
                        </div>
                    ))}
                </div>
                {images.length > 1 && (
                    <>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carousel-${name}`}
                            data-bs-slide="prev"
                            onClick={handlePrevClick}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carousel-${name}`}
                            data-bs-slide="next"
                            onClick={handleNextClick}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </>
                )}
            </div>
            <div className="details">
                <div className="name">
                    {certified && (
                        <span className="certified">
                            <FaCheckCircle className="fa-check-circle" />
                            <span className="certification-text"></span>
                        </span>
                    )}
                    {name}
                </div>
                <div className="age">Edad: {age}</div>
                <div className="icons">
                    <FaHeart className={`icon ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick} />
                    <FaStar className={`icon ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick} />
                    <FaInfoCircle className="icon" onClick={handleDetailClick} />
                    <Link to="/detalle-mascota" className="detail-link">
                        <FaBook />
                    </Link>
                </div>
            </div>
            <div className="likes">Likes: {likes}</div>
        </div>
    );
};

export default Card;












































// import React from 'react';
// import { Link } from 'react-router-dom';
// import { RiHeartAddFill, RiStarFill } from 'react-icons/ri';
// import Carousel from '../Carousel/Carousel';
// import './petCards.css';

// interface CardProps {
//     pet: {
//         id: number;
//         name: string;
//         image: string;
//         age: number;
//         certified: boolean;
//         likes: number;
//         isFavorite: boolean;
//         images: string[];
//     };
//     onLike: (id: number) => void;
//     onFavorite: (id: number) => void;
// }

// const Card: React.FC<CardProps> = ({ pet, onLike, onFavorite }) => {
//     const handleLike = () => {
//         onLike(pet.id);
//     };

//     const handleFavorite = () => {
//         onFavorite(pet.id);
//     };

//     return (
//         <div className="card-container">
//             <h2>
//                 {pet.name}{' '}
//                 <span className="certified-badge">
//                     <span className="checkmark"></span>
//                 </span>
//             </h2>
//             <div className="profile-image-container">
//             <img className="card-image" src={pet.image} alt={pet.name} />
//             <p className="pet-age">Age: {pet.age} </p>
//             </div>
//             <div className="button-container">
//                 <button onClick={handleLike} className="action-button">
//                     <RiHeartAddFill /> Like
//                 </button>
//                 <button onClick={handleFavorite} className="action-button favorite-button">
//                     <RiStarFill fill={pet.isFavorite ? 'gold' : 'none'} /> Favorite
//                 </button>
//             </div>
//             <p className="card-info">Likes: {pet.likes}</p>
//             <div className="details-link-container">
//             <button>
//                 <Link to={`/pets/${pet.id}`} className="details-link">
//                     Details
//                 </Link>
//                 </button>
//             </div>
//             <div className="carousel-container">
//                 <Carousel>
//                     {pet.images.map((image, index) => (
//                         <div key={index}>
//                             <img src={image} alt={pet.name} className="carrousel-image" />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//         </div>
//     );
// };

// export default Card;
