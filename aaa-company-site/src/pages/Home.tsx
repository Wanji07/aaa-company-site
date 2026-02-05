import { motion } from "framer-motion";
import Carousel from "../Carousel";
import BackgroundImage from '../assets/HeroBackground.jpg';

function Home() {
    return(
    <>
    <section id="container" style={{ marginTop: "5vh" }}>
        <div id="sectionContainer" className="grid grid-cols-2 place-items-center" style={{ marginLeft: "5vh" }}>
            <motion.h1 
                initial={{opacity: 0, y: 50, filter: "blur(15px)"}} 
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}} 
                transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                className="text-[#000729] text-3xl font-bold">YOUR TRUSTED PARTNER IN OUTDOOR ADVERTISING
            </motion.h1>         
            <Carousel />
            <div id="backgroundContainer" className="relative sticky max-h-[80vh]">
                <img src={BackgroundImage} className="absolute z-1" />
                <div className="absolute inset-0 bg-black/50 z-2"></div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Home
