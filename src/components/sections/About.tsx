
"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-none">SOBRE <br />MIM</h2>
          </div>
          
          <div className="lg:w-2/3 space-y-10">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-snug font-medium text-foreground">
                Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor focado em front-end.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tenho experiência criando sistemas web e interfaces modernas utilizando tecnologias como React, Next.js e Firebase. Meu foco é transformar requisitos de negócio em interfaces intuitivas e eficientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Meu objetivo é desenvolver soluções digitais funcionais que ajudem empresas a otimizar processos e melhorar a vida dos usuários através da tecnologia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Experiência</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Dev Full Stack @ Studio Noir</span>
                    <span className="text-muted-foreground">2022 — Atual</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Software Engineer @ TechFlow</span>
                    <span className="text-muted-foreground">2020 — 2022</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">O que entrego</h4>
                <ul className="grid grid-cols-1 gap-3 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Arquitetura Web Moderna</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Engenharia de Interfaces (UI)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Desenvolvimento de SaaS</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Integração com APIs & Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
