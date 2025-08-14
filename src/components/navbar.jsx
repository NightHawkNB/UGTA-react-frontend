import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/manage">Manage</Link>
                <Link className="navbar-item" to="/about">About Us</Link>
                <Link className="navbar-item" to="/contact">Contact Us</Link>
            </ul>
        </nav>
    )
}