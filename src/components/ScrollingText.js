"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const races = document.querySelector(".stickyTexts");
        console.log(races.offsetWidth);

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
            markers: true,
        });
    }, []);

    return (
        <>
            <div className="space-50vh lightBG"></div>
            <div className="stickyTextWrapper">
                <div className="redsquare"></div>
                <div className="stickyTexts">
                    <h2>POUR LES MONSTRES PAR LES HUMAINS</h2>
                </div>
            </div>
            <div className="space-100vh lightBG"></div>
        </>
    );
};

export default ScrollingText;