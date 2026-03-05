
"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-background">
      <div className="max-w-5xl w-full">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Full Stack Developer
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-primary mb-8">
            CRAFTING <br />
            <span className="text-foreground">DIGITAL</span> <br />
            EXPERIENCES
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 animate-fade-in [animation-delay:400ms] opacity-0">
          <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
            I'm Yuri, a software engineer dedicated to building clean, minimalist, and highly functional digital products that solve real-world problems.
          </p>
          <div className="flex gap-12 text-sm font-semibold tracking-widest uppercase">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-[10px]">Location</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-[10px]">Available</span>
              <span>For New Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground w-6 h-6" />
      </div>
    </section>
  );
}
