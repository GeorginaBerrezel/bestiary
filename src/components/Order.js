"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import orderImage from '../../public/pack.png';
import waterImage from '../../public/fondu-image-order.png'; // Remplacez par l'image de l'effet
import CTARegular from "@/components/CtaRegular";

const Order = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Animation de l'entrée avec GSAP
        gsap.from([titleRef.current, subtitleRef.current, buttonRef.current], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="order-container">
            <div className="text-section">
                <h1 ref={titleRef} className="title">Refresch</h1>
                <h2 ref={subtitleRef} className="subtitle">LE PARFUM GLACIAL DE CERBÈRE
                    POUR RESTER FRAIS PLUS LONGTEMPS</h2>
                <CTARegular text="Précommander" />
            </div>
            <div className="image-section">
                <div className="image-container">
                    <Image src={orderImage} alt="Image de commande" layout="fill" objectFit="cover" className="image" />
                    <Image src={waterImage} alt="Effet de mélange" layout="fill" objectFit="cover" className="water-effect" />
                </div>
            </div>
            <style jsx>{`
                .order-container {
                    display: flex;
                    height: 100vh; /* Hauteur de la section */
                    width: 100vw;
                    position: relative;
                    background-color: black; /* Couleur de fond */
                    color: white; /* Couleur du texte */
                }
                .text-section {
                    display: flex;
                    flex-direction: column; /* Alignement vertical */
                    justify-content: center; /* Centrer verticalement */
                    align-items: flex-start; /* Aligner à gauche */
                    padding: 20px; /* Espacement interne */
                    z-index: 10; /* Pour que le texte soit au-dessus de l'image */
                    width: 50%; /* Occupation de la moitié gauche */
                }
                .title {
                    font-size: 36px;
                }
                .subtitle {
                    font-size: 24px;
                    margin-top: 10px;
                }
                .image-section {
                    position: relative;
                    height: 100%; /* Hauteur à 100% pour occuper toute la section */
                    width: 50%; /* Largeur à 50% pour occuper la moitié droite */
                }
                .image-container {
                    position: relative;
                    width: 80%;
                    height: 80%;
                    overflow: hidden; /* Masquer les débordements */
                }
                .image {
                    position: relative; /* Positionner l'image principale */
                    z-index: 1; /* Mettre l'image principale au-dessus */
                }
                .water-effect {
                    position: absolute; /* Positionnement absolu pour superposer */
                    top: 0;
                    left: 0;
                    opacity: 0; /* Initialement invisible */
                    z-index: 2; /* Au-dessus de l'image principale */
                    transition: opacity 0.5s; /* Transition d'opacité */
                }
                .image-container:hover .water-effect {
                    opacity: 1; /* Affiche l'effet au survol */
                }
            `}</style>
        </div>
    );
};

export default Order;
