import React from 'react';
import '../styles/Destination.css';

const Destination = () => {
    return (
        <>
            <section>
                <div>
                    <h1><span>01</span>Pick your destination</h1>
                    <img src={require('../images/destination/image-moon.png')} alt='' />
                </div>
                <div>
                    <h2>Name</h2>
                    <p>Description</p>

                    <div>
                        <div>
                            <h3>Avg. distance</h3>
                            <p>distance</p>
                        </div>
                        <div>
                            <h3>Est. travel time</h3>
                            <p>travel</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination;