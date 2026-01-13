"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function HeroSection() {
  const text =
    "I build modern, interactive web applications with a focus on user experience, accessibility, and performance.";
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
          setShowCursor(false);
        }
      }, 50);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container max-w-5xl mx-auto px-8 py-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting <span className="text-primary">amazing</span> web
            experiences
          </motion.h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 min-h-[120px]">
            {typedText}
            {showCursor && (
              <span className="animate-pulse text-primary">|</span>
            )}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                View My Work
              </ScrollLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Get in Touch
              </ScrollLink>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="inline-block animate-bounce cursor-pointer"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

