"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Atom } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "Home", to: "hero", offset: -100 },
  { name: "Projects", to: "projects", offset: -50 },
  { name: "Skills", to: "skills", offset: -50 },
  { name: "About", to: "about", offset: -50 },
  { name: "Contact", to: "social", offset: -50 },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight flex items-center gap-1.5">
          <Atom className="h-6 w-6 text-primary" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              className="text-sm font-medium cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        <Button className="hidden md:inline-flex cursor-pointer" asChild>
          <ScrollLink
            to="social"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Let&apos;s Talk
          </ScrollLink>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <Button asChild className="w-full mt-2">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </ScrollLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
