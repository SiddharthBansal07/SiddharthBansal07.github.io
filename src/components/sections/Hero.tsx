import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <Container className="relative z-10 flex flex-col items-start max-w-4xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-secondary mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    Available for new projects
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Building digital products with <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">purpose</span>.
                </h1>

                <p className="text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
                    I'm a specific detailed-oriented developer designed to solve your problems.
                    I build accessible, pixel-perfect, and performant web applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">
                        View Projects
                    </Button>
                    <Button variant="outline">
                        Contact Me
                    </Button>
                </div>
            </Container>
        </section>
    );
}
