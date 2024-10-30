// components/ScrollingText.js
"use client"; // Assurez-vous d'utiliser le mode client si vous manipulez le DOM directement
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const races = textRef.current; // Référence à l'élément de texte
        const totalWidth = races.scrollWidth; // Largeur totale du texte
        const windowWidth = window.innerWidth; // Largeur de la fenêtre

        // Fonction pour calculer le montant du défilement
        function getScrollAmount() {
            return -(totalWidth - windowWidth);
        }

        // Animation avec GSAP
        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        // Création du ScrollTrigger
        ScrollTrigger.create({
            trigger: races.parentElement, // Le conteneur parent
            start: "top 20%",
            end: () => `+=${getScrollAmount() * -1}`, // Utilise la fonction pour définir la fin
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: true // Pour le débogage, à enlever en production
        });

        return () => {
            // Nettoyage lorsque le composant est démonté
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <div ref={textRef} style={{ whiteSpace: 'nowrap', width: '100%' }}>
            <h2 style={{ display: 'inline-block', fontSize: '5rem' }}>Ceci est un texte défilant vraiment énorme. | </h2>
        </div>
    );
};

export default ScrollingText;
