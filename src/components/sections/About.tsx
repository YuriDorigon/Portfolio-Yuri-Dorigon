
"use client";

import { Laptop, GraduationCap } from "lucide-react";

export default function About() {
  const formation = [
    { school: "Alura", course: "Programa Oracle Next Education – Especialização Front-End", year: "2025" },
    { school: "Curso em Vídeo", course: "HTML5 e CSS3", year: "2022" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 md:mb-20 gap-4 border-b border-border pb-8">
          <h2 className="font-display italic font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground">
            Sobre Mim
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
            Trajetória & Perfil
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="lg:w-2/5 space-y-6">
            <p className="text-xl md:text-2xl leading-snug font-medium text-foreground">
              Desenvolvedor front-end focado na criação de interfaces modernas e aplicações web com React, JavaScript, HTML e CSS.
            </p>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Atualmente trabalho na área da saúde atuando como recepcionista e suporte de TI em uma clínica médica, onde desenvolvi forte capacidade de organização, comunicação e resolução de problemas.
              </p>
              <p>
                Paralelamente, venho construindo minha carreira em tecnologia através de estudos constantes e desenvolvimento de projetos práticos utilizando tecnologias modernas como React e Next.js.
              </p>
              <p>
                Busco minha primeira oportunidade profissional como desenvolvedor para contribuir com soluções digitais eficientes enquanto continuo evoluindo tecnicamente.
              </p>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-12">
            <div className="space-y-6">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 text-accent">
                <Laptop className="w-3.5 h-3.5" />
                <span className="w-4 h-px bg-accent" />
                Experiência Profissional
              </h4>
              <div className="border-l border-border pl-6 space-y-3">
                <p className="font-bold text-foreground text-lg leading-tight">Recepcionista / Suporte de TI</p>
                <p className="text-sm font-bold text-accent">Tagis Medicina & Diagnóstico</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">2023 — Presente</p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Atendimento e suporte direto a pacientes e equipe médica",
                    "Organização de agendas e processos internos",
                    "Suporte técnico básico em computadores e rede",
                    "Auxílio na resolução de problemas de sistemas internos"
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-accent shrink-0 mt-0.5 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 text-accent">
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="w-4 h-px bg-accent" />
                Formação Técnica
              </h4>
              <div className="space-y-6">
                {formation.map((f, i) => (
                  <div key={i} className="border-l border-border pl-6 space-y-1.5">
                    <p className="font-bold text-foreground text-base leading-tight">{f.course}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground gap-2">
                      <span className="font-medium">{f.school}</span>
                      <span className="text-[9px] uppercase tracking-widest font-bold">{f.year}</span>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-5 bg-secondary border border-border/60">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-accent" />
                    Diferencial
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experiência prática com desenvolvimento web, foco em código limpo, interfaces responsivas e boas práticas. Interesse contínuo em evolução técnica no ecossistema JavaScript.
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
