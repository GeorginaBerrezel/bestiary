"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '../../public/bestiary-logo.svg';
import logo2 from '../../public/bestiary-logo-1.svg';
import logo3 from '../../public/bestiary-logo-2.svg';
import logo4 from '../../public/bestiary-logo-3.svg';
import logo5 from '../../public/bestiary-logo-4.svg';
import logo6 from '../../public/bestiary-logo-5.svg';
import logo7 from '../../public/bestiary-logo-6.svg';
import logo8 from '../../public/bestiary-logo-7.svg';
import logo9 from '../../public/bestiary-logo-8.svg';
import logo10 from '../../public/bestiary-logo-9.svg';
import logo11 from '../../public/bestiary-logo-10.svg';
import logo12 from '../../public/bestiary-logo-11.svg';

const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12
];

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalLogos = logos.length;

    const handleScroll = () => {
        // Calculez l'index basé sur la position du scroll
        const scrollY = window.scrollY;
        const newIndex = Math.min(Math.floor(scrollY / 100), totalLogos - 1); // Ajustez le diviseur pour contrôler la vitesse

        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex]);

    return (
        <div className="flex justify-center items-center">
            <Image
                src={logos[currentIndex]}
                alt={`Logo ${currentIndex + 1}`}
                width={500} // Ajustez selon vos besoins
                height={500}
            />
        </div>
    );
};

export default LogoCarousel;
