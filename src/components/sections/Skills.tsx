
"use client";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "PostgreSQL", "Prisma", "Redis", "Firebase", "REST & GraphQL"]
    },
    {
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Design Systems", "Prototyping", "Branding"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-16">TECH STACK</h2>
          
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
          
          <div className="mt-20 p-8 border border-border rounded-sm bg-background">
            <p className="text-xl leading-relaxed text-muted-foreground italic">
              "Building performant applications isn't just about the code. It's about crafting an architecture that scales and a user experience that feels invisible."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
