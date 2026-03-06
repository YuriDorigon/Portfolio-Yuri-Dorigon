
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem Enviada",
      description: "Obrigado pelo contato! Responderei o mais rápido possível.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary mb-6 uppercase">Contato</h2>
            <p className="text-base md:text-lg text-muted-foreground uppercase tracking-[0.2em] max-w-2xl mx-auto font-medium">
              Estou aberto a novas oportunidades e interessado em colaborar com equipes que buscam criar produtos digitais modernos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-10 md:space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                <a href="mailto:yuridorigon13@gmail.com" className="group flex items-center gap-5 hover:opacity-80 transition-opacity">
                  <div className="p-4 bg-background rounded-full group-hover:bg-accent transition-colors shadow-sm">
                    <Mail className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">E-mail Profissional</h4>
                    <p className="text-base md:text-lg font-bold truncate">yuridorigon13@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/yuridorigon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 hover:opacity-80 transition-opacity">
                  <div className="p-4 bg-background rounded-full group-hover:bg-accent transition-colors shadow-sm">
                    <Linkedin className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</h4>
                    <p className="text-base md:text-lg font-bold">in/yuridorigon</p>
                  </div>
                </a>

                <a href="https://github.com/yuridorigon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 hover:opacity-80 transition-opacity">
                  <div className="p-4 bg-background rounded-full group-hover:bg-accent transition-colors shadow-sm">
                    <Github className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">GitHub</h4>
                    <p className="text-base md:text-lg font-bold">@yuridorigon</p>
                  </div>
                </a>
              </div>
              
              <div className="pt-8 border-t border-border">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Status de Disponibilidade</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Buscando novos desafios em desenvolvimento front-end. Aberto a propostas de atuação remota ou presencial conforme as necessidades do projeto.</p>
              </div>
            </div>

            <div className="bg-background p-6 md:p-10 rounded-lg shadow-sm border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all px-0 h-12 text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="yuridorigon13@gmail.com" {...field} className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all px-0 h-12 text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Como posso agregar valor ao seu time?" 
                            className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all min-h-[120px] px-0 resize-none text-base py-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-[0.2em] transition-all py-7 h-auto text-xs">
                    Enviar Proposta
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
