export const timeline = [
  {
    year: "2023",
    period: "Feb - Aug 2023",
    title: "Frontend Engineer",
    company: "Ole Stones Builders",
    location: "Nairobi",
    description:
      "Developed web applications using TypeScript and Next.js, ensuring fast load times for improved user engagement. Collaborated with cross-functional teams and conducted testing with Jest.",
  },
  {
    year: "2023",
    period: "Jul 2023 - Present",
    title: "Software Engineering Student",
    company: "ALX",
    location: "Nairobi",
    description:
      "Pursuing a rigorous, project-based program in software engineering, focused on problem-solving, systems design, and collaborative development.",
  },
  {
    year: "2024",
    period: "Jun 2024 - Jan 2025",
    title: "Frontend Engineer",
    company: "Pixelayout.site",
    location: "Nairobi",
    description:
      "Delivered high-performance web experiences using TypeScript, Next.js, and PostgreSQL. Designed reusable components and collaborated with editorial staff on tech-focused content.",
  },
];

export const highlights = [
  { icon: "Code2", label: "Clean Code Advocate" },
  { icon: "Zap", label: "Performance Obsessed" },
  { icon: "Coffee", label: "Fueled by Coffee" },
];

export type TimelineItem = (typeof timeline)[0];
