import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import projectData from '../data/ongoingProjects.json'
import AyalaImage from '../assets/ongoingProjects/Ayala.jfif'
import DextertonImage from '../assets/ongoingProjects/Dexterton.jfif'

type ProjectItem = {
    id: number
    project: string
    status: string
}

const projectImages: Record<number, string> = {
    1: AyalaImage,
    2: DextertonImage
}


function OngoingProjectsMobile() {
    const projects = projectData as ProjectItem[];
    return (
        <div className="max-w-md mx-auto px-2 py-6">
            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="w-full"
            >
                {projects.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className="group relative w-full h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ring-1 ring-black/10 hover:ring-[#E61E25]/40">
                            <div className="relative overflow-hidden">
                                <img
                                    src={projectImages[data.id]}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    alt={data.project}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6 pb-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#E61E25] transition-colors duration-300">
                                    {data.project}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default OngoingProjectsMobile