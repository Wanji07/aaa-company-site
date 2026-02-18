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

function OngoingProjects() {
    const projects = projectData as ProjectItem[]
    return(
                <div className="max-w-5xl place-items-center justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
                    {projects.map((data) => (
                        <div key={data.id} className="group relative w-full h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ring-1 ring-black/10 hover:ring-[#E61E25]/40">
                            <div className="relative overflow-hidden">
                                <img
                                    src={projectImages[data.id]}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    alt={data.project}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6 pb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.project}</h3>
                                <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full shadow-sm bg-[#E61E25]/10 text-[#E61E25] ring-1 ring-[#E61E25]/20">
                                    {data.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
    )
}

export default OngoingProjects