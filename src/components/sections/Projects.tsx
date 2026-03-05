"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: "decodificador",
      title: "Decodificador de Texto",
      description: "Desafio Alura Codificador. Uma aplicação para criptografar e descriptografar textos, focada em lógica de programação e manipulação de DOM.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl
    },
    {
      id: "jogo-memoria",
      title: "Jogo da Memória",
      description: "Projeto interativo desenvolvido para praticar manipulação de estados e eventos com JavaScript puro, garantindo uma experiência fluida.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: PlaceHolderImages.find(img => img.id === "project-3")?.imageUrl
    },
    {
      id: "index-edge",
      title: "Index Edge Microsoft",
      description: "Cópia da interface do navegador Edge. Projeto focado em precisão visual e domínio de CSS Layout (Flexbox e Grid).",
      tech: ["HTML", "CSS"],
      image: PlaceHolderImages.find(img => img.id === "project-2")?.imageUrl
    },
    {
      id: "evecshoes",
      title: "Evecshoes Catálogo",
      description: "Catálogo de tênis responsivo. Demonstra habilidades em estruturação de semântica HTML e estilização avançada sem frameworks.",
      tech: ["HTML", "CSS"],
      image: PlaceHolderImages.find(img => img.id === "project-4")?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase">Projetos</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Trabalhos Selecionados ({projects.length})</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col group border border-border rounded-md overflow-hidden bg-card transition-all hover:shadow-md">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">Preview do Projeto</div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase px-3">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button variant="default" className="flex-1 gap-2 font-bold uppercase tracking-wider text-[10px] py-6">
                    <ExternalLink className="w-3 h-3" /> Ver Demo
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2 font-bold uppercase tracking-wider text-[10px] py-6">
                    <Github className="w-3 h-3" /> Repositório
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
