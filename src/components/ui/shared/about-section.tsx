"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/mypicture.jpeg"
              alt="Developer portrait"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-full w-full border-2 border-primary rounded-2xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-subheading">Who I Am</h2>
          <h3 className="section-heading">About Me</h3>

          <div className="space-y-4 mb-8">
            <p>
              Hey, I’m a developer who loves building fast, clean, and
              good-looking stuff. Been at it for a while—turning ideas into
              smooth, functional experiences that just feel right.
            </p>
            <p>
              I’m all about that balance between performance and design. I
              believe code should be snappy, scalable, and never get in the way.
              If it looks good and works even better, that’s the sweet spot.
            </p>
            <p>
              When I’m not working, I’m probably tinkering with low-level stuff,
              tweaking my setup (again), deep in some sci-fi rabbit hole or out
              for a walk.
            </p>
          </div>
          <Button asChild>
            <Link href="/Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
