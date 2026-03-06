
"use client";

import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

const PROJECTS = [
  {
    id: "kennedy-credit",
    title: "Landing Page Financeira Premium - Kennedy Promotora",
    description: "Site institucional de alta performance desenvolvido para a Kennedy Promotora. Possui design moderno em tons de preto e dourado, navegação com smooth scroll e integração direta com WhatsApp para conversão de clientes.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    imageKey: "project-1"
  },
  {
    id: "retorno-clinica-tagis",
    title: "Gerenciador de Retornos de Pacientes",
    description: "Aplicação web para controle de retornos de pacientes em clínica médica, com cadastro, edição, busca global e controle de acesso por perfis.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Firebase"],
    imageKey: "project-2"
  },
  {
    id: "barbearia-artistas",
    title: "Website Barbearia dos Artistas",
    description: "Site institucional moderno desenvolvido para a Barbearia dos Artistas, focado em apresentação de serviços, identidade visual forte e experiência fluida para usuários em dispositivos móveis.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageKey: "project-3"
  },
  {
    id: "orcamentotagis",
    title: "Orçamento Tagis - Sistema de Gestão",
    description: "Sistema interno para criação e gerenciamento de orçamentos laboratoriais com gestão de exames, relatórios e organização de dados de pacientes.",
    tech: ["Next.js", "TypeScript", "Zustand", "Firebase", "Tailwind CSS"],
    imageKey: "project-4"
  }
];

const ProjectCard = memo(({ project, mounted }: { project: typeof PROJECTS[0], mounted: boolean }) => {
  const imageUrl = PlaceHolderImages.find(img => img.id === project.imageKey)?.imageUrl;

  return (
    <div className="flex flex-col group border border-border rounded-md overflow-hidden bg-card transition-all hover:shadow-lg">
      {mounted ? (
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted cursor-zoom-in">
              {imageUrl ? (
                <>
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 md:group-hover:opacity-100">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                      Ampliar Imagem
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-bold uppercase">
                  Sem Preview
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border w-[95vw] sm:w-full">
            <DialogHeader className="p-4 border-b border-border bg-card">
              <DialogTitle className="text-sm md:text-lg font-bold uppercase tracking-tight">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <div className="relative aspect-[16/9] w-full bg-black/5">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain p-2 md:p-4"
                  quality={90}
                  priority={false}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          )}
        </div>
      )}
      
      <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</h3>
        
        <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map(t => (
            <Badge key={t} variant="secondary" className="font-mono text-[9px] md:text-[10px] uppercase px-2 py-0.5">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-16 gap-4">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary uppercase">
            Projetos
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-xs font-bold">
            Portfólio de Soluções Técnicas ({PROJECTS.length})
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} mounted={mounted} />
          ))}
        </div>
      </div>
    </section>
  );
}
