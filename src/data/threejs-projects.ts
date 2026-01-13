import { siteConfig } from "@/config/site";

export const experiments = [
  {
    id: 1,
    title: "Particle Galaxy",
    description:
      "A mesmerizing procedural galaxy with 100k particles, custom GLSL shaders, and interactive wave propagation effects. Features post-processing bloom and auto-rotating orbit controls.",
    tags: ["Three.js", "GLSL Shaders", "Post-processing", "BufferGeometry"],
    image: "/threejs-projects/particle-galaxy.png",
    demoUrl: `${siteConfig.social.threejs}/particle-galaxy`,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: "Moonlit Night",
    description:
      "A serene night scene built with React Three Fiber featuring atmospheric lighting, procedural clouds, twinkling stars, and soft fog effects.",
    tags: ["React Three Fiber", "Drei", "Atmospheric Lighting", "Procedural"],
    image: "/threejs-projects/moonlit-night.png",
    demoUrl: `${siteConfig.social.threejs}/moonlit-night`,
    color: "from-blue-500/20 to-indigo-500/20",
  },
];

export type Experiment = (typeof experiments)[0];
