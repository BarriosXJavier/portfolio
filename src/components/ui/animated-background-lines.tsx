"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface AnimatedBackgroundLinesProps {
  className?: string;
  lineColor?: string;
  strokeWidth?: number;
  opacity?: number;
  animationDuration?: number;
  density?: "low" | "medium" | "high";
}

export const AnimatedBackgroundLines = ({
  className,
  lineColor,
  strokeWidth = 0.5,
  opacity = 0.3,
  animationDuration = 20,
  density = "medium",
}: AnimatedBackgroundLinesProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine line color based on theme
  const getLineColor = () => {
    if (lineColor) return lineColor;
    return theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";
  };

  // Generate line count based on density
  const getLineCount = () => {
    switch (density) {
      case "low":
        return { horizontal: 6, vertical: 8, diagonal: 4 };
      case "medium":
        return { horizontal: 8, vertical: 12, diagonal: 6 };
      case "high":
        return { horizontal: 12, vertical: 16, diagonal: 8 };
      default:
        return { horizontal: 8, vertical: 12, diagonal: 6 };
    }
  };

  const { horizontal, vertical, diagonal } = getLineCount();

  // Generate random positions and animation delays
  const generateLines = (count: number, type: "horizontal" | "vertical" | "diagonal") => {
    return Array.from({ length: count }, (_, i) => {
      const delay = Math.random() * animationDuration;
      const position = (i / count) * 100;
      const offset = Math.random() * 20 - 10; // Random offset between -10% and 10%
      
      return {
        id: `${type}-${i}`,
        position: position + offset,
        delay,
        duration: animationDuration + Math.random() * 10 - 5, // Slight variation in duration
      };
    });
  };

  const horizontalLines = generateLines(horizontal, "horizontal");
  const verticalLines = generateLines(vertical, "vertical");
  const diagonalLines = generateLines(diagonal, "diagonal");

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0 overflow-hidden",
        className
      )}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient definitions for subtle glow effect */}
          <linearGradient id="horizontalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={getLineColor()} stopOpacity="0" />
            <stop offset="50%" stopColor={getLineColor()} stopOpacity="1" />
            <stop offset="100%" stopColor={getLineColor()} stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="verticalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={getLineColor()} stopOpacity="0" />
            <stop offset="50%" stopColor={getLineColor()} stopOpacity="1" />
            <stop offset="100%" stopColor={getLineColor()} stopOpacity="0" />
          </linearGradient>

          <linearGradient id="diagonalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={getLineColor()} stopOpacity="0" />
            <stop offset="50%" stopColor={getLineColor()} stopOpacity="1" />
            <stop offset="100%" stopColor={getLineColor()} stopOpacity="0" />
          </linearGradient>

          {/* Animation filters for subtle glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal lines */}
        {horizontalLines.map((line) => (
          <line
            key={line.id}
            x1="0"
            y1={line.position}
            x2="100"
            y2={line.position}
            stroke="url(#horizontalGrad)"
            strokeWidth={strokeWidth}
            filter="url(#glow)"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${line.duration}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;5,0;0,0"
              dur={`${line.duration}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Vertical lines */}
        {verticalLines.map((line) => (
          <line
            key={line.id}
            x1={line.position}
            y1="0"
            x2={line.position}
            y2="100"
            stroke="url(#verticalGrad)"
            strokeWidth={strokeWidth}
            filter="url(#glow)"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${line.duration}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;0,5;0,0"
              dur={`${line.duration}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Diagonal lines */}
        {diagonalLines.map((line) => (
          <line
            key={line.id}
            x1="0"
            y1={line.position}
            x2="100"
            y2={line.position + 20}
            stroke="url(#diagonalGrad)"
            strokeWidth={strokeWidth * 0.7}
            filter="url(#glow)"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.7;0"
              dur={`${line.duration * 1.5}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;3,3;0,0"
              dur={`${line.duration * 1.5}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Additional floating particles for extra subtlety */}
        {Array.from({ length: 3 }, (_, i) => (
          <circle
            key={`particle-${i}`}
            cx={20 + i * 30}
            cy={20 + i * 20}
            r="0.3"
            fill={getLineColor()}
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur={`${animationDuration + i * 5}s`}
              begin={`${i * 3}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0;${10 + i * 5},${5 + i * 3};0,0`}
              dur={`${animationDuration + i * 5}s`}
              begin={`${i * 3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};