"use client";

import React from 'react';
import Image from 'next/image';
import img1 from '../../public/monsters.svg'; // Vérifiez que le chemin est correct

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-image">
                <Image src={img1} alt="Image 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <style jsx>{`
                .hero-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100vh; /* Ajuste la hauteur selon tes besoins */
                    overflow: hidden; /* Cache tout débordement */
                    position: relative; /* Nécessaire pour positionner l'image */
                }

                .hero-image {
                    position: relative; /* Nécessaire pour l'utilisation de layout="fill" */
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default Hero;
