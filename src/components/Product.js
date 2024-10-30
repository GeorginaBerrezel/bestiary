"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import imgProduct from '../../public/pack.png'; // Assurez-vous d'avoir une image de produit à cet emplacement.

const Product = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textBlock1Ref = useRef(null);
    const textBlock2Ref = useRef(null);

    useEffect(() => {
        // Animation de parallaxe
        gsap.from(titleRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.from(textBlock1Ref.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        gsap.from(textBlock2Ref.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    }, []);

    return (
        <div ref={sectionRef} className="product-container">
            <div className="top-links">
                <a href="#" className="link white">Inclusif</a>
                <a href="#" className="link green">Clean</a>
                <a href="#" className="link white">Ethique</a>
            </div>
            <div className="middle-section">
                <h1 ref={titleRef} className="title">L’essentiel, pour une hygiène de vie <span className="green">optimisée.</span></h1>
                <div className="image-container">
                    <Image src={imgProduct} alt="Image de Produit" layout="fill" objectFit="contain" />
                </div>
                <div ref={textBlock1Ref} className="text-block block1">Texte Block 1</div>
                <div ref={textBlock2Ref} className="text-block block2">Texte Block 2</div>
            </div>
            <style jsx>{`
                .product-container {
                    background-color: black; /* Fond noir intégral */
                    color: white; /* Couleur du texte par défaut */
                    height: 100vh; /* Hauteur de la section */
                    width: 100vw;
                    position: relative; /* Nécessaire pour le positionnement absolu */
                }

                .top-links {
                    display: grid; /* Flex pour aligner les liens horizontalement */
                    justify-content: space-around; /* Espacement entre les liens */
                  text-align: center;
                    padding: 20px; /* Espacement interne */
                    background-color: black; /* Fond noir pour les liens */
                }

                .link {
                    text-decoration: none; /* Pas de soulignement */
                    font-size: 20px; /* Taille de police pour les liens */
                  text-transform: uppercase;
                }

                .white {
                    color: white; /* Liens en blanc */
                }

                .green {
                    color: #11FF00; /* Liens en vert */
                }

                .middle-section {
                    position: relative; /* Nécessaire pour positionner les éléments internes */
                    height: calc(100vh - 60px); /* Hauteur restante après les liens */
                    display: flex; /* Utiliser flexbox pour centrer le contenu */
                    justify-content: center; /* Centrer horizontalement */
                    align-items: center; /* Centrer verticalement */
                    flex-direction: column; /* Alignement vertical des éléments */
                }

                .title {
                    position: absolute; /* Positionné en haut */
                    top: 20px; /* Espace en haut */
                    left: 50%; /* Centrer horizontalement */
                  text-transform: uppercase;
                  text-align: center;
                  color:white;
                    transform: translateX(-50%); /* Ajuster le centrage */
                    font-size: 36px; /* Taille du titre */
                }

                .image-container {
                    position: relative; /* Nécessaire pour le positionnement de l'image */
                    height: 300px; /* Hauteur de l'image */
                    width: 100%; /* Prendre toute la largeur disponible */
                    max-width: 600px; /* Largeur maximale de l'image */
                    overflow: hidden; /* Masquer les débordements */
                }

                .text-block {
                    position: absolute; /* Positionnement absolu pour superposer le texte */
                    color: white; /* Couleur du texte */
                    font-size: 24px; /* Taille de police pour les blocs de texte */
                }

                .block1 {
                    bottom: 100px; /* Positionnement en bas du conteneur */
                    left: 50%; /* Centrer horizontalement */
                    transform: translateX(-50%); /* Ajuster le centrage */
                }

                .block2 {
                    bottom: 50px; /* Positionnement en bas du conteneur */
                    left: 50%; /* Centrer horizontalement */
                    transform: translateX(-50%); /* Ajuster le centrage */
                }
            `}</style>
        </div>
    );
};

export default Product;
