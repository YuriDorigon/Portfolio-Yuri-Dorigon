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
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-6 uppercase">Contato</h2>
            <p className="text-lg text-muted-foreground uppercase tracking-[0.2em] max-w-2xl mx-auto">
              Estou aberto a oportunidades como Desenvolvedor Front-End e interessado em colaborar com equipes que buscam criar produtos digitais modernos e eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <a href="mailto:yuri.dorigon@email.com" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-background rounded-full group-hover:bg-accent transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-mail Profissional</h4>
                    <p className="text-xl font-medium">yuri.dorigon@email.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/yuridorigon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-background rounded-full group-hover:bg-accent transition-colors">
                    <Linkedin className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">LinkedIn</h4>
                    <p className="text-xl font-medium">linkedin.com/in/yuridorigon</p>
                  </div>
                </a>

                <a href="https://github.com/yuridorigon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="p-3 bg-background rounded-full group-hover:bg-accent transition-colors">
                    <Github className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">GitHub</h4>
                    <p className="text-xl font-medium">github.com/yuridorigon</p>
                  </div>
                </a>
              </div>
              
              <div className="pt-8 border-t border-border">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Disponibilidade</h4>
                <p className="text-muted-foreground">Buscando novos desafios em desenvolvimento front-end. Atuação remota ou presencial conforme projeto.</p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-md shadow-sm border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all px-0" />
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
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">E-mail para Retorno</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all px-0" />
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
                        <FormLabel className="uppercase text-[10px] tracking-widest font-bold">Mensagem ou Proposta</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Como posso agregar valor ao seu time?" 
                            className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent transition-all min-h-[120px] px-0 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-[0.2em] transition-all py-6">
                    Enviar Mensagem Profissional
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
