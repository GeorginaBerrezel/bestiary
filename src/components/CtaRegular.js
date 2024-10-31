"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import arrow from '../../public/arrow-down.svg';
import arrowWhite from '../../public/arrow-white.svg';

const CTARegular = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className="cta-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text.toUpperCase()}
            <Image src={isHovered ? arrowWhite : arrow} alt="Arrow" width={12} height={12} />
            <style jsx>{`
              .cta-button {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                border: 2px solid black;
                background: #11FF00;
                color: black;
                font-family: 'JetBrains Mono', monospace;
                font-weight: 400;
                font-size: 17px;
                width: 200px;
                cursor: pointer;
                transition: background 0.3s, border 0.3s, color 0.3s;
              }

              .cta-button:hover {
                background: transparent;
                border: 2px solid white;
                color: white;
              }

              .cta-button img {
                margin-left: 16px;
              }
            `}</style>
        </button>
    );
};

export default CTARegular;
