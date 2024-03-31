import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Note Down</h1>
            <div className="links">
                <DarkModeToggle />
                <Link to="/create" className="new-note-button">Add Note</Link>
            </div>
        </nav>
    );
}

export default Navbar;
