"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <nav className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-1.5 flex items-center gap-1 shadow-2xl pointer-events-auto">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-[#2a2a2a] text-white shadow-sm"
                                : "text-[#888888] hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
