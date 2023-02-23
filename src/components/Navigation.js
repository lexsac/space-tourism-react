import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    const combinedNavClassName = `navigation ${isOpen ? 'open' : ''}`;
    const combinedBtnClassName = `navigation__btn-toggle ${isOpen ? 'open' : ''}`;
    const combinedListClassName = `navigation__items ${isOpen ? 'open' : ''}`;

    return (
        <>
            <nav className={combinedNavClassName}>
                <button className={combinedBtnClassName} onClick={toggle}></button>
                <ul className={combinedListClassName}>
                    <NavLink to="/" onClick={handleNavLinkClick}>
                        <li className="navigation__item">
                            <span>00</span>Home
                        </li>
                    </NavLink>
                    <NavLink to="/destination" onClick={handleNavLinkClick}>
                        <li className="navigation__item">
                            <span>01</span>Destination
                        </li>
                    </NavLink>
                    <NavLink to="/crew" onClick={handleNavLinkClick}>
                        <li className="navigation__item">
                            <span>02</span>Crew
                        </li>
                    </NavLink>
                    <NavLink to="/technology" onClick={handleNavLinkClick}>
                        <li className="navigation__item">
                            <span>03</span>Technology
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;