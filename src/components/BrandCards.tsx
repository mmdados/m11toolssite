'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Wrench, Shield, Sparkles } from 'lucide-react';
import { Brand } from '@/types';

interface BrandCardsProps {
  onSelectBrand: (brand: Brand | 'all') => void;
}

export const BRANDS_INFO = [
  {
    id: 'gedore-red' as Brand,
    name: 'Gedore Red',
    subtitle: 'Linha Vermelha Automotiva & Oficinas',
    description: 'Desenvolvida para mecânicos exigentes e centros automotivos que buscam a precisão e robustez Gedore com custo-benefício imbatível.',
    image: '/images/gedore-red.jpg',
    color: '#e5242a',
    badge: 'Alta Performance & Acessibilidade',
    icon: Wrench,
    items: ['Jogos de soquetes 1/4" a 1/2"', 'Chaves combinadas com catraca', 'Alicates isolados e universais', 'Carrinhos de ferramentas']
  },
  {
    id: 'gedore-blue' as Brand,
    name: 'Gedore Industrial (Blue)',
    subtitle: 'Engenharia Alemã para Indústria Pesada',
    description: 'O padrão ouro global em aperto crítico, calibração e montagens industriais. Aço Gedore-Vanadium forjado para suportar as condições mais severas.',
    image: '/images/hero-tools.jpg',
    color: '#005baa',
    badge: 'Máxima Precisão & Dureza',
    icon: Shield,
    items: ['Torquímetros Dremometer e de Estalo', 'Chaves ajustáveis e de bater', 'Multiplicadores de torque', 'Ferramental sob normas DIN/ISO']
  },
  {
    id: 'tekbond' as Brand,
    name: 'Tekbond Químicos',
    subtitle: 'Adesivos, Selantes e Sprays Técnicos',
    description: 'A mais completa linha de soluções químicas para travamento de roscas, colagens instantâneas de alta resistência, juntas de motores e lubrificação.',
    image: '/images/tekbond.jpg',
    color: '#00a651',
    badge: 'Fixação & Vedação Profissional',
    icon: Sparkles,
    items: ['Adesivos instantâneos (793, 200, 725)', 'Trava-roscas anaeróbicos (177, 115)', 'Silicones de alta temperatura', 'Desengripantes e limpa-contatos']
  }
];

export default function BrandCards({ onSelectBrand }: BrandCardsProps) {
  return (
    <section style={{ padding: '48px 0', background: 'rgba(18, 24, 36, 0.5)' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '6px'
          }}>
            Nossas Linhas Oficiais
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '10px'
          }}>
            Especialistas nas Melhores Marcas
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            Distribuição com procedência garantida, estoque abastecido e suporte técnico para sua operação.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="brands-grid">
          {BRANDS_INFO.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                id={b.id}
                className="brand-card"
              >
                {/* Brand Visual Banner */}
                <div style={{ position: 'relative', height: '170px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, var(--bg-card) 5%, transparent 60%), linear-gradient(135deg, ${b.color}35 0%, transparent 60%)`
                  }} />

                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11, 15, 23, 0.88)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${b.color}80`,
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 10px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <Icon size={12} color={b.color} />
                    <span>{b.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="brand-content">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '3px' }}>
                    {b.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: b.color, marginBottom: '10px' }}>
                    {b.subtitle}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {b.description}
                  </p>

                  {/* Highlights */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7px',
                    marginBottom: '20px',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {b.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: b.color, flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                    <a
                      href="#catalogo"
                      onClick={() => onSelectBrand(b.id)}
                      className="brand-action-btn"
                    >
                      <span>Ver Produtos {b.name}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .brands-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .brand-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .brand-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .brand-action-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 11px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.88rem;
          transition: all 0.2s ease;
        }

        @media (min-width: 680px) {
          .brands-grid {
            grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
            gap: 24px;
          }
          .brand-content {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
