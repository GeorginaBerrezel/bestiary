"use client";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
    useEffect(() => {
        // Timeline pour gérer l'animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".accordions", // Pin seulement à partir de la section des accordions
                pin: true,
                scrub: 1,
                start: "top top", // Commence au début de l'accordion
                end: "+=500", // Ajustez la durée du pin ici
                ease: "linear",
                markers: true,
            },
        });

        // Animation des textes dans les accordions
        tl.to(".accordion .text", {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: 0.5,
        });

        tl.to(
            ".accordion",
            {
                marginBottom: -15,
                stagger: 0.5,
            },
            "<"
        );

        // Gestion des clics sur les accordions
        const items = document.querySelectorAll(".accordion");
        items.forEach((item, i) => {
            item.addEventListener("click", function () {
                gsap.to(window, {
                    scrollTo: tl.scrollTrigger.labelToScroll(`label${i + 1}`),
                    duration: 1,
                });
            });
        });

        return () => {
            items.forEach((item) => {
                item.replaceWith(item.cloneNode(true));
            });
        };
    }, []);

    return (
        <div id="wrapper">
            <div id="content">
                {/* Ajout du titre et du texte ici */}
                <div className="intro">
                    <h2>L'inclusion commence par la manière dont nous parlons au Monde</h2>
                    <p>
                        Bestiary est une marque engagée qui valorise l'inclusion des monstres au sein de notre société.
                        Des produits innovants qui favorisent le bien vivre ensemble, parce que chaque individu
                        mérite d'être reconnu et valorisé.
                    </p>
                </div>

                <div className="spacer"></div>

                <div className="accordions">
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">001</span>
                            <span>Technologie utilisé</span>
                        </div>
                        <div className="text">
                            Des solutions techniques de pointe, adaptées aux particularités uniques de chaque monstre,
                            pour un soin efficace et précis.
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">002</span>
                            <span>Matériaux adaptés</span>
                        </div>
                        <div className="text">
                            Des matériaux sélectionnés avec soin pour leur durabilité
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">003</span>
                            <span>Exclusif pour chaque créature</span>
                        </div>
                        <div className="text">
                            Des produits sur-mesure, conçus pour répondre aux besoins uniques de chaque monstre
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

              .intro {
                width: 70%; /* Prend 70% de la largeur depuis la gauche */
                text-align: left;
                padding: 20px; /* Ajout d'un peu d'espace autour */
                margin: 0 auto; /* Centre le conteneur */
              }

              .intro h2 {
                font-size: 36px; /* Taille du titre */
                margin-bottom: 10px; /* Espace sous le titre */
                color: #000; /* Couleur du titre */
              }

              .intro p {
                font-size: 18px; /* Taille du texte descriptif */
                color: rgba(0, 0, 0, 0.7); /* Couleur du texte */
              }

              .accordions {
                width: 80%; /* Prend 70% de la largeur depuis la droite */
                position: relative; /* Positionne par rapport à son conteneur */
                right: 0; /* Aligne à droite */
                display: flex;
                flex-direction: column;
                align-items: stretch;
                padding-bottom: 20vh;
              }

              .title {
                font-size: 70px; /* H2 */
                line-height: 1.1;
                padding-bottom: 0.4em;
                color: rgb(0, 0, 0);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
              }

              .title-number {
                font-weight: bold;
                font-size: 40px; /* H3 */
                color: rgba(0, 0, 0, 0.5);
              }

              .text {
                font-size: 17px; /* Texte courant */
                line-height: 1.4;
                overflow: hidden;
                padding-bottom: 20px;
                color: rgba(0, 0, 0, 0.7);
              }

              .accordion {
                width: 100%;
                padding: 25px 30px 10px;
                border-radius: 0;
                margin-bottom: 40px;
                border-bottom: 2px solid #ccc;
              }

              .spacer {
                height: 10vh;
              }

              @media (max-width: 480px) {
                .accordion {
                  padding: 15px 20px 8px;
                }

                .title {
                  font-size: 20px; /* Ajustement pour mobile */
                }
              }
            `}</style>
        </div>
    );
};

export default ScrollTriggerComponent;
