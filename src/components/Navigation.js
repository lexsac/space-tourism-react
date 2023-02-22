import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <span>00</span>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            <span>01</span>Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            <span>02</span>Crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology">
                            <span>03</span>Technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;