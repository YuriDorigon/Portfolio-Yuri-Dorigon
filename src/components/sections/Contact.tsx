
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
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
  message: z.string().min(5, { message: "A mensagem deve ter pelo menos 5 caracteres." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "5548991136703";
    const text = encodeURIComponent(`Olá Yuri! Meu nome é ${values.name}.\n\n${values.message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    toast({ title: "WhatsApp Aberto", description: "Redirecionando para iniciar a conversa..." });
    form.reset();
  }

  const contacts = [
    { icon: Mail, label: "E-mail Profissional", value: "yuridorigon13@gmail.com", href: "mailto:yuridorigon13@gmail.com?subject=Contato via Portfólio" },
    { icon: Linkedin, label: "LinkedIn", value: "in/yuridorigon", href: "https://linkedin.com/in/yuridorigon" },
    { icon: Github, label: "GitHub", value: "@yuridorigon", href: "https://github.com/yuridorigon" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-14 md:mb-20 gap-4 border-b border-border pb-8">
          <h2 className="font-display italic font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-gradient">
            Contato
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
            Vamos conversar
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-10">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Aberto a conversar sobre projetos interessantes e colaborações com equipes que buscam criar produtos digitais modernos.
            </p>

            <div className="space-y-1">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 py-4 border-b border-border/50 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-card border border-border group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <Icon className="w-4 h-4 group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{label}</p>
                    <p className="text-sm font-bold text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-accent" />
                Status
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                Aberto a conversar sobre projetos.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-accent" />
              Enviar mensagem
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[9px] tracking-widest font-bold">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent px-0 h-11 text-sm" />
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
                      <FormLabel className="uppercase text-[9px] tracking-widest font-bold">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Como posso agregar valor ao seu time?"
                          className="bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-accent min-h-[120px] px-0 resize-none text-sm py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-[0.2em] h-12 text-[9px] gap-2 rounded-xl transition-all duration-300 shadow-[0_8px_30px_-8px_hsla(188,95%,52%,0.6)] hover:shadow-[0_8px_40px_-6px_hsla(188,95%,52%,0.8)]">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
