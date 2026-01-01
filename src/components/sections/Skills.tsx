import React from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const skills = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Lua", "C#", "HTML/CSS", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Docker", "PostgreSQL", "MongoDB"] },
];

export function Skills() {
    return (
        <Section id="skills">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Skills & Technologies</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category) => (
                        <div key={category.category} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-accent pl-3">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-secondary text-sm font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
