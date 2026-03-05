
"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-background">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in [animation-delay:200ms] opacity-0">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Desenvolvedor Full Stack
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] text-primary mb-8">
            SOLUÇÕES <br />
            <span className="text-foreground">DIGITAIS</span> <br />
            DE IMPACTO
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 mx-auto lg:mx-0">
            Sou Yuri, desenvolvedor focado na criação de interfaces modernas e sistemas web para empresas. Especialista em entregar aplicações performantes com foco na melhor experiência do usuário.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-semibold tracking-widest uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">Localização</span>
              <span>Brasil / Remoto</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">Status</span>
              <span>Disponível para Projetos</span>
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-fade-in [animation-delay:400ms] opacity-0">
          <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
            {profileImg && (
              <Image 
                src={profileImg} 
                alt="Yuri - Foto de Perfil" 
                fill 
                className="object-cover"
                priority
              />
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
