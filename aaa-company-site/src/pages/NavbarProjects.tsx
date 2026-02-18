import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderLogo from '../assets/AAANavbarLogo.png';
import './Header.css'

function NavbarProjects() {

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen((v) => !v)
    const close = () => setOpen(false)

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <header
            id="headerContainer"
            className={`fixed top-0 left-0 right-0 z-[1000] inset-x-0 flex items-center justify-between min-h-[6em] w-full px-6 bg-black/20 backdrop-blur-xs transition-colors duration-200`}
        >
            <img onClick={() => { scrollToSection('home'); close() }} src={HeaderLogo} className={`cursor-pointer max-w-[180px] h-auto transition-all duration-200`} alt="AAA Navbar Logo" />
            <ul id="navButtonContainer" className="hidden lg:flex z-20 flex-row items-center gap-12 list-none">
                <li className="m-0 p-0">
                    <Link to="/">
                    <button
                        onClick={() => scrollToSection('home')}
                        className={`w-full sm:w-auto min-h-[2.5em] inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-sm cursor-pointer bg-[#E61E25] text-white text-base sm:text-lg font-semibold shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30`}
                    >
                        Home
                    </button>
                    </Link>
                </li>
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
                                <Link to="/"><button className="w-full text-left px-4 py-3 text-white font-semibold hover:text-[#E61E25] transition">Home</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavbarProjects