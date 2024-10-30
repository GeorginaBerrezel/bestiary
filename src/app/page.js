// pages/index.js
import Image from "next/image";
//import Model3D from '../components/Model3D';
import ScrollTrigger from "../components/ScrollTrigger";
import gif from '../../public/bestiary.gif';
import ScrollingText from "@/components/ScrollingText";
import Footer from "@/components/Footer";
import CTARegular from "@/components/CtaRegular";
import CTANav from "@/components/CtaNav";
import LogoAnimation from "@/components/LogoAnimation"
import Header from "@/components/Header";
import Product from "@/components/Product";
import SnappingScroll from "@/components/SnappingScroll";
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            {/* Ajout du GIF */}
            <div>
                <Image
                    src={gif} // Assurez-vous que le chemin du fichier est correct
                    alt="Bestiary gif"
                    width={700}
                    height={700}
                />
            </div>
            <LogoAnimation />
            <Header />

            <div className="w-full">
                <ScrollTrigger />
            </div>

            <div className="w-full">
                <ScrollingText />
            </div>


            <SnappingScroll />

            <CTARegular text="En savoir plus" />
            <CTANav text="à propos" />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
