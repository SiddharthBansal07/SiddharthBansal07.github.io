import React from "react";
import { BentoCard } from "../bento/BentoCard";
import { SiGithub } from "react-icons/si";

export function GithubCard() {
    return (
        <BentoCard rowSpan={1} className="group p-0">
            <a href="https://github.com/SiddharthBansal007" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 w-full h-full p-6">
                <SiGithub className="text-5xl text-white transition-transform group-hover:scale-110 duration-300" />
                <h3 className="text-xl font-bold text-white transition-colors">GitHub</h3>
            </a>
        </BentoCard>
    );
}
