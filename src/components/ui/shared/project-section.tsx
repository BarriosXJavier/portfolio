"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  },
];

const categories = ["all", "web", "app"];

export function ProjectSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-subheading">My Work</h2>
          <h3 className="section-heading">Featured Projects</h3>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className="capitalize"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </Link>
                </Button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/BarriosXJavier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" /> View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
