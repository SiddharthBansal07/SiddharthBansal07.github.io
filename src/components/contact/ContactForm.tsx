import React from "react";
import { Button } from "../ui/Button";

export function ContactForm() {
    return (
        <div className="w-full max-w-2xl mx-auto mt-20">
            <h2 className="text-4xl font-bold text-white mb-2">Contact with me</h2>
            <p className="text-muted mb-8">You can also get in touch with me through this form below.</p>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-400 mb-2 pl-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-blue/50 focus:bg-zinc-800 transition-all font-medium"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-400 mb-2 pl-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-blue/50 focus:bg-zinc-800 transition-all font-medium"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-400 mb-2 pl-1">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Enter your message here"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-blue/50 focus:bg-zinc-800 transition-all font-medium resize-none"
                    />
                </div>

                <Button variant="primary" className="w-full py-4 text-lg font-bold rounded-xl mt-4">
                    Send Message
                </Button>
            </form>
        </div>
    );
}
