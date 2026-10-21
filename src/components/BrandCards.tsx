'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { Brand } from '@/types';
import { PRODUCTS } from '@/data/products';

interface BrandCardsProps {
  selectedBrand: Brand | 'all';
  onSelectBrand: (brand: Brand | 'all') => void;
}

export const getBrandsInfo = () => {
  const gedoreRedCount = PRODUCTS.filter(p => p.brand === 'gedore-red').length;
  const gedoreBlueCount = PRODUCTS.filter(p => p.brand === 'gedore-blue').length;
  const robustCount = PRODUCTS.filter(p => p.brand === 'gedore-robust').length;
  const tekbondCount = PRODUCTS.filter(p => p.brand === 'tekbond').length;

  return [
    {
      id: 'gedore-red' as Brand,
      name: 'Gedore Red',
      badge: 'Linha Oficial',
      subtitle: 'Linha Automotiva & Oficinas',
      description: 'Jogos de soquetes, catracas de alta velocidade e ferramentas manuais forjadas em aço Cromo-Vanádio.',
      logo: '/images/logos/gedore-red.png',
      accentColor: '#e5242a',
      productCount: gedoreRedCount,
      statusText: `${gedoreRedCount} produtos disponíveis`
    },
    {
      id: 'gedore-blue' as Brand,
      name: 'Gedore Industrial',
      badge: 'Alta Precisão',
      subtitle: 'Engenharia & Indústria Pesada',
      description: 'Padrão ouro em torquímetros de estalo, chaves industriais e aperto crítico para alta performance.',
      logo: '/images/logos/gedore-blue.jpg',
      accentColor: '#005baa',
      productCount: gedoreBlueCount,
      statusText: gedoreBlueCount > 0 ? `${gedoreBlueCount} produtos` : 'Em breve lançamentos'
    },
    {
      id: 'gedore-robust' as Brand,
      name: 'Robust',
      badge: 'Grupo Gedore',
      subtitle: 'Linha Profissional Pesada',
      description: 'Robustez mecânica, alta durabilidade e excelente ergonomia para o dia a dia da oficina.',
      logo: '/images/logos/gedore-robust.jpeg',
      accentColor: '#ea580c',
      productCount: robustCount,
      statusText: robustCount > 0 ? `${robustCount} produtos` : 'Em breve lançamentos'
    },
    {
      id: 'tekbond' as Brand,
      name: 'Tekbond',
      badge: 'Química Industrial',
      subtitle: 'Adesivos & Selantes Técnicos',
      description: 'Químicos de alta performance para colagem instantânea, vedação de motores e trava-roscas anaeróbicos.',
      logo: '/images/logos/tekbond.png',
      accentColor: '#00a651',
      productCount: tekbondCount,
      statusText: tekbondCount > 0 ? `${tekbondCount} produtos` : 'Em breve lançamentos'
    }
  ];
};

export const BRANDS_INFO = getBrandsInfo();

export default function BrandCards({ selectedBrand, onSelectBrand }: BrandCardsProps) {
  return (
    <section id="linhas" style={{ padding: '36px 0 28px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Header da Seção */}
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
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
            borderRadius: '4px',
            marginBottom: '8px'
          }}>
            Linhas Comercializadas
          </span>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '6px',
            letterSpacing: '-0.3px'
          }}>
            Escolha por Marca ou Linha
          </h2>
          <p style={{
            color: '#475569',
            fontSize: '0.88rem',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            Clique em um dos cards abaixo para filtrar instantaneamente os produtos da linha correspondente:
          </p>
        </div>

        {/* Grid de 4 Marcas Oficiais */}
        <div className="brands-showcase-grid">
          {BRANDS_INFO.map((brand) => {
            const active = selectedBrand === brand.id;

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
                className={`brand-card ${active ? 'is-active' : ''}`}
                role="button"
                tabIndex={0}
                style={{
                  background: '#ffffff',
                  border: active ? `2px solid ${brand.accentColor}` : '1px solid #cbd5e1',
                  borderRadius: '6px',
                  boxShadow: active 
                    ? `0 10px 20px -5px ${brand.accentColor}25, 0 4px 6px -2px ${brand.accentColor}15` 
                    : '0 2px 4px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Logo da Marca Centralizado com Fundo Branco Puro */}
                <div style={{
                  height: '110px',
                  background: '#ffffff',
                  borderBottom: '1px solid #f1f5f9',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ position: 'relative', width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={160}
                      height={65}
                      style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </div>

                  {/* Badge de status ativo */}
                  {active && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: brand.accentColor,
                      color: '#ffffff',
                      borderRadius: '4px',
                      padding: '2px 6px',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle2 size={11} color="#ffffff" />
                      <span>Ativo</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                      {brand.name}
                    </h3>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: brand.productCount > 0 ? '#15803d' : '#64748b',
                      background: brand.productCount > 0 ? '#dcfce7' : '#f1f5f9',
                      padding: '2px 6px',
                      borderRadius: '3px'
                    }}>
                      {brand.statusText}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: brand.accentColor, marginBottom: '6px' }}>
                    {brand.subtitle}
                  </div>

                  <p style={{
                    fontSize: '0.78rem',
                    color: '#64748b',
                    lineHeight: 1.45,
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {brand.description}
                  </p>

                  {/* Botão de Filtrar */}
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '10px',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: active ? brand.accentColor : '#475569'
                  }}>
                    <span>{active ? 'Filtro ativado (limpar)' : 'Ver produtos'}</span>
                    <ArrowRight size={14} color={active ? brand.accentColor : '#94a3b8'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Opção para limpar filtro se houver algum selecionado */}
        {selectedBrand !== 'all' && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              onClick={() => onSelectBrand('all')}
              style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '6px 14px',
                borderRadius: '4px',
                color: '#e5242a',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Exibir todas as linhas
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .brands-showcase-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .brand-card:hover {
          transform: translateY(-2px);
          border-color: #94a3b8;
          box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.08);
        }

        @media (min-width: 640px) {
          .brands-showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .brands-showcase-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
