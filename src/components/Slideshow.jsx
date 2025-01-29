import { useState } from "react";
import "../styles/Slideshow.scss";
import chevron from '../assets/chevron.svg';

const Slideshow = ({ pictures }) => {
    const displayButton = !!(pictures.length - 1)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <img
                src={pictures[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="slideshow-image"
            />
            { displayButton && (
                <>
                    <img
                        src={chevron}
                        alt="Previous"
                        className="slideshow-button prev"
                        onClick={handlePrev}
                    />
                    <img
                        src={chevron}
                        alt="Next"
                        className="slideshow-button next"
                        onClick={handleNext}
                    />
                    <p className="numerotation">{currentImageIndex+1}/{pictures.length}</p>
                </>
            )}
        </div>
    );
};

export default Slideshow;
