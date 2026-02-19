import Header from './NavbarProjects'
import Footer from './Footer'
import BackgroundImage from '../assets/HistoryBackground.png'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'


function About() {
    
    const [screenSize, setScreenSize] = useState(false);

    const checkScreenSize = () => {
        setScreenSize(window.innerWidth < 1440);
    }

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        }
    }, []);


    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="flex-1 relative flex flex-col justify-center items-center py-[12em] bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <div className="flex flex-col gap-8 items-center justify-center relative p-15 z-10 bg-white/80 rounded-xl shadow-lg w-full max-w-5xl mx-auto">
                    <motion.h1 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="text-center text-[#E61E25] sm:text-3xl md:text-2xl lg:text-5xl  font-bold">HISTORY
                    </motion.h1>
                    <motion.p 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 1}}
                        className="text-justify text-black md:text-2xl lg:text-3xl sm:text-lg font-md max-w-[40em]">AAA Outdoor Ads. was established on September 7, 2006 as a Sole Proprietor and became a Corporation on 2016. Registered in the Philippines & the Securities Exchange Commission.
                    </motion.p>
                    <motion.p 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 2}}
                        className="text-justify text-black md:text-2xl lg:text-3xl sm:text-lg font-md max-w-[40em]">We started offering Outdoor Advertising services but Expanded drastically in Construction and Telco.
                    </motion.p>
                    <motion.p 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 3}}
                        className="text-justify text-black md:text-2xl lg:text-3xl sm:text-lg font-md max-w-[40em]">With Experience acquired for 15 years, we are highly confident that we can be of great help to any Businesses reach its Highest Potential.
                    </motion.p>
                </div>
                <hr className="w-1/2 mx-auto my-8 border-t-4 border-[#E61E25] rounded-full shadow-md opacity-60" />
                <div className="p-15 z-10 bg-white/80 rounded-xl gap-10 flex flex-col p-8 place-items-center items-center justify-center">
                    <motion.h1 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="text-center text-[#E61E25] sm:text-3xl md:text-2xl lg:text-5xl  font-bold">MISSION
                    </motion.h1>
                    <motion.p 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 1}}
                        className="text-justify text-black md:text-2xl lg:text-3xl sm:text-lg font-md max-w-[40em]">To Triple the Income of 1,000 Businesses in the Philippines in the next 2 Years.
                    </motion.p>
                                        <motion.h1 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="text-center text-[#E61E25] sm:text-3xl md:text-2xl lg:text-5xl  font-bold">VISION
                    </motion.h1>
                    <motion.p 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 1}}
                        className="text-justify text-black md:text-2xl lg:text-3xl sm:text-lg font-md max-w-[40em]">AAA OUTDOOR ADVERTISING AND BUILDERS CORPORATION will be the best and the most experienced amongst other OOH media companies, Construction, and Telecom.
                    </motion.p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About