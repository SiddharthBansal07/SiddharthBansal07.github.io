import React from "react";
import { BentoCard } from "./BentoCard";

export function QuoteCard() {
    return (
        <BentoCard rowSpan={1} className="bg-accent-blue border-accent-blue justify-center items-center text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white italic leading-snug">
                "When Times Are Tough, Just Laugh."
            </h3>
        </BentoCard>
    );
}
