"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo-bestiary.svg'; // Remplacez par le logo souhaité

const LogoAnimation = () => {
    const [scale, setScale] = useState(1);
    const [lineHeight, setLineHeight] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        // Ajustez la logique pour contrôler l'agrandissement et la hauteur de la ligne
        setScale(1 + scrollY / 200); // Modifiez le diviseur pour ajuster la vitesse d'agrandissement
        setLineHeight(Math.min(scrollY, 400)); // Limitez la hauteur de la ligne
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className="relative"
                style={{ height: lineHeight, transition: 'height 0.2s' }}
            >
                <div
                    className="absolute left-0 right-0 bg-black"
                    style={{ height: '4px', transform: `translateY(${lineHeight}px)`, transition: 'transform 0.2s' }}
                />
            </div>
            <Image
                src={logo}
                alt="Logo"
                width={500 * scale} // Ajustez selon vos besoins
                height={500 * scale}
                style={{ transition: 'transform 0.2s' }}
            />
        </div>
    );
};

export default LogoAnimation;
