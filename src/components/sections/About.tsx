"use client";

import { BookOpen, Briefcase, Heart, GraduationCap } from "lucide-react";

export default function About() {
  const formation = [
    { school: "Unicesumar", course: "Análise e Desenvolvimento de Sistemas", status: "Cursando", icon: <GraduationCap className="w-4 h-4" /> },
    { school: "Alura", course: "ONE | Especialização Front-End", year: "2025", icon: <BookOpen className="w-4 h-4" /> },
    { school: "Curso em Vídeo", course: "HTML5 e CSS3", year: "2022", icon: <BookOpen className="w-4 h-4" /> }
  ];

  const hobbies = [
    { name: "Futebol", icon: "⚽" },
    { name: "Videogames", icon: "🎮" },
    { name: "Músicas", icon: "🎧" },
    { name: "Animais", icon: "🐾" }
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
                Profissional motivado, dedicado e em constante evolução técnica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Atualmente busco minha primeira oportunidade como Desenvolvedor Front-End. Com experiência prévia como Recepcionista, desenvolvi fortes habilidades interpessoais, organização e gerenciamento de tarefas, que hoje aplico na construção de interfaces centradas no usuário.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Minha transição para a tecnologia é impulsionada pela paixão em criar experiências web excepcionais. Além do desenvolvimento técnico, invisto em Oratória para garantir uma comunicação clara e eficiente em ambientes de equipe.
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
                  <Heart className="w-4 h-4 text-accent" /> Interesses & Hobbies
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-secondary rounded-sm hover:bg-accent/10 transition-colors">
                      <span className="text-xl">{h.icon}</span>
                      <span className="font-medium text-sm">{h.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-accent/5 border border-accent/10 rounded-sm">
                  <p className="text-sm italic text-muted-foreground">
                    "Estou sempre em busca de novos desafios no desenvolvimento web e de aprimorar minha oratória para ser um profissional mais completo."
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
