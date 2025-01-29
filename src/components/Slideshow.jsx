import { useState } from "react";
import "../styles/Slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon className="slideshow-button prev" icon={faChevronLeft} onClick={handlePrev}/>
                    <FontAwesomeIcon className="slideshow-button next" icon={faChevronRight} onClick={handleNext}/>
                </>
            )}
        </div>
    );
};

export default Slideshow;
