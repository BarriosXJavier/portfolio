export const projects = [
  {
    id: 1,
    title: "Groove Furniture",
    description:
      "A modern platform for enabling users sell and find furniture built with Next.js, TailwindCSS, TypeScript, MongoDB. Features include product search, filtering and cart management.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    image: "/groove.png",
    demoUrl: "https://groove-v1.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/groove-v1",
    category: "web",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Pawsome",
    description: "A website where you can find your fur friend",
    tags: ["React", "TailwindCSS", "TypeScript", "Supabase"],
    image: "/pawsome.png",
    demoUrl: "https://pawsome-one.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/pawsome",
    category: "web",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Tonemify",
    description: "The ultimate tool for Shadcn theming",
    tags: ["Nextjs", "Shadcn", "Tailwindcss", "Javascript"],
    image: "/tonemify.png",
    demoUrl: "https://tonemify.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/tonemify",
    category: "web",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "app", label: "Applications" },
];

export type Project = (typeof projects)[0];
