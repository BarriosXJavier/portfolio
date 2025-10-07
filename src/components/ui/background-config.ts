export const backgroundConfig = {
  activeStyle: "svg-lines" as
    | "svg-lines"
    | "enhanced"
    | "enhanced-css"
    | "minimal"
    | "none",

  svgLines: {
    density: "medium" as const,
    opacity: 0.3,
    animationDuration: 25,
    strokeWidth: 0.5,
  },

  enhanced: {
    intensity: "subtle" as const,
    style: "flowing" as const,
  },

  performance: {
    reducedMotionOnMobile: true,
    disableOnSlowDevices: false,
  },
};

export const themeOverrides = {
  dark: {
    svgLines: {
      opacity: 0.4,
    },
    enhanced: {
      intensity: "medium" as const,
    },
  },
  light: {
    svgLines: {
      opacity: 0.2,
    },
    enhanced: {
      intensity: "subtle" as const,
    },
  },
};
