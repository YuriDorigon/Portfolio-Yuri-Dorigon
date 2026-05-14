
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border/70 py-3 md:py-4"
          : "bg-transparent border-transparent py-5 md:py-7"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          href="/"
          className="font-display italic font-bold text-xl md:text-2xl tracking-tight hover:text-accent transition-colors"
        >
          Yuri Dorigon<span className="text-accent not-italic font-black">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {mounted ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -mr-2 hover:text-accent transition-colors" aria-label="Abrir menu">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] bg-background border-l border-border flex flex-col p-8">
                <SheetHeader className="text-left">
                  <SheetTitle className="font-display italic text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-0 mt-10 flex-1">
                  {navLinks.map((link, i) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5 border-b border-border/50 group"
                    >
                      <span className="text-xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                      <span className="text-[9px] font-bold text-muted-foreground/50 tracking-widest section-number">
                        0{i + 1}
                      </span>
                    </a>
                  ))}
                </nav>
                <p className="pt-8 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                  Yuri Dorigon — Front-End Developer
                </p>
              </SheetContent>
            </Sheet>
          ) : (
            <button className="p-2 -mr-2" aria-label="Abrir menu">
              <Menu className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
