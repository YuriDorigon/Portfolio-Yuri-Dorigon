"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
            >
              YURI DORIGON<span className="text-accent">.</span>
            </Link>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              © {currentYear} Yuri Dorigon. Desenvolvido com foco em resultados técnicos.
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Projetos</Link>
            <Link href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Sobre</Link>
            <Link href="#skills" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Tecnologias</Link>
            <Link href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Contato</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Disponível para a VIP Promotora</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
