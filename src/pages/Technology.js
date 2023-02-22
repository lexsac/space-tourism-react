import React from 'react';
import '../styles/Technology.css';

const Technology = () => {
    return (
        <>
            <section>
                <div>
                    <h1><span>03</span>Space launch 101</h1>
                </div>

                <div>
                    <h2>The terminology...</h2>
                    <h3>name</h3>
                    <p>description</p>
                </div>

                <picture>
                    {/* <source srcset={images.portrait} media='(min-width: 60em)' /> */}
                    <img src={require('../images/technology/image-space-capsule-portrait.jpg')} alt='' />
                </picture>
            </section>
        </>
    )
}

export default Technology;