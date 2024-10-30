import React from "react";
import logo from '../../public/bestiary-logo.svg'; // Assurez-vous que le chemin est correct
import background from '../../public/background-footer.png'; // Importation correcte de l'image monsters
import Image from "next/image";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/* Logo */}
            <div style={styles.logoContainer}>
                <Image
                    src={logo}
                    alt="Bestiary Logo"
                    width={150}
                    height={150}
                />
            </div>
            <div style={styles.logoContainer}>
                <Image
                    src={background} // Utilisation de l'import pour l'image monsters
                    alt="background footer"
                    width={150}
                    height={150}
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
                <a href="#privacy-policy" style={styles.policyLink}>Privacy Policy</a>
                <a href="#terms" style={styles.policyLink}>Terms & Conditions</a>
                <a href="#return-policy" style={styles.policyLink}>Return & Refund Policy</a>
            </div>
        </footer>
    );
};

// Styles en ligne pour simplifier
const styles = {
    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#fff",
        color: "#000",
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
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
    },
    policies: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        fontSize: "12px",
        color: "#666",
    },
    policyLink: {
        textDecoration: "none",
        color: "#666",
    },
};

export default Footer;
