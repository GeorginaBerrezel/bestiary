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
                    {/* Nouvelle div pour le paragraphe */}
                    <div className="intro-text">
                        <p>
                            Bestiary est une marque engagée qui valorise l'inclusion des monstres au sein de notre société.
                            Des produits innovants qui favorisent le bien vivre ensemble, parce que chaque individu
                            mérite d'être reconnu et valorisé.
                        </p>
                    </div>
                    {/* Image 1 positionnée à droite */}
                    <div ref={image1Ref} className="parallax-image image1">
                        <Image src={image1} alt="Image 1" width={800} height={800} />
                    </div>
                </div>

                {/* Image 2 positionnée à gauche */}
                <div ref={image2Ref} className="parallax-image image2">
                    <Image src={image2} alt="Image 2" width={800} height={800} />
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
                position: relative; /* Position relative pour que les enfants absolus soient positionnés correctement */
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

              .intro-text {
                width: 50%; /* Largeur à 50% pour le paragraphe */
                text-align: left; /* Alignement à gauche */
                margin-top: 5rem;
                // margin: 0 auto; /* Centre horizontalement */
              }

              .intro-text p {
                font-size: 18px;
                color: rgba(0, 0, 0, 0.7);
              }

              .parallax-images {
                position: relative; /* Position relative pour le conteneur d'images */
                height: 400px; /* Ajustez la hauteur selon vos besoins */
                overflow: hidden; /* Assurez-vous que les images restent à l'intérieur */
              }

              .parallax-image {
                position: absolute; /* Position absolue pour chaque image */
                width: 800px;
                height: 800px;
              }

              .image1 {
                top: 0%; /* Positionnez l'image 1 en haut */
                left: 40%; /* Positionnez à droite */
                z-index: -1;
              }

              .image2 {
                top: 70%; /* Positionnez l'image 2 au milieu */
                left: -30%; /* Positionnez à gauche */
                transform: translateY(-50%); /* Ajuste le centrage vertical */
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
