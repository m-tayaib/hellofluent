import { SiSololearn } from "react-icons/si";
import { Link } from "react-router-dom";
import { Links } from "../Types/NavbarTypes"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-sm flex items-center justify-between px-8 z-40">
            {/* logo  */}
            <div className="flex items-center space-x-2">
                <SiSololearn className="text-2xl text-logo" />
                <h3 className="text-xl font-bold text-primary capitalize">HelloFluent</h3>
            </div>
            {/* navlinks  */}
            <div>
                <ul className="flex space-x-6">
                    {Links.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.route}
                                className="text-secondary capitalize  hover:text-primary  transition-colors duration-200 font-medium"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar