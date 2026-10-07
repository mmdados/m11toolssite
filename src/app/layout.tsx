import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { QuoteProvider } from '@/context/QuoteContext';
import { SITE_CONFIG } from '@/config/site';

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
  metadataBase: new URL(SITE_CONFIG.domain),
  title: `${SITE_CONFIG.companyName} | Distribuidora Gedore & Tekbond - Ferramentas Profissionais`,
  description: `Distribuição oficial de ferramentas Gedore Red, Gedore Blue Industrial e químicos Tekbond. Faturamento para empresas (PJ), pronta entrega e cotações rápidas via WhatsApp: ${SITE_CONFIG.phoneDisplay}.`,
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
    title: 'M11 Tools | Catálogo Comercial Gedore & Tekbond',
    description: 'Distribuição oficial de ferramentas Gedore Red, Gedore Blue Industrial e químicos Tekbond com faturamento PJ.',
    url: 'https://m11tools.com.br',
    siteName: 'M11 Tools',
    images: [
      {
        url: '/images/gedore-red.jpg',
        width: 1200,
        height: 630,
        alt: 'M11 Tools - Catálogo Oficial Gedore & Tekbond',
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
      <body>
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </body>
    </html>
  );
}
