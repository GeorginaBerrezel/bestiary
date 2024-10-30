"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Importer Image
import background from '../../public/pack.png';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const races = document.querySelector(".stickyTexts");

        function getScrollAmount() {
            let racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }

        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: ".stickyTextWrapper",
            start: "top 10%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });
    }, []);

    return (
        <>
            <div className="space-50vh lightBG"></div>
            <div className="stickyTextWrapper">
                <Image
                    src={background}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="backgroundImage"
                />
                <div className="stickyTexts">
                    <h2>POUR LES MONSTRES PAR LES HUMAINS</h2>
                </div>
            </div>
            <div className="space-100vh lightBG"></div>

            <style jsx>{`
                .stickyTextWrapper {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                }

                .backgroundImage {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                .stickyTexts {
                    position: relative;
                    z-index: 1;
                    /* Styles pour le texte */
                }
            `}</style>
        </>
    );
};

export default ScrollingText;
