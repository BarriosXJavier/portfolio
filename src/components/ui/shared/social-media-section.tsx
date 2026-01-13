"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "GitHub",
    url: siteConfig.social.github,
    icon: Github,
    color: "hover:bg-[#333] hover:text-white",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: Linkedin,
    color: "hover:bg-[#0077B5] hover:text-white",
    description: "Let's connect",
  },
  {
    name: "X (Twitter)",
    url: siteConfig.social.twitter,
    icon: Twitter,
    color: "hover:bg-[#1DA1F2] hover:text-white",
    description: "Follow my journey",
  },
  {
    name: "Email",
    url: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "hover:bg-primary hover:text-primary-foreground",
    description: "Get in touch",
  },
];

export function SocialMediaSection() {
  return (
    <section id="social" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "relative p-8 md:p-12 rounded-3xl mb-12",
            "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
            "border border-primary/20"
          )}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I&apos;d love to hear about it. Send me an email and let&apos;s bring your ideas to
              life.
            </p>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Send email to ${siteConfig.email}`}
              className={cn(
                "inline-flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-primary text-primary-foreground font-medium",
                "shadow-lg shadow-primary/25 hover:shadow-primary/40",
                "transition-shadow duration-300"
              )}
            >
              <Send className="w-5 h-5" />
              Send me an email
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-6">
            Or find me on social media
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} - ${social.description}`}
                  className={cn(
                    "group flex flex-col items-center gap-3 p-6 rounded-2xl",
                    "bg-foreground/[0.02] border border-foreground/10",
                    "transition-all duration-300",
                    social.color
                  )}
                >
                  <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-center">
                    <p className="font-medium text-sm">{social.name}</p>
                    <p className="text-xs text-muted-foreground group-hover:text-current/70 transition-colors">
                      {social.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
