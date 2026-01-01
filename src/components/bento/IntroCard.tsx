import React from "react";
import { BentoCard } from "./BentoCard";

export function IntroCard() {
    return (
        <BentoCard colSpan={2} className="justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Who am I ?</h2>
            <p className="text-muted text-md leading-relaxed">
                Hi, I'm Siddharth 👋<br />
                I build web and AI projects, learn by doing, and enjoy turning ideas into useful products. I love exploring new technologies, solving real-world problems, and continuously improving.
            </p>
        </BentoCard>
    );
}
