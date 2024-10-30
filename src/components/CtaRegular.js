// components/CTARegular.js
"use client";

import React from 'react';
import Image from 'next/image';
import arrow from '../../public/arrow-down.svg'; // Assurez-vous que le chemin est correct

const CTARegular = ({ text }) => {
    return (
        <button className="cta-button">
            {text.toUpperCase()} {/* Met le texte en majuscules */}
            <Image src={arrow} alt="Arrow" width={12} height={12} /> {/* Icône plus petite */}
            <style jsx>{`
              .cta-button {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                border: 2px solid black; /* Contour noir */
                background: transparent;
                color: black;
                font-family: 'JetBrains Mono', monospace; /* Utilisation de JetBrains Mono */
                font-weight: 400; /* Regular */
                font-size: 17px;
                width: 230px;
                cursor: pointer;
                transition: background 0.3s, border 0.3s; /* Animation de transition */
              }

              .cta-button:hover {
                background: #11FF00; /* Vert fluo au survol */
                border: transparent; /* Retrait du contour */
              }

              .cta-button img {
                margin-left: 16px; /* Espace entre le texte et l'icône */
              }
            `}</style>
        </button>
    );
};

export default CTARegular;
