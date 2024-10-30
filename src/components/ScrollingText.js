"use client"; // Assurez-vous d'utiliser le mode client si vous manipulez le DOM directement
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const races = textRef.current; // Référence à l'élément de texte
        const racesWidth = races.scrollWidth; // Largeur totale du texte
        const windowWidth = window.innerWidth; // Largeur de la fenêtre

        // Fonction pour calculer le montant du défilement
        const getScrollAmount = () => -(racesWidth - windowWidth);

        // Animation avec GSAP
        const tween = gsap.to(races, {
            x: getScrollAmount, // Défilement vers la gauche
            duration: 3,
            ease: "none",
        });

        // ScrollTrigger
        ScrollTrigger.create({
            trigger: ".racesWrapper", // Le conteneur parent
            start: "top 20%", // Démarrer quand le haut du conteneur est à 20% de la hauteur de la fenêtre
            // end: () => `+=${Math.abs(getScrollAmount())}`, // Fin de l'animation
            pin: true, // Active l'effet de pin
            animation: tween, // L'animation à jouer
            scrub: 1, // Synchronise l'animation avec le défilement
            invalidateOnRefresh: true, // Invalide le trigger lors du rafraîchissement de la page
            markers: true, // Pour le débogage, à enlever en production
        });

        return () => {
            // Nettoyage lorsque le composant est démonté
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Détruire tous les ScrollTriggers
        };
    }, []);

    return (
        <div className="racesWrapper" style={{ overflow: 'hidden', position: 'relative' }}> {/* Ajout d'un conteneur pour cacher le débordement */}
            <div ref={textRef} style={{ whiteSpace: 'nowrap', width: 'max-content' }}>
                <h2 style={{ display: 'inline-block', fontSize: '5rem' }}>PAR LES HUMAINS, POUR LES MONSTRES</h2>
            </div>
        </div>
    );
};

export default ScrollingText;
