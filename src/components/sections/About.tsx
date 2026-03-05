
"use client";

import Image from "next/image";
import { BookOpen, Laptop, GraduationCap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl;

  const formation = [
    { school: "Alura", course: "Programa Oracle Next Education – Especialização Front-End", year: "2025", icon: <BookOpen className="w-4 h-4" /> },
    { school: "Curso em Vídeo", course: "HTML5 e CSS3", year: "2022", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3 space-y-8 w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary leading-none uppercase">Sobre <br />Mim</h2>
            
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 aspect-square rounded-full overflow-hidden border-2 border-border shadow-md grayscale hover:grayscale-0 transition-all duration-500">
              {profileImg ? (
                <Image 
                  src={profileImg} 
                  alt="Yuri Dorigon - Perfil Profissional" 
                  fill 
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Foto Perfil
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-snug font-medium text-foreground">
                Sou desenvolvedor front-end focado na criação de interfaces modernas e aplicações web utilizando React, JavaScript, HTML e CSS.
              </p>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-12 border-t border-border">
              <div className="space-y-8">
                <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2 text-accent">
                  <Laptop className="w-4 h-4" /> Experiência Profissional
                </h4>
                <div className="space-y-8">
                  <div className="border-l-2 border-border/50 pl-6 space-y-2">
                    <p className="font-bold text-foreground text-lg">Recepcionista / Suporte de TI</p>
                    <p className="text-sm font-semibold text-accent">Tagis Medicina & Diagnóstico</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">2023 — PRESENTE</p>
                    
                    <ul className="mt-6 space-y-3">
                      {[
                        "Atendimento e suporte direto a pacientes e equipe médica",
                        "Organização de agendas e processos internos",
                        "Suporte técnico básico em computadores e rede",
                        "Auxílio na resolução de problemas de sistemas internos"
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-3">
                          <span className="text-accent shrink-0 mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2 text-accent">
                  <GraduationCap className="w-4 h-4" /> Formação Técnica
                </h4>
                <div className="space-y-8">
                  {formation.map((f, i) => (
                    <div key={i} className="border-l-2 border-border/50 pl-6 space-y-2">
                      <p className="font-bold text-foreground text-lg leading-tight">{f.course}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-muted-foreground gap-1">
                        <span className="font-medium">{f.school}</span>
                        <span className="text-xs uppercase tracking-widest font-bold">{f.year}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-8 p-6 bg-secondary rounded-md border border-border">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">Diferencial</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Experiência prática com desenvolvimento web, foco em código limpo, interfaces responsivas e boas práticas de acessibilidade. Interesse contínuo em evolução técnica e aprendizado de novas tecnologias do ecossistema JavaScript.
                    </p>
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
