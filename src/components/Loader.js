import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Loader() {
    useEffect(() => {
        console.log("Loader started");

        // Animation du loader avec le gif
        const tlLoader = gsap.timeline({
            repeat: 0,  // Répéter l'animation une seule fois
            onComplete: loadContent,
        });

        tlLoader
            .fromTo(
                ".loader-gif",  // Cible l'élément avec la classe 'loader-gif'
                { opacity: 0 },  // Départ de l'animation : invisibilité
                { opacity: 1, duration: 1.5, ease: "Back.easeInOut" }  // Durée de 1.5 secondes pour une apparition rapide
            )
            .to(".loader-container", {
                autoAlpha: 0,
                scale: 1,
                y: -100,
                duration: 0.5,  // Durée de l'animation de disparition du loader (0.5 seconde)
                ease: "Back.easeIn",
                onComplete: () => {
                    console.log("Loader fade-out completed");
                }
            });

        // Fonction pour gérer la disparition du loader après l'animation
        function loadContent() {
            console.log("Content Loaded!");
        }
    }, []);

    return (
        <div className="loader-container absolute inset-0 flex items-center justify-center bg-white z-50">
            <div id="loader" className="relative w-full h-full">
                {/* Utilisation du composant Image de Next.js pour le GIF */}
                <Image
                    src="/MONSTRES.gif"  // Chemin vers ton GIF
                    alt="Loader"
                    className="loader-gif"
                    layout="intrinsic"  // Ajuste l'image selon ses dimensions originales
                    width={400}  // Largeur du GIF
                    height={400}  // Hauteur du GIF
                />
            </div>
        </div>
    );
}
