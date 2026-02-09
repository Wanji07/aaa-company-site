import BackgroundImage from '../assets/CTABackground.jpg'

function CallToAction() {
    return(
        <>
            <div id="container" className="relative min-h-[max-content] p-8 flex items-center justify-center">
                <div id="backgroundContainer" className="absolute inset-0 z-0">
                    <img src={BackgroundImage} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
                <div id="contentContainer" className="relative gap-6 z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white text-2xl font-bold flex "><a href="https://www.facebook.com/aaaoutdooradss">See our latest projects and message us directly.</a></h1>
                    <a
                        href="https://www.facebook.com/aaaoutdooradss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="max-w-[20em] min-h-[2em] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
                    >
                        Message us on Facebook
                    </a>
                </div>
            </div>
        </>
    )
}

export default CallToAction