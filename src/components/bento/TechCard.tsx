import React from "react";
import { BentoCard } from "./BentoCard";
import {
    SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3,
    SiFastapi, SiPytorch, SiScikitlearn, SiLangchain,
    SiReact, SiDocker, SiNextdotjs
} from "react-icons/si";

export function TechCard() {
    const techs = [
        // Languages
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },

        // Frameworks & Tools
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // White for dark mode
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
    ];

    return (
        <BentoCard rowSpan={4} className="hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>

            <div className="grid grid-cols-4 gap-6 h-full content-start pb-4">
                {techs.map((tech, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col items-center justify-center gap-2 relative cursor-default"
                    >
                        <tech.icon
                            className="text-4xl transition-transform group-hover:scale-110 duration-300 relative z-10"
                            style={{ color: tech.color }}
                        />

                        <span className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-black/90 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity pointer-events-none border border-white/10 z-20">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
}
