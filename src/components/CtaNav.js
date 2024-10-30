// components/CTARegular.js
"use client";

import React from 'react';


const CTANav = ({ text }) => {
    return (
        <button className="cta-button-nav">
            {text.toUpperCase()} {/* Met le texte en majuscules */}
            <style jsx>{`
              .cta-button-nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                background: transparent;
                color: black;
                font-family: 'JetBrains Mono', monospace; /* Utilisation de JetBrains Mono */
                font-weight: 900; /* Regular */
                font-size: 17px;
                cursor: pointer;
                transition: background 0.3s, border 0.3s; /* Animation de transition */
              }

              .cta-button-nav:hover {
                background: #000000; /* Vert fluo au survol */
                color: #FFFFFF;
                border: transparent; /* Retrait du contour */
              }
            `}</style>
        </button>
    );
};

export default CTANav;
