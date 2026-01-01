import React from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-2xl"
        >
            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - Left Side on Desktop */}
                <div className="w-full md:w-2/5 min-h-[200px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 opacity-60" />
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content Section - Right Side on Desktop */}
                <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}
