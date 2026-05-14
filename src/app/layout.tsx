import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Yuri Dorigon | Desenvolvedor Front-End',
  description: 'Portfólio de Yuri Dorigon, desenvolvedor Front-End especializado em React, HTML, CSS e Next.js.',
  icons: {
    icon: '/vector.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yuri Dorigon',
  jobTitle: 'Desenvolvedor Front-End',
  url: 'https://yuridorigon.com.br',
  sameAs: [
    'https://linkedin.com/in/yuridorigon',
    'https://github.com/yuridorigon'
  ],
  description: 'Desenvolvedor Front-End especializado em React, Next.js e tecnologias web modernas.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
