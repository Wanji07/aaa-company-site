import { motion, AnimatePresence } from 'framer-motion'
import Background from '../assets/ServicesBackground.jpg';
import { useState } from 'react';

import NextBtn from '../assets/ArrowNextServices.png';
import BackBtn from '../assets/ArrowBackServices.png';

import ServicesCard1 from '../ServicesCard1';
import ServicesCard2 from '../ServicesCard2';

function Services() {

    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0, filter: 'blur(6px)' }),
    center: { x: 0, opacity: 1, filter: 'blur(0px)' },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, filter: 'blur(6px)' }),
    };

    const Pages = [ServicesCard1, ServicesCard2];

    const handleBack = () => {
        setDirection(-1);
        setCurrentPage(
            currentPage === 0 ? Pages.length - 1 : currentPage - 1
        );
    }

    const handleNext = () => {
        setDirection(1);
        setCurrentPage ((currentPage + 1) % Pages.length);
    }

    return (
        <>
            <div id="services" className="relative h-[max-content] pb-15">
                <hr className="absolute left-1/2 -translate-x-1/2 rounded-full border-0 w-16 h-1.5 bg-[#E61E25]" />
                <div className="absolute inset-0 z-0">
                    <img
                        src={Background}
                        className="absolute inset-0 w-full h-full object-cover opacity-15"
                    />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex justify-center text-[#E61E25] text-4xl font-bold pt-15"
                >
                    OUR SERVICES
                </motion.h1>
                <div id="cardsContainer" className="flex flex-row gap-12 justify-center items-center gap-7 z-30">
                    <button onClick={handleBack} className="hidden lg:block cursor-pointer p-1 rounded-full bg-white/80 shadow-xl hover:bg-white z-500">
                        <img src={BackBtn} className="w-8 h-8" />
                    </button>
                    <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{ position: 'relative' }}
                    >
                        {currentPage === 0 ? <ServicesCard1 /> : <ServicesCard2 />}
                    </motion.div>
                    </AnimatePresence>
                    <button onClick={handleNext} className="hidden lg:block cursor-pointer p-1 rounded-full bg-white/80 shadow-xl hover:bg-white z-500">
                        <img src={NextBtn} className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Services