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
    subtitle: 'Linha Automotiva & Oficinas Mecânicas',
    description: 'Jogos de soquetes, catracas de 72 dentes e ferramentas manuais forjadas em aço cromo-vanádio.',
    image: '/images/gedore-red.jpg',
    color: '#e5242a',
    badge: 'Uso Profissional',
    icon: Wrench,
    items: ['Jogos de soquetes 172 peças', 'Chaves combinadas com catraca', 'Alicates isolados e de corte', 'Maletas reforçadas']
  },
  {
    id: 'gedore-blue' as Brand,
    name: 'Gedore Industrial',
    subtitle: 'Engenharia Alemã para Indústria Pesada',
    description: 'Padrão ouro em torquímetros de alta precisão (Dremometer), chaves industriais e aperto crítico.',
    image: '/images/gedore-torque-detail.jpg',
    color: '#005baa',
    badge: 'Alta Precisão',
    icon: Shield,
    items: ['Torquímetros Dremometer e de Estalo', 'Chaves ajustáveis industriais', 'Alicates de pressão reforçados', 'Chaves L hexagonais abauladas']
  },
  {
    id: 'tekbond' as Brand,
    name: 'Tekbond Químicos',
    subtitle: 'Adesivos, Selantes e Sprays Técnicos',
    description: 'Químicos industriais de alta performance para travamento de roscas, colagem instantânea e vedação de motores.',
    image: '/images/tekbond.jpg',
    color: '#00a651',
    badge: 'Química Industrial',
    icon: Sparkles,
    items: ['Adesivo Instantâneo 793', 'Trava-roscas anaeróbicos 177 / 242', 'Silicones neutros e oxímicos 280g', 'Desengripantes e limpa-contatos']
  }
];

export default function BrandCards({ onSelectBrand }: BrandCardsProps) {
  return (
    <section style={{ padding: '36px 0', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#e5242a',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '4px'
          }}>
            Linhas Oficiais Comercializadas
          </span>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: 800,
            color: '#111827',
            marginBottom: '8px'
          }}>
            Escolha por Marca ou Categoria
          </h2>
          <p style={{
            color: '#4b5563',
            fontSize: '0.92rem',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            A <strong>M11 Tools</strong> distribui produtos 100% originais com garantia de procedência, nota fiscal e faturamento para empresas.
          </p>
        </div>

        {/* Brand Cards Grid - Chapado e Reto */}
        <div className="brands-grid">
          {BRANDS_INFO.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                id={b.id}
                className="brand-card"
              >
                {/* Brand Visual Banner em Fundo Branco Puro */}
                <div style={{
                  position: 'relative',
                  height: '180px',
                  width: '100%',
                  background: '#ffffff',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image
                    src={b.image}
                    alt={b.name}
                    width={220}
                    height={160}
                    style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                  />

                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#ffffff',
                    border: `1px solid ${b.color}`,
                    borderRadius: '2px',
                    padding: '3px 8px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: b.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Icon size={12} color={b.color} />
                    <span>{b.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="brand-content">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '2px' }}>
                    {b.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: b.color, marginBottom: '8px' }}>
                    {b.subtitle}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.45, marginBottom: '14px' }}>
                    {b.description}
                  </p>

                  {/* Highlights */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '18px',
                    fontSize: '0.82rem',
                    color: '#374151'
                  }}>
                    {b.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '4px', height: '4px', background: b.color, flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <a
                    href="#catalogo"
                    onClick={() => onSelectBrand(b.id)}
                    className="brand-cta"
                    style={{
                      borderTop: '1px solid #e5e7eb',
                      paddingTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: b.color
                    }}
                  >
                    <span>Ver Produtos {b.name}</span>
                    <ArrowRight size={15} />
                  </a>
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
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 2px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .brand-card:hover {
          border-color: #9ca3af;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .brand-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (min-width: 768px) {
          .brands-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
