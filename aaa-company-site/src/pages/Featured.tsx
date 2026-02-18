import { motion } from 'framer-motion'
import AboutImage from '../assets/AboutUs.png'
import AboutBackground from '../assets/AboutBackground.png'
import { Link } from 'react-router-dom'

function Featured() {
    return(
        <>
            <div id="about" className="overflow-hidden p-8 relative z-60 bg-white w-full min-h-[65vh] overflow-hidden scroll-mt-28">
                <div className="absolute inset-0 z-0">
                    <img src={AboutBackground} className="absolute inset-0 w-full h-full object-cover opacity-10" />
                </div>
                <div className="relative flex justify-center mt-5 z-10 p-8 items-stretch lg:grid lg:grid-cols-2 lg:gap-10 lg:max-w-6xl lg:mx-auto lg:justify-center lg:items-center lg:place-items-center">
                    <div id="rightSection" className="flex flex-col gap-8 justify-center items-center">
                    <motion.h1 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="flex text-black text-3xl font-bold">ABOUT US
                    </motion.h1>
                    <motion.h1 
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="text-center md:text-justify text-black text-md md:text-xl font-normal">We are a trusted advertising and signage solutions provider committed to helping brands stand out and communicate effectively. With years of experience in design, printing, fabrication, and installation, we deliver high-quality advertising materials that make a lasting impact.
                    </motion.h1>
                    <Link to="/projects">
                    <motion.button
                        initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        className="max-w-[15em] min-h-[2em] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"><a href="https://web.facebook.com/aaaoutdooradss" className="text-white">VIEW PROJECTS</a>
                    </motion.button> 
                        </Link>
                    </div>
                    <div id="leftSection" className="hidden lg:flex lg:justify-center lg:items-center">
                        <img
                            src={AboutImage}
                            className="hidden md:block rounded-2xl h-full w-auto max-w-[80%] object-cover shadow-2xl ring-1 ring-black/10 hover:scale-[1.02] hover:shadow-3xl transition-transform duration-300 ease-out w-full max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[520px] aspect-[4/3]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
