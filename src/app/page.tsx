import { Navbar } from "@/components/sections/Navbar";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { IntroCard } from "@/components/bento/IntroCard";
import { ImageCard } from "@/components/bento/ImageCard";
import { RoleCard } from "@/components/bento/RoleCard";
import { ProfileCard } from "@/components/bento/ProfileCard";
import { QuoteCard } from "@/components/bento/QuoteCard";
import { TechCard } from "@/components/bento/TechCard";
import { EducationCard } from "@/components/bento/EducationCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-10 selection:bg-accent/30 selection:text-white pt-32">
      <Navbar />

      <div className="relative">
        <BentoGrid>
          {/* Row 1 & 2 */}
          <IntroCard />  {/* (2x2) */}
          <ImageCard />  {/* (1x3) - Goes to Col 3 */}

          {/* Row 3 & 4 */}
          <RoleCard />   {/* (1x2) */}
          <ProfileCard />{/* (1x2) */}
          <QuoteCard />  {/* (1x1) */}

          {/* Bottom Row */}
          <TechCard />      {/* (1x4) */}
          <EducationCard /> {/* (2x4) */}
        </BentoGrid>
      </div>

    </main>
  );
}
