import React, { useState } from 'react';
import '../styles/Crew.css';
import data from '../data.json';
import DouglasHurleyImage from '../images/crew/image-douglas-hurley.png';
import MarkShuttleworthImage from '../images/crew/image-mark-shuttleworth.png';
import VictorGloverImage from '../images/crew/image-victor-glover.png';
import AnoushehAnsariImage from '../images/crew/image-anousheh-ansari.png';

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
                <div>
                    <h1 className="crew-page__title"><span>02</span>Meet your crew</h1>
                </div>

                <div>
                    <ul className="crew-page__selection-dots">
                        {data['crew'].map((crew, idx) => {
                            return (
                                <li className="crew-page__dot" key={idx}>
                                    <button className={(idx === isActive) ? 'active' : null} onClick={(e) => handleClick(e, idx)}>
                                        <span className="sr-only">`The ${crew.role}`</span>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <h2 className="crew-page__role">{selectedCrew.role}</h2>
                    <h3 className="crew-page__position">{selectedCrew.position}</h3>

                    <p className = "crew-page__bio">{selectedCrew.bio}</p>

                    <img className = "crew-page__img" src={image} />
                </div>
            </section>
        </>
    )
}

export default Crew;