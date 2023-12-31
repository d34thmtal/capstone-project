import React from 'react';
import './CardSlider.css';
import { Link } from 'react-router-dom';

const Card = ({ effect, image, heading, text, cta }) => {
    const backgroundImageStyle = {
        backgroundImage: `url("${image}")`,
    };

    return (
        <div className={`crd ${effect}`}>
            <div className="crd-img" style={backgroundImageStyle}></div>
            <div className="crd-info">
                <h2 className="crd-heading">{heading}</h2>
                <p className="crd-text">{text}</p>
                <p className="crd-cta">{cta}</p>

            </div>
        </div>
    );
};

const CardSlider = () => {
    return (
        <>
            <h2>The most requested features</h2>
            <div className="card-container">
                <Link to="/listing/features=private pool" className="text-decoration-none">
                    <Card
                        effect="crd-effect"
                        image="https://www.villaorchestrasulmare.com/wp-content/uploads/2020/07/IM35225_1920x1080_md.jpg"
                        heading="Private Pool"
                        text="Only best properties with private pool"
                        cta="Discover Now!"
                    />
                </Link>
                <Link to="/listing/features=near the sea" className="text-decoration-none">
                    <Card
                        effect="crd-effect"
                        image="https://villassardinia.net/wp-content/uploads/2023/05/231f3a39.jpg"
                        heading="Near The Sea"
                        text="All our proposal just few steps from the sea"
                        cta="Discover Now!"
                    />
                </Link>
                <Link to="/listing/features=for families" className="text-decoration-none">
                    <Card
                        effect="crd-effect"
                        image="https://www.balearic-villas.com/perch/resources/destinations/family-friendly-mallorca-w1440h810.jpg"
                        heading="For Families"
                        text="The perfect solution for your Family's Holidays"
                        cta="Discover Now!"
                    />
                </Link>
                <Link to="/listing/features=jacuzzi" className="text-decoration-none">
                    <Card
                        effect="crd-effect"
                        image="https://www.villaorchestrasulmare.com/wp-content/uploads/2020/07/IM35209_1920x1080_md.jpg"
                        heading="Jacuzzi"
                        text="Enjoy your Villa with Jacuzzi"
                        cta="Discover Now!"
                    />
                </Link>
            </div>
        </>
    );
};

export default CardSlider;

