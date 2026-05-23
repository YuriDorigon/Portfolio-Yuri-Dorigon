
"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-6 pt-24 pb-16 overflow-hidden bg-background">
      {/* Subtle vertical rule decoration */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-px bg-border/60 hidden lg:block" />

      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-fade-in [animation-delay:150ms] opacity-0">

          <p className="text-accent font-bold tracking-[0.25em] uppercase text-[9px] md:text-[10px] mb-5 flex items-center gap-3 justify-center lg:justify-start">
            <span className="w-6 h-px bg-accent inline-block" />
            Disponível para novos desafios
          </p>

          <h1 className="font-display italic font-bold leading-[0.95] tracking-tight mb-2 text-foreground">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]">Yuri</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]">Dorigon</span>
          </h1>

          <div className="flex items-center gap-4 justify-center lg:justify-start my-6">
            <div className="h-px flex-1 max-w-[80px] bg-border" />
            <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">
              Full-Stack Developer
            </p>
          </div>

          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-8">
            React · Next.js · Node.js · TypeScript · IA
          </p>

          <p className="max-w-lg text-sm md:text-base text-muted-foreground leading-relaxed mb-10 mx-auto lg:mx-0">
            Desenvolvedor Full-Stack com sistemas reais em produção — do frontend moderno em React/Next.js a backends Node.js com automações, integrações de IA e APIs como WhatsApp Business e NetRIS.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
            <Button asChild className="gap-2 font-bold uppercase tracking-widest text-[9px] md:text-[10px] h-11 px-6 bg-foreground text-background hover:bg-accent hover:text-accent-foreground">
              <a href="https://linkedin.com/in/yuridorigon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 font-bold uppercase tracking-widest text-[9px] md:text-[10px] h-11 px-6 border-foreground/30 hover:border-accent hover:text-accent">
              <a href="https://github.com/yuridorigon" target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </Button>
            <Button variant="ghost" asChild className="gap-2 font-bold uppercase tracking-widest text-[9px] md:text-[10px] h-11 px-6 hover:text-accent">
              <a href="mailto:yuridorigon13@gmail.com?subject=Contato via Portfólio">
                <Mail className="w-3.5 h-3.5" /> Contato
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center lg:text-left border-t border-border/50 pt-8 max-w-xs mx-auto lg:mx-0">
            <div>
              <span className="text-muted-foreground text-[9px] uppercase font-bold tracking-widest block mb-1">Especialidade</span>
              <span className="text-sm font-bold uppercase tracking-tight">React & Next.js</span>
            </div>
            <div>
              <span className="text-muted-foreground text-[9px] uppercase font-bold tracking-widest block mb-1">Atuação Atual</span>
              <span className="text-sm font-bold uppercase tracking-tight">Suporte de TI</span>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="relative animate-fade-in [animation-delay:350ms] opacity-0 shrink-0">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px]">
            {/* Decorative offset frame */}
            <div className="absolute -inset-3 border border-border/60 rounded-none" />
            <div className="absolute -inset-6 border border-border/30 rounded-none hidden lg:block" />

            <div className="relative w-full h-full overflow-hidden rounded-none">
              {profileImg ? (
                <Image
                  src={profileImg}
                  alt="Yuri Dorigon — Desenvolvedor Front-End"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground/30 text-xs uppercase font-bold tracking-widest">Foto</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">Scroll</span>
        <ArrowDown className="text-muted-foreground/40 w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
