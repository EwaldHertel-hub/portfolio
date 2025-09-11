import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { FaReact, FaSass, FaJsSquare, FaNodeJs, FaPhp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiMysql, SiExpress, SiRedux, SiTypescript, SiNestjs, SiTailwindcss } from "react-icons/si";
import { DiMsqlServer, DiSqllite } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import Tooltip from "../components/ui/Tooltip";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
        ".tech-card",
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
            trigger: "#skills",
            start: "top center", 
            },
        }
        );
    });
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                title="How I Can Contribute & My Key Skills"
                sub="What I Bring to the Table"
                />
                <div className="tech-grid  w-full flex xl:flex-row flex-col xl:gap-16 gap-5 mt-16">
                    <GlowCard>
                        <h2 className="font-semibold text-3xl">
                            Frontend Developer
                        </h2>
                        <ul className="grid grid-cols-4 gap-8 max-[420px]:justify-items-center mt-10">
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#61DBFB", className: "h-12", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"React.js"} />
                                                <FaReact />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <div>
                                            <Tooltip text={"CSS"} />
                                            <img src="images/CSS_Logo.svg" className="h-12" alt="CSS" />
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#C69", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"SASS/SCSS"} />
                                                <FaSass />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#F0DB4F", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"JavaScript"} />
                                                <FaJsSquare />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#00A7E5", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Redux.js"} />
                                                <SiRedux />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#3178C6", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"TypeScript"} />
                                                <SiTypescript />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Next.js"} />
                                                <TbBrandNextjs />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#06b6d4", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Tailwind CSS"} />
                                                <SiTailwindcss/>
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </GlowCard>
                    <GlowCard>
                        <h2 className="font-semibold text-3xl">Backend Developer</h2>
                        <ul className="grid grid-cols-4 gap-8 max-[420px]:justify-items-center mt-10">
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#68A063", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Node.js"} />
                                                <FaNodeJs />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#0075C9", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Express.js"} />
                                                <SiExpress />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#474A8A", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"PHP"} />
                                                <FaPhp />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#A2223B", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"Nest.js"} />
                                                <SiNestjs />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </GlowCard>
                    <GlowCard>
                        <h2 className="font-semibold text-3xl">Database Developer</h2>
                        <ul className="grid grid-cols-4 gap-8 max-[420px]:justify-items-center mt-10">
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#00758F", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"MySQL"} />
                                                <SiMysql />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#7C0D0E", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"SQL Server"} />
                                                <DiMsqlServer />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="group relative">
                                    <label className="button-shadow flex h-15 w-20 items-center justify-center rounded-xl border border-gray-300 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5">
                                        <IconContext.Provider value={{ color: "#044a64", className: "global-class-name", size: "3rem" }}>
                                            <div>
                                                <Tooltip text={"SQLite"} />
                                                <DiSqllite />
                                            </div>
                                        </IconContext.Provider>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </GlowCard>
                </div>
            </div>
        </div>
    )
}

export default TechStack