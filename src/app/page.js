"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Loader from "@/components/Loader";
import ScrollTrigger from "../components/ScrollTrigger";
import ScrollingText from "@/components/ScrollingText";
import Footer from "@/components/Footer";
import LogoAnimation from "@/components/LogoAnimation";
import Header from "@/components/Header";
import SnappingScroll from "@/components/SnappingScroll";
import Order from "@/components/Order";

export default function Home() {
    return (
        <div className="relative flex flex-col items-center justify-between min-h-screen">
{/*
            <Loader />
*/}
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
