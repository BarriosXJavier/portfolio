import React from "react";
import { Heart, Atom } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <hr className="bg-muted" />
      <footer className="bg-background/80 py-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold tracking-tight mb-2 flex items-center gap-1.5">
              <Atom className="h-6 w-6 text-primary" />
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-1.5">
                Made with{" "}
                <Heart className="h-4 w-4 text-red-500 animate-pulse" /> and
                modern web technologies
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                © {currentYear}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
