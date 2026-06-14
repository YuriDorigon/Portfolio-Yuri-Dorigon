
"use client";

import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

const PROJECTS = [
  {
    id: "confirmacao-automacao",
    title: "Bot de Confirmação de Agendamentos via WhatsApp",
    description: "Sistema backend completo em produção: dispara confirmações de consultas via Meta WhatsApp Business API com templates aprovados, processa respostas via webhook, confirma/cancela no sistema NetRIS, envia alertas no Slack e gerencia toda a lógica de janelas de silêncio, reenvios e lembretes.",
    tech: ["Node.js", "Express", "Meta WhatsApp API", "Supabase", "Railway", "Slack API"],
    imageKey: "project-7",
    type: "api",
  },
  {
    id: "orcamentotagis",
    title: "Orçamento Tagis — Sistema de Gestão com IA",
    description: "Sistema interno completo para orçamentos laboratoriais com OCR por IA: foto ou PDF do pedido médico → Google Gemini Vision extrai os exames e sugere itens do catálogo com grau de confiança. Inclui relatórios, regras financeiras automáticas e painel admin.",
    tech: ["Next.js", "TypeScript", "Zustand", "Firebase", "Google Gemini", "Tailwind CSS"],
    imageKey: "project-4",
    type: "sistema",
  },
  {
    id: "escala-tagis",
    title: "Escala Tagis — Gestão de Escalas com IA",
    description: "Sistema de escalas mensais com geração automática por IA: descreva as regras em texto livre e o Google Gemini monta a escala. Inclui otimização de furos, templates de turno, cálculo de metas e exportação. Deploy automático ao push no GitHub.",
    tech: ["Next.js", "TypeScript", "Firebase", "Google Genkit", "Gemini AI", "ShadCN UI"],
    imageKey: "project-5",
    type: "sistema",
  },
  {
    id: "kennedy-credit",
    title: "Landing Page Financeira Premium — Kennedy Promotora",
    description: "Site institucional de alta performance desenvolvido para a Kennedy Promotora. Design moderno em tons de preto e dourado, com smooth scroll e integração direta com WhatsApp para conversão de clientes.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    imageKey: "project-1",
    type: "web",
  },
  {
    id: "retorno-clinica-tagis",
    title: "Gerenciador de Retornos de Pacientes",
    description: "Aplicação web para controle de retornos de pacientes em clínica médica, com cadastro, edição, busca global e controle de acesso por perfis de usuário.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Firebase"],
    imageKey: "project-2",
    type: "sistema",
  },
  {
    id: "historico-tagis",
    title: "Histórico de Pacientes Tagis",
    description: "Sistema de consulta de histórico clínico com dados de 2019–2025 migrados de sistema legado. Busca por nome (sem acento), CPF ou data de nascimento. Merge de pacientes duplicados e paginação. Acesso protegido por middleware e cookies.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    imageKey: "project-6",
    type: "sistema",
  },
  {
    id: "barbearia-artistas",
    title: "Website Barbearia dos Artistas",
    description: "Site institucional moderno desenvolvido para a Barbearia dos Artistas, focado em apresentação de serviços, identidade visual forte e experiência fluida para dispositivos móveis.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageKey: "project-3",
    type: "web",
  },
  {
    id: "site-tagis-medicina",
    title: "Site Institucional — Tagis Medicina Diagnóstica",
    description: "Site institucional da Tagis Medicina Diagnóstica, clínica de exames laboratoriais e de imagem. Apresentação de serviços, unidades, convênios e canais de contato.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageKey: "project-8",
    type: "web",
  },
];

const TYPE_LABELS: Record<string, string> = {
  web: "Site",
  sistema: "Sistema",
  api: "API / Backend",
};

const TYPE_COLORS: Record<string, string> = {
  web: "text-accent border-accent/40 bg-accent/10",
  sistema: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  api: "text-sky-300 border-sky-400/30 bg-sky-400/10",
};

const ProjectCard = memo(({ project, index, mounted }: { project: typeof PROJECTS[0]; index: number; mounted: boolean }) => {
  const imageUrl = PlaceHolderImages.find(img => img.id === project.imageKey)?.imageUrl || "";

  const ImagePreview = (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-secondary">
          <span className="text-5xl font-black text-foreground/[0.04] uppercase tracking-widest">
            {TYPE_LABELS[project.type] ?? "Preview"}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/30">
            Screenshot em breve
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="glass-card flex flex-col group rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-2.5">
      {mounted && imageUrl ? (
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-zoom-in relative overflow-hidden rounded-xl">
              {ImagePreview}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-xl">
                <span className="text-accent-foreground text-[9px] font-bold uppercase tracking-widest bg-accent px-4 py-2 rounded-full backdrop-blur-sm">
                  Ampliar
                </span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden glass-card rounded-2xl w-[95vw] sm:w-full">
            <DialogHeader className="p-4 border-b border-border/60">
              <DialogTitle className="text-sm md:text-base font-bold tracking-tight">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <div className="relative aspect-[16/9] w-full bg-secondary/40">
              <Image src={imageUrl} alt={project.title} fill className="object-contain p-2 md:p-4" quality={90} />
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        ImagePreview
      )}

      <div className="p-5 md:p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent/70 section-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.type && (
            <span className={`text-[8px] font-bold uppercase tracking-widest rounded-full border px-2.5 py-0.5 ${TYPE_COLORS[project.type]}`}>
              {TYPE_LABELS[project.type] ?? project.type}
            </span>
          )}
        </div>

        <h3 className="text-base md:text-lg font-bold tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">{project.title}</h3>

        <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-[9px] font-bold uppercase tracking-widest rounded-full bg-accent/5 text-accent/90 px-2.5 py-1 border border-accent/20">
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 md:mb-20 gap-4 border-b border-border pb-8">
          <h2 className="font-display italic font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-gradient">
            Projetos
          </h2>
          <p className="text-accent/80 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
            {PROJECTS.length} projetos selecionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} mounted={mounted} />
          ))}
        </div>
      </div>
    </section>
  );
}
