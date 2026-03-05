
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "Vantage E-com",
      category: "E-Commerce / Web Design",
      year: "2024",
      image: PlaceHolderImages.find(img => img.id === "project-1")?.imageUrl || ""
    },
    {
      id: "project-2",
      title: "FinTrack Dashboard",
      category: "Fintech / Dashboard",
      year: "2023",
      image: PlaceHolderImages.find(img => img.id === "project-2")?.imageUrl || ""
    },
    {
      id: "project-3",
      title: "SyncFlow AI",
      category: "SaaS / AI Integration",
      year: "2024",
      image: PlaceHolderImages.find(img => img.id === "project-3")?.imageUrl || ""
    },
    {
      id: "project-4",
      title: "Studio CMS",
      category: "Open Source / Tooling",
      year: "2023",
      image: PlaceHolderImages.find(img => img.id === "project-4")?.imageUrl || ""
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary">SELECTED WORKS</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Case Studies (04)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-muted-foreground mb-4">{project.year}</span>
                  <div className="p-2 border border-border rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
