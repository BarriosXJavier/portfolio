"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface EnhancedAnimatedBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "prominent";
  style?: "minimal" | "grid" | "flowing";
}

export const EnhancedAnimatedBackground = ({
  className,
  intensity = "subtle",
  style = "flowing",
}: EnhancedAnimatedBackgroundProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getColors = () => {
    const isDark = theme === "dark";
    
    switch (intensity) {
      case "subtle":
        return {
          primary: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
          secondary: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
          accent: isDark ? "rgba(138, 43, 226, 0.08)" : "rgba(138, 43, 226, 0.04)",
        };
      case "medium":
        return {
          primary: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)",
          secondary: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
          accent: isDark ? "rgba(138, 43, 226, 0.12)" : "rgba(138, 43, 226, 0.06)",
        };
      case "prominent":
        return {
          primary: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)",
          secondary: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
          accent: isDark ? "rgba(138, 43, 226, 0.15)" : "rgba(138, 43, 226, 0.08)",
        };
      default:
        return {
          primary: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
          secondary: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
          accent: isDark ? "rgba(138, 43, 226, 0.08)" : "rgba(138, 43, 226, 0.04)",
        };
    }
  };

  const colors = getColors();

  if (style === "minimal") {
    return (
      <div className={cn("fixed inset-0 pointer-events-none z-0", className)}>
        <div className="absolute inset-0 opacity-30">
          {/* Minimal floating particles */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full drift-particle"
              style={{
                backgroundColor: colors.accent,
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${20 + i * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (style === "grid") {
    return (
      <div className={cn("fixed inset-0 pointer-events-none z-0", className)}>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(${colors.primary} 1px, transparent 1px),
              linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        >
          {/* Animated grid highlights */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute pulse-line"
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: colors.secondary,
                top: `${15 + i * 15}%`,
                animationDelay: `${i * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default flowing style
  return (
    <div className={cn("fixed inset-0 pointer-events-none z-0 overflow-hidden", className)}>
      {/* CSS-based animated elements */}
      <div className="absolute inset-0">
        {/* Horizontal flowing lines */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`h-line-${i}`}
            className="absolute w-full h-px animated-line"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.secondary}, transparent)`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${15 + i * 2}s`,
            }}
          />
        ))}

        {/* Vertical flowing lines */}
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={`v-line-${i}`}
            className="absolute h-full w-px animated-line"
            style={{
              background: `linear-gradient(180deg, transparent, ${colors.secondary}, transparent)`,
              left: `${25 + i * 20}%`,
              animationDelay: `${i * 5}s`,
              animationDuration: `${18 + i}s`,
            }}
          />
        ))}

        {/* Diagonal accent lines */}
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`d-line-${i}`}
            className="absolute pulse-line"
            style={{
              width: '200px',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
              top: `${30 + i * 20}%`,
              left: `${10 + i * 25}%`,
              transform: 'rotate(45deg)',
              transformOrigin: 'center',
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}

        {/* Floating particles with CSS animations */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full drift-particle"
            style={{
              backgroundColor: colors.accent,
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i * 7)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${25 + i * 2}s`,
            }}
          />
        ))}

        {/* Subtle glow effects */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${colors.accent} 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, ${colors.accent} 0%, transparent 50%),
                        radial-gradient(circle at 40% 60%, ${colors.secondary} 0%, transparent 50%)`,
            animation: 'pulse-glow 20s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
};