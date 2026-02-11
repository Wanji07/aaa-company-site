import StructuralImage from './assets/Structural.jpg';
import PrintingImage from './assets/Printing.png';
import LayoutImage from './assets/Layout.jpg';
import SignagesImage from './assets/Signages.jpg';
import ConstructionImage from './assets/Construction.jpg';
import LEDImage from './assets/LED.jpg';
import Background from './assets/ServicesBackground.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion }from 'framer-motion';
import 'swiper/css';


function MobileServicesCard() {
    return(
        <>
        <div id="container">
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
                <motion.p
                    initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex justify-center text-[#E61E25]/50 text-lg font-bold"
                >
                    (Swipe to Interact)
                </motion.p>
                <div id="cardsContainer" className="p-12 flex flex-row gap-12 justify-center items-center gap-7 z-30">
                    <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={StructuralImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl  pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    Structural
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={PrintingImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    Printing
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={LayoutImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    Layout
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={SignagesImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    Signages
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={ConstructionImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    Construction
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative p-5 w-full aspect-square">
                                <img src={LEDImage} className="rounded-xl w-full h-full object-cover" />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" />
                                <span className="absolute bottom-6 left-6 bg-white/85 text-gray-900 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 text-sm font-semibold tracking-wide">
                                    LED
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
        </>
    )
}

export default MobileServicesCard