import React from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const projects = [
    {
        title: "Portfolio Website",
        description: "A clean, modern, and responsive personal portfolio website built with Next.js, Tailwind CSS and TypeScript.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "#",
        github: "#"
    },
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.",
        tags: ["React", "Node.js", "Chart.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "A productivity tool inspired by Linear, focusing on speed and keyboard accessibility.",
        tags: ["Vue.js", "Firebase", "Pinia"],
        link: "#",
        github: "#"
    }
];

export function Projects() {
    return (
        <Section id="projects">
            <Container>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col">
                            {/* Placeholder Image */}
                            <div className="h-48 bg-white/5 w-full relative overflow-hidden group-hover:bg-white/10 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                                    💻
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-secondary border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} className="text-sm font-medium text-white hover:text-accent transition-colors">GitHub</a>
                                    <a href={project.link} className="text-sm font-medium text-white hover:text-accent transition-colors">Live Demo -&gt;</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
