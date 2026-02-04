import HeaderLogo from '../assets/AAANavbarLogo.png';

function Header() {
    return (
    <header className="flex items-center justify-around p-8 bg-white shadow-sm">
        <img src={HeaderLogo} className="max-w-[200px] p-5 h-auto" alt="AAA Navbar Logo" />
        <ul id="navButtonContainer" className="flex flex-row gap-6 list-none">
            <li className="m-0 p-0"><button className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded transition">Home</button></li>
            <li className="m-0 p-0"><button className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded transition">About Us</button></li>
            <li className="m-0 p-0"><button className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded transition">Our Services</button></li>
            <li className="m-0 p-0"><button className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded transition">Contact Us</button></li>
        </ul>
    </header>
    )
}

export default Header