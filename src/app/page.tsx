import HeroSection from "@/components/ui/shared/herosection";
import { FloatingNav } from "@/components/ui/floating-nav";
import { HomeIcon } from "lucide-react";
import Grid from "@/components/ui/shared/grid";


export default function Home () {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 px-5">
      <FloatingNav navItems={[{
        name: "Home",
        link: "/",
        icon: <HomeIcon />
      }]}/>
      <div className="max-w-7xl w-full">
        <HeroSection />
        <Grid />
      </div>
      
    </main>
  );
}