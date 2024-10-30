"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../public/Sharp_hd.jpg';
import img2 from '../../public/Refresh_hd.jpg';
import img3 from '../../public/Carve.jpg';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const imagesRef = useRef([]); // Tableau pour les références d'images
    const sectionRef = useRef(null); // Référence pour la section

    useEffect(() => {
        gsap.from(imagesRef.current, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1, // La durée totale d'animation d'un élément
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current, // Déclenche l'animation au scroll dans la section
                start: "top 80%", // Démarre l'animation quand le haut de la section est visible à 80%
                scrub: true, // Active le défilement progressif pour une animation fluide
            }
        });
    }, []);

    return (
        <div className="hero-container" ref={sectionRef}>
            <div className="hero-image" ref={el => imagesRef.current[0] = el}>
                <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="hero-image" ref={el => imagesRef.current[1] = el}>
                <Image src={img2} alt="Image 2" layout="fill" objectFit="cover" />
            </div>
            <div className="hero-image" ref={el => imagesRef.current[2] = el}>
                <Image src={img3} alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <style jsx>{`
              .hero-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr); 
                gap: 20px; 
                width: 100%;
                height: 100vh; 
                padding: 20px; 
                background-color: white;
                align-items: center; 
                justify-items: center; 
              }

              .hero-image {
                position: relative; 
                height: 400px; 
                width: 400px; 
                max-width: 100%; 
                overflow: hidden; 
                border-radius: 10px; 
              }
            `}</style>
        </div>
    );
};

export default Hero;
