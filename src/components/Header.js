import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../images/shared/logo.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <>
            <div>
                <Link to='/'>
                    <img src={logo} alt='Space Tourism' />
                 </Link>
            </div>

            <Navigation />
        </>
    )
}

export default Header;