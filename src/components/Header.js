import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../images/shared/logo.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className = "header__logo">
                <Link to='/'>
                    <img src={logo} alt='Space Tourism' />
                 </Link>
            </div>

            <Navigation />
        </div>
    )
}

export default Header;