import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { BentoGrid } from "../bento/BentoGrid";
import { EmailCard } from "../contact/EmailCard";
import { GithubCard } from "../contact/GithubCard";
import { LinkedinCard } from "../contact/LinkedinCard";
import { ResumeCard } from "../contact/ResumeCard";
import { LocationCard } from "../contact/LocationCard";
import { ContactForm } from "../contact/ContactForm";

export function Contact() {
    return (
        <footer className="bg-black text-white pb-10">
            <Section id="contact" className="py-0 mb-10">
                <Container>
                    <BentoGrid>
                        {/* Top Row: Email (2) + Resume (Right Side) */}
                        <EmailCard />

                        {/* Right Column: Resume (Span 1, Row 3) */}
                        {/* Note: In CSS Grid auto-flow, this might need specific placement or order. 
                            Let's rely on auto-dense. 
                            Email is col-span-2. 
                            Next item goes to col 3. 
                        */}
                        <ResumeCard />

                        {/* Row 2: Github (1) + LinkedIn (1) */}
                        {/* These will fill Col 1 and Col 2 under Email */}
                        <GithubCard />
                        <LinkedinCard />

                        {/* Row 3: Location (2) */}
                        {/* Fills Col 1 and Col 2 */}
                        <LocationCard />

                    </BentoGrid>


                </Container>
            </Section>
        </footer>
    );
}
