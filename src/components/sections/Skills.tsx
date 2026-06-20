
"use client";

const LEVEL_LABEL = ["Básico", "Básico", "Intermediário", "Avançado", "Expert"];

function SkillRow({ name, level }: { name: string; level: number }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3 border-b border-border/50 group hover:border-accent/40 transition-colors cursor-default">
      <span className="text-sm font-semibold tracking-tight group-hover:text-accent transition-colors">
        {name}
      </span>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-0.5 rounded-full transition-colors ${i < level ? "bg-accent shadow-[0_0_8px_hsla(188,95%,52%,0.6)]" : "bg-border"}`}
            />
          ))}
        </div>
        <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/50 w-20 text-right hidden sm:block">
          {LEVEL_LABEL[level - 1]}
        </span>
      </div>
    </li>
  );
}

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "React", level: 4 },
        { name: "Next.js", level: 4 },
        { name: "TypeScript", level: 3 },
        { name: "Tailwind CSS", level: 5 },
        { name: "ShadCN UI", level: 4 },
      ]
    },
    {
      title: "Backend & Banco",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Express.js", level: 4 },
        { name: "Firebase", level: 4 },
        { name: "Supabase", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "Git & GitHub", level: 4 },
        { name: "Vercel / Railway", level: 4 },
      ]
    },
    {
      title: "IA & Automação",
      skills: [
        { name: "Claude AI", level: 5 },
        { name: "Google Gemini / Genkit", level: 4 },
        { name: "Meta WhatsApp API", level: 4 },
        { name: "Electron", level: 3 },
        { name: "Playwright", level: 3 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 md:mb-20 gap-4 border-b border-border pb-8">
          <h2 className="font-display italic font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-gradient">
            Tecnologias
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
            Stack técnico
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-2 flex items-center gap-2">
                  <span className="w-4 h-px bg-accent inline-block" />
                  {group.title}
                </h3>
                <ul>
                  {group.skills.map((skill) => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 border-l-2 border-accent pl-8 space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic font-display">
              "Construo sistemas completos — do banco de dados ao frontend — que resolvem problemas reais e rodam em produção todo dia."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
