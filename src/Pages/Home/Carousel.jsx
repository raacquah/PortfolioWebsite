import React, { useState, useEffect } from "react";
import "../../../src/Components/Carousel.css"; // Add your carousel styles here

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [images.length, interval]);

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;