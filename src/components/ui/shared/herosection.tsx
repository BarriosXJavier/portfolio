"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
  <motion.div
    className={`absolute ${position} ${size} rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl`}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export function HeroSection() {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }), []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background orbs */}
      <FloatingOrb delay={0} size="w-[500px] h-[500px]" position="top-20 -left-64" />
      <FloatingOrb delay={2} size="w-[400px] h-[400px]" position="bottom-20 -right-48" />
      <FloatingOrb delay={4} size="w-[300px] h-[300px]" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        className="container max-w-6xl mx-auto px-6 md:px-8 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="block text-foreground">Hi, I&apos;m</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              David Njoroge
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            Frontend Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-12"
            variants={itemVariants}
          >
            Building high-performance web applications with TypeScript and Next.js, 
            focused on delivering exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden px-8 py-6 text-base"
              asChild
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-base border-foreground/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <ScrollLink
                to="social"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                Get in Touch
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </ScrollLink>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
