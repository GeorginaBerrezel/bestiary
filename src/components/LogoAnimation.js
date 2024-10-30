"use client";
import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";

export default function Home() {
    const container = useRef(null);
    const stickyMask = useRef(null);

    const initialMaskSize = 0.8;
    const targetMaskSize = 30;
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.maskSize =
            (initialMaskSize + maskSizeProgress) * 100 + "%";
        requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
        const scrollProgress =
            stickyMask.current.offsetTop /
            (container.current.getBoundingClientRect().height - window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
    };

    return (
        <main className="main">
            <div ref={container} className="container-animation">
                <div ref={stickyMask} className="stickyMask">
                    {/* Contenu vide ou une couleur de fond */}
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#F5F5F5" }}></div>
                </div>
            </div>
            <div className="container-animation2">
                <Hero />
            </div>
        </main>
    );
}
