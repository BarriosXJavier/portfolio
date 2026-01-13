"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LineConfig {
  id: number;
  path: string;
  gradientId: string;
  color: string;
  duration: number;
}

const lines: LineConfig[] = [
  { id: 1, path: "M0,100 Q400,50 800,150 T1600,100", gradientId: "lineGradient1", color: "#60a5fa", duration: 8 },
  { id: 2, path: "M0,300 Q300,250 600,350 T1200,300", gradientId: "lineGradient2", color: "#a78bfa", duration: 6 },
  { id: 3, path: "M0,500 Q500,450 1000,550 T2000,500", gradientId: "lineGradient3", color: "#34d399", duration: 10 },
  { id: 4, path: "M1600,200 Q1400,150 1200,250 T800,200", gradientId: "lineGradient4", color: "#f472b6", duration: 7 },
  { id: 5, path: "M1400,400 Q1200,350 1000,450 T600,400", gradientId: "lineGradient5", color: "#fbbf24", duration: 12 },
  { id: 6, path: "M200,600 Q600,550 1000,650 T1800,600", gradientId: "lineGradient6", color: "#fb7185", duration: 9 },
  { id: 7, path: "M1800,50 Q1500,20 1200,100 T600,80", gradientId: "lineGradient1", color: "#60a5fa", duration: 8 },
  { id: 8, path: "M100,700 Q400,680 700,750 T1400,720", gradientId: "lineGradient3", color: "#34d399", duration: 10 },
  { id: 9, path: "M1900,350 Q1600,320 1300,380 T700,360", gradientId: "lineGradient2", color: "#a78bfa", duration: 6 },
];

const gradientConfigs = [
  { id: "lineGradient1", color: "#60a5fa", duration: 8 },
  { id: "lineGradient2", color: "#a78bfa", duration: 6 },
  { id: "lineGradient3", color: "#34d399", duration: 10 },
  { id: "lineGradient4", color: "#f472b6", duration: 7 },
  { id: "lineGradient5", color: "#fbbf24", duration: 12 },
  { id: "lineGradient6", color: "#fb7185", duration: 9 },
];

export function AnimatedLinesBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const baseColor = isDark ? "#252423" : "#ffffff";
  const lineOpacity = isDark ? 0.6 : 0.3;

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {gradientConfigs.map((gradient) => (
          <linearGradient
            key={gradient.id}
            id={gradient.id}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={baseColor} stopOpacity="0" />
            <stop offset="50%" stopColor={gradient.color} stopOpacity="1" />
            <stop offset="100%" stopColor={baseColor} stopOpacity="0" />
            <animate
              attributeName="x1"
              values="0%;0%;100%"
              dur={`${gradient.duration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="0%;100%;100%"
              dur={`${gradient.duration}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
        ))}
      </defs>

      {lines.map((line) => (
        <path
          key={line.id}
          d={line.path}
          fill="none"
          stroke={`url(#${line.gradientId})`}
          strokeWidth="2"
          opacity={lineOpacity}
        />
      ))}
    </svg>
  );
}
