"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-none uppercase">Sobre <br />Mim</h2>
          </div>
          
          <div className="lg:w-2/3 space-y-10">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-snug font-medium text-foreground">
                Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor focado em front-end.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tenho experiência construindo interfaces web e sistemas internos utilizando React, HTML, CSS e JavaScript. Meu foco é criar componentes reutilizáveis e interfaces performantes que garantam a melhor experiência para o usuário final.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Estou constantemente aprimorando minhas habilidades em tecnologias modernas como Next.js para desenvolver aplicações mais eficientes e escaláveis. Busco uma oportunidade onde eu possa aplicar meu conhecimento técnico para ajudar a VIP Promotora a crescer através de tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Formação & Foco</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Análise e Desenv. de Sistemas</span>
                    <span className="text-muted-foreground">Em curso</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Especialização Front-End</span>
                    <span className="text-muted-foreground">Foco em React</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Competências Chave</h4>
                <ul className="grid grid-cols-1 gap-3 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Desenvolvimento com React Hooks</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Domínio de HTML5 e CSS3</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Consumo de APIs REST</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Mobile First & Responsividade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
