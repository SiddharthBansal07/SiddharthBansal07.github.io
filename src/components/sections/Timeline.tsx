import React from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const timeline = [
    {
        year: "2023 - Present",
        title: "Computer Science Student",
        org: "University of Technology",
        desc: "Focusing on Software Engineering and AI. learned algorithms, data structures, and web development."
    },
    {
        year: "2023",
        title: "CS50 Introduction to Computer Science",
        org: "Harvard University (edX)",
        desc: "Intensive introduction to the intellectual enterprises of computer science and the art of programming."
    },
    {
        year: "2022",
        title: "Self-Taught Developer",
        org: "Online Resources",
        desc: "Started learning HTML, CSS, and Lua for game development."
    }
];

export function Timeline() {
    return (
        <Section id="timeline">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Education & Experience</h2>
                <div className="space-y-0">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-white/10 pl-8 md:pl-0 md:border-l-0 relative group">
                            {/* Timeline Dot (Mobile) */}
                            <span className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-accent group-hover:scale-125 transition-transform md:hidden" />

                            <div className="md:w-1/3 md:text-right md:border-r-2 md:border-white/10 md:pr-10 relative">
                                {/* Timeline Dot (Desktop) */}
                                <span className="hidden md:block absolute right-[-7px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background group-hover:scale-125 transition-transform" />
                                <span className="text-accent font-mono font-medium text-lg">{item.year}</span>
                            </div>
                            <div className="md:w-2/3 pb-12">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                                <div className="text-secondary font-medium mb-3">{item.org}</div>
                                <p className="text-secondary/80 leading-relaxed max-w-xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
