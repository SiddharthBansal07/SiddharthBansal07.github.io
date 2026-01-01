import React from "react";
import { BentoCard } from "../bento/BentoCard";
import { SiLinkedin } from "react-icons/si";

export function LinkedinCard() {
    return (
        <BentoCard rowSpan={1} className="group p-0">
            <a href="https://www.linkedin.com/in/siddharth-bansal007/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 w-full h-full p-6">
                <SiLinkedin className="text-5xl text-[#0077b5] transition-transform group-hover:scale-110 duration-300" />
                <h3 className="text-xl font-bold text-white transition-colors">LinkedIn</h3>
            </a>
        </BentoCard>
    );
}
