import React from "react";
import { BentoCard } from "./BentoCard";

export function RoleCard() {
    return (
        <BentoCard rowSpan={2} className="bg-accent border-accent justify-center items-center text-center p-4">
            <h3 className="text-2xl font-bold text-white leading-tight">
                Student & <br />
                AI Developer
            </h3>
        </BentoCard>
    );
}
