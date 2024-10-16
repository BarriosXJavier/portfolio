import HeroSection from "@/components/ui/shared/herosection";
import { FloatingNav } from "@/components/ui/floating-nav";
import RecentProjects from "@/components/ui/shared/recent-projects";
import { navItems } from "../../data";
import CurrentProject from "@/components/ui/shared/current-project";
import Footer from "@/components/ui/shared/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <div className="max-w-7xl w-full relative">
        <HeroSection />
        <CurrentProject />
        <RecentProjects />
      </div>
      <Footer />
    </main>
  );
}
