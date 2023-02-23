import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <ul className="navigation__items">
                    <NavLink to="/">
                        <li className="navigation__item">
                            <span>00</span>Home
                        </li>
                    </NavLink>
                    <NavLink to="/destination">
                        <li className="navigation__item">
                            <span>01</span>Destination
                        </li>
                    </NavLink>
                    <NavLink to="/crew">
                        <li className="navigation__item">
                            <span>02</span>Crew
                        </li>
                    </NavLink>
                    <NavLink to="/technology">
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