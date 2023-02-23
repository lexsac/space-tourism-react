import React from 'react';

const Image = ({ image, page }) => {
    return (
        <>
            <img 
                src={image} 
                className={`${page}-page__img`} 
                alt='' 
            />
        </>
    )
}

export default Image;