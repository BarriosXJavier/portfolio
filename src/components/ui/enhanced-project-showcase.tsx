"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
  features: string[];
  videoDemo?: string;
  livePreviewUrl?: string;
}

const enhancedProjects: ProjectData[] = [
  {
    id: 1,
    title: "Groove Furniture",
    description:
      "A modern platform for enabling users sell and find furniture built with Next.js, TailwindCSS, TypeScript, MongoDB.",
    longDescription:
      "A comprehensive furniture marketplace that revolutionizes how people buy and sell furniture. Features advanced search algorithms, real-time chat, secure payments, and AR visualization for furniture placement.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    image: "/groove.png",
    demoUrl: "https://groove-v1.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/groove-v1",
    category: "web",
    features: [
      "Advanced Search & Filtering",
      "Real-time Chat System",
      "Secure Payment Integration",
      "AR Furniture Visualization",
      "User Reviews & Ratings",
    ],
    livePreviewUrl: "https://groove-v1.vercel.app/",
  },
  {
    id: 2,
    title: "Pawsome",
    description: "A website where you can find your fur friend",
    longDescription:
      "An innovative pet adoption platform that connects loving families with pets in need. Features smart matching algorithms, virtual meet-and-greets, and comprehensive pet care resources.",
    tags: ["React", "TailwindCSS", "TypeScript", "Supabase"],
    image: "/pawsome.png",
    demoUrl: "https://pawsome-one.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/pawsome",
    category: "web",
    features: [
      "Smart Pet Matching",
      "Virtual Meet & Greet",
      "Care Resources Library",
      "Adoption Process Tracking",
      "Community Forums",
    ],
    livePreviewUrl: "https://pawsome-one.vercel.app/",
  },
  {
    id: 3,
    title: "Tonemify",
    description: "The ultimate tool for Shadcn theming",
    longDescription:
      "A powerful theme generator and customization tool for Shadcn/UI components. Provides real-time preview, export functionality, and extensive customization options for modern web applications.",
    tags: ["Next.js", "Shadcn", "Tailwindcss", "Javascript"],
    image: "/tonemify.png",
    demoUrl: "https://tonemify.vercel.app/",
    githubUrl: "https://github.com/BarriosXJavier/tonemify",
    category: "web",
    features: [
      "Real-time Theme Preview",
      "Component Customization",
      "Export to Multiple Formats",
      "Color Palette Generator",
      "Accessibility Checker",
    ],
    livePreviewUrl: "https://tonemify.vercel.app/",
  },
];

function ProjectCard({
  project,
  onExpand,
}: {
  project: ProjectData;
  onExpand: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group rounded-xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 bg-card"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1280}
          height={720}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay with preview iframe on hover */}
        <AnimatePresence>
          {isHovered && project.livePreviewUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center"
            >
              <iframe
                src={project.livePreviewUrl}
                className="w-full h-full scale-50 origin-center pointer-events-none"
                style={{ transform: "scale(0.5)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" onClick={onExpand}>
            <Maximize className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick action overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button size="sm" variant="outline" asChild>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
            </Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
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
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Badge variant="secondary" className="ml-2">
            {project.category}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" asChild>
              <Link href={project.demoUrl} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Button size="sm" variant="outline" onClick={onExpand}>
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 bg-background rounded-2xl border shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <Button variant="ghost" onClick={onClose}>
                  ×
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                  {/* Live Preview */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Live Preview</h3>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <iframe
                        src={project.livePreviewUrl}
                        className="w-full h-full"
                        title={`${project.title} Preview`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild>
                        <Link href={project.demoUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open Full Site
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About</h3>
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function EnhancedProjectSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["all", "web", "app"];
  const filteredProjects =
    filter === "all"
      ? enhancedProjects
      : enhancedProjects.filter((p) => p.category === filter);

  const openProjectModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="section-container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-subheading">My Work</h2>
            <h3 className="section-heading">Interactive Project Showcase</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Explore my projects with live previews, detailed breakdowns, and
              interactive demos.
            </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onExpand={() => openProjectModal(project)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
