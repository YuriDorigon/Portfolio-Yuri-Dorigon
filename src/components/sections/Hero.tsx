
"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-24 pb-12 overflow-hidden bg-background">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left animate-fade-in [animation-delay:200ms] opacity-0">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">
            Disponível para novos desafios
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] text-primary mb-6">
            Yuri <br />
            <span className="text-foreground">Dorigon</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-lg md:text-2xl font-bold tracking-tight text-foreground/90 uppercase">
              Front-End Developer
            </p>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-accent uppercase mt-2">
              React • JavaScript • HTML • CSS • Next.js
            </p>
          </div>

          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10 mx-auto lg:mx-0">
            Desenvolvedor Front-End focado na criação de interfaces modernas e aplicações web utilizando React, JavaScript, HTML e CSS. Tenho experiência com desenvolvimento de projetos web e estou constantemente evoluindo minhas habilidades com tecnologias como Next.js.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-12">
            <Button asChild className="bg-primary hover:bg-accent gap-2 font-bold uppercase tracking-wider text-[10px] md:text-xs py-5 md:py-6 px-6 md:px-8 h-auto">
              <a href="https://linkedin.com/in/yuridorigon" target="_blank">
                <Linkedin className="w-4 h-4" /> Linkedin
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 font-bold uppercase tracking-wider text-[10px] md:text-xs py-5 md:py-6 px-6 md:px-8 h-auto">
              <a href="https://github.com/yuridorigon" target="_blank">
                <Github className="w-4 h-4" /> Github
              </a>
            </Button>
            <Button variant="ghost" asChild className="gap-2 font-bold uppercase tracking-wider text-[10px] md:text-xs py-5 md:py-6 px-6 md:px-8 h-auto">
              <a href="mailto:yuri.dorigon@email.com">
                <Mail className="w-4 h-4" /> Contato
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest">Especialidade</span>
              <span className="text-sm font-semibold uppercase">React & Next.js</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest">Atuação Atual</span>
              <span className="text-sm font-semibold uppercase">Suporte de TI</span>
            </div>
          </div>
        </div>

        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 animate-fade-in [animation-delay:400ms] opacity-0">
          <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
            {profileImg ? (
              <Image 
                src={profileImg} 
                alt="Yuri Dorigon - Desenvolvedor Front-End" 
                fill 
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-xs uppercase font-bold">Foto</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="text-muted-foreground/50 w-5 h-5" />
      </div>
    </section>
  );
}
