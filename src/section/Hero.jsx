import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/ui/Button";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-row">
        <header className="flex flex-col justify-center md:w-full w-screen px-20">
          <div className="flex flex-col gap-7 items-center xl:items-start">
            <div className="hero-text ">
              <h1>
                Shaping Ideas
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, we are a small Agency based in Germany with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
        <div className="flex flex-col justify-center md:w-full w-screen px-20">
          <img src="/images/elegant.svg" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;