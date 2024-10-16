"use client"

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const NextJSLogo = () => (
    <svg viewBox="0 0 180 180" className="w-9 h-9 text-black dark:text-white">
      <mask
        id="mask0_408_134"
        style={{ maskType: "alpha" }}
        width="180"
        height="180"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="90" cy="90" r="90" fill="#000" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path
          fill="url(#paint0_linear_408_134)"
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
        />
        <path fill="url(#paint1_linear_408_134)" d="M115 54h12v72h-12z" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_134"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_134"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {/* Floating nav for md and larger screens */}
      <div
        className={cn(
          "hidden md:flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-lg-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>

      {/* Top nav for smaller screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-[5000]">
        <div className="flex justify-between items-center px-4 py-3">
          <NextJSLogo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            fixed top-0 left-0 right-0 bg-white dark:bg-black z-50 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
          style={{ height: 'auto', maxHeight: '80vh' }}
        >
          <div className="absolute top-4 left-4">
            <NextJSLogo />
          </div>
          <div className="w-64 max-w-full">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link-sm-${idx}`}
                href={navItem.link}
                className={cn(
                  "flex items-center justify-center w-full py-4 text-lg text-neutral-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                )}
                onClick={() => setIsOpen(false)}
              >
                {navItem.icon}
                <span className="ml-2">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-neutral-600 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </>
  );
};
