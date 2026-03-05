
"use client";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Principal",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Next.js"]
    },
    {
      title: "Ecossistema",
      skills: ["Tailwind CSS", "TypeScript", "Responsive Design"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "Firebase", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary mb-12 md:mb-16 uppercase">Tecnologias</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 border-b border-border pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-base md:text-lg font-medium tracking-tight hover:translate-x-2 transition-transform cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 md:mt-20 p-6 md:p-10 border border-border rounded-md bg-background shadow-sm space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
              "Foco em escrever código limpo e interfaces que resolvem problemas reais de negócio, unindo a robustez do React com a simplicidade do HTML e CSS bem estruturados."
            </p>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-medium">
                Também utilizo ferramentas de inteligência artificial para acelerar desenvolvimento, prototipação e resolução de problemas, mantendo sempre foco na qualidade e entendimento do código.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
