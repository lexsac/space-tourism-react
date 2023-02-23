import React, { useState } from 'react';
import '../styles/Technology.css';
import data from '../data.json';
import LaunchVehicleImageLandscape from '../images/technology/image-launch-vehicle-landscape.jpg';
import LaunchVehicleImagePortrait from '../images/technology/image-launch-vehicle-portrait.jpg';
import SpaceportImageLandscape from '../images/technology/image-spaceport-landscape.jpg';
import SpaceportImagePortrait from '../images/technology/image-spaceport-portrait.jpg';
import SpaceCapsuleImageLandscape from '../images/technology/image-space-capsule-landscape.jpg';
import SpaceCapsuleImagePortrait from '../images/technology/image-space-capsule-portrait.jpg';

const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState(data['technology'][0]);
    const [landscapeImage, setLandscapeImage] = useState(LaunchVehicleImageLandscape);
    const [portraitImage, setPortraitImage] = useState(LaunchVehicleImagePortrait);
    const [isActive, setIsActive] = useState(0);

    function handleClick(e, idx) {
        e.preventDefault();
        setIsActive(idx);
        setSelectedTechnology(data['technology'][idx]);

        switch(data['technology'][idx].name) {
            case 'Launch vehicle':
                setLandscapeImage(LaunchVehicleImageLandscape);
                break;
            case 'Spaceport':
                setLandscapeImage(SpaceportImageLandscape);
                break;
            case 'Space capsule':
                setLandscapeImage(SpaceCapsuleImageLandscape);
                break;
            default:
                break;
        }

        switch(data['crew'][idx].name) {
            case 'Launch vehicle':
                setPortraitImage(LaunchVehicleImagePortrait);
                break;
            case 'Spaceport':
                setPortraitImage(SpaceportImagePortrait);
                break;
            case 'Space capsule':
                setPortraitImage(SpaceCapsuleImagePortrait);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <section className = "technology-page">
                <div>
                    <h1 className = "technology-page__title"><span>03</span>Space launch 101</h1>
                </div>

                <div>
                    <h2>The terminology...</h2>
                    <h3>{selectedTechnology.name}</h3>
                    <p>{selectedTechnology.description}</p>
                </div>

                <div>
                    <ul className="technology-page__selection-dots">
                        {data['technology'].map((technology, idx) => {
                            return (
                                <li className="technology-page__dot" key={idx}>
                                    <button className={(idx === isActive) ? 'active' : null} onClick={(e) => handleClick(e, idx)}>
                                        <span className="sr-only">`The ${technology.name}`</span>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <picture className = "technology-page__img">
                    <source srcset={portraitImage} media='(min-width: 60em)' />
                    <img src={landscapeImage} alt={selectedTechnology.name} />
                </picture>
            </section>
        </>
    )
}

export default Technology;