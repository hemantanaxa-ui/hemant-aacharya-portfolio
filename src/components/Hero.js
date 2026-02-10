import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1>Hemant Aacharya</h1>
            <h2>Your Title Here</h2>
            <div className="cta-buttons">
                <button onClick={() => alert('Contacting Hemant')}>Contact</button>
                <button onClick={() => alert('Viewing Projects')}>View Projects</button>
            </div>
        </div>
    );
};

export default Hero;
