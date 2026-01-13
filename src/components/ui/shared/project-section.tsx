"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const projects = [
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

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "app", label: "Applications" },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "bg-foreground/[0.02] border border-foreground/10",
          "transition-all duration-500",
          "hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
        )}
      >
        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* Gradient overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60",
            project.color,
          )} />
          
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered && "scale-110",
            )}
          />

          {/* Hover overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <Button
              size="sm"
              className="rounded-full gap-2"
              asChild
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full gap-2"
              asChild
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className={cn(
              "w-5 h-5 text-muted-foreground transition-all duration-300",
              "group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1",
            )} />
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full",
                  "bg-foreground/5 text-muted-foreground",
                  "border border-foreground/10",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  }, [filter]);

  const handleFilterChange = useCallback((categoryId: string) => {
    setFilter(categoryId);
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              aria-pressed={filter === category.id}
              aria-label={`Filter by ${category.label}`}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                filter === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground",
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="group rounded-full px-8 border-foreground/20 hover:border-primary/50"
            asChild
          >
            <Link
              href="https://github.com/BarriosXJavier"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
