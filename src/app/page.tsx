import { HeroSection } from "@/components/ui/shared/herosection";
import { Footer } from "@/components/ui/shared/footer";
import { Navbar } from "@/components/ui/shared/navbar";
import { SkillsSection } from "@/components/ui/shared/skills-section";
import { SocialMediaSection } from "@/components/ui/shared/social-media-section";
import { ProjectSection } from "@/components/ui/shared/project-section";
import { AboutSection } from "@/components/ui/shared/about-section";
import { AnimatedLinesBackground } from "@/components/ui/animated-lines-background";

export default function Home() {
  return (
    <main className="bg-background relative">
      <AnimatedLinesBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <AboutSection />
        <SocialMediaSection />
        <Footer />
      </div>
    </main>
  );
}
