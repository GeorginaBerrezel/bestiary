"use client"; // Indique que ce composant doit s'exécuter dans le navigateur
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Product from "@/components/Product";
import Image from "next/image";
import imgProduct from "../../public/pack.png";
import packagingProduct from "../../public/packaging.png";

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
                markers: true, // Pour le débogage, à enlever en production
                pin: true,
                scrub: 1,
            }
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
                        <h2 className="green">REFRESH</h2>
                        <Image src={imgProduct} alt="Image de Produit" layout="fill" objectFit="contain" />
                    </div>
                </div>

                <div className="panel">
                    <div className="inner">
                        <h2> HONRIZONTAL Lorem Ipsum 4</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="inner">
                        <Image src={packagingProduct} alt="Image de Produit" layout="fill" objectFit="contain" />
                    </div>
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
                background-color: #000000;
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
              }

              h2 {
                font-size: 2em; /* Taille du titre */
                margin-bottom: 10px; /* Espace en dessous du titre */
              }

              p {
                font-size: 1.2em; /* Taille uniforme du texte */
              }
            `}</style>
        </div>
    );
};

export default SnappingScroll;
