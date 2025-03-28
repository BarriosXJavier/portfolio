"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export function SocialMediaSection() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/BarriosXJavier" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/maksim404/" },
    { name: "X", url: "https://x.com/barrios__x" },
  ];

  return (
    <section id="social" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="section-subheading">Connect with Me</h2>
        <h3 className="section-heading">Let&apos;s Get Social</h3>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Follow me on social media to see my latest projects, thoughts, and
          updates. I&apos;m always excited to connect!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3"
            >
              <SocialIcon
                url={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                bgColor="transparent"
                fgColor="currentColor"
              />
              <span className="font-medium">{social.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
