import HeaderLogo from '../assets/AAANavbarLogo.png';
import './Header.css';



function Header() {
    return (
        <header className= "stickyNav fixed inset-x-0 top-0 z-[1000] p-8 flex items-center justify-around min-h-25 w-full">
        <img src={HeaderLogo} className="cursor-pointer max-w-[200px] p-2 h-auto" alt="AAA Navbar Logo" />
        <ul id="navButtonContainer" className="z-20 flex flex-row items-center gap-12 list-none">
            <li className="m-0 p-0"><button className="font-semibold cursor-pointer px-4 py-2 hover:text-[#E61E25] transition ease-in rounded text-white">Home</button></li>
            <li className="m-0 p-0"><button className="font-semibold cursor-pointer px-4 py-2 hover:text-[#E61E25] transition ease-in rounded text-white">About Us</button></li>
            <li className="m-0 p-0"><button className="font-semibold cursor-pointer px-4 py-2 hover:text-[#E61E25] transition ease-in rounded text-white">Our Services</button></li>
            <li className="m-0 p-0 z-20"><button className="max-w-[15em] min-h-[2em] inline-flex items-center justify-center gap-2 rounded-md cursor-pointer bg-[#E61E25] text-white text-md font-semibold shadow-sm shadow-black/10 transition ease-in duration-200 hover:bg-white hover:text-[#E61E25]" style={{padding: '5px', paddingLeft: '10px', paddingRight: '10px'}}>Contact Us</button></li>
        </ul>
        </header>
    )
}

export default Header