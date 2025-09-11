import React from 'react'
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const About = () => {
  return (
    <section id='about' className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5 mb-10">
                <TitleHeader
                title="Get To Know Us"
                sub="The Team"
                />
                <div className="team-grid w-full flex xl:flex-row flex-col xl:gap-16 gap-5 mt-16">
                    <GlowCard>
                        <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                            <div>
                                <h2 className="font-semibold text-3xl">The Coder</h2>
                                <p>My Name is Ewald, i'm the Developer in the Team</p>
                            </div>
                        </div>
                    </GlowCard>
                    <GlowCard>
                        <div className="flex">
                            <div>
                                <h2 className="font-semibold text-3xl">The Voice</h2>
                                <p>My Name is Nadine, i'm the Voice of the Team</p>
                            </div>
                        </div>
                    </GlowCard>
                </div>
            </div>
    </section>
  )
}

export default About