
"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-none">THE <br />STORY</h2>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-snug font-medium text-foreground">
                I'm a full-stack developer based in San Francisco, working at the intersection of design and technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                With over 5 years of experience in digital product development, I've had the privilege of working with startups and established companies to bring complex ideas to life. My approach is rooted in minimalism—eliminating the unnecessary so the meaningful can speak.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I believe that every line of code should serve a purpose and every pixel should contribute to the overall user experience. My goal is to create software that is not only functional but also beautiful and intuitive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Past Experience</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Lead Dev @ Studio Noir</span>
                    <span className="text-muted-foreground">2022 — Present</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Software Engineer @ TechFlow</span>
                    <span className="text-muted-foreground">2020 — 2022</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Junior Developer @ OpenScale</span>
                    <span className="text-muted-foreground">2018 — 2020</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Services</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Web Architecture</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> UI Engineering</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> SaaS Development</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Design Systems</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> API Design</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
