import React, { useState } from 'react';
import '../styles/Destination.css';
import data from '../data.json';
import MoonImage from '../images/destination/image-moon.png';
import MarsImage from '../images/destination/image-mars.png';
import EuropaImage from '../images/destination/image-europa.png';
import TitanImage from '../images/destination/image-titan.png';

const Destination = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(data['destinations'][0]);
    // console.log(data['destinations'][0]);
    const [image, setImage] = useState(MoonImage);
    const [isActive, setIsActive] = useState(0);

    function handleClick(e, idx) {
        e.preventDefault();
        setIsActive(idx);
        setSelectedPlanet(data['destinations'][idx]);

        switch(data['destinations'][idx].name) {
            case 'Moon':
                setImage(MoonImage);
                break;
            case 'Mars':
                setImage(MarsImage);
                break;
            case 'Europa':
                setImage(EuropaImage);
                break;
            case 'Titan':
                setImage(TitanImage);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <section className="destination-page">
                <h1 className="destination-page__title"><span>01</span>Pick your destination</h1>

                <div>                    
                    <img className="destination-page__img" src={image} alt='' />

                    <div className="destination-page__text">
                        <ul className="destination-page__tab-list">
                            {data['destinations'].map((planet, idx) => {
                                return (
                                    <li className="destination-page__tab" key={idx}>
                                        <button className={(idx === isActive) ? 'active' : null} onClick={(e) => handleClick(e, idx)}>{planet.name}</button>
                                    </li>
                                )
                            })}
                        </ul>

                        <h2 className="destination-page__name">{selectedPlanet.name}</h2>
                        <p className="destination-page__description">{selectedPlanet.description}</p>

                        <div className="destination-page__info">
                            <div>
                                <h3 className="destination-page__info-title">Avg. distance</h3>
                                <p className="destination-page__info-data">{selectedPlanet.distance}</p>
                            </div>
                            <div>
                                <h3 className="destination-page__info-title">Est. travel time</h3>
                                <p className="destination-page__info-data">{selectedPlanet.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination;