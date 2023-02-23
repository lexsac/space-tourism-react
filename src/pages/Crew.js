import React from 'react';
import '../styles/Crew.css';

const Crew = () => {
    return (
        <>
            <section className="crew-page">
                <div>
                    <h1 className="crew-page__title"><span>02</span>Meet your crew</h1>
                </div>
                <div>
                    <h2 className="crew-page__role">Role</h2>
                    <h3 className="crew-page__position">Position</h3>

                    <p className = "crew-page__bio">Bio</p>

                    <img className = "crew-page__img" src={require('../images/crew/image-douglas-hurley.png')} />
                </div>
            </section>
        </>
    )
}

export default Crew;