import React from 'react';
import '../styles/Destination.css';

const Destination = () => {
    return (
        <>
            <section className="destination-page">
                <div>
                    <h1 className="destination-page__title"><span>01</span>Pick your destination</h1>
                    
                    <img className="destination-page__img" src={require('../images/destination/image-moon.png')} alt='' />
                </div>
                
                <div className="destination-page__text">
                    <h2 className="destination-page__name">Name</h2>
                    <p className="destination-page__description">Description</p>

                <div className="destination-page__info">
                    <div>
                        <h3 className="destination-page__info-title">Avg. distance</h3>
                        <p className="destination-page__info-data">distance</p>
                    </div>
                    <div>
                        <h3 className="destination-page__info-title">Est. travel time</h3>
                        <p className="destination-page__info-data">travel</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Destination;