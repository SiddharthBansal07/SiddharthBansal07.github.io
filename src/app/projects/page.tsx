import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Wild-Kamera.com",
            description: "A Shopware Website that sells Wildlife Cameras and Accessories for Hunters and Photographers. The website is built using Shopware 6, a popular e-commerce platform in Germany. The website is built using PHP, JavaScript, CSS, and MySQL.",
            tags: ["PHP", "Shopware", "JavaScript", "CSS", "MySQL"],
            image: "https://images.unsplash.com/photo-1550184658-ff6132a71714?q=80&w=2000&auto=format&fit=crop", // Placeholder nature/camera image
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A modern, high-performance personal portfolio website built with Next.js and Tailwind CSS. Features include a dynamic Bento Grid layout, responsive design, and smooth animations powered by Framer Motion concepts.",
            tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer"],
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop", // Coding/Laptop image
            link: "#"
        },
        {
            title: "AI Chat Assistant",
            description: "An intelligent conversational agent built with Python and OpenAI API. Capable of context-aware responses, code generation, and task automation. Deployed using Docker for scalability.",
            tags: ["Python", "OpenAI", "Docker", "FastAPI", "Redis"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop", // AI/Abstract image
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-32 pb-20">
                <Container>
                    <div className="max-w-5xl mx-auto flex flex-col gap-8">

                        {/* Projects List */}
                        <div className="flex flex-col gap-4">
                            {projects.map((project, idx) => (
                                <ProjectCard
                                    key={idx}
                                    {...project}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </main>
    );
}
