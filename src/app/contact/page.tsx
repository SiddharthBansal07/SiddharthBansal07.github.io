import { Navbar } from "@/components/sections/Navbar";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white flex flex-col items-center justify-center overflow-hidden">
            <Navbar />
            <Contact />
        </main>
    );
}
