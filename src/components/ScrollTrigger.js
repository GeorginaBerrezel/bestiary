"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".accordions",
                pin: true,
                scrub: 1,
                ease: "linear",
                markers: true,
            },
        });

        tl.to(".accordion .text", {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: 0.5,
        });

        tl.to(
            ".accordion",
            {
                marginBottom: -15,
                stagger: 0.5,
            },
            "<"
        );

        const items = document.querySelectorAll(".accordion");
        items.forEach((item, i) => {
            item.addEventListener("click", function () {
                gsap.to(window, {
                    scrollTo: tl.scrollTrigger.labelToScroll(`label${i + 1}`),
                    duration: 1,
                });
            });
        });

        return () => {
            items.forEach((item) => {
                item.replaceWith(item.cloneNode(true));
            });
        };
    }, []);

    return (
        <div id="wrapper">
            <div id="content">
                <div className="spacer"></div>
                <div className="accordions">
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">001</span>
                            <span>All-screen design.</span>
                        </div>
                        <div className="text">
                            Lets you immerse yourself in whatever you’re reading, watching, or creating...
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">002</span>
                            <span>Beauty all around.</span>
                        </div>
                        <div className="text">
                            The breakthrough M1 chip is now in Air. An 8-core CPU delivers up to 60 percent...
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">003</span>
                            <span>Take Center Stage.</span>
                        </div>
                        <div className="text">
                            The 12MP Ultra Wide front camera enables Center Stage, making video calls...
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span className="title-number">004</span>
                            <span>Pretty everywhere.</span>
                        </div>
                        <div className="text">
                            Join superfast 5G wireless networks when you’re on the go. Download files, play...
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </div>

            <style jsx>{`
                body {
                    margin: 0;
                    background: #fff;
                    font-family: 'Helvetica', sans-serif; /* Utilisation de Helvetica */
                    scroll-behavior: none;
                }

                .title {
                    font-size: 70px; /* H2 */
                    line-height: 1.1;
                    padding-bottom: 0.4em;
                    color: rgb(0, 0, 0);
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 10px;
                }

                .title-number {
                    font-weight: bold;
                    font-size: 40px; /* H3 */
                    color: rgba(0, 0, 0, 0.5);
                }

                .text {
                    font-size: 17px; /* Texte courant */
                    line-height: 1.4;
                    overflow: hidden;
                    padding-bottom: 20px;
                    color: rgba(0, 0, 0, 0.7);
                }

                .accordions {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    padding-bottom: 20vh;
                }

                .accordion {
                    width: 100%;
                    padding: 25px 30px 10px;
                    border-radius: 0;
                    margin-bottom: 40px;
                    border-bottom: 2px solid #ccc;
                }

                .spacer {
                    height: 70vh;
                }

                @media (max-width: 480px) {
                    .accordion {
                        padding: 15px 20px 8px;
                    }
                    .title {
                        font-size: 20px; /* Ajustement pour mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default ScrollTriggerComponent;
