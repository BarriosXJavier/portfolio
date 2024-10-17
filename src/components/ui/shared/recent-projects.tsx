import React from "react";
import { projects } from "../../../../data";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";

type Props = {};

const RecentProjects: React.FC<Props> = () => {
  return (
    <div className="py-10" id="projects">
      <TypewriterEffect
        words={[{ text: "recent" }, { text: " " }, { text: "projects" }]}
        className="heading text-purple text-center"
      />
      <div className="p-4 mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className="flex flex-col items-center w-full">
              {/* Card for Image and Title */}
              <a
                href={link}
                className="relative flex flex-col items-center justify-center w-full overflow-hidden sm:h-[40vh] h-[30vh] bg-[#13162d] lg:rounded-3xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    className="absolute inset-0 object-cover w-full h-full"
                    height={500}
                    width={800}
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute inset-0 object-contain w-full h-full"
                  height={500}
                  width={800}
                />
                <div className="z-20 relative text-center mt-2">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {title}
                  </h1>
                </div>
              </a>
              {/* Description and Stack Icons Below the Card */}
              <div className="mt-6 text-center w-full">
                <p className="lg:text-xl lg:font-normal font-light text-sm mb-4 px-4">
                  {des}
                </p>
                <div className="flex items-center justify-between w-full px-4 mb-4">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-lg bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        className="p-2"
                        height={120}
                        width={120}
                      />
                    </div>
                  ))}
                </div>
                <a
                  href={link}
                  className="flex justify-center items-center w-full bg-gray-700 hover:bg-gray-900 px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <p className="lg:text-xl md:text-xs text-sm text-white">
                    Check live site
                  </p>
                  <span className="ml-3 text-purple">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
