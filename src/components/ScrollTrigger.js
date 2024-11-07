"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import image1 from '../../public/carv_sansfond.png';
import image2 from '../../public/monsters-frame.png';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);

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

        // Animation des accordions qui arrivent de manière séquentielle
        gsap.utils.toArray(".accordion").forEach((accordion) => {
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
                        start: "top 80%",
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
                    <div className="intro-text">
                        <p>
                            Bestiary est une marque engagée qui valorise l'inclusion des monstres au sein de notre société.
                            Des produits innovants qui favorisent le bien vivre ensemble, parce que chaque individu
                            mérite d'être reconnu et valorisé.
                        </p>
                    </div>
                    <div ref={image1Ref} className="parallax-image image1">
                        <Image src={image1} alt="Image 1" width={700} height={700} />
                    </div>
                </div>

                <div ref={image2Ref} className="parallax-image image2">
                    <Image src={image2} alt="Image 2" width={500} height={500} />
                </div>

                <div className="accordions">
                    <div className="accordion">
                        <div className="title">
                            <h2 className="title-number">01</h2>
                            <p>Technologie optimisée</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <h2 className="title-number">02</h2>
                            <p>Matériaux adaptés</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <h2 className="title-number">03</h2>
                            <p>Conçu pour chaque créature</p>
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
                width: 60%;
                margin: 0 auto;
                position: relative;
              }

              .intro {
                text-align: left;
                padding: 20px;
                width: 100%;
              }

              .intro h2 {
                font-size: 36px;
                text-transform: uppercase;
                text-align: center;
                margin-bottom: 10px;
                color: #000;
                width: 600px;
              }

              .intro-text {
                width: 50%;
                text-align: left;
                margin-top: 5rem;
              }

              .intro-text p {
                font-size: 18px;
                color: rgba(0, 0, 0, 0.7);
              }

              .parallax-image {
                position: absolute;
                width: 800px;
                height: 800px;
              }

              .image1 {
                top: 10%;
                left: 40%;
                z-index: -1;
              }

              .image2 {
                top: 90%;
                left: -20%;
                transform: translateY(-50%);
              }

              .accordions {
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 20vh;
              }

              .title {
                font-size: 24px;
                line-height: 1.1;
                text-align: center;
                padding: 10px;
              }

              .title-number {
                font-weight: bold;
                font-size: 188px;
                color: #11FF00;
                margin-bottom: 5px;
              }

              .accordion {
                width: 100%;
                padding: 25px 30px 10px;
                margin-bottom: 40px;
              }
            `}</style>
        </div>
    );
};

export default ScrollTriggerComponent;
