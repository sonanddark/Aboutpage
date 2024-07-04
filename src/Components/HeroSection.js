// components/HeroSection.js

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentScroll, setCurrentScroll] = useState(0);
    const [clipPercentage, setClipPercentage] = useState(100);
    const [scalePercentage, setScalePercentage] = useState(20);
    const [videoOpacity, setVideoOpacity] = useState(1);
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setCurrentScroll(position);
            const headerEnd = document.querySelector('.hero-container').offsetHeight;

            // Determine current section based on scroll position
            const clippingEnd = headerEnd * 0.55;
            const rowAnimationEnd = headerEnd - window.innerHeight;

            if (position >= headerEnd) {
                setHeroVisible(false);
            } else {
                setHeroVisible(true);

                if (position <= clippingEnd) {
                    const clipValue = 90 - (position / clippingEnd) * 90;
                    setClipPercentage(clipValue);
                    setScalePercentage(1 + (clipValue / 90) * 20);
                    setVideoOpacity(clipValue < 1.4 ? videoOpacity / 2 : 1);
                } else if (position <= rowAnimationEnd) {
                    setClipPercentage(0);
                    setScalePercentage(1);
                } else {
                    setScalePercentage(20);
                    setClipPercentage(90);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videoOpacity]);

    const containerStyle = {
        clipPath: `circle(${clipPercentage}%)`,
        transform: `scale(${scalePercentage})`,
        opacity: videoOpacity
    };

    return (
        <header className={`hero-container sticky ${heroVisible ? '' : 'hide'}`}>
            <div className="video-container" style={containerStyle}>
                <video autoPlay muted loop playsInline>
                    <source src="https://cdn.significo.com/videos/significo-main-hero.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Rest of the component */}
        </header>
    );
};

export default HeroSection;
