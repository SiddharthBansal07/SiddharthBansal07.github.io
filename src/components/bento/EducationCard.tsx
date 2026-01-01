import React from "react";
import { BentoCard } from "./BentoCard";

export function EducationCard() {
    return (
        <BentoCard colSpan={2} rowSpan={4} className="relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>

            <div className="space-y-6 relative z-10">
                <div>
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-white">Delhi Technological University</h4>
                        <span className="text-sm text-muted">Aug. 2023 – Jul. 2027</span>
                    </div>
                    <p className="text-muted text-sm">BTech in Engineering Physics</p>
                </div>

                <div>
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-white">DL DAV Model School</h4>
                        <span className="text-sm text-muted">Apr. 2022 – Mar. 2023</span>
                    </div>
                    <p className="text-muted text-sm">CBSE Class XII</p>
                </div>
                <div>
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-white">DL DAV Model School</h4>
                        <span className="text-sm text-muted">Apr. 2020 – Mar. 2021</span>
                    </div>
                    <p className="text-muted text-sm">CBSE Class X</p>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </BentoCard>
    );
}
