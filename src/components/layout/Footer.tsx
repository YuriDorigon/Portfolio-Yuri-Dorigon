
"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
            >
              YURI<span className="text-accent">.</span>
            </Link>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              © {currentYear} Yuri Portfolio. Desenvolvido com foco em resultados.
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Projetos</Link>
            <Link href="#skills" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Habilidades</Link>
            <Link href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Sobre</Link>
            <Link href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Contato</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status: Aberto para oportunidades</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
