import { useState, useEffect } from "react";
import { SiSololearn } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Links } from "../Types/NavbarTypes"
function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navigate = useNavigate();
    return (
        <nav
            className={`fixed    top-0 left-0 w-full h-16 z-40 
            flex items-center justify-between px-8 md:px-16 
            transition-all duration-300 ease-in-out
             ${scrollY > 0 && ` ${!mobileOpen && "bg-white/70 backdrop-blur-md "}`}
           `}
        >
            {/* Logo */}
            <div
                role="button"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 cursor-pointer"
            >
                <SiSololearn className="text-2xl text-logo" />
                <h3 className="text-xl font-bold text-primary capitalize">
                    HelloFluent
                </h3>
            </div>

            {/* Navlinks - Desktop */}
            <div className="hidden md:block">
                <ul className="flex space-x-6">
                    {Links.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.route}
                                className={`px-4 py-2 rounded-md text-primary capitalize hover:bg-primary hover:text-white transition-all duration-300 font-medium ${window.location.pathname === link.route
                                    ? "bg-primary text-white"
                                    : ""
                                    }`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger - Mobile */}
            <button
                className="md:hidden cursor-pointer text-3xl text-primary focus:outline-none"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((prev) => !prev)}
            >
                {mobileOpen ? <FaTimes className="font-thin" /> : <FaBars className="font-thin" />}
            </button>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 w-full h-screen bg-white/70 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out shadow-2xl">
                    <button
                        className="absolute top-6 right-6 text-4xl text-primary focus:outline-none"
                        aria-label="Close menu"
                        onClick={() => setMobileOpen(false)}
                    >
                        <FaTimes />
                    </button>
                    <ul className="flex flex-col space-y-8 text-center">
                        {Links.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.route}
                                    className="block px-6 py-3 rounded-md text-primary capitalize hover:bg-primary hover:text-white transition-all duration-300 font-medium text-2xl"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>

    );
}

export default Navbar;