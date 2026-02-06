import {useEffect, useState} from 'react'

import Carousel1 from './assets/Carousel1.jpg';
import Carousel2 from './assets/Carousel2.jpg';
import Carousel3 from './assets/Carousel3.jpg';
import NextBtn from './assets/NextBtn.png';
import BackBtn from './assets/BackBtn.png';


const ImageCarousel = () => {
    const images = [
        {id: 1, url: `${Carousel1}`},
        {id: 2, url: `${Carousel2}`},
        {id: 3, url: `${Carousel3}`},
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <div className="relative flex w-full max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[520px] aspect-[4/3] overflow-hidden">
            {images.map((image, index) => (
                <img
                    src={image.url}
                    alt="Lakbay SBHS Photos"
                    className={`rounded-md object-cover w-full h-full transition-opacity duration-500 ${
                        currentImageIndex === index ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                    key={image.id}
                />
            ))}
            <div id="buttonNavigation" className="absolute inset-0 flex items-center justify-between sm:p-3" style={{padding: '2px'}}>
            <button onClick={handlePreviousClick} className="cursor-pointer sm:p-3 rounded-full bg-white/80 shadow-xl hover:bg-white" style={{padding: '4px'}}>
                <img src={BackBtn} className="h-4 w-4 sm:h-5 sm:w-5" style={{ filter: 'invert(1)'}} />
            </button>
            <button onClick={handleNextClick} className="cursor-pointer p-2 sm:p-3 rounded-full bg-white/80 shadow-xl hover:bg-white" style={{padding: '4px'}}>
                <img src={NextBtn} className="h-4 w-4 sm:h-5 sm:w-5" style={{ filter: 'invert(1)'}} />
            </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {images.map((_, index) => (
                        <div 
                            key={index} 
                            className={`transition-all w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full cursor-pointer ${currentImageIndex === index ? 'p-2' : 'bg-white/50'}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;