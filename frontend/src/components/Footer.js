import React from 'react';
import { Home, Award, Calendar, CheckSquare, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="footer-nav">
            <div className="footer-nav-container">
                <ul className="footer-nav-list">
                    <li>
                        <Link to="/my-page" className={`footer-nav-link ${isActive('/my-page') ? 'active' : ''}`}>
                            <Home size={24}/>
                            <span>MyPage</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ranking" className={`footer-nav-link ${isActive('/ranking') ? 'active' : ''}`}>
                            <Award size={24}/>
                            <span>Ranking</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/task" className={`footer-nav-link ${isActive('/task') ? 'active' : ''}`}>
                            <CheckSquare size={24}/>
                            <span>Task</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className={`footer-nav-link ${isActive('/shop') ? 'active' : ''}`}>
                            <ShoppingBag size={24}/>
                            <span>Shop</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Footer;