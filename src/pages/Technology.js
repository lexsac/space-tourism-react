import React, { useState } from 'react';
import '../styles/Technology.css';
import LaunchVehicleImageLandscape from '../images/technology/image-launch-vehicle-landscape.jpg';
import LaunchVehicleImagePortrait from '../images/technology/image-launch-vehicle-portrait.jpg';
import SpaceportImageLandscape from '../images/technology/image-spaceport-landscape.jpg';
import SpaceportImagePortrait from '../images/technology/image-spaceport-portrait.jpg';
import SpaceCapsuleImageLandscape from '../images/technology/image-space-capsule-landscape.jpg';
import SpaceCapsuleImagePortrait from '../images/technology/image-space-capsule-portrait.jpg';
import PageTitle from '../components/PageTitle';
import SelectionList from '../components/SelectionList';
import data from '../data.json';

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
                <PageTitle num={'03'} text={'Space launch 101'} />

                <div className="technology-page__info">
                    <div>
                        <h2 className="technology-page__terminology">The terminology...</h2>
                        <h3 className="technology-page__name">{selectedTechnology.name}</h3>
                        <p className="technology-page__description">{selectedTechnology.description}</p>
                    </div>

                    <SelectionList className="technology-page__selection-dots" data={data} page={'technology'} isActive={isActive} handleClick={handleClick} buttonText={'index'} />

                    <picture className = "technology-page__img">
                        {/* <source srcset={portraitImage} media='(min-width: 60em)' /> */}
                        <img src={landscapeImage} alt={selectedTechnology.name} />
                    </picture>
                </div>
            </section>
        </>
    )
}

export default Technology;