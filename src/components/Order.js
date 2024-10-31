"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import orderImage from '../../public/refresh_sansfond.png';
import CTARegular from "@/components/CtaRegular";

const Order = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.from([titleRef.current, subtitleRef.current, buttonRef.current], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="order-container">
            <div className="text-section">
                <h1 ref={titleRef} className="title">REFRESH</h1>
                <h2 ref={subtitleRef} className="subtitle">LE PARFUM GLACIAL DE CERBÈRE
                    POUR RESTER FRAIS PLUS LONGTEMPS</h2>
                <CTARegular text="Précommander" />
            </div>
            <div className="image-section">
                <div className="image-container">
                    <Image
                        src={orderImage}
                        alt="Image de commande"
                        layout="fill"
                        objectFit="cover"
                        className="image"
                    />
                </div>
            </div>
            <style jsx>{`
              .order-container {
                display: flex;
                height: 100vh;
                width: 100vw;
                position: relative;
                background-color: black;
                color: white;
              }

              .text-section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 20px;
                margin-left: 8rem;
                z-index: 10;
                width: 50%;
              }

              .title {
                font-size: 36px;
              }

              .subtitle {
                font-size: 20px;
                margin-top: 10px;
                margin-bottom: 3rem;
                width: 50%;
              }

              .image-section {
                position: relative;
                height: 100%;
                width: 50%;
              }

              .image-container {
                position: relative;
                width: 80%;
                height: 80%;
                overflow: hidden;
              }

              .image {
                position: relative;
                z-index: 1;
                pointer-events: none; /* Pour éviter les interférences avec le hover */
              }

              .water-effect {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                z-index: 2;
                transition: opacity 0.5s ease;
              }

              .image-container:hover .water-effect {
                opacity: 1;
              }
            `}</style>
        </div>
    );
};

export default Order;
