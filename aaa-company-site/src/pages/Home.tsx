import { motion } from "framer-motion";
import Carousel from "../Carousel";
import BackgroundImage from '../assets/HeroBackground.jpg';

function Home() {
    return(
    <>
    <section id="container" className="relative">
        <div id="backgroundContainer" className="absolute inset-0 w-full h-screen">
            <img src={BackgroundImage} className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div id="sectionContainer" className="relative z-20 grid grid-cols-2 place-items-center h-screen" style={{ marginLeft: "10vh" }}>
            <motion.h1 
                initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                className="text-white text-3xl font-bold">YOUR TRUSTED PARTNER IN OUTDOOR ADVERTISING
            </motion.h1>         
            <Carousel />
        </div>
    </section>
    </>
    )
}

export default Home
