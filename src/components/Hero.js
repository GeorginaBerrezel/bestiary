"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../public/Refresh-ombrecerbere.png';
import img2 from '../../public/sharp_ombreharpie_illu.png';
import img3 from '../../public/carv_ombregolem_illu.png';
import icon1 from '../../public/refresh-icon.svg'; // Assurez-vous d'avoir un SVG dans le bon chemin.
import icon2 from '../../public/sharp-icon.svg'; // Assurez-vous d'avoir un SVG dans le bon chemin.
import icon3 from '../../public/carve-icon.svg'; // Assurez-vous d'avoir un SVG dans le bon chemin.

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
            <div className="hero-block" ref={el => imagesRef.current[0] = el}>
                <div className="hero-image">
                    <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" />
                </div>
                <div className="info-box">
                    <div className="text-container">
                        <h3>SHARP</h3>
                        <p>Conception Golems</p>
                    </div>
                    <div className="icon">
                        <Image src={icon1} alt="Icon 1" width={50} height={50} />
                    </div>
                </div>
            </div>

            <div className="hero-block" ref={el => imagesRef.current[1] = el}>
                <div className="hero-image">
                    <Image src={img2} alt="Image 2" layout="fill" objectFit="cover" />
                </div>
                <div className="info-box">
                    <div className="text-container">
                        <h3>REFRESH</h3>
                        <p>Conception Cerbères</p>
                    </div>
                    <div className="icon">
                        <Image src={icon2} alt="Icon 2" width={50} height={50} />
                    </div>
                </div>
            </div>

            <div className="hero-block" ref={el => imagesRef.current[2] = el}>
                <div className="hero-image">
                    <Image src={img3} alt="Image 3" layout="fill" objectFit="cover" />
                </div>
                <div className="info-box">
                    <div className="text-container">
                        <h3>CARVE</h3>
                        <p>Conception Harpies</p>
                    </div>
                    <div className="icon">
                        <Image src={icon3} alt="Icon 3" width={50} height={50} />
                    </div>
                </div>
            </div>

            <style jsx>{`
              .hero-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                width: 100%;
                height: 100vh;
                padding: 20px;
                background-color: #F5F5F5;
                align-items: flex-start; /* Align items at the top of each grid cell */
                justify-items: center;
              }

              .hero-block {
                display: flex;
                flex-direction: column; /* Aligner hero-image et info-box en colonne */
                align-items: center; /* Centrer horizontalement */
              }

              .hero-image {
                position: relative;
                height: 540px;
                width: 400px;
                max-width: 100%;
                overflow: hidden;
                border-radius: 0px;
              }

              .info-box {
                border: 1px solid #000000; /* Bordure du cadre */
                padding: 10px; /* Espacement interne */
                background-color: #fff; /* Fond blanc pour le cadre */
                display: flex; /* Maintenir l'info-box en flex */
                justify-content: space-between; /* Espace entre le texte et l'icône */
                align-items: center; /* Alignement vertical centré */
                width: 100%; /* Prendre toute la largeur disponible */
                box-sizing: border-box; /* Inclure la bordure et le padding dans la largeur totale */
                margin-top: 1rem;
              }

              .text-container {
                display: flex; /* Flex pour aligner le titre et le sous-titre */
                flex-direction: column; /* Empiler le titre et le sous-titre */
              }

              .info-box h3 {
                margin: 0; /* Aucune marge */
                font-size: 30px; /* Taille de police pour le titre */
                font-family: 'Helvetica'; /* Appliquer la police JetBrains Mono */
              }

              .info-box p {
                margin: 0; /* Aucune marge */
                font-size: 12px; /* Taille de police pour le sous-titre */
                color: black; /* Couleur pour le sous-titre */
                font-family: 'JetBrains Mono', monospace; /* Appliquer la police JetBrains Mono */
              }

              .icon {
                display: flex; /* Flex pour centrer l'icône */
                align-items: center; /* Centrage vertical */
              }
            `}</style>
        </div>
    );
};

export default Hero;
