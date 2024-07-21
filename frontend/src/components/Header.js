import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo_white.png';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </nav>
    );
}

export default Header;