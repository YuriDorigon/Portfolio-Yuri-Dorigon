import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Yuri Dorigon | Desenvolvedor Front-End',
  description: 'Portfólio de Yuri Dorigon, desenvolvedor Front-End especializado em React, HTML, CSS e Next.js.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
