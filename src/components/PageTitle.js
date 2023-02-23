import React from 'react';
import '../styles/PageTitle.css';

const PageTitle = ({ num, text }) => {
    return (
        <>
            <h1 className = "page-title"><span>{num}</span>{text}</h1>
        </>
    )
}

export default PageTitle;