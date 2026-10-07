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
  ExternalLink,
  SlidersHorizontal,
  ChevronRight,
  Info
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
    <section id="catalogo" style={{ padding: '56px 0', position: 'relative', width: '100%' }}>
      <div className="container">
        {/* Section Header (Tekbond Style) */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Início</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--brand-red)', fontWeight: 700 }}>Catálogo de Produtos</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.7rem, 4.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2
              }}>
                Nossos Produtos & Ferramentas
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
                Linha oficial Gedore Red, Gedore Blue e Tekbond com especificações técnicas e faturamento PJ.
              </p>
            </div>

            {/* Total count badge */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 16px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              Mostrando <strong style={{ color: '#ffffff' }}>{filteredProducts.length}</strong> de {PRODUCTS.length} itens
            </div>
          </div>
        </div>

        {/* Catalog Main Layout: Sidebar Categories + Product Grid (Tekbond Style) */}
        <div className="tekbond-layout">
          {/* LEFT SIDEBAR: Categories & Brands Filter */}
          <aside className="tekbond-sidebar">
            {/* Search Box in Sidebar */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Search 
                size={18} 
                color="var(--text-muted)" 
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
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 12px 10px 38px',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Filter Group 1: Marcas */}
            <div className="filter-group">
              <h3 className="filter-group-title">
                Marcas Oficiais
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: brand.color, flexShrink: 0 }} />
                        )}
                        <span>{brand.label}</span>
                      </span>
                      {active && <Check size={14} color="var(--brand-red)" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 2: Categorias (Tekbond Style Tree) */}
            <div className="filter-group" style={{ marginTop: '20px' }}>
              <h3 className="filter-group-title">
                Categorias de Produtos
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
                        color: active ? '#ffffff' : 'var(--text-muted)',
                        background: active ? 'var(--brand-red)' : 'rgba(255,255,255,0.06)',
                        padding: '2px 7px',
                        borderRadius: '999px',
                        fontWeight: 700
                      }}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset Filter Button */}
            {(selectedBrand !== 'all' || selectedCategory !== 'all' || searchTerm !== '') && (
              <button
                onClick={resetFilters}
                className="btn-secondary"
                style={{ width: '100%', marginTop: '20px', padding: '9px', fontSize: '0.82rem' }}
              >
                <X size={14} />
                <span>Limpar Todos os Filtros</span>
              </button>
            )}

            {/* Need Custom Quote Box in Sidebar */}
            <div style={{
              marginTop: '28px',
              padding: '16px',
              background: 'rgba(229, 36, 42, 0.08)',
              border: '1px solid rgba(229, 36, 42, 0.25)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.82rem'
            }}>
              <div style={{ fontWeight: 800, color: '#ff6b6b', marginBottom: '4px' }}>
                Não achou o código?
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '12px' }}>
                Trabalhamos com toda a linha Gedore e Tekbond sob encomenda.
              </p>
              <a
                href={buildWhatsAppUrl('Olá M11tools! Gostaria de consultar um código de ferramenta específico.')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#4ade80',
                  fontWeight: 700,
                  fontSize: '0.8rem'
                }}
              >
                <MessageSquare size={14} />
                <span>Consultar no WhatsApp &rarr;</span>
              </a>
            </div>
          </aside>

          {/* RIGHT MAIN: Product Grid (Tekbond Style) */}
          <div className="tekbond-products-area">
            {/* Mobile Filter Scroll Chips */}
            <div className="mobile-filter-chips hide-on-desktop">
              <div className="scroll-chips">
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onBrandChange(b.id as Brand | 'all')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      background: selectedBrand === b.id ? 'var(--brand-red)' : 'rgba(255,255,255,0.06)',
                      color: selectedBrand === b.id ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
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
                padding: '60px 20px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)'
              }}>
                <Wrench size={44} color="var(--text-muted)" style={{ marginBottom: '16px', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
                  Nenhum produto encontrado com os filtros selecionados
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.9rem' }}>
                  Consulte nossa equipe diretamente no WhatsApp para cotação de qualquer item da linha.
                </p>
                <button onClick={resetFilters} className="btn-secondary">
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="tekbond-grid">
                {filteredProducts.map((product) => {
                  const isAdded = addedAnimationId === product.id;
                  const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

                  let badgeClass = 'badge-red';
                  if (product.brand === 'gedore-blue') badgeClass = 'badge-blue';
                  if (product.brand === 'tekbond') badgeClass = 'badge-green';

                  return (
                    <div key={product.id} className="tekbond-card">
                      {/* Image with Direct Link to FuelTech Style Detail Page */}
                      <Link href={`/produtos/${product.id}`} className="tekbond-img-container">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(18, 24, 36, 0.9) 0%, transparent 60%)'
                        }} />

                        {/* Brand Badge */}
                        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                          <span className={`badge ${badgeClass}`}>
                            {product.brandLabel}
                          </span>
                        </div>

                        {/* Reference SKU */}
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '10px',
                          background: 'rgba(0, 0, 0, 0.75)',
                          backdropFilter: 'blur(4px)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          Cód: {product.code}
                        </div>

                        {/* Multiple Photos indicator */}
                        {product.images && product.images.length > 1 && (
                          <div style={{
                            position: 'absolute',
                            bottom: '8px',
                            right: '10px',
                            background: 'rgba(0, 0, 0, 0.75)',
                            backdropFilter: 'blur(4px)',
                            color: '#ffffff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-subtle)'
                          }}>
                            +{product.images.length} fotos
                          </div>
                        )}
                      </Link>

                      {/* Card Body (Tekbond Style) */}
                      <div className="tekbond-body">
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
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

                        {/* Application Pill */}
                        <div style={{
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '5px 8px',
                          borderRadius: 'var(--radius-sm)',
                          marginBottom: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <Layers size={12} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {product.application}
                          </span>
                        </div>

                        {/* OS 2 BOTÕES DE COMPRA SOLICITADOS */}
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                              gap: '7px',
                              background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.86rem',
                              padding: '11px 12px',
                              borderRadius: 'var(--radius-md)',
                              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                              transition: 'all 0.2s ease',
                              textAlign: 'center'
                            }}
                          >
                            <MessageSquare size={16} />
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
                              gap: '7px',
                              background: '#FFE600',
                              color: '#2D3277',
                              fontWeight: 800,
                              fontSize: '0.86rem',
                              padding: '11px 12px',
                              borderRadius: 'var(--radius-md)',
                              boxShadow: '0 4px 14px rgba(255, 230, 0, 0.25)',
                              transition: 'all 0.2s ease',
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              textAlign: 'center'
                            }}
                          >
                            <ShoppingBag size={16} color="#2D3277" />
                            <span>Comprar no Mercado Livre</span>
                          </a>

                          {/* Quick B2B Quote Button & Details Link */}
                          <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                color: isAdded ? '#00a651' : 'var(--text-secondary)',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid var(--border-subtle)',
                                padding: '6px 8px',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                transition: 'all 0.2s ease'
                              }}
                              title="Adicionar à cotação corporativa"
                            >
                              {isAdded ? (
                                <>
                                  <Check size={12} color="#00a651" />
                                  <span style={{ color: '#00a651' }}>Adicionado!</span>
                                </>
                              ) : (
                                <>
                                  <Plus size={12} />
                                  <span>+ Cotação PJ</span>
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
                                color: 'var(--text-secondary)',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid var(--border-subtle)',
                                padding: '6px 10px',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                transition: 'all 0.2s ease'
                              }}
                              className="view-details-link"
                            >
                              <span>Ver Fotos</span>
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
          gap: 28px;
        }

        .tekbond-sidebar {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px;
          height: fit-content;
        }

        .filter-group-title {
          font-size: 0.85rem;
          color: #ffffff;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }

        .filter-item-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 8px 12px;
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          transition: all 0.2s ease;
          text-align: left;
        }

        .filter-item-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        .filter-item-btn.active {
          color: #ffffff;
          background: rgba(229, 36, 42, 0.12);
          border-color: rgba(229, 36, 42, 0.4);
          font-weight: 700;
        }

        .tekbond-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .tekbond-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .tekbond-card:hover {
          border-color: rgba(229, 36, 42, 0.4);
          transform: translateY(-2px);
        }

        .tekbond-img-container {
          position: relative;
          height: 190px;
          width: 100%;
          background: #070a0f;
          display: block;
        }

        .tekbond-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tekbond-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 8px;
          transition: color 0.2s ease;
        }

        .tekbond-title:hover {
          color: var(--brand-red);
        }

        .tekbond-desc {
          font-size: 0.83rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .view-details-link:hover {
          color: #ffffff !important;
          border-color: var(--brand-red) !important;
        }

        @media (min-width: 600px) {
          .tekbond-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 960px) {
          .tekbond-layout {
            grid-template-columns: 280px 1fr;
            gap: 32px;
          }
          .tekbond-sidebar {
            display: block !important;
          }
          .mobile-filter-chips {
            display: none !important;
          }
          .tekbond-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
