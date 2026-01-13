import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export const socialLinks = [
  {
    name: "GitHub",
    url: siteConfig.social.github,
    icon: Github,
    username: "@BarriosXJavier",
  },
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: Linkedin,
    username: "davidm-njoroge",
  },
  {
    name: "Twitter",
    url: siteConfig.social.twitter,
    icon: Twitter,
    username: "@barrios__x",
  },
  {
    name: "Email",
    url: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
];

export const navSocialLinks = socialLinks.filter(
  (link) => link.name !== "Email"
);
