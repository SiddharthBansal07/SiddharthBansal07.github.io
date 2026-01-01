import React from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function About() {
    return (
        <Section id="about" className="bg-white/5 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                        <div className="text-secondary leading-loose text-lg space-y-4">
                            <p>
                                Hey! I'm a passionate software developer based in Germany. My journey started with a curiosity for how things work, and it has evolved into a career of building robust and scalable applications.
                            </p>
                            <p>
                                I believe in clean code, user-centric design, and continuous learning. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 group max-w-md">
                            <div className="absolute -top-6 -left-4 text-8xl text-accent/20 font-serif leading-none group-hover:text-accent/30 transition-colors">"</div>
                            <blockquote className="text-2xl font-medium text-white italic relative z-10 leading-snug">
                                The only way to do great work is to love what you do.
                            </blockquote>
                            <div className="mt-6 text-sm text-secondary font-medium uppercase tracking-wider">
                                — Steve Jobs
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
