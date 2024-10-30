"use client"; // Indique que ce composant doit s'exécuter dans le navigateur
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Product from "@/components/Product";
import Image from "next/image";
import imgProduct from "../../public/pack.png";
import packagingProduct from "../../public/packaging.png";
import reelProduct from "../../public/Refresh_hd.jpg";
import etiquette from "../../public/close-up-refresh-etiquette.png";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import description1 from "../../public/description1.png";
import description2 from "../../public/description2.png";
import description3 from "../../public/description3.png";
import avis1 from "../../public/avis1.png";
import avis2 from "../../public/avis2.png";
import avis3 from "../../public/avis3.png";


gsap.registerPlugin(ScrollTrigger);

const SnappingScroll = () => {
    useEffect(() => {
        // Sections et snapping vertical
        let sections = gsap.utils.toArray('section');

        ScrollTrigger.create({
            start: 0,
            end: "max",
        });

        // ScrollTrigger horizontal dans la section ".container"
        let panels = gsap.utils.toArray(".container .panel");
        let panelTween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: "+=" + (window.innerWidth * panels.length),
                pin: true,
                scrub: 1,
            }
        });

        // Animation de parallaxe pour les textes de la première section
        const textElements = gsap.utils.toArray(".panel .text");
        textElements.forEach((text, index) => {
            gsap.from(text, {
                y: 50, // Fait apparaître le texte depuis le bas
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%", // Début de l'animation quand le texte est à 80% de la hauteur de la fenêtre
                    toggleActions: "play none none reverse", // Joue l'animation lorsque l'élément entre dans la vue
                }
            });
        });

    }, []);

    return (
        <div id="main" style={{overflow: 'hidden'}}>
            <section>
                <Product/>
            </section>

            <section className="container">
                <div className="panel">
                    <div className="inner">
                        <h2 className="green"
                            style={{position: 'absolute', bottom: '5%', left: '10%', zIndex: '1'}}>REFRESH</h2>
                        <Image src={reelProduct} alt="Image de Produit" layout="fill" objectFit="contain"/>
                        <p className="text" style={{position: 'absolute', top: '20%', left: '60%', width: '30%'}}>Notre
                            parfum extincteur spécialement conçu pour Cerbère. Offre une sensation de fraîcheur intense
                            tout en permettant de contrôler vos flammes intérieurs.</p>
                        <p className="text"
                           style={{position: 'absolute', bottom: '10%', left: '70%', width: '30%'}}>Chaque Cerbère peut
                            exprimer sa personnalité tout en facilitant sa sociabilité avec les autres. Dans les
                            profondeurs du monde souterrain, vous êtes confronté à des températures extrêmes.</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="inner">
                        <p className="text" style={{position: 'absolute', top: '5%', left: '5%', width: '30%'}}>Brosse à
                            dent</p>
                        <Image src={packagingProduct} alt="Image de Produit" objectFit="contain" width={500}
                               height={500} style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}/>
                        <p className="text" style={{position: 'absolute', top: '5%', left: '60%', width: '30%'}}>Ces
                            dimensions ont été soigneusement pensées pour une manipulation facile, assurant une
                            application efficace sur chacune de ses trois têtes.</p>
                        <p className="text"
                           style={{position: 'absolute', bottom: '5%', left: '5%', width: '30%'}}>Taille parfaite</p>
                        <p className="text"
                           style={{position: 'absolute', bottom: '5%', right: '5%', width: '30%'}}>prix: 1500€</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="inner">
                        <p className="text" style={{position: 'absolute', top: '5%', left: '5%', width: '30%'}}>En 3
                            étapes</p>
                        <div className="steps-container">
                            <Image src={step1} alt="Étape 1" objectFit="contain"/>
                            <Image src={step2} alt="Étape 2" objectFit="contain"/>
                            <Image src={step3} alt="Étape 3" objectFit="contain"/>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="inner">
                        <Image src={etiquette} alt="Image de Produit" layout="fill" objectFit="contain"/></div>
                    <div className="block-description">
                        <Image src={description1} alt="Étape 1" objectFit="contain"/>
                        <Image src={description2} alt="Étape 1" objectFit="contain"/>
                        <Image src={description3} alt="Étape 1" objectFit="contain"/>
                    </div>

                </div>
                <div className="panel">
                    <div className="inner">
                        <h2
                            style={{position: 'absolute', bottom: '5%', left: '10%', zIndex: '1'}}>Avis</h2>

                        <div className="block-description">
                            <Image src={avis1} alt="Étape 1" objectFit="contain" style={{
                                width: '30%',
                                position: 'absolute',
                                top: '20%',
                                left: '20%',
                                transform: 'translate(-50%, -50%)'
                            }}/>
                            <Image src={avis2} alt="Étape 1" objectFit="contain" style={{
                                width: '30%',
                                position: 'absolute',
                                top: '40%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}/>
                            <Image src={avis3} alt="Étape 1" objectFit="contain" style={{
                                width: '30%',
                                position: 'absolute',
                                top: '60%',
                                left: '70%',
                                transform: 'translate(-50%, -50%)'
                            }}/>
                        </div>

                    </div>
                </div>
                <div className="panel">
                    <div className="inner">
                        <Image src={etiquette} alt="Image de Produit" layout="fill" objectFit="contain"/></div>
                </div>

            </section>

            <section>
                <div className="panel">
                    <div className="inner">
                        <h2>Lorem Ipsum 6</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
              section {
                height: 100vh;
                width: 100vw;
              }

              .container {
                position: relative;
                display: flex;
                flex-direction: row;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                color: white;
                background-color: black;
              }

              .panel {
                width: 100vw;
                height: 100%;
                display: flex;
                background-color: white;
                position: relative; /* Nécessaire pour la position absolue des éléments internes */
              }

              .green {
                color: #11FF00; /* Liens en vert */
              }

              .inner {
                width: 100vw;
                display: flex;
                flex-direction: column;
                align-items: flex-start; /* Aligner le texte à gauche */
                justify-content: center;
                padding: 20px;
                text-align: left; /* Aligner le texte à gauche */
                color: black; /* Changement de la couleur du texte en noir */
                position: relative; /* Nécessaire pour que les éléments positionnés absolument soient en rapport avec cet élément */
              }

              h2 {
                font-size: 140px; /* Taille du titre */
                margin-bottom: 10px; /* Espace en dessous du titre */
                font-weight: bolder;
              }

              p {
                font-size: 18px; /* Taille uniforme du texte */
              }

              .block-description {
                display: block;
                margin-right: 5rem;
              }
            `}</style>
        </div>
    );
};

export default SnappingScroll;
