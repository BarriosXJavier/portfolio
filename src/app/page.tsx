import { HeroSection } from "@/components/ui/shared/herosection";
import { Footer } from "@/components/ui/shared/footer";
import { Navbar } from "@/components/ui/shared/navbar";
import { SkillsSection } from "@/components/ui/shared/skills-section";
import { SocialMediaSection } from "@/components/ui/shared/social-media-section";
import { ProjectSection } from "@/components/ui/shared/project-section";
import { AboutSection } from "@/components/ui/shared/about-section";
import { BackgroundWrapper } from "@/components/ui/background-wrapper";

import {
  CursorFollower,
  FloatingParticles,
} from "@/components/ui/micro-interactions";
import { EnhancedProjectSection } from "@/components/ui/enhanced-project-showcase";

export default function Home() {
  return (
    <BackgroundWrapper className="bg-background">
      <CursorFollower />
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <EnhancedProjectSection />
      <SkillsSection />
      <AboutSection />
      <SocialMediaSection />
      <Footer />
    </BackgroundWrapper>
  );
}
