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
    description: 'Garantia total contra defeitos de fabricação. Todos os produtos são originais de fábrica, com rastreabilidade e certificados de calibração para itens de precisão.',
    color: '#4ade80'
  },
  {
    icon: Truck,
    title: 'Logística Ágil para Todo o Brasil',
    description: 'Envio rápido via transportadoras parceiras ou Sedex. Agilidade no processamento de pedidos para que a sua operação e linha de produção nunca parem.',
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
    description: 'Sem burocracia ou espera demorada. Envie sua lista de peças ou planilha e receba a proposta comercial diretamente no WhatsApp ou por e-mail.',
    color: '#ec4899'
  }
];

export default function Advantages() {
  return (
    <section id="diferenciais" style={{ padding: '80px 0', background: 'rgba(11, 15, 23, 0.7)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Vantagens Corporativas
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginTop: '8px',
            marginBottom: '12px'
          }}>
            Por que a sua Empresa Escolhe a M11 Tools?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Unimos o melhor fornecimento industrial a um atendimento humano, descomplicado e focado nas necessidades do comprador e do mecânico.
          </p>
        </div>

        {/* 6 Grid items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.25s ease'
                }}
                className="adv-card"
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${adv.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={26} color={adv.color} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                  {adv.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .adv-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
