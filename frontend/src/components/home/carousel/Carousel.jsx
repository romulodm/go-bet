import "./carousel.css"

import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import CarouselWelcome from './CarouselWelcome';
import CarouselJackpot from './CarouselJackpot';
import CarouselResponsibility from './CarouselResponsibility';

const carouselItems = [CarouselWelcome, CarouselResponsibility, CarouselJackpot]

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handlePrevSlide = () => {
        clearInterval(intervalId);
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
        startInterval();
    };
  
    const handleNextSlide = () => {
        clearInterval(intervalId);
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
        startInterval();
    };

    const handleSlideChange = (index) => {
        clearInterval(intervalId);
        setCurrentSlide(index);
        startInterval();
    };

    const startInterval = () => {
        const id = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
        }, 8000);
        setIntervalId(id);
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalId);
    }, [])


    return (
      <div className="w-full h-full relative p-5 rounded-md">
        <div
            style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            }}
        >
            
            <div className="carousel-item bg-primary-color max-h-96 min-h-96 rounded-md p-20" aria-hidden={currentSlide !== 0} style={{ translate: `${-100 * currentSlide}%` }}>
                <CarouselWelcome />
            </div>

            <div className="carousel-item bg-greencard-color max-h-96 min-h-96 rounded-md p-20" aria-hidden={currentSlide !== 1} style={{ translate: `${-100 * currentSlide}%` }}>
                <CarouselResponsibility />
            </div>

            <div className="carousel-item bg-redcard-color max-h-96 min-h-96 rounded-md p-20" aria-hidden={currentSlide !== 2} style={{ translate: `${-100 * currentSlide}%` }}>
                <CarouselJackpot  />
            </div>

        </div>
  

        <div className="absolute top-0 start-4 z-30 flex items-center justify-end h-full p-2">
          <button onClick={handlePrevSlide} className="flex text-white items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 focus:ring-2 focus:ring-white">
            <NavigateBeforeIcon />
          </button>
        </div>

        <div className="absolute top-0 end-4 z-30 flex items-center justify-start h-full p-2">
          <button onClick={handleNextSlide} className="flex text-white items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 focus:ring-2 focus:ring-white">
            <NavigateNextIcon />
          </button>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
            {[...Array(3)].map((_, index) => (
                <button key={index} className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'}`} onClick={() => handleSlideChange(index)} />
            ))}
        </div>

      </div>
    );
  }
