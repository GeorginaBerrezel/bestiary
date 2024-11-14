"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../public/Refresh-ombrecerbere.png';
import img2 from '../../public/sharp_ombreharpie_illu.png';
import img3 from '../../public/carv_ombregolem_illu.png';
import icon1 from '../../public/refresh-icon.svg';
import icon2 from '../../public/sharp-icon.svg';
import icon3 from '../../public/carve-icon.svg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const imagesRef = useRef([]); // Tableau pour les références d'images
    const sectionRef = useRef(null); // Référence pour la section

    useEffect(() => {
        gsap.from(imagesRef.current, {
            opacity: 0,
            // y: 50,
            stagger: 0.3, // Augmenter le décalage entre les éléments
            duration: 1,  // Augmenter la durée d'animation pour ralentir
            ease: "power1.out", // Utiliser un easing plus progressif
            scrollTrigger: {
                trigger: sectionRef.current, // Déclenche l'animation au scroll dans la section
                start: "top 100%", // Démarre l'animation quand le haut de la section est visible à 50%
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
                        <h3>REFRESH</h3>
                        <p>Conception Cerbères</p>
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
                        <h3>SHARP</h3>
                        <p>Conception Harpies</p>
                    </div>
                    <div className="icon">
                        <Image src={icon3} alt="Icon 3" width={50} height={50} />
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
                        <p>Conception Golems</p>
                    </div>
                    <div className="icon">
                        <Image src={icon2} alt="Icon 2" width={50} height={50} />
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
                align-items: flex-start;
                justify-items: center;
              }

              .hero-block {
                display: flex;
                flex-direction: column;
                align-items: center;
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
                border: 1px solid #000000;
                padding: 10px;
                background-color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                margin-top: 1rem;
              }

              .text-container {
                display: flex;
                flex-direction: column;
              }

              .info-box h3 {
                margin: 0;
                font-size: 30px;
                font-family: 'Helvetica';
              }

              .info-box p {
                margin: 0;
                font-size: 12px;
                color: black;
                font-family: 'JetBrains Mono', monospace;
              }

              .icon {
                display: flex;
                align-items: center;
              }

              /* Responsive */
              @media (max-width: 1024px) {
                .hero-container {
                  grid-template-columns: repeat(2, 1fr);
                }
              }

              @media (max-width: 768px) {
                .hero-container {
                  grid-template-columns: 1fr;
                  height: auto; /* Ajuste la hauteur pour que la grille s'adapte mieux */
                }

                .hero-image {
                  height: 300px; /* Réduit la hauteur des images pour mieux s'adapter */
                }
              }
            `}</style>
        </div>
    );
};

export default Hero;
