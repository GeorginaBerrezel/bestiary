"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/bestiary-logo.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            "header",
            { opacity: 1, y: 0 },
            {
                opacity: 0,
                y: -50, // Translate le header vers le haut
                duration: 0.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".product-container", // Déclenchement lorsque la .product-container apparaît
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <header style={headerStyle}>
            <nav style={navLeftStyle}>
                <a href="#products" style={linkStyle}>
                    Nos produits
                </a>
            </nav>
            <div style={logoStyle}>
                <Image src={logo} alt="Logo" width={100} height={100} />
            </div>
            <nav style={navRightStyle}>
                <a href="#about" style={linkStyle}>
                    À propos
                </a>
            </nav>
        </header>
    );
};

// Styles en ligne
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "transparent",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: "none",
    transition: "opacity 0.5s, transform 0.5s",
};

const logoStyle = {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const navLeftStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
};

const navRightStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
};

const linkStyle = {
    textDecoration: "none",
    color: "#000000",
    fontSize: "18px",
    padding: "0 20px",
    textTransform: "uppercase",
};

export default Header;
