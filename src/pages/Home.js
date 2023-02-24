import React from 'react';
import '../styles/Home.css';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
            <section className="home-page">
                <div className="home-page__info">
                    <h1 className="home-page__title">So, you want to travel to <span>Space</span></h1>

                    <p className="home-page__description">Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!</p>
                </div>

                <Button className="home-page__button" />
            </section>
        </>
    )
}

export default Home;