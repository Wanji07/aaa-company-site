import { motion } from "framer-motion";
import Carousel from "../Carousel";
import BackgroundImage from "../assets/HeroBackground.jpg";


function Home() {

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth', block: 'start'
            });
        }
    }


    return(
    <>
    <section id="home" className="relative scroll-mt-28">
        <div id="backgroundContainer" className="absolute inset-0 z-0">
            <img src={BackgroundImage} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div id="sectionContainer" className="relative flex flex-col items-center justify-center gap-5 z-10 md:p-6 lg:grid lg:grid-cols-2 lg:place-items-center h-screen">
            <div id="textHeroSectionContainer" className="flex flex-col gap-6 p-2 justify-center items-center">
            <motion.h1 
                initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                className="text-center text-white md:text-2xl lg:text-3xl font-bold">Trusted Advertising & Signage Solutions That <span className="font-extrabold">Make Your Brand Stand Out.</span>
            </motion.h1>
            <motion.p 
                initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                transition={{duration: 1, ease: "easeOut", delay: 1}}
                className="text-center text-white md:text-lg lg:text-xl font-normal">From concept to completion, we provide professional design, printing, fabrication, and installation services for indoor and outdoor advertising.
            </motion.p>
            <motion.button
                onClick={() => { scrollToSection('contact'); }}
                initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                transition={{duration: 1, ease: "easeOut", delay: 2}}
                className="max-w-[15em] min-h-[2em] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">GET STARTED
            </motion.button> 
            </div>
            <div className="hidden lg:block"><Carousel /></div>
        </div>
    </section>
    </>
    )
}

export default Home
