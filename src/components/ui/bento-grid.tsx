"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
// import { Globe } from "./globe";
import { GlobeDemo } from "./shared/grid-globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@../../../data/confetti.json";
import ShimmerButton from "./shimmer-button";
import { CopyIcon } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  header,
  icon,
  id,
  img,
  spareImg,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("muriithid05@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,30)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,77,1) 31%, rgba(9,9,121,1) 58%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={id == 6 ? "flex justify-center h-full" : ""}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>
        <div
          className={`absolute rigth-0 -bottom-5 ${
            id == 5 ? "w-full opacity-80" : ""
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        {id == 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
      </div>
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
        )}
      >
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">
          {title}
        </div>
        <div>{id === 2 && <GlobeDemo />}</div>
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-r-2">
            <div className="flex flex-col gap-3 lg:gap-8 ">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {["pocketbase", "mongodb", "redis", "mysql"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 lg:gap-8 ">
              {["typescript", "react", "nextjs"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative ">
            <div className={`absolute -bottom-5 right-0 `}>
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <ShimmerButton
              title={copied ? "email copied" : "copy email"}
              icon={<CopyIcon />}
              position="left"
              otherClasses="bg-[bg-[#161a31]]"
              handleClick={handleCopy}
            ></ShimmerButton>
          </div>
        )}
      </div>
    </div>
  );
};
