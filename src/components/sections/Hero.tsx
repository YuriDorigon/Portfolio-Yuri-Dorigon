"use client";

import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-background">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in [animation-delay:200ms] opacity-0">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Desenvolvedor Front-End especializado em React
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-primary mb-8">
            Yuri <br />
            <span className="text-foreground">Dorigon</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 mx-auto lg:mx-0">
            Desenvolvedor front-end especializado em React, com sólida base em HTML, CSS e JavaScript. Focado em construir interfaces modernas, responsivas e de alto desempenho para produtos digitais escaláveis.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <Button asChild className="bg-primary hover:bg-accent gap-2 font-bold uppercase tracking-wider text-xs py-6 px-8">
              <a href="https://linkedin.com/in/yuridorigon" target="_blank">
                <Linkedin className="w-4 h-4" /> Linkedin
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 font-bold uppercase tracking-wider text-xs py-6 px-8">
              <a href="https://github.com/yuridorigon" target="_blank">
                <Github className="w-4 h-4" /> Github
              </a>
            </Button>
            <Button variant="ghost" className="gap-2 font-bold uppercase tracking-wider text-xs py-6 px-8">
              <FileText className="w-4 h-4" /> Currículo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-semibold tracking-widest uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">Foco Principal</span>
              <span>React & Next.js</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">Status Acadêmico</span>
              <span>ADS @ Unicesumar</span>
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-fade-in [animation-delay:400ms] opacity-0">
          <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
            {profileImg ? (
              <Image 
                src={profileImg} 
                alt="Yuri Dorigon - Desenvolvedor Front-End Profissional" 
                fill 
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Foto Profissional</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground w-6 h-6" />
      </div>
    </section>
  );
}
