'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BRANDS, CATEGORIES, PRODUCTS } from '@/data/products';
import { Brand, Category, Product } from '@/types';
import { useQuote } from '@/context/QuoteContext';
import { buildMercadoLivreUrl } from '@/config/site';
import { 
  Search, 
  Plus, 
  MessageSquare, 
  Check, 
  X, 
  Layers,
  Wrench,
  ShoppingBag,
  ChevronRight
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
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
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
    <section id="catalogo" style={{ padding: '24px 0 60px', background: '#ffffff', width: '100%' }}>
      <div className="container">
        {/* Section Header - Simples e Direto Estilo Tekbond */}
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #e5e7eb', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#6b7280', marginBottom: '6px' }}>
            <Link href="/" style={{ color: '#4b5563' }}>Início</Link>
            <ChevronRight size={13} />
            <span style={{ color: '#e5242a', fontWeight: 700 }}>Produtos</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.2
              }}>
                Produtos
              </h1>
              <p style={{ color: '#4b5563', fontSize: '0.88rem', marginTop: '4px' }}>
                Catálogo comercial oficial Gedore Red, Gedore Industrial e Tekbond.
              </p>
            </div>

            {/* Total count badge */}
            <div style={{
              background: '#f9fafb',
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

        {/* Layout Tekbond (Sidebar de Filtros + Vitrine de Produtos) */}
        <div className="tekbond-layout">
          {/* SIDEBAR ESQUERDA: Filtros Técnicos */}
          <aside className="tekbond-sidebar">
            {/* Campo de Busca */}
            <div style={{ position: 'relative', marginBottom: '18px' }}>
              <Search 
                size={16} 
                color="#6b7280" 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
                type="text"
                placeholder="Buscar produto ou código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '2px',
                  padding: '8px 12px 8px 34px',
                  color: '#111827',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Marcas */}
            <div className="filter-group">
              <h3 className="filter-group-title">
                Marcas
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
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

            {/* Categorias */}
            <div className="filter-group" style={{ marginTop: '18px' }}>
              <h3 className="filter-group-title">
                Categorias
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
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
                  padding: '7px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#dc2626',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                Limpar filtros
              </button>
            )}
          </aside>

          {/* ÁREA DIREITA: Grid de Produtos */}
          <div className="tekbond-products-area">
            {/* Mobile Scroll Chips */}
            <div className="mobile-filter-chips hide-on-desktop">
              <div className="scroll-chips" style={{ marginBottom: '14px' }}>
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
                  Nenhum produto encontrado
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '16px', fontSize: '0.85rem' }}>
                  Tente alterar os filtros ou consultar nossa equipe no WhatsApp.
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
                      {/* CONTAINER DE IMAGEM 100% BLINDADO E COM ALTURA FIXA */}
                      <Link
                        href={`/produtos/${product.id}`}
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '190px',
                          background: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          borderBottom: '1px solid #f3f4f6',
                          padding: '12px'
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '160px',
                            objectFit: 'contain',
                            display: 'block'
                          }}
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
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#6b7280', fontWeight: 700, marginBottom: '3px' }}>
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

                        {/* OS BOTÕES DE COMPRA PRESERVADOS */}
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {/* Botão 1: Comprar via WhatsApp */}
                          <a
                            href={directWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            className="btn-product-ml"
                          >
                            <ShoppingBag size={15} color="#2D3277" />
                            <span>Comprar no Mercado Livre</span>
                          </a>

                          {/* Botão 3: Cotação PJ & Detalhes */}
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
                                transition: 'background 0.15s ease'
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
    </section>
  );
}
