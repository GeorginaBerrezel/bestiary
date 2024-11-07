"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Importer Image
import background from '../../public/pack.png';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const textRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const races = textRef.current;

        function getScrollAmount() {
            return -(races.scrollWidth - window.innerWidth);
        }

        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        // Rafraîchir ScrollTrigger lors du redimensionnement pour s'assurer que les valeurs restent à jour
        ScrollTrigger.refresh();
    }, []);

    return (
        <>
            <div className="space-50vh lightBG"></div>
            <div className="stickyTextWrapper" ref={wrapperRef}>
                <Image
                    src={background}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="backgroundImage"
                />
                <div className="stickyTexts" ref={textRef}>
                    <h2>POUR LES MONSTRES PAR LES HUMAINS</h2>
                </div>
            </div>
            <div className="space-100vh lightBG"></div>

            <style jsx>{`
              .space-50vh,
              .space-100vh {
                height: 50vh;
                background-color: #f0f0f0;
              }

              .stickyTextWrapper {
                position: relative;
                width: 100%;
                height: 100vh;
                overflow: hidden; /* Assure que le texte reste dans les limites */
              }

              .backgroundImage {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: auto;
                z-index: -1;
              }

              .stickyTexts {
                position: absolute;
                white-space: nowrap; /* Empêche le texte de se casser sur plusieurs lignes */
                z-index: 1;
                top: 50%; /* Centrer verticalement */
                transform: translateY(-50%); /* Centrer précisément */
                font-size: 3rem;
                color: #000;
                padding: 0 20px;
              }
            `}</style>
        </>
    );
};

export default ScrollingText;
