
"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "Vantage E-com",
      description: "Plataforma de e-commerce completa com gestão de inventário e integração de pagamentos.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl
    },
    {
      id: "project-2",
      title: "FinTrack Dashboard",
      description: "Painel administrativo para controle financeiro empresarial com relatórios dinâmicos.",
      tech: ["React", "Recharts", "Node.js", "PostgreSQL"],
      image: PlaceHolderImages.find(img => img.id === "project-2")?.imageUrl
    },
    {
      id: "project-3",
      title: "SyncFlow AI",
      description: "App de produtividade que utiliza IA para organizar tarefas e cronogramas de equipes.",
      tech: ["Genkit", "Google Gemini", "React", "Firebase"],
      image: PlaceHolderImages.find(img => img.id === "project-3")?.imageUrl
    },
    {
      id: "project-4",
      title: "Studio CMS",
      description: "Sistema de gerenciamento de conteúdo headless focado em performance para blogs.",
      tech: ["Next.js", "Prisma", "TypeScript", "AWS"],
      image: PlaceHolderImages.find(img => img.id === "project-4")?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary">PROJETOS SELECIONADOS</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Portfolio (04)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-muted mb-8 shadow-sm">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="default" size="sm" className="gap-2 font-bold uppercase tracking-wider text-xs">
                    <ExternalLink className="w-4 h-4" /> Ver projeto
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 font-bold uppercase tracking-wider text-xs">
                    <Github className="w-4 h-4" /> Ver código
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
