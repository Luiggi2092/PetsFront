import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.css'

interface CarouselProps {
    children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            const childrenArray = React.Children.toArray(children);
            if (prevIndex === 0) {
                return childrenArray.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const childrenArray = React.Children.toArray(children);
            if (prevIndex === childrenArray.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <div className="carousel-container">
            {React.Children.toArray(children).map((child, index) => {
                if (index === currentIndex) {
                    return child;
                }
                return null;
            })}
            <button className="prev-button" onClick={handlePrev}>
                <FiChevronLeft />
            </button>
            <button className="next-button" onClick={handleNext}>
                <FiChevronRight />
            </button>
        </div>
    );

};

export default Carousel;



