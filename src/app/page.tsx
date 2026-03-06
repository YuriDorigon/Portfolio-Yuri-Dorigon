import dynamic from 'next/dynamic';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

// Carregamento dinâmico para seções abaixo do "fold" (primeira dobra)
// Isso reduz drasticamente o tamanho do bundle inicial de JavaScript
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div className="min-h-[400px] bg-background" />
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <div className="min-h-[300px] bg-secondary" />
});
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-[400px] bg-background" />
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-[400px] bg-secondary" />
});
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
