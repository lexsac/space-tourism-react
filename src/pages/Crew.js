import React, { useState } from 'react';
import '../styles/Crew.css';
import data from '../data.json';
import DouglasHurleyImage from '../images/crew/image-douglas-hurley.png';
import MarkShuttleworthImage from '../images/crew/image-mark-shuttleworth.png';
import VictorGloverImage from '../images/crew/image-victor-glover.png';
import AnoushehAnsariImage from '../images/crew/image-anousheh-ansari.png';
import PageTitle from '../components/PageTitle';
import SelectionList from '../components/SelectionList';
import Image from '../components/Image';

const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState(data['crew'][0]);
    const [image, setImage] = useState(DouglasHurleyImage);
    const [isActive, setIsActive] = useState(0);

    function handleClick(e, idx) {
        e.preventDefault();
        setIsActive(idx);
        setSelectedCrew(data['crew'][idx]);

        switch(data['crew'][idx].name) {
            case 'Douglas Hurley':
                setImage(DouglasHurleyImage);
                break;
            case 'Mark Shuttleworth':
                setImage(MarkShuttleworthImage);
                break;
            case 'Victor Glover':
                setImage(VictorGloverImage);
                break;
            case 'Anousheh Ansari':
                setImage(AnoushehAnsariImage);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <section className="crew-page">
                <PageTitle num={'02'} text={'Meet your crew'} />

                <div className="crew-page__info">
                    <div className="crew-page__details">
                        <SelectionList data={data} page={'crew'} isActive={isActive} handleClick={handleClick} />

                        <div>
                            <h2 className="crew-page__role">{selectedCrew.role}</h2>
                            <h3 className="crew-page__name">{selectedCrew.name}</h3>
                            <p className = "crew-page__bio">{selectedCrew.bio}</p>
                        </div>
                    </div>

                    <div className="crew-page__img-container">
                        <Image page={'crew'} landscapeImage={image} portraitImage={image} alt={selectedCrew.name} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crew;