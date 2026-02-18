import Header from './NavbarProjects'
import Footer from './Footer'
import BackgroundImage from '../assets/ProjectsBackground.jpg'
import BiggestProjects from '../pages/BiggestProjects'
import OngoingProjects from '../pages/OngoingProjects'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'




function Projects() {

    const [currentPage, setCurrentPage] = useState(1);

    const checkPage = () => {
        if (currentPage == 1) {
            return(
                <BiggestProjects />
            ) 
        } else if (currentPage == 2) {
            return(
                <div className="lg:pl-[50vh]">
                    <OngoingProjects />
                </div>
            )
        };

    }

    return (
        <>
            <Header />
            <main id="content" className="flex flex-col gap-9 min-h-screen overflow-x-hidden flex items-center justify-center mt-[20vh]">
                <div id="backgroundContainer" className="fixed inset-0 z-0">
                    <img src={BackgroundImage} alt="Projects background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                </div>
                <header className="flex flex-col justify-center items-center l gap-4 relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-2xl text-[#E61E25] md:text-2xl lg:text-4xl font-bold">PROJECTS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-black md:text-lg lg:text-xl font-normal">Showcasing our completed and ongoing works.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 w-full px-4">
                    <motion.button
                        id="biggestBtn"
                        onClick={() => setCurrentPage(1)}
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="w-full sm:w-auto min-h-[2.5em] inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-base sm:text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">BIGGEST
                    </motion.button>
                    <motion.button
                        id="ongoingBtn"
                        onClick={() => setCurrentPage(2)}
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="w-full sm:w-auto min-h-[2.5em] inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-base sm:text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">ONGOING
                    </motion.button>
                    <motion.button
                        id="pastBtn"
                        onClick={() => setCurrentPage(3)}
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="w-full sm:w-auto min-h-[2.5em] inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-base sm:text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">PAST
                    </motion.button>   
                    </div>
                </header>
                <div className="flex flex-row justify-center items-center">
                    {checkPage()}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Projects