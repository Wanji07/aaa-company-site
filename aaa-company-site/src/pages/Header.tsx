import { useState, useEffect } from 'react'
import HeaderLogo from '../assets/AAANavbarLogo.png';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const toggle = () => setOpen((v) => !v)
    const close = () => setOpen(false)

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const handleScroll = () => {
        const scrolled = window.scrollY;
        setScroll(scrolled > 200);
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return(
            window.removeEventListener('scroll', handleScroll)
        )
    })

    return (
        <header
            id="headerContainer"
            className={`fixed top-0 left-0 right-0 z-[1000] inset-x-0 flex items-center justify-between min-h-[5em] p-3 w-full ${scroll ? 'bg-white' : 'bg-black/20 backdrop-blur-xs'} transition-colors duration-200`}
        >
            <img onClick={() => { scrollToSection('home'); close() }} src={HeaderLogo} className={`cursor-pointer max-w-[180px] p-1 h-auto transition-all duration-200`} alt="AAA Navbar Logo" />
            <ul id="navButtonContainer" className="hidden lg:flex z-20 flex-row items-center gap-12 list-none">
                <li className="m-0 p-0"><Link to="/projects"><button onClick={() => scrollToSection('home')} className={`font-semibold cursor-pointer px-4 py-2 transition ease-in rounded text-white hover:text-[#E61E25]`}>Projects</button></Link></li>
                <li className="m-0 p-0"><button onClick={() => scrollToSection('about')} className={`font-semibold cursor-pointer px-4 py-2 transition ease-in rounded  text-white hover:text-[#E61E25]`}>About Us</button></li>
                <li className="m-0 p-0"><button onClick={() => scrollToSection('services')} className={`font-semibold cursor-pointer px-4 py-2 transition ease-in rounded text-white hover:text-[#E61E25]`}>Our Services</button></li>
                <li className="m-0 p-0 z-20"><button onClick={() => scrollToSection('contact')} className="max-w-[15em] min-h-[2em] inline-flex items-center justify-center gap-2 rounded-md cursor-pointer bg-[#E61E25] text-white text-md font-semibold shadow-sm shadow-black/10 transition ease-in duration-200 hover:bg-white hover:text-[#E61E25]" style={{padding: '5px', paddingLeft: '10px', paddingRight: '10px'}}>Contact Us</button></li>
            </ul>

            <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-controls="mobileMenu"
                aria-expanded={open}
                onClick={toggle}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-[#E61E25] sm:text-white ring-1 ring-[#E61E25]/20 sm:ring-white/30 hover:ring-[#E61E25] transition"
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path fillRule="evenodd" d="M3.75 5.25A.75.75 0 014.5 4.5h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zM3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15A.75.75 0 013.75 12zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                )}
            </button>

            {open && (
                <div id="mobileMenu" className="lg:hidden absolute top-full inset-x-0 z-40">
                    <div className="mx-3 mt-3 rounded-lg bg-neutral-900/90 backdrop-blur-md ring-1 ring-white/10 p-3">
                        <ul className="flex flex-col divide-y divide-white/10">
                            <li>
                                <button onClick={() => { scrollToSection('home'); close() }} className="w-full text-left px-4 py-3 text-white font-semibold hover:text-[#E61E25] transition">Home</button>
                            </li>
                            <li>
                                <button onClick={() => { scrollToSection('about'); close() }} className="w-full text-left px-4 py-3 text-white font-semibold hover:text-[#E61E25] transition">About Us</button>
                            </li>
                            <li>
                                <button onClick={() => { scrollToSection('services'); close() }} className="w-full text-left px-4 py-3 text-white font-semibold hover:text-[#E61E25] transition">Our Services</button>
                            </li>
                            <li className="pt-3">
                                <button onClick={() => { scrollToSection('contact'); close() }} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#E61E25] px-4 py-3 text-white font-semibold shadow-sm shadow-black/20 hover:bg-white hover:text-[#E61E25] transition">Contact Us</button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header