
"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <Link 
                href="/" 
                className="text-xl md:text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
              >
                YURI DORIGON<span className="text-accent">.</span>
              </Link>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                © {currentYear} Yuri Dorigon. Desenvolvedor Front-End.
              </p>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#projects" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Projetos</a>
              <a href="#skills" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Habilidades</a>
              <a href="#about" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Sobre</a>
              <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Contato</a>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Disponível para novos projetos</span>
            </div>
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
              Desenvolvido com React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
