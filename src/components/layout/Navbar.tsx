
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-3 md:py-4" : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-lg md:text-xl font-bold tracking-tighter hover:text-accent transition-colors"
        >
          YURI DORIGON<span className="text-accent">.</span>
        </Link>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          {mounted ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -mr-2 hover:text-accent transition-colors" aria-label="Abrir menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] bg-background border-l border-border flex flex-col p-8">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-xl font-bold tracking-tighter uppercase">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-12 flex-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-bold uppercase tracking-tight hover:text-accent transition-colors border-b border-border/50 pb-4"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="pt-8 border-t border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-relaxed">
                    Yuri Dorigon — <br />Desenvolvedor Front-End
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <button className="p-2 -mr-2 hover:text-accent transition-colors" aria-label="Abrir menu">
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
