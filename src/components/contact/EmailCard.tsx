import React from "react";
import { BentoCard } from "../bento/BentoCard";
import Image from "next/image";

export function EmailCard() {
    return (
        <BentoCard colSpan={2} rowSpan={1} className="relative overflow-hidden group flex items-center justify-center">
            <a href="mailto:bansal.siddharth21@gmail.com" className="flex items-center gap-4">
                <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/gmail_icon.png"
                        alt="Gmail"
                        fill
                        className="object-contain"
                    />
                </div>
                <h3 className="text-xl md:text-xl font-bold text-white">bansal.siddharth21@gmail.com</h3>
            </a>
        </BentoCard>
    );
}
