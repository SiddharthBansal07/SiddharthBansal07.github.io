import React from "react";
import { BentoCard } from "./BentoCard";

export function ImageCard() {
    return (
        <BentoCard rowSpan={3} className="p-0 relative group">
            {/* Placeholder gradient mimicking the starry night image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
                <div className="text-6xl">
                    <img 
                    src="/sky.jpg" 
                    alt=""
                    className="w-full h-full object-fill" />
                </div>
            </div>
        </BentoCard>
    );
}
