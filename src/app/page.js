// pages/index.js
import Image from "next/image";
//import Model3D from '../components/Model3D';
import ScrollTrigger from "../components/ScrollTrigger";
import logo from '../../public/bestiary-logo.svg';
import gif from '../../public/bestiary.gif';
import ScrollingText from "@/components/ScrollingText";
import Footer from "@/components/Footer";
import CTARegular from "@/components/CtaRegular";
import CTANav from "@/components/CtaNav";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/* Logo */}


            <div className="mb-8">
                <Image
                    src={logo}
                    alt="Bestiary Logo"
                    width={150}
                    height={150}
                />
            </div>

            {/* Ajout du GIF */}
            <div>
                <Image
                    src={gif} // Assurez-vous que le chemin du fichier est correct
                    alt="Bestiary gif"
                    width={500}
                    height={500}
                />
            </div>

            <div>
                <Hero />
            </div>

            {/* Section de texte */}
            <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
                <h1>Bienvenue dans le Bestiaire</h1>
                <p className="text-courant">
                    Explorez nos chimères uniques et fascinantes.
                </p>
            </main>
            {/* Utilisation du composant CTARegular */}
            <CTARegular text="En savoir plus" />
            <CTANav text="à propos" />

            {/* Section objet 3D */}
            {/* <div className="w-full h-3/4">
                <Model3D />
            </div> */}

            <div className="w-full">
                <ScrollingText />
            </div>
            <div className="w-full">
                <ScrollTrigger />
            </div>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
