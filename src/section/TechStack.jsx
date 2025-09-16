import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useSmoothLanguage } from "../lib/hooks/useSmoothLanguage";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { FaReact, FaSass, FaJsSquare, FaNodeJs, FaPhp } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  SiMysql,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiNestjs,
  SiTailwindcss,
} from "react-icons/si";
import { DiMsqlServer, DiSqllite } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import Tooltip from "../components/ui/Tooltip";

const iconMap = {
  "React.js": { icon: <FaReact />, color: "#61DBFB" },
  CSS: { icon: <img src="images/CSS_Logo.svg" className="h-12" alt="CSS" /> },
  "SASS/SCSS": { icon: <FaSass />, color: "#C69" },
  JavaScript: { icon: <FaJsSquare />, color: "#F0DB4F" },
  "Redux.js": { icon: <SiRedux />, color: "#00A7E5" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
  "Next.js": { icon: <TbBrandNextjs />, color: "black" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06b6d4" },
  "Node.js": { icon: <FaNodeJs />, color: "#68A063" },
  "Express.js": { icon: <SiExpress />, color: "#0075C9" },
  PHP: { icon: <FaPhp />, color: "#474A8A" },
  "Nest.js": { icon: <SiNestjs />, color: "#A2223B" },
  MySQL: { icon: <SiMysql />, color: "#00758F" },
  "SQL Server": { icon: <DiMsqlServer />, color: "#7C0D0E" },
  SQLite: { icon: <DiSqllite />, color: "#044a64" },
};

const SkillList = ({ skills }) => (
  <ul className="grid grid-cols-4 gap-8 max-[420px]:justify-items-center mt-10">
    {skills.map((skill) => {
      const skillInfo = iconMap[skill];
      if (!skillInfo) return null;

      return (
        <li key={skill}>
          <div className="group relative">
            <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
              {skillInfo.color ? (
                <IconContext.Provider
                  value={{
                    color: skillInfo.color,
                    className: "h-12",
                    size: "3rem",
                  }}
                >
                  <div>
                    <Tooltip text={skill} />
                    {skillInfo.icon}
                  </div>
                </IconContext.Provider>
              ) : (
                <div>
                  <Tooltip text={skill} />
                  {skillInfo.icon}
                </div>
              )}
            </label>
          </div>
        </li>
      );
    })}
  </ul>
);

const TechStack = () => {
  const { language } = useSelector((state) => state.language);
  const content = useSelector(
    (state) => (language === "en" ? state.enPack : state.dePack)["techStack"]
  );

  const { displayedContent, style } = useSmoothLanguage(content);

  useGSAP(() => {
    if (!displayedContent) return;
    gsap.fromTo(
      ".tech-grid",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  }, [displayedContent]);

  if (!displayedContent) return null;

  return (
    <div id="skills" className="flex-center section-padding">
      <div style={style} className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={displayedContent.title}
          sub={displayedContent.subtitle}
        />
        <div className="tech-grid  w-full flex xl:flex-row flex-col xl:gap-16 gap-5 mt-16">
          <GlowCard>
            <h2 className="font-semibold text-3xl">
              {displayedContent.frontend_title}
            </h2>
            <SkillList skills={displayedContent.frontend_skills} />
          </GlowCard>
          <GlowCard>
            <h2 className="font-semibold text-3xl">
              {displayedContent.backend_title}
            </h2>
            <SkillList skills={displayedContent.backend_skills} />
          </GlowCard>
          <GlowCard>
            <h2 className="font-semibold text-3xl">
              {displayedContent.database_title}
            </h2>
            <SkillList skills={displayedContent.database_skills} />
          </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
