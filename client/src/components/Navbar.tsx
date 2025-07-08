import { SiSololearn } from "react-icons/si";
import { Link } from "react-router-dom";
import { Links } from "../Types/NavbarTypes"

function Navbar() {
    return (
        <nav>
            {/* logo  */}
            <div>
                <SiSololearn />
                <h3>hellofluent</h3>
            </div>
            {/* navlinks  */}
            <div>
                <ul>
                    {Links.map((link) => {
                        return <Link to={link.route} key={link.id}>{link.title}</Link>;
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar