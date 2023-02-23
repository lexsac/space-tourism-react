import React from 'react';

// const Image = ({ image, page }) => {
//     return (
//         <>
//             <img 
//                 src={image} 
//                 className={`${page}-page__img`} 
//                 alt='' 
//             />
//         </>
//     )
// }

const Image = ({ landscapeImage, portraitImage, page, alt }) => {
    return (
      <picture className={`${page}-page__img`}>
        <source 
            srcSet={portraitImage} 
            media='(min-width: 60em)' 
        />
        <img 
            src={landscapeImage} 
            alt={alt} 
        />
      </picture>
    );
  };

export default Image;