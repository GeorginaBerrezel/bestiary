"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import image1 from '../../public/pack.png';
import hydre from '../../public/hydre.svg';
import medusa from '../../public/medusa.svg';
import minautore from '../../public/minautore.svg';

const Vote = () => {
    const squareRefs = useRef([]);
    const [progress, setProgress] = useState([0, 0, 0]);

    useEffect(() => {
        squareRefs.current.forEach((square, index) => {
            gsap.fromTo(square,
                { scale: 1 },
                {
                    scale: 1.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    duration: 0.6,
                    delay: index * 0.2
                }
            );
        });
    }, []);

    const handleClick = (index) => {
        const newProgress = [0, 0, 0]; // reset other progress bars
        newProgress[index] = [30, 10, 60][index]; // Set progress for the clicked card
        setProgress(newProgress);
    };

    // Tableau des SVG pour chaque carte
    const icons = [hydre, medusa, minautore];

    // Tableau des noms pour chaque option
    const optionNames = ["Hydre", "Méduse", "Minotaure"]; // Changez les noms ici

    return (
        <div className="vote-container">
            <h1>Vote pour QUI SERA
                LE <span className="green">prochain produit</span>
            </h1>

            <div className="image-container">
                <Image src={image1} alt="Vote Image" layout="intrinsic" width={300} height={100} />
            </div>

            <div className="cards-container">
                {[0, 1, 2].map((num, index) => (
                    <div className="card" key={num} onClick={() => handleClick(index)}>
                        <h3>{optionNames[index]}</h3> {/* Utilise le tableau de noms ici */}
                        {/* SVG spécifique pour chaque carte */}
                        <Image src={icons[index]} width={50} height={50} alt={`Icon for option ${optionNames[index]}`} />
                        <p>{progress[index]}%</p> {/* Affiche le pourcentage ici */}
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ height: `${progress[index]}%` }} />
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
              .vote-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: black;
                color: #fff;
                padding: 20px;
                width: 100vw;
              }

              h1 {
                font-size: 2rem;
                margin-bottom: 20px;
              }

              .green {
                color: #11FF00; /* Liens en vert */
              }

              .image-container {
                margin-bottom: 40px;
              }

              .cards-container {
                display: flex;
                gap: 20px;
              }

              .card {
                background-color: #222;
                padding: 20px;
                border: 1px solid #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 150px;
                text-align: center;
                cursor: pointer;
                position: relative;
              }

              .card h3 {
                font-size: 1.2rem;
                margin-bottom: 10px;
              }

              .card p {
                font-size: 1.5rem;
                margin: 10px 0;
              }

              .progress-fill {
                background-color: #11FF00;
                position: absolute;
                bottom: 0;
                left: 0;
                mix-blend-mode: color-dodge;
                width: 100%;
                transition: 0.5s ease-in-out;
              }
            `}</style>
        </div>
    );
};

export default Vote;
