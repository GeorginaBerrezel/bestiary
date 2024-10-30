"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import image1 from '../../public/pack.png';
import image2 from '../../public/pack.png';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const accordionsRef = useRef([]); // Références pour les accordions

    useEffect(() => {
        // Animation de parallaxe pour les images
        gsap.to(image1Ref.current, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
                trigger: ".accordions",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.to(image2Ref.current, {
            y: "20%",
            ease: "none",
            scrollTrigger: {
                trigger: ".accordions",
                start: "top bottom",
                scrub: true,
            },
        });

        // Animation des accordions qui arrivent les uns après les autres
        gsap.utils.toArray(".accordion").forEach((accordion, index) => {
            gsap.fromTo(
                accordion,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: accordion,
                        start: "top 80%", // Lancement de l'animation lorsqu'il atteint 80% de la fenêtre
                        end: "bottom top",
                        scrub: true,
                        markers: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div id="wrapper">
            <div id="content">
                <div className="intro">
                    <h2>L'inclusion commence par la manière dont nous parlons au Monde</h2>
                    <p>
                        Bestiary est une marque engagée qui valorise l'inclusion des monstres au sein de notre société.
                        Des produits innovants qui favorisent le bien vivre ensemble, parce que chaque individu
                        mérite d'être reconnu et valorisé.
                    </p>
                </div>

                {/* Images avec parallaxe */}
                <div className="parallax-images">
                    <div ref={image1Ref} className="parallax-image">
                        <Image src={image1} alt="Image 1" width={300} height={300} />
                    </div>
                </div>

                <div className="accordions">
                    {/* Accordions */}
                    <div className="accordion" ref={el => accordionsRef.current[0] = el}>
                        <div className="title">
                            <h2 className="title-number">01</h2>
                            <p>Technologie utilisée</p>
                        </div>
                    </div>
                    <div className="accordion" ref={el => accordionsRef.current[1] = el}>
                        <div className="title">
                            <h2 className="title-number">02</h2>
                            <p>Matériaux adaptés</p>
                        </div>
                    </div>
                    <div className="accordion" ref={el => accordionsRef.current[2] = el}>
                        <div className="title">
                            <h2 className="title-number">03</h2>
                            <p>Exclusif pour chaque créature</p>
                        </div>
                    </div>
                </div>
                <div className="parallax-images">
                    <div ref={image2Ref} className="parallax-image">
                        <Image src={image2} alt="Image 2" width={300} height={300} />
                    </div>
                </div>
            </div>

            <style jsx>{`
              body {
                margin: 0;
                background: #fff;
                font-family: 'Helvetica', sans-serif;
                scroll-behavior: none;
              }

              #content {
                width: 60%; /* Réduit la largeur du conteneur */
                margin: 0 auto; /* Centre le contenu */
              }

              .intro {
                text-align: left;
                padding: 20px;
              }

              .intro h2 {
                font-size: 36px;
                text-transform: uppercase;
                text-align: center;
                margin-bottom: 10px;
                color: #000;
              }

              .intro p {
                font-size: 18px;
                color: rgba(0, 0, 0, 0.7);
              }

              .parallax-images {
                display: flex;
                justify-content: space-around;
                margin-top: 50px;
                position: relative;
                height: 400px;
              }

              .parallax-image {
                width: 300px;
                height: 300px;
                overflow: hidden;
              }

              .accordions {
                width: 100%; /* Prend toute la largeur du conteneur */
                position: relative;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center; /* Centre les accordions */
                padding-bottom: 20vh;
              }

              .title {
                font-size: 24px; /* Ajusté pour un texte plus petit */
                line-height: 1.1;
                text-align: center; /* Centre le texte des titres */
                padding: 10px; /* Un peu d'espace autour du texte */
              }

              .title-number {
                font-weight: bold;
                font-size: 188px;
                color: #11FF00; /* Chiffres en vert */
                margin-bottom: 5px; /* Un peu d'espace entre le chiffre et le texte */
              }

              .accordion {
                width: 100%;
                padding: 25px 30px 10px;
                margin-bottom: 40px;
                /* Suppression des traits de séparation */
              }

              .spacer {
                height: 10vh;
              }
            `}</style>
        </div>
    );
};

export default ScrollTriggerComponent;
