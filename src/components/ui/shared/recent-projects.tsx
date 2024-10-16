import React from "react";
import { projects } from "../../../../data";

type Props = {};

const RecentProjects = (props: Props) => {
  return (
    <div className="py-18" id="projects">
      <h1 className="heading text-purple text-center">
        recent projects
      </h1>
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
                  <img
                    src="./bg.png"
                    alt="bg-img"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 max-h-[20vh] mb-2"
                />
                <div className="z-20 relative text-center mt-2">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {title}
                  </h1>
                </div>
              </a>

              {/* Description and Stack Icons Below the Card */}
              <div className="mt-6 text-center">
                <p className="lg:text-xl lg:font-normal font-light text-sm mb-4 px-4">
                  {des}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-lg bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center bg-red-400 relative px-3 py-2 mt-6 rounded-md">
                  <p className="lg:text-xl md:text-xs text-sm text-white">
                    check live site
                  </p>
                  <span className="ms-3 text-purple">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
