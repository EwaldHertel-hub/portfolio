import { FaLocationArrow } from "react-icons/fa6";

import Button from "./ui/Button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg"></div>
      <div className="pb-20 pt-36">
        
          <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className="uppercase tracking-widest text-2xl text-center text-blue-100 max-w-80">
              Hertel Webagency
            </h1>
            <TextGenerateEffect
              words="Let's build something beautiful"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Ewald, a Developer based in Germany.
            </p>

            <a href="#about">
              <Button
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
   )
};

export default Hero;