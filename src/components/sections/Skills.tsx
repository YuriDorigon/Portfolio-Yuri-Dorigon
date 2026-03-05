"use client";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Principal",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Vanilla CSS", "Next.js"]
    },
    {
      title: "Ecossistema",
      skills: ["Tailwind CSS", "TypeScript", "Responsive Design"]
    },
    {
      title: "Ferramentas & Backend",
      skills: ["Git", "GitHub", "Firebase", "Figma (UI/UX)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-16 uppercase">Tecnologias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-lg font-medium tracking-tight hover:translate-x-2 transition-transform cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 border border-border rounded-sm bg-background shadow-sm space-y-4">
            <p className="text-xl leading-relaxed text-muted-foreground italic">
              "Foco em escrever código limpo e interfaces que resolvem problemas reais de negócio, unindo a robustez do React com a simplicidade do HTML e CSS bem estruturados."
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-medium border-l-4 border-accent pl-6">
              Também utilizo ferramentas de inteligência artificial para acelerar desenvolvimento, prototipação e resolução de problemas, mantendo sempre foco na qualidade e entendimento do código.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
