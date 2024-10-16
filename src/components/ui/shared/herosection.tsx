"use client";

import ShimmerButton from "../shimmer-button";
import { Spotlight } from "../spotlight";
import { TextGenerateEffect } from "../textgenEffect";
import Link from "next/link";

const words =
  "Hi there! 👋🏽 I'm David. I build fast, accessible web experiences. Let’s make your ideas a reality!";

const HeroSection = () => {
  return (
    <section className="">
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
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="text-center text-[18px] sm:text-[22px] md:text-3xl lg:text-4xl mt-5">
            <TextGenerateEffect words={words} />
          </div>

          {/* Circular Layout for rotating icons */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto mt-9">
            {/* Rotating container for the outer icons */}
            <div className="relative w-full h-full animate-spin-slow-reverse">
              {[
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
              ].map((src, index, array) => (
                <div
                  key={index}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12"
                  style={{
                    transform: `rotate(${
                      (index / array.length) * 360
                    }deg) translate(150px) rotate(-${
                      (index / array.length) * 360
                    }deg)`,
                    top: "50%",
                    left: "50%",
                    marginTop: "-20px",
                    marginLeft: "-20px",
                  }}
                >
                  <img
                    src={src}
                    className="w-full h-full"
                    alt={`Icon ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Static JavaScript Icon in the center */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="w-full h-full"
                alt="JavaScript Icon"
              />
            </div>
          </div>

          <Link href="#about" className="mt-4 max-md:mt-10">
            <ShimmerButton title="View My Work" handleClick={() => {}} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
