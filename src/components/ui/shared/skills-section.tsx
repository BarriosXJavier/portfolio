"use client";

import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "REST APIs", level: 85 },
];

const tools = ["VS Code", "Git", "GitHub", "Docker", "Webpack", "Vite", "Jest"];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-subheading">My Expertise</h2>
        <h3 className="section-heading">Technical Skills</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
          {frontendSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6">Backend Development</h3>
          {backendSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-bold mb-6 text-center">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-secondary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
