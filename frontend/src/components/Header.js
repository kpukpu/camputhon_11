import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo_white.png';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menuBar">
                <a href="#">메뉴1-1</a>
                <a href="#">메뉴1-2</a>
                <a href="#">메뉴1-3</a>
                <span>|</span>
                <a href="#">메뉴2-1</a>
                <a href="#">메뉴2-2</a>
            </div>
        </nav>
    );
}

export default Header;