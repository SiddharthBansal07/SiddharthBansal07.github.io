import React from "react";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2 | 3 | 4 | 5;
}

export function BentoCard({ children, className = "", colSpan = 1, rowSpan = 2 }: BentoCardProps) {

    // Map colSpan/rowSpan numbers to Tailwind classes
    const colSpanClass = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    }[colSpan];

    const rowSpanClass = {
        1: "md:row-span-1",
        2: "md:row-span-2",
        3: "md:row-span-3",
        4: "md:row-span-4",
        5: "md:row-span-5",
    }[rowSpan];

    return (
        <div
            className={`bg-card rounded-3xl p-5 md:p-6 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-300 hover:bg-card-hover ${colSpanClass} ${rowSpanClass} ${className}`}
        >
            {children}
        </div>
    );
}
