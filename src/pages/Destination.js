import React, { useState } from 'react';
import '../styles/Destination.css';
import data from '../data.json';
import MoonImage from '../images/destination/image-moon.png';
import MarsImage from '../images/destination/image-mars.png';
import EuropaImage from '../images/destination/image-europa.png';
import TitanImage from '../images/destination/image-titan.png';
import PageTitle from '../components/PageTitle';
import SelectionList from '../components/SelectionList';
import Image from '../components/Image';

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState(data['destination'][0]);
    // console.log(data['destinations'][0]);
    const [image, setImage] = useState(MoonImage);
    const [isActive, setIsActive] = useState(0);

    function handleClick(e, idx) {
        e.preventDefault();
        setIsActive(idx);
        setSelectedDestination(data['destination'][idx]);

        switch(data['destination'][idx].name) {
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
                <PageTitle num={'01'} text={'Pick your destination'} />

                <div className="destination-page__info"> 
                    <Image page={'destination'} landscapeImage={image} portraitImage={image} alt={selectedDestination.name} />
                   
                    <div className="destination-page__text">
                        <SelectionList data={data} page={'destination'} isActive={isActive} handleClick={handleClick} buttonText={'name'} />

                        <h2 className="destination-page__name">{selectedDestination.name}</h2>
                        <p className="destination-page__description">{selectedDestination.description}</p>

                        <div className="destination-page__facts">
                            <div>
                                <h3 className="destination-page__facts-title">Avg. distance</h3>
                                <p className="destination-page__facts-data">{selectedDestination.distance}</p>
                            </div>
                            <div>
                                <h3 className="destination-page__facts-title">Est. travel time</h3>
                                <p className="destination-page__facts-data">{selectedDestination.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination;