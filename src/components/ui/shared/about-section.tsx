"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Coffee, Code2, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { timeline } from "@/data/experience";
import { siteConfig } from "@/config/site";

const highlights = [
  { icon: Code2, label: "Clean Code Advocate" },
  { icon: Zap, label: "Performance Obsessed" },
  { icon: Coffee, label: "Fueled by Coffee" },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <motion.div
        style={{ y, opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image src="/mypicture.jpeg" alt={siteConfig.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={cn(
                  "absolute -bottom-6 right-2 sm:-right-6 md:right-6 p-4 rounded-2xl",
                  "bg-background/80 backdrop-blur-xl",
                  "border border-foreground/10 shadow-2xl"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Based in</p>
                    <p className="text-muted-foreground text-sm">{siteConfig.location}</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Passionate about creating <span className="text-primary">exceptional</span> digital
              experiences
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I&apos;m a Frontend Engineer with expertise in TypeScript and Next.js, focused on
                enhancing user engagement through high-performance web applications.
              </p>
              <p>
                I focus on delivering cutting-edge solutions, collaborating
                effectively with teams, and refining user experiences through code review and
                continuous improvement.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably tinkering with low-level stuff, tweaking
                my setup (again), deep in some sci-fi rabbit hole, or out for a walk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-8 group">
              <Link href={siteConfig.resume} download>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative pl-12 md:pl-0",
                    index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background",
                      "left-2 md:left-1/2 md:-translate-x-1/2"
                    )}
                  />

                  <div
                    className={cn(
                      "p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/10",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    )}
                  >
                    <span className="text-primary font-bold text-sm">{item.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.company} • {item.location}
                    </p>
                    <p className="text-muted-foreground text-sm mt-3">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
