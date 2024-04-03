import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo2 from './gallery2.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo2} alt="Logo" />
            </div>
            <ul className="nav-links">
                
                <li>
                    <Link to="/" className='home-btn'>Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
