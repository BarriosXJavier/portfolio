"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { socialLinks } from "@/data/social-links";

const navItems = [
  { name: "Projects", to: "projects", offset: -50 },
  { name: "Skills", to: "skills", offset: -50 },
  { name: "About", to: "about", offset: -50 },
  { name: "Contact", to: "social", offset: -50 },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-foreground/10 shadow-lg shadow-black/5"
          : "py-5 bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 justify-self-start"
          >
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer group flex items-center gap-2"
              aria-label="Go to home section"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
                  <span className="text-primary-foreground font-bold text-lg">D</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-primary/60 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="hidden sm:block text-lg font-semibold tracking-tight">
                <span className="text-foreground">David</span>
                <span className="text-primary">.dev</span>
              </span>
            </ScrollLink>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-foreground/5 backdrop-blur-sm border border-foreground/10">
              {navItems.map((item, index) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  activeClass="nav-active"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium cursor-pointer rounded-full",
                    "text-muted-foreground hover:text-foreground transition-colors duration-200",
                    "hover:bg-foreground/10",
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    {item.name}
                  </motion.span>
                </ScrollLink>
              ))}
            </div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 justify-self-end"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={cn(
                  "relative p-2.5 rounded-full",
                  "text-muted-foreground hover:text-foreground",
                  "bg-foreground/5 hover:bg-foreground/10",
                  "border border-transparent hover:border-foreground/10",
                  "transition-all duration-300 group",
                )}
              >
                <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.a>
            ))}

            {mounted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={cn(
                  "relative p-2.5 rounded-full",
                  "text-muted-foreground hover:text-foreground",
                  "bg-foreground/5 hover:bg-foreground/10",
                  "border border-transparent hover:border-foreground/10",
                  "transition-all duration-300 group",
                )}
              >
                <AnimatePresence mode="wait">
                  {resolvedTheme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </motion.button>
            )}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center justify-self-end",
              "bg-foreground/5 hover:bg-foreground/10 border border-foreground/10",
              "transition-colors duration-300",
            )}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-foreground rounded-full origin-left"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1, scaleX: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-foreground rounded-full"
              />
              <motion.span
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-foreground rounded-full origin-left"
              />
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-40 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col h-full px-6 py-8"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ScrollLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-4 text-2xl font-medium rounded-2xl",
                        "text-foreground/80 hover:text-foreground",
                        "hover:bg-foreground/5",
                        "transition-all duration-300 cursor-pointer",
                      )}
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-auto pb-8"
              >
                <p className="text-sm text-muted-foreground mb-4 px-4">Connect with me</p>
                <div className="flex items-center gap-3 px-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className={cn(
                        "p-4 rounded-2xl text-foreground",
                        "bg-foreground/5 hover:bg-foreground/10",
                        "border border-foreground/10 transition-all duration-300",
                      )}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}

                  {mounted && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className={cn(
                        "p-4 rounded-2xl text-foreground",
                        "bg-foreground/5 hover:bg-foreground/10",
                        "border border-foreground/10 transition-all duration-300",
                      )}
                    >
                      {resolvedTheme === "dark" ? (
                        <Sun className="w-6 h-6" />
                      ) : (
                        <Moon className="w-6 h-6" />
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
