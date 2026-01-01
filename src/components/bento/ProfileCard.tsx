import React from "react";
import { BentoCard } from "./BentoCard";

export function ProfileCard() {
    return (
        <BentoCard className="p-0">
            <a
                href="https://github.com/SiddharthBansal007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full p-6 transition-colors group"
            >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-card group-hover:border-accent-blue/50 transition-colors mb-4 shadow-2xl">
                    {/* Using standard img tag to avoid configuring next.config.ts for external domains right now */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://github.com/SiddharthBansal007.png"
                        alt="Siddharth Bansal"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-accent-blue mb-1 group-hover:text-white transition-colors">Siddharth Bansal</h3>
            </a>
        </BentoCard>
    );
}
