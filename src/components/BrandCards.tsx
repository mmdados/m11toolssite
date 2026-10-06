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
    <section style={{ padding: '60px 0', background: 'rgba(18, 24, 36, 0.5)' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px'
          }}>
            Nossas Linhas Oficiais
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '14px'
          }}>
            Especialistas nas Melhores Marcas do Mercado
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Distribuição com procedência garantida, estoque abastecido e suporte técnico para selecionar a ferramenta certa para sua equipe.
          </p>
        </div>

        {/* 3 Brand Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {BRANDS_INFO.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                id={b.id}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
                className="brand-card"
              >
                {/* Brand Visual Banner */}
                <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, var(--bg-card) 5%, transparent 60%), linear-gradient(135deg, ${b.color}40 0%, transparent 60%)`
                  }} />

                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(11, 15, 23, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${b.color}80`,
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Icon size={13} color={b.color} />
                    <span>{b.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                    {b.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: b.color, marginBottom: '12px' }}>
                    {b.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '18px' }}>
                    {b.description}
                  </p>

                  {/* Highlights */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '24px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {b.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: b.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                    <a
                      href="#catalogo"
                      onClick={() => onSelectBrand(b.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '12px 18px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                      }}
                      className="brand-action-btn"
                    >
                      <span>Ver Produtos {b.name}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .brand-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
        }
        .brand-action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }
      `}</style>
    </section>
  );
}
