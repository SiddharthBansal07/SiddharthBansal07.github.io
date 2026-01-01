import React from "react";
import { BentoCard } from "../bento/BentoCard";
import { FaMapMarkerAlt } from "react-icons/fa";

export function LocationCard() {
    return (
        <BentoCard colSpan={2} rowSpan={1} className="relative overflow-hidden group flex items-center justify-center gap-4">
            <div className="text-center">
                <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-white">Based in New Delhi, India</h3>
                <p className="text-muted">Open to remote & relocation</p>
            </div>
        </BentoCard>
    );
}
