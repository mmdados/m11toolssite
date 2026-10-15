'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Wrench, CheckCircle2, Layers } from 'lucide-react';
import { Brand } from '@/types';

interface BrandCardsProps {
  selectedBrand: Brand | 'all';
  onSelectBrand: (brand: Brand | 'all') => void;
}

export const BRANDS_INFO = [
  {
    id: 'gedore-red' as Brand,
    name: 'Gedore Red',
    badge: 'Linha Oficial',
    subtitle: 'Ferramentas Profissionais & Automotivas',
    description: 'Jogos de soquetes, catracas de alta velocidade, chaves combinadas e ferramentas forjadas em aço Cromo-Vanádio.',
    logo: '/images/gedore-red-logo.png',
    accentColor: '#e5242a',
    productCount: 1,
    highlights: [
      'Jogo de Ferramentas R46023100 (100 Peças)',
      'Aço Cromo-Vanádio de altíssima tenacidade',
      'Catracas reversíveis de troca rápida',
      'Maleta de transporte com travas metálicas'
    ]
  }
];

export default function BrandCards({ selectedBrand, onSelectBrand }: BrandCardsProps) {
  const isGedoreRedActive = selectedBrand === 'gedore-red';

  return (
    <section style={{ padding: '32px 0 24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Header da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.74rem',
            fontWeight: 800,
            color: '#e5242a',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: '#fee2e2',
            padding: '4px 10px',
            borderRadius: '2px',
            marginBottom: '8px'
          }}>
            <Wrench size={12} color="#e5242a" />
            Navegue por Linhas & Marcas
          </span>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px',
            letterSpacing: '-0.3px'
          }}>
            Catálogo Oficial de Anúncios
          </h2>
          <p style={{
            color: '#475569',
            fontSize: '0.88rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            Clique no card abaixo para filtrar exclusivamente os produtos e jogos da linha <strong>Gedore Red</strong>.
          </p>
        </div>

        {/* Card Gedore Red em Destaque */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {BRANDS_INFO.map((brand) => {
            const active = isGedoreRedActive;

            return (
              <div
                key={brand.id}
                onClick={() => {
                  if (active) {
                    onSelectBrand('all');
                  } else {
                    onSelectBrand(brand.id);
                  }
                  const el = document.getElementById('catalogo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`brand-showcase-card ${active ? 'is-active' : ''}`}
                role="button"
                tabIndex={0}
                style={{
                  background: '#ffffff',
                  border: active ? '2px solid #e5242a' : '1px solid #cbd5e1',
                  borderRadius: '6px',
                  boxShadow: active 
                    ? '0 10px 25px -5px rgba(229, 36, 42, 0.15), 0 8px 10px -6px rgba(229, 36, 42, 0.1)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Top Banner com Logo Real Oficial Gedore Red */}
                <div style={{
                  padding: '24px 20px',
                  background: '#ffffff',
                  borderBottom: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      position: 'relative',
                      width: '180px',
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}>
                      <Image
                        src={brand.logo}
                        alt="GEDORE red Oficial"
                        width={180}
                        height={42}
                        style={{ objectFit: 'contain', width: 'auto', height: '36px' }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: active ? '#e5242a' : '#f8fafc',
                    color: active ? '#ffffff' : '#334155',
                    border: `1px solid ${active ? '#e5242a' : '#e2e8f0'}`,
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '0.74rem',
                    fontWeight: 700
                  }}>
                    {active ? (
                      <>
                        <CheckCircle2 size={13} color="#ffffff" />
                        <span>Filtro Ativado</span>
                      </>
                    ) : (
                      <>
                        <Layers size={13} color="#e5242a" />
                        <span>{brand.productCount} anúncio disponível</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div style={{ padding: '20px' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: brand.accentColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    {brand.subtitle}
                  </div>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: '14px'
                  }}>
                    {brand.description}
                  </p>

                  {/* Lista de destaques */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '8px',
                    background: '#f8fafc',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0',
                    marginBottom: '16px'
                  }}>
                    {brand.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#1e293b' }}>
                        <span style={{ width: '6px', height: '6px', background: '#e5242a', borderRadius: '50%', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de Ação do Card */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: active ? '#b91c1c' : '#e5242a'
                  }}>
                    <span>
                      {active ? 'Exibindo produtos Gedore Red (clique para limpar)' : 'Clique para ver produtos Gedore Red'}
                    </span>
                    <ArrowRight size={16} style={{ transform: active ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão para limpar filtro se ativo */}
        {isGedoreRedActive && (
          <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <button
              onClick={() => onSelectBrand('all')}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Exibir todas as marcas
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .brand-showcase-card:hover {
          transform: translateY(-2px);
          border-color: #e5242a !important;
        }
      `}</style>
    </section>
  );
}
