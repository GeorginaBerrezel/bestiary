"use client";

import React from 'react';
import Model3D from '../components/Model3D';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-image">
                <Model3D path="/lilith.glb" />
            </div>
            <div className="hero-image">
                <Model3D path="/lilith.glb" />
            </div>
            <div className="hero-image">
                <Model3D path="/lilith.glb" />
            </div>
            <style jsx>{`
              .hero-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
                gap: 20px; /* Espace entre chaque modèle */
                width: 100%;
                height: 100vh; /* Assurez-vous que le conteneur a une hauteur définie */
                padding: 20px; /* Ajoute un padding à l'intérieur du conteneur */
                background-color: black;
                align-items: center; /* Centre verticalement les éléments de la grille */
                justify-items: center; /* Centre horizontalement les éléments de la grille */
              }

              .hero-image {
                position: relative; /* Nécessaire pour l'utilisation de layout="fill" */
                height: 400px; /* Hauteur fixe pour chaque modèle */
                width: 400px; /* Largeur fixe pour chaque modèle */
                max-width: 100%; /* Empêche le débordement */
              }
            `}</style>
        </div>
    );
};

export default Hero;
