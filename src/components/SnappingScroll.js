"use client"; // Indique que ce composant doit s'exécuter dans le navigateur
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Product from "@/components/Product";
import Image from "next/image";
import packagingProduct from "../../public/packaging.png";
import reelProduct from "../../public/Refresh_hd.jpg";
import etiquette from "../../public/close-up-refresh-etiquette.png";
import step1 from "../../public/step1-refresh.png";
import step2 from "../../public/step2-refresh.png";
import step3 from "../../public/step3-refresh.png";
import description1 from "../../public/description1.png";
import description2 from "../../public/description2.png";
import description3 from "../../public/description3.png";
import avis1 from "../../public/avis1.png";
import avis2 from "../../public/avis2.png";
import avis3 from "../../public/avis3.png";
import packagingAll from "../../public/packaging-all.jpg";
import Vote from "@/components/Vote";


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
                        <Image src={packagingProduct} alt="Image de Produit" objectFit="contain" width={700}
                               height={700} style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}/>
                        <p className="text" style={{position: 'absolute', top: '5%', left: '70%', width: '25%'}}>Ces
                            dimensions ont été soigneusement pensées pour une manipulation facile, assurant une
                            application efficace sur chacune de ses trois têtes.</p>

                        <div className="detail-product"
                             style={{position: 'absolute', width: '325px', bottom: '5%', left: '5%', fontSize: '18px'}}>
                            <table style={{width: '100%'}}>
                                <tbody>
                                <tr>
                                    <td style={{padding: '5px'}}><strong>Taille parfaites</strong></td>
                                </tr>
                                <tr style={{borderBottom: '1px solid black'}}>
                                    <td style={{padding: '5px'}}>Hauteur :</td>
                                    <td style={{padding: '5px', textAlign: 'right'}}>45CM</td>
                                </tr>
                                <tr style={{borderBottom: '1px solid black'}}>
                                    <td style={{padding: '5px'}}>Diamètre :</td>
                                    <td style={{padding: '5px', textAlign: 'right'}}>18CM</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>Capacité :</td>
                                    <td style={{padding: '5px', textAlign: 'right'}}>3L</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>


                        <p className="text" style={{
                            position: 'absolute',
                            bottom: '5%',
                            right: '10%',
                            border: '1px solid black',
                            padding: '5px'
                        }}>Prix : 1 500 GEMMES</p>

                    </div>
                </div>


                <div className="panel">
                    <div className="inner">
                        <p className="text" style={{position: 'absolute', top: '5%', left: '5%', width: '30%'}}>En 3
                            étapes</p>
                        <div className="steps-container">
                            <div className="text" style={{
                                position: 'absolute',
                                top: '30%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                textAlign: 'left',
                                maxWidth: '80%',
                                padding: '1rem',

                            }}>
                                <Image src={step1} alt="Étape 1" objectFit="contain" width={100} height={100}
                                       style={{flexShrink: 0}}/>
                                <h2 className="green" style={{margin: 0}}>01</h2>
                                <p style={{margin: 0}}>Utilisez Refresh quotidiennement, de préférence le matin, pour
                                    une sensation de
                                    fraîcheur qui dure toute la journée.</p>
                            </div>

                            <div className="text" style={{
                                position: 'absolute',
                                top: '55%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                textAlign: 'left',
                                maxWidth: '80%',
                                padding: '1rem',

                            }}>
                                <h2 className="green" style={{margin: 0}}>02</h2>
                                <p style={{margin: 0}}>Gardez le flacon à environ 30 cm de chaque tête et pulvérisez
                                    uniformément en appuyant sur la pompe à ballon avec une de vos pattes.</p>
                                <Image src={step2} alt="Étape 1" objectFit="contain" width={100} height={100}
                                       style={{flexShrink: 0}}/>
                            </div>

                            {/*  <Image src={step2} alt="Étape 2" objectFit="contain" width={700}
                                   style={{
                                       position: 'absolute',
                                       top: '50%',
                                       left: '50%',
                                       transform: 'translate(-50%, -50%)'
                                   }}/>*/}
                            <div className="text" style={{
                                position: 'absolute',
                                top: '85%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                textAlign: 'left',
                                maxWidth: '80%',
                                padding: '1rem',

                            }}>
                                <Image src={step3} alt="Étape 1" objectFit="contain" width={100} height={100}
                                       style={{flexShrink: 0}}/>
                                <h2 className="green" style={{margin: 0}}>03</h2>
                                <p style={{margin: 0}}>Le flacon Refresh est rechargeable. Utilisez les recharges
                                    officielles Bestiary pour garantir une efficacité optimale.</p>
                            </div>
                            {/* <Image src={step3} alt="Étape 3" objectFit="contain" width={800}
                                   style={{
                                       position: 'absolute',
                                       top: '85%',
                                       left: '50%',
                                       transform: 'translate(-50%, -50%)'
                                   }}/>*/}
                        </div>
                    </div>
                </div>


                <div className="panel">
                    <div className="inner">
                        <Image src={etiquette} alt="Image de Produit" layout="fill" objectFit="contain"/></div>
                    <div className="block-description">
                        <Image src={description1} alt="Étape 1" objectFit="contain" style={{width: '100px'}}/>
                        <h3 className="text-title">Infusion de Menthe Céleste</h3>
                        <p className="text-description">Renforce la longévité
                            de fraîcheur </p>
                        <Image src={description2} alt="Étape 1" objectFit="contain" style={{width: '100px'}}/>
                        <h3 className="text-title">Essence de Brise Éthérée</h3>
                        <p className="text-description">fraîcheur légère et durable, pour les environnements chauds</p>
                        <Image src={description3} alt="Étape 1" objectFit="contain" style={{width: '100px'}}/>
                        <h3 className="text-title">Extrait de Fleurs du Styx</h3>
                        <p className="text-description">note florale subtile
                            qui apaise les sens</p>
                    </div>

                </div>


                <div className="panel">
                    <div className="inner">
                        <h2
                            style={{position: 'absolute', bottom: '0', left: '5%', zIndex: '1'}}>Avis</h2>

                        <div className="block-avis">
                            <div className="block-avis-1" style={{
                                width: '50%',
                                marginBottom: '10rem',
                                position: 'absolute',
                                top: '20%',
                                left: '30%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                                <p className="title-avis">Sensation de Bien-être</p>
                                <p className="description-avis">“Depuis que j'utilise Refresh, je me sens revitalisé. La fraîcheur du parfum m'aide à mieux supporter la chaleur des Enfers.”</p>
                                <p className="author-avis">Alecto</p>
                            </div>
                            <div className="block-avis-1" style={{
                                width: '50%',
                                position: 'absolute',
                                top: '55%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                            <p className="title-avis">Conception Adaptée</p>
                            <p className="description-avis">“LA pompe à ballon est parfaitement conçu pour mes pattes. L'application est simple et efficace, et j'apprécie énormément le design.”</p>
                            <p className="author-avis">Nyx</p>
                            </div>
                            <div className="block-avis-1" style={{
                                width: '50%',
                                position: 'absolute',
                                top: '86%',
                                left: '65%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                            <p className="title-avis">Maîtrise des Flammes</p>
                            <p className="description-avis">“La fonction extincteur est une véritable innovation !”</p>
                            <p className="author-avis">Brontès</p>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="panel">
                    <div className="inner">
                        <Image src={packagingAll} alt="Image de Produit" layout="fill" objectFit="contain"/></div>
                </div>
            </section>

            <section>
                <Vote/>
            </section>

            <style jsx>{`
              section {
                //height: 100vh;
                height: fit-content;
                width: 100vw;
                background-color: black;
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
                box-sizing: border-box;
                //width: 100% !important;
                max-width: 100% !important;
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
                display: grid;
                justify-content: space-between;
                justify-items: center;
                margin-right: 5rem;
                margin-left: 2rem;
                text-align: center;
              }

              .text-title {
                color: black; /* Changement de la couleur du texte en noir */
                font-size: 18px;
                font-weight: 700;
                text-transform: uppercase;

              }

              .text-description {
                color: black; /* Changement de la couleur du texte en noir */
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 1rem;
              }

              .block-avis {

              }

              .block-avis-1 {
                text-transform: uppercase;
                border: solid 1px black;
                padding: 1rem;
              }
              .title-avis {
                font-family: 'JetBrains Mono', monospace;
                font-size: 24px;
              }
              .description-avis {
                margin: 1rem 0;
                font-size: 18px;
              }
              .author-avis {
                font-family: 'JetBrains Mono', monospace;
                font-size: 18px;
                text-align: right;
              }



            `}</style>
        </div>
    );
};

export default SnappingScroll;
