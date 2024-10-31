// pages/index.js
import Image from "next/image";
import ScrollTrigger from "../components/ScrollTrigger";
import gif from '../../public/bestiary.gif';
import gifAnimaux from '../../public/MONSTRES.gif'
import ScrollingText from "@/components/ScrollingText";
import Footer from "@/components/Footer";
import LogoAnimation from "@/components/LogoAnimation"
import Header from "@/components/Header";
import SnappingScroll from "@/components/SnappingScroll";
import Order from "@/components/Order";
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            {/* Ajout du GIF */}
            <div>
                <Image
                    src={gifAnimaux} // Assurez-vous que le chemin du fichier est correct
                    alt="Bestiary gif"
                    width={600}
                    height={600}
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

            <Order />

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
