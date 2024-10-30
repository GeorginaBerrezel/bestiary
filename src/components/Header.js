import React from 'react';
import Image from 'next/image'; // Assurez-vous d'utiliser le bon chemin pour l'importation
import logo from '../../public/bestiary-logo.svg';

const Header = () => {
    return (
        <header style={headerStyle}>
            <nav style={navLeftStyle}>
                <a href="#products" style={linkStyle}>Nos produits</a>
            </nav>
            <div style={logoStyle}>
                {/* Utilisation de l'image avec une taille appropriée */}
                <Image src={logo} alt="Logo" width={100} height={100} />
            </div>
            <nav style={navRightStyle}>
                <a href="#about" style={linkStyle}>À propos</a>
            </nav>
        </header>
    );
};

// Styles en ligne
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'transparent', // Rendre le fond transparent
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: 'none', // Optionnel, enlever l'ombre
};

const logoStyle = {
    flex: '0 0 auto', // Empêche le logo de s'étirer
    display: 'flex',
    justifyContent: 'center', // Centre le logo
    alignItems: 'center', // Aligne le logo verticalement
};

const navLeftStyle = {
    flex: '1', // Permet à l'élément de navigation gauche de prendre l'espace disponible
    display: 'flex',
    justifyContent: 'flex-start', // Aligne le texte à gauche
};

const navRightStyle = {
    flex: '1', // Permet à l'élément de navigation droit de prendre l'espace disponible
    display: 'flex',
    justifyContent: 'flex-end', // Aligne le texte à droite
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333', // Couleur du texte
    fontSize: '18px', // Taille du texte
    padding: '0 20px', // Espacement autour des liens
    textTransform: 'uppercase', // Met le texte en majuscules
};

// Exporter le composant
export default Header;
