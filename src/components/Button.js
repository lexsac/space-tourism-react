import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = () => {
    return (
        <>
            <Link to="/destination">
                <button className="button">Explore</button>
            </Link>
        </>
    )
}

export default Button;