"use client";

import { BookOpen, Briefcase, Heart, GraduationCap } from "lucide-react";

export default function About() {
  const formation = [
    { school: "Unicesumar", course: "Análise e Desenvolvimento de Sistemas", status: "Cursando", icon: <GraduationCap className="w-4 h-4" /> },
    { school: "Alura", course: "ONE | Especialização Front-End", year: "2025", icon: <BookOpen className="w-4 h-4" /> },
    { school: "Curso em Vídeo", course: "HTML5 e CSS3", year: "2022", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-none uppercase">Sobre <br />Mim</h2>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-snug font-medium text-foreground">
                Estudante de ADS com foco em arquitetura front-end moderna.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Minha transição para a tecnologia é fruto de uma decisão consciente de unir minha capacidade analítica com a paixão por criar produtos digitais. Sou estudante de Análise e Desenvolvimento de Sistemas e dedico meu tempo a dominar o ecossistema React, buscando sempre escrever código limpo e escalável.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Com experiência prévia em funções que exigiam alta organização e comunicação assertiva, trago para o desenvolvimento uma visão focada no usuário e na resolução de problemas de negócio. Estou em constante aprendizado de tecnologias como Next.js e TypeScript para entregar soluções cada vez mais eficientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" /> Formação Acadêmica
                </h4>
                <div className="space-y-6">
                  {formation.map((f, i) => (
                    <div key={i} className="border-b border-border/50 pb-4">
                      <p className="font-bold text-foreground">{f.course}</p>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>{f.school}</span>
                        <span>{f.status || f.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-accent" /> Abordagem Profissional
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-sm">
                    <h5 className="font-bold text-sm uppercase mb-2">Foco no Usuário</h5>
                    <p className="text-sm text-muted-foreground">Interfaces intuitivas que priorizam a facilidade de uso e acessibilidade.</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-sm">
                    <h5 className="font-bold text-sm uppercase mb-2">Código Limpo</h5>
                    <p className="text-sm text-muted-foreground">Preocupação constante com a manutenibilidade e padrões de projeto modernos.</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-accent/5 border border-accent/10 rounded-sm">
                  <p className="text-sm italic text-muted-foreground">
                    "Busco colaborar com equipes que valorizam a excelência técnica e a inovação contínua na experiência do usuário."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
