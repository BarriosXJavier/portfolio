"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { skills, type Skill } from "@/data/skills";

function SkillCard({ name, icon, index }: { name: string; icon: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "group relative p-3 rounded-xl cursor-default",
        "bg-foreground/[0.03] hover:bg-foreground/[0.06]",
        "border border-foreground/10 hover:border-primary/30",
        "transition-all duration-300"
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      <div className="relative flex items-center gap-2.5">
        <div className="w-6 h-6 flex-shrink-0 relative">
          <Image src={icon} alt={`${name} logo`} fill sizes="24px" className="object-contain" />
        </div>
        <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors truncate">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

function SkillCategoryCard({
  category,
  items,
  index,
}: {
  category: string;
  items: Skill[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-foreground">{category}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((skill, skillIndex) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }),
    []
  );

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {skills.map((skillGroup, index) => (
            <SkillCategoryCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
