import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
             gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
            trigger: card,
            start: "top 80%",
            },
        });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
        id="experience"
        className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader 
                title="Professional Work Experience" 
                sub="My Work Overview"
            />
            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10 xl:block flex flex-col items-center">
                    {expCards.map((card) => (
                    <div key={card.title} className="exp-card-wrapper">
                        <div className="xl:w-2/6 w-0">
                        </div>
                        <div className="xl:w-4/6 w-full">
                        <div className="flex items-start">
                            <div className="timeline-wrapper xl:flex hidden">
                              <div className="timeline" />
                              <div className="gradient-line w-1 h-full" />
                            </div>
                            <div className="timeline-logo xl:flex hidden">
                                <img src={card.logoPath} alt="logo" />
                            </div>
                            <GlowCard card={card}>
                            
                            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                            
                            <div>
                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                <p className="my-5 text-white-50">
                                🗓️&nbsp;{card.date}
                                </p>
                                <p className="text-[#839CB5] italic">
                                Responsibilities
                                </p>
                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                {card.responsibilities.map(
                                    (responsibility, index) => (
                                    <li key={index} className="text-lg">
                                        {responsibility}
                                    </li>
                                    )
                                )}
                                </ul>
                            </div>
                            </div>
                            </GlowCard>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience