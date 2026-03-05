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
      description: "Desenvolvimento de uma interface de e-commerce focada em conversão, resolvendo a complexidade de navegação em grandes inventários.",
      tech: ["React", "TypeScript", "Tailwind", "Firebase"],
      image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl
    },
    {
      id: "project-3",
      title: "SyncFlow AI",
      description: "Plataforma de produtividade que utiliza IA para simplificar a gestão de cronogramas complexos para equipes remotas.",
      tech: ["Next.js", "React", "Genkit", "Tailwind"],
      image: PlaceHolderImages.find(img => img.id === "project-3")?.imageUrl
    },
    {
      id: "project-2",
      title: "FinTrack Dashboard",
      description: "Dashboard financeiro para visualização clara de dados críticos, transformando números complexos em gráficos intuitivos.",
      tech: ["React", "Recharts", "CSS Modules", "JavaScript"],
      image: PlaceHolderImages.find(img => img.id === "project-2")?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase">Projetos React</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Focado em Soluções (03)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col group border border-border rounded-md overflow-hidden bg-card transition-all hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
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
              
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="font-mono text-[9px] uppercase">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" className="flex-1 gap-2 font-bold uppercase tracking-wider text-[10px]">
                    <ExternalLink className="w-3 h-3" /> Ver Projeto
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2 font-bold uppercase tracking-wider text-[10px]">
                    <Github className="w-3 h-3" /> Código
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
