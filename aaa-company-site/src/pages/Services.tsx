import { motion } from 'framer-motion'
import Background from '../assets/ServicesBackground.jpg';
import ServicesCard1 from '../ServicesCard1';

function Services() {
    return (
        <>
            <div id="container" className="relative h-screen">
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
                <div id="cardsContainer">
                    <ServicesCard1 />
                </div>
            </div>
        </>
    )
}

export default Services