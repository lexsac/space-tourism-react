import React from 'react';
import '../styles/Crew.css';

const Crew = () => {
    return (
        <>
            <section>
                <div>
                    <h1><span>02</span>Meet your crew</h1>
                </div>
                <div>
                    <h2>Role</h2>
                    <h3>Position</h3>

                    <p>Bio</p>

                    <img src={require('../images/crew/image-douglas-hurley.png')} />
                </div>
            </section>
        </>
    )
}

export default Crew;