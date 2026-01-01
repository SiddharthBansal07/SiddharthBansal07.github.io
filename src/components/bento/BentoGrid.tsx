import React from "react";

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(70px,auto)] gap-3 md:gap-4 max-w-5xl mx-auto px-4 py-8 ${className}`}>
            {children}
        </div>
    );
}
