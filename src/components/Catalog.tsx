'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRANDS, CATEGORIES, PRODUCTS } from '@/data/products';
import { Brand, Category, Product } from '@/types';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG, buildWhatsAppUrl, buildMercadoLivreUrl } from '@/config/site';
import { 
  Search, 
  Plus, 
  MessageSquare, 
  Check, 
  X, 
  Layers,
  Wrench,
  ShoppingBag,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface CatalogProps {
  selectedBrand: Brand | 'all';
  onBrandChange: (brand: Brand | 'all') => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function Catalog({ selectedBrand, onBrandChange, searchInputRef }: CatalogProps) {
  const { addToQuote, generateDirectProductWhatsAppLink } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCode = product.code.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesApp = product.application.toLowerCase().includes(query);
        return matchesName || matchesCode || matchesDesc || matchesApp;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, searchTerm]);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToQuote(product, 1);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1500);
  };

  const resetFilters = () => {
    onBrandChange('all');
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <section id="catalogo" style={{ padding: '36px 0 60px', background: '#ffffff', width: '100%' }}>
      <div className="container">
        {/* Section Header (Estilo Tekbond Chapado) */}
        <div style={{ marginBottom: '24px', borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#6b7280', marginBottom: '6px' }}>
            <Link href="/" style={{ color: '#4b5563' }}>Início</Link>
            <ChevronRight size={13} />
            <span style={{ color: '#e5242a', fontWeight: 700 }}>Catálogo de Produtos</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.2
              }}>
                Catálogo Oficial de Produtos
              </h2>
              <p style={{ color: '#4b5563', fontSize: '0.9rem', marginTop: '4px' }}>
                Selecione as categorias e marcas para visualizar especificações e faturamento comercial.
              </p>
            </div>

            {/* Total count badge */}
            <div style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '2px',
              padding: '6px 14px',
              fontSize: '0.82rem',
              color: '#374151'
            }}>
              Exibindo <strong style={{ color: '#111827' }}>{filteredProducts.length}</strong> de {PRODUCTS.length} itens
            </div>
          </div>
        </div>

        {/* Catalog Main Layout: Sidebar Categories + Product Grid (Tekbond Style Chapado) */}
        <div className="tekbond-layout">
          {/* LEFT SIDEBAR: Categories & Brands Filter */}
          <aside className="tekbond-sidebar">
            {/* Search Box in Sidebar */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Search 
                size={16} 
                color="#6b7280" 
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
                type="text"
                placeholder="Buscar por código ou nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '2px',
                  padding: '9px 12px 9px 36px',
                  color: '#111827',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter Group 1: Marcas */}
            <div className="filter-group">
              <h3 className="filter-group-title">
                Marcas Oficiais
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {BRANDS.map((brand) => {
                  const active = selectedBrand === brand.id;
                  return (
                    <button
                      key={brand.id}
                      onClick={() => onBrandChange(brand.id as Brand | 'all')}
                      className={`filter-item-btn ${active ? 'active' : ''}`}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {'color' in brand && (
                          <span style={{ width: '7px', height: '7px', background: brand.color, flexShrink: 0 }} />
                        )}
                        <span>{brand.label}</span>
                      </span>
                      {active && <Check size={14} color="#e5242a" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 2: Categorias */}
            <div className="filter-group" style={{ marginTop: '20px' }}>
              <h3 className="filter-group-title">
                Categorias Técnicas
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as Category | 'all')}
                      className={`filter-item-btn ${active ? 'active' : ''}`}
                    >
                      <span>{cat.label}</span>
                      <span style={{
                        fontSize: '0.72rem',
                        color: active ? '#e5242a' : '#6b7280',
                        fontWeight: active ? 700 : 500
                      }}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedBrand !== 'all' || selectedCategory !== 'all' || searchTerm !== '') && (
              <button
                onClick={resetFilters}
                style={{
                  marginTop: '16px',
                  width: '100%',
                  padding: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#dc2626',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                Limpar todos os filtros
              </button>
            )}

            {/* Quick Contact Help */}
            <div style={{
              marginTop: '24px',
              padding: '14px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '2px'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#111827', marginBottom: '4px' }}>
                Não encontrou o que procura?
              </div>
              <p style={{ fontSize: '0.78rem', color: '#4b5563', lineHeight: 1.4, marginBottom: '10px' }}>
                Trabalhamos com o catálogo completo de fábrica. Consulte nosso time no WhatsApp.
              </p>
              <a
                href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de cotar um produto que não encontrei no catálogo.')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#16a34a',
                  fontWeight: 700,
                  fontSize: '0.78rem'
                }}
              >
                <MessageSquare size={14} />
                <span>Consultar no WhatsApp &rarr;</span>
              </a>
            </div>
          </aside>

          {/* RIGHT MAIN: Product Grid (Tekbond Style Chapado) */}
          <div className="tekbond-products-area">
            {/* Mobile Filter Scroll Chips */}
            <div className="mobile-filter-chips hide-on-desktop">
              <div className="scroll-chips">
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onBrandChange(b.id as Brand | 'all')}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '2px',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      background: selectedBrand === b.id ? '#e5242a' : '#f3f4f6',
                      color: selectedBrand === b.id ? '#ffffff' : '#374151',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '48px 20px',
                background: '#f9fafb',
                borderRadius: '2px',
                border: '1px solid #e5e7eb'
              }}>
                <Wrench size={38} color="#9ca3af" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '6px' }}>
                  Nenhum produto encontrado com os filtros selecionados
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '16px', fontSize: '0.85rem' }}>
                  Consulte nossa equipe diretamente no WhatsApp para cotação de qualquer item da linha.
                </p>
                <button onClick={resetFilters} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.84rem' }}>
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="tekbond-grid">
                {filteredProducts.map((product) => {
                  const isAdded = addedAnimationId === product.id;
                  const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

                  let badgeColor = '#b91c1c';
                  let badgeBg = '#fee2e2';
                  if (product.brand === 'gedore-blue') {
                    badgeColor = '#0369a1';
                    badgeBg = '#e0f2fe';
                  } else if (product.brand === 'tekbond') {
                    badgeColor = '#15803d';
                    badgeBg = '#dcfce7';
                  }

                  return (
                    <div key={product.id} className="tekbond-card">
                      {/* Image Container em FUNDO BRANCO PURO (O Produto Brilha!) */}
                      <Link href={`/produtos/${product.id}`} className="tekbond-img-container">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'contain', padding: '14px' }}
                        />

                        {/* Brand Badge */}
                        <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            color: badgeColor,
                            background: badgeBg,
                            padding: '2px 6px',
                            borderRadius: '2px'
                          }}>
                            {product.brandLabel}
                          </span>
                        </div>

                        {/* SKU Reference */}
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '8px',
                          background: '#f3f4f6',
                          color: '#374151',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: '2px',
                          border: '1px solid #e5e7eb'
                        }}>
                          Cód: {product.code}
                        </div>

                        {/* Multiple photos indicator */}
                        {product.images && product.images.length > 1 && (
                          <div style={{
                            position: 'absolute',
                            bottom: '8px',
                            right: '8px',
                            background: '#ffffff',
                            color: '#111827',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '2px',
                            border: '1px solid #e5e7eb'
                          }}>
                            +{product.images.length} fotos
                          </div>
                        )}
                      </Link>

                      {/* Card Body Chapado */}
                      <div className="tekbond-body">
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#6b7280', fontWeight: 700, marginBottom: '3px' }}>
                          {product.categoryLabel}
                        </div>

                        <Link href={`/produtos/${product.id}`}>
                          <h3 className="tekbond-title">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="tekbond-desc">
                          {product.description}
                        </p>

                        {/* Application Tag */}
                        <div style={{
                          fontSize: '0.74rem',
                          color: '#4b5563',
                          background: '#f9fafb',
                          border: '1px solid #f3f4f6',
                          padding: '4px 7px',
                          borderRadius: '2px',
                          marginBottom: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          <Layers size={12} color="#e5242a" style={{ flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {product.application}
                          </span>
                        </div>

                        {/* OS 2 BOTÕES DE COMPRA SOLICITADOS (Preservados e Chapados) */}
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {/* Botão 1: Comprar via WhatsApp */}
                          <a
                            href={directWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              background: '#25d366',
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.84rem',
                              padding: '10px 12px',
                              borderRadius: '2px',
                              transition: 'background 0.2s ease',
                              textAlign: 'center'
                            }}
                            className="btn-product-whatsapp"
                          >
                            <MessageSquare size={15} />
                            <span>Comprar via WhatsApp</span>
                          </a>

                          {/* Botão 2: Comprar no Mercado Livre */}
                          <a
                            href={buildMercadoLivreUrl(product)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              background: '#FFE600',
                              color: '#2D3277',
                              fontWeight: 800,
                              fontSize: '0.84rem',
                              padding: '10px 12px',
                              borderRadius: '2px',
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              transition: 'background 0.2s ease',
                              textAlign: 'center'
                            }}
                            className="btn-product-ml"
                          >
                            <ShoppingBag size={15} color="#2D3277" />
                            <span>Comprar no Mercado Livre</span>
                          </a>

                          {/* Botão 3: Adicionar à Cotação PJ */}
                          <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                background: isAdded ? '#dcfce7' : '#f3f4f6',
                                color: isAdded ? '#15803d' : '#374151',
                                border: '1px solid #e5e7eb',
                                borderRadius: '2px',
                                padding: '7px 8px',
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {isAdded ? (
                                <>
                                  <Check size={13} color="#15803d" />
                                  <span>Adicionado!</span>
                                </>
                              ) : (
                                <>
                                  <Plus size={13} />
                                  <span>Cotação PJ</span>
                                </>
                              )}
                            </button>

                            <Link
                              href={`/produtos/${product.id}`}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                background: '#ffffff',
                                color: '#111827',
                                border: '1px solid #d1d5db',
                                borderRadius: '2px',
                                padding: '7px 10px',
                                fontSize: '0.74rem',
                                fontWeight: 600
                              }}
                            >
                              <span>Detalhes</span>
                              <ChevronRight size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tekbond-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .tekbond-sidebar {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 2px;
          padding: 18px;
          height: fit-content;
        }

        .filter-group-title {
          font-size: 0.8rem;
          color: #111827;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .filter-item-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 7px 10px;
          border-radius: 2px;
          font-size: 0.83rem;
          font-weight: 500;
          color: #4b5563;
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.15s ease;
          text-align: left;
        }

        .filter-item-btn:hover {
          color: #111827;
          background: #f9fafb;
        }

        .filter-item-btn.active {
          color: #111827;
          background: #fef2f2;
          border-color: #fca5a5;
          font-weight: 700;
        }

        .tekbond-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .tekbond-card {
          background: #ffffff;
          border-radius: 2px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .tekbond-card:hover {
          border-color: #9ca3af;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.06);
        }

        .tekbond-img-container {
          position: relative;
          height: 200px;
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #f3f4f6;
          display: block;
        }

        .tekbond-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tekbond-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.35;
          margin-bottom: 6px;
          transition: color 0.15s ease;
        }

        .tekbond-title:hover {
          color: #e5242a;
        }

        .tekbond-desc {
          font-size: 0.81rem;
          color: #4b5563;
          line-height: 1.4;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-product-whatsapp:hover {
          background: #20bd5a !important;
        }

        .btn-product-ml:hover {
          background: #fadb00 !important;
        }

        @media (min-width: 600px) {
          .tekbond-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 960px) {
          .tekbond-layout {
            grid-template-columns: 260px 1fr;
            gap: 24px;
          }
          .tekbond-sidebar {
            display: block !important;
          }
          .mobile-filter-chips {
            display: none !important;
          }
          .tekbond-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media (max-width: 959px) {
          .tekbond-sidebar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
