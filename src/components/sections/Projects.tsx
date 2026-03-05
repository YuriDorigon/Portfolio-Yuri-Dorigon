"use client";

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

export default function Projects() {
  const projects = [
    {
      id: "decodificador",
      title: "Decodificador de Dados",
      description: "Solução para criptografia e segurança de strings. Demonstra domínio de lógica algorítmica e manipulação eficiente do DOM com JavaScript puro.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl
    },
    {
      id: "jogo-memoria",
      title: "Engine de Jogo Interativo",
      description: "Interface dinâmica focada em gerenciamento de estado e eventos em tempo real. Demonstra habilidades em interatividade e performance de UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: PlaceHolderImages.find(img => img.id === "project-3")?.imageUrl
    },
    {
      id: "index-edge",
      title: "Interface de Navegador High-Fidelity",
      description: "Réplica de interface complexa focada em precisão visual. Demonstra domínio avançado de layouts responsivos com Flexbox e CSS Grid.",
      tech: ["HTML", "CSS"],
      image: PlaceHolderImages.find(img => img.id === "project-2")?.imageUrl
    },
    {
      id: "evecshoes",
      title: "Catálogo de Produtos Otimizado",
      description: "Plataforma de catálogo responsiva com foco em semântica HTML e SEO, demonstrando estruturação de dados e estilização avançada.",
      tech: ["HTML", "CSS"],
      image: PlaceHolderImages.find(img => img.id === "project-4")?.imageUrl
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary uppercase">Projetos</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Portfólio de Soluções Técnica ({projects.length})</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col group border border-border rounded-md overflow-hidden bg-card transition-all hover:shadow-md">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted cursor-zoom-in">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                            Expandir Visualização
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">Preview do Projeto</div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border">
                  <DialogHeader className="p-4 border-b border-border bg-card">
                    <DialogTitle className="text-lg font-bold uppercase tracking-tight">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-[16/9] w-full bg-black/5">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2"
                        quality={100}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
              
              <div className="p-8 flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase px-3">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
