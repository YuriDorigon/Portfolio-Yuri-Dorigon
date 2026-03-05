"use client";

import { BookOpen, Briefcase, GraduationCap, Laptop } from "lucide-react";

export default function About() {
  const formation = [
    { school: "Alura", course: "Programa Oracle Next Education – Especialização Front-End", year: "2025", icon: <BookOpen className="w-4 h-4" /> },
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
                Sou desenvolvedor front-end focado na criação de interfaces modernas e aplicações web funcionais utilizando React, HTML, CSS e JavaScript.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Atualmente trabalho na área da saúde atuando como recepcionista e suporte de TI em uma clínica médica, onde desenvolvi forte capacidade de organização, resolução de problemas e comunicação com diferentes equipes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Paralelamente à minha atuação profissional, venho construindo minha carreira em tecnologia através de estudos constantes e desenvolvimento de projetos práticos utilizando tecnologias modernas como React, Next.js e JavaScript. Tenho grande interesse em participar de equipes de desenvolvimento onde eu possa contribuir com soluções digitais eficientes enquanto continuo evoluindo tecnicamente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-accent" /> Experiência Profissional
                </h4>
                <div className="space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <p className="font-bold text-foreground">Recepcionista / Suporte de TI</p>
                    <p className="text-sm text-accent font-medium">Tagis Medicina & Diagnóstico</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">2023 — PRESENTE</p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span> Atendimento e suporte direto a pacientes e equipe médica
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span> Organização de agendas e processos internos
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span> Suporte técnico básico em computadores e rede
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span> Auxílio na resolução de problemas de sistemas internos
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span> Apoio em tarefas relacionadas à infraestrutura de TI
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" /> Formação Técnica
                </h4>
                <div className="space-y-6">
                  {formation.map((f, i) => (
                    <div key={i} className="border-b border-border/50 pb-4">
                      <p className="font-bold text-foreground">{f.course}</p>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>{f.school}</span>
                        <span>{f.year}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-secondary rounded-sm border border-border">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Diferencial</p>
                    <p className="text-sm text-muted-foreground">Formação contínua focada em desenvolvimento web prático e tecnologias do ecossistema React.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
