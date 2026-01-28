import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    RateMy<span className="text-secondary">Fac</span>
                </Link>



                <div className="navbar-actions">
                    <button className="btn btn-ghost">Log In</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
