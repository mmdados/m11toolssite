'use client';

import React from 'react';
import { 
  Building2, 
  PackageCheck, 
  ShieldCheck, 
  Truck, 
  HeadphonesIcon, 
  Clock 
} from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Building2,
    title: 'Faturamento B2B Facilitado',
    description: 'Condições de pagamento especiais para pessoas jurídicas (PJ). Faturamento em boleto bancário mediante análise cadastral rápida e emissão de NF-e completa.',
    color: 'var(--brand-red)'
  },
  {
    icon: PackageCheck,
    title: 'Toda a Linha Gedore & Tekbond',
    description: 'Catálogo abrangente: ferramentas manuais, torquímetros aferidos, jogos de soquetes, adesivos instantâneos, trava-roscas, silicones e sprays industriais.',
    color: '#4da6ff'
  },
  {
    icon: ShieldCheck,
    title: 'Procedência 100% Original',
    description: 'Garantia total contra defeitos de fabricação. Todos os produtos são originais de fábrica com certificados de calibração para itens de precisão.',
    color: '#4ade80'
  },
  {
    icon: Truck,
    title: 'Logística Ágil para Todo o Brasil',
    description: 'Envio rápido via transportadoras parceiras ou Sedex. Agilidade no despacho para que a sua operação e linha de produção nunca parem.',
    color: '#f59e0b'
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento Técnico Especializado',
    description: 'Consultores que entendem de ferramenta. Auxiliamos seu setor de compras e manutenção a selecionar o código ideal para cada aplicação crítica.',
    color: '#a855f7'
  },
  {
    icon: Clock,
    title: 'Cotações em Minutos',
    description: 'Sem burocracia ou espera. Envie sua lista de peças ou planilha e receba a proposta comercial diretamente no WhatsApp ou por e-mail.',
    color: '#ec4899'
  }
];

export default function Advantages() {
  return (
    <section id="diferenciais" style={{ padding: '54px 0', background: 'rgba(11, 15, 23, 0.7)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Vantagens Corporativas
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginTop: '6px',
            marginBottom: '10px'
          }}>
            Por que a M11 Tools?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            O melhor fornecimento industrial com atendimento humano, descomplicado e ágil.
          </p>
        </div>

        {/* Grid items */}
        <div className="advantages-grid">
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="adv-card"
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${adv.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} color={adv.color} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {adv.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .advantages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .adv-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          padding: 20px 18px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        @media (min-width: 640px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .adv-card {
            padding: 26px 22px;
          }
        }
      `}</style>
    </section>
  );
}
