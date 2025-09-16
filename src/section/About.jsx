import React from 'react'
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { useSelector } from 'react-redux';
import { useSmoothLanguage } from '../lib/hooks/useSmoothLanguage';

const About = () => {
  const { language } = useSelector((state) => state.language);
  const content = useSelector((state) => (language === 'en' ? state.enPack : state.dePack)['about']);

  const { displayedContent, style } = useSmoothLanguage(content);

  if (!displayedContent) {
    return null;
  }

  return (
    <section id='about' className='flex-center section-padding'>
        <div style={style} className="w-full h-full md:px-10 px-5 mb-10">
                <TitleHeader
                title={displayedContent.title}
                sub={displayedContent.subtitle}
                />
                <div className="team-grid w-full flex xl:flex-row flex-col xl:gap-16 gap-5 mt-16">
                    <GlowCard>
                        <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                            <div>
                                <h2 className="font-semibold text-3xl">{displayedContent.coder_title}</h2>
                                <p>{displayedContent.coder_description}</p>
                            </div>
                        </div>
                    </GlowCard>
                    <GlowCard>
                        <div className="flex">
                            <div>
                                <h2 className="font-semibold text-3xl">{displayedContent.voice_title}</h2>
                                <p>{displayedContent.voice_description}</p>
                            </div>
                        </div>
                    </GlowCard>
                </div>
            </div>
    </section>
  )
}

export default About