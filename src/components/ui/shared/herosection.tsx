import ShimmerButton from "../shimmer-button";
import { Spotlight } from "../spotlight";
import { TextGenerateEffect } from "../textgenEffect";
import Link from "next/link";
import FolderOpen from "lucide-react" 

const words =
  "Hi there 👋🏽. I'm David and \n" +
  "\nbuilding fast, responsive, and accessible web experiences is my craft. Let's turn your digital ideas into reality.";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-20 ">
      <div className="">
        <Spotlight
          className="-t-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="t-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="t-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Life on planet nextjs
          </h2>
          <TextGenerateEffect
            words={words}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <Link href="#about" className="my-10">
            <ShimmerButton title="View My Work" handleClick={() => {}}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
