import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useSmoothLanguage } from "../lib/hooks/useSmoothLanguage";

import Button from "../components/ui/Button";

const Hero = () => {
  const { language } = useSelector((state) => state.language);
  const content = useSelector((state) => (language === 'en' ? state.enPack : state.dePack)['hero']);

  const { displayedContent, style } = useSmoothLanguage(content);

  useGSAP(() => {
    if (!displayedContent) return;
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  }, [displayedContent]); // Re-run animation when content changes

  if (!displayedContent) {
    return null;
  }

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-row">
        <header className="flex flex-col justify-center md:w-full w-screen px-20">
          <div style={style} className="flex flex-col gap-7 items-center xl:items-start">
            <div className="hero-text ">
              <h1>
                {displayedContent.h1_1}
              </h1>
              <h1>{displayedContent.h1_2}</h1>
              <h1>{displayedContent.h1_3}</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              {displayedContent.paragraph_1}
            </p>

            <Button
              text={displayedContent.button_text}
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