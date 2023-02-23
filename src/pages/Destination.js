import React, { useState } from 'react';
import '../styles/Destination.css';
import data from '../data.json';
import MoonImage from '../images/destination/image-moon.png';
import MarsImage from '../images/destination/image-mars.png';
import EuropaImage from '../images/destination/image-europa.png';
import TitanImage from '../images/destination/image-titan.png';
import PageTitle from '../components/PageTitle';
import SelectionList from '../components/SelectionList';
// import Image from '../components/Image';

const Destination = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(data['destination'][0]);
    // console.log(data['destinations'][0]);
    const [image, setImage] = useState(MoonImage);
    const [isActive, setIsActive] = useState(0);

    function handleClick(e, idx) {
        e.preventDefault();
        setIsActive(idx);
        setSelectedPlanet(data['destination'][idx]);

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
                    <img className="destination-page__img" src={image} alt='' />
                    {/* <Image img={{ image }} className="destination-page__img" /> */}

                    <div className="destination-page__text">
                        <SelectionList className="destination-page__tab-list" data={data} page={'destination'} isActive={isActive} handleClick={handleClick} buttonText={'name'} />

                        <h2 className="destination-page__name">{selectedPlanet.name}</h2>
                        <p className="destination-page__description">{selectedPlanet.description}</p>

                        <div className="destination-page__facts">
                            <div>
                                <h3 className="destination-page__facts-title">Avg. distance</h3>
                                <p className="destination-page__facts-data">{selectedPlanet.distance}</p>
                            </div>
                            <div>
                                <h3 className="destination-page__facts-title">Est. travel time</h3>
                                <p className="destination-page__facts-data">{selectedPlanet.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination;