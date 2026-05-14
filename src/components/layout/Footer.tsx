
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <Link
              href="/"
              className="font-display italic font-bold text-xl tracking-tight hover:text-accent transition-colors"
            >
              Yuri Dorigon<span className="text-accent not-italic">.</span>
            </Link>
            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
              © {year ?? 2025} — Desenvolvedor Front-End
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Projetos", "Habilidades", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
              Disponível para novos projetos
            </span>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground/40 hidden sm:block">
            React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
