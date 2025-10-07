"use client";

import { AnimatedBackgroundLines } from "./animated-background-lines";
import { EnhancedAnimatedBackground } from "./enhanced-animated-background";
import { backgroundConfig, themeOverrides } from "./background-config";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundWrapper = ({ 
  children, 
  className 
}: BackgroundWrapperProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSlowDevice, setIsSlowDevice] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simple performance check
    if (backgroundConfig.performance.disableOnSlowDevices) {
      const startTime = performance.now();
      // Simple computation to test device speed
      for (let i = 0; i < 100000; i++) {
        Math.random();
      }
      const endTime = performance.now();
      setIsSlowDevice(endTime - startTime > 10);
    }
  }, []);

  if (!mounted || isSlowDevice || backgroundConfig.activeStyle === 'none') {
    return <main className={className}>{children}</main>;
  }

  // Get theme-specific configuration
  const currentTheme = theme as 'dark' | 'light';
  const themeConfig = themeOverrides[currentTheme] || {};

  const renderBackground = () => {
    switch (backgroundConfig.activeStyle) {
      case 'svg-lines':
        return (
          <AnimatedBackgroundLines
            density={backgroundConfig.svgLines.density}
            opacity={themeConfig.svgLines?.opacity || backgroundConfig.svgLines.opacity}
            animationDuration={backgroundConfig.svgLines.animationDuration}
            strokeWidth={backgroundConfig.svgLines.strokeWidth}
          />
        );
      
      case 'enhanced-css':
        return (
          <EnhancedAnimatedBackground
            intensity={themeConfig.enhanced?.intensity || backgroundConfig.enhanced.intensity}
            style={backgroundConfig.enhanced.style}
          />
        );
      
      case 'minimal':
        return (
          <EnhancedAnimatedBackground
            intensity="subtle"
            style="minimal"
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <main className={`relative ${className || ''}`}>
      {renderBackground()}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};