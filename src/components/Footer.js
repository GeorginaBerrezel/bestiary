import React from "react";
import logo from '../../public/logo-white.svg';
import background from '../../public/background-footer.png';
import Image from "next/image";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/* Logo */}
            <div style={styles.logoContainer}>
                <Image
                    src={logo}
                    alt="Bestiary Logo"
                    width={550}
                    height={550}
                />
            </div>

            {/* Menu de navigation */}
            <nav style={styles.nav}>
                <a href="#our-story" style={styles.navLink}>Our Story</a>
                <a href="#collection" style={styles.navLink}>Collection</a>
                <a href="#business" style={styles.navLink}>Business</a>
                <a href="#contact-us" style={styles.navLink}>Contact Us</a>
            </nav>

            {/* Liens de politique */}
            <div style={styles.policies}>
                <a href="#privacy-policy" style={styles.policyLink}>©BESTIARY - ALL RIGHTS RESERVED, 2024.</a>
            </div>
        </footer>
    );
};

// Styles en ligne pour simplifier
const styles = {
    footer: {
        width: "100vw", // Assure que le footer prend toute la largeur
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        color: "#000",
        backgroundImage: `url(${background.src})`, // Utilisation de l'image de fond
        backgroundSize: "cover", // L'image couvre tout le footer
        backgroundPosition: "center", // Centre l'image
        backgroundRepeat: "no-repeat", // Empêche la répétition
    },
    logoContainer: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
    },
    nav: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "20px",
    },
    navLink: {
        textDecoration: "none",
        color: "#fff", // Mettre en blanc pour une meilleure visibilité sur l'image de fond
        fontSize: "14px",
        fontWeight: "bold",
    },
    policies: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        fontSize: "12px",
        color: "#fff", // Ajusté pour une bonne visibilité
    },
    policyLink: {
        textDecoration: "none",
        color: "#fff",
    },
};

export default Footer;
