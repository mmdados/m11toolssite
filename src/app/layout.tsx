import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { QuoteProvider } from '@/context/QuoteContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://m11tools.com.br'),
  title: 'M11 Tools | Distribuidora Gedore & Tekbond - Ferramentas Profissionais',
  description: 'Distribuição oficial de ferramentas Gedore Red, Gedore Blue Industrial e químicos Tekbond. Faturamento para empresas (PJ), pronta entrega e cotações rápidas via WhatsApp: (11) 97293-1840.',
  keywords: [
    'M11 Tools',
    'Gedore',
    'Gedore Red',
    'Gedore Blue',
    'Tekbond',
    'ferramentas industriais',
    'torquímetro',
    'jogo de soquetes',
    'adesivo 793',
    'trava roscas',
    'faturamento PJ',
    'distribuidora de ferramentas'
  ],
  authors: [{ name: 'M11 Tools' }],
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    title: 'M11 Tools | Distribuidora Gedore & Tekbond',
    description: 'Catálogo de ferramentas manuais, torquímetros e químicos de alta performance com faturamento para empresas.',
    url: 'https://m11tools.com.br',
    siteName: 'M11 Tools',
    images: [
      {
        url: '/images/hero-tools.jpg',
        width: 1200,
        height: 630,
        alt: 'M11 Tools - Distribuidora Gedore & Tekbond',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="carbon-grid">
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </body>
    </html>
  );
}
