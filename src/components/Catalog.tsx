'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
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
  const [selectedModalProduct, setSelectedModalProduct] = useState<Product | null>(null);
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

  const handleAddToCart = (product: Product) => {
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
    <section id="catalogo" style={{ padding: '48px 0', position: 'relative', width: '100%' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Catálogo Comercial
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginTop: '6px',
            marginBottom: '10px'
          }}>
            Ferramentas & Químicos
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            Consulte produtos, monte sua lista de cotação ou fale direto no WhatsApp com nossos especialistas.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass filter-box">
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search 
              size={18} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
              type="text"
              placeholder="Buscar por ferramenta, código (ex: R45603172)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Brand Filter Tabs (Swipeable on Mobile) */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div className="scroll-chips">
              {BRANDS.map((brand) => {
                const active = selectedBrand === brand.id;
                return (
                  <button
                    key={brand.id}
                    onClick={() => onBrandChange(brand.id as Brand | 'all')}
                    style={{
                      padding: '7px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      background: active 
                        ? ('color' in brand ? brand.color : 'var(--brand-red)')
                        : 'rgba(255, 255, 255, 0.06)',
                      color: active ? '#ffffff' : 'var(--text-secondary)',
                      border: active ? '1px solid transparent' : '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {brand.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Pills (Swipeable on Mobile) */}
          <div style={{ width: '100%', overflow: 'hidden', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
            <div className="scroll-chips">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as Category | 'all')}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      background: active ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.04)',
                      color: active ? '#ffffff' : 'var(--text-muted)',
                      border: active ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Count & Active Filters Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)'
        }}>
          <div>
            <strong>{filteredProducts.length}</strong> produto(s) encontrado(s)
          </div>

          {(selectedBrand !== 'all' || selectedCategory !== 'all' || searchTerm !== '') && (
            <button
              onClick={resetFilters}
              style={{
                color: '#ff6b6b',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem'
              }}
            >
              <X size={13} /> Limpar filtros
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 16px',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <Wrench size={40} color="var(--text-muted)" style={{ marginBottom: '14px', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
              Nenhum produto encontrado
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '0.88rem' }}>
              Trabalhamos com a linha completa Gedore e Tekbond sob encomenda! Fale direto no nosso WhatsApp para solicitar qualquer código específico.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={resetFilters} className="btn-secondary" style={{ padding: '10px 16px', fontSize: '0.88rem' }}>
                Limpar Filtros
              </button>
              <a
                href={buildWhatsAppUrl(`Olá M11tools! Procuro o produto ${searchTerm || 'Gedore / Tekbond'} que não encontrei no site.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '10px 16px', fontSize: '0.88rem' }}
              >
                <MessageSquare size={15} />
                Consultar no WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const isAdded = addedAnimationId === product.id;
              const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

              let badgeClass = 'badge-red';
              if (product.brand === 'gedore-blue') badgeClass = 'badge-blue';
              if (product.brand === 'tekbond') badgeClass = 'badge-green';

              return (
                <div
                  key={product.id}
                  className="product-card"
                >
                  {/* Image & Top Badges */}
                  <div 
                    style={{ position: 'relative', height: '170px', width: '100%', background: '#070a0f', cursor: 'pointer' }}
                    onClick={() => setSelectedModalProduct(product)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(22, 30, 46, 0.85) 0%, transparent 60%)'
                    }} />

                    {/* Brand Pill */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      <span className={`badge ${badgeClass}`}>
                        {product.brandLabel}
                      </span>
                    </div>

                    {/* Code Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '10px',
                      background: 'rgba(0,0,0,0.75)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      Cód: {product.code}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="product-card-body">
                    <div style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      {product.categoryLabel}
                    </div>

                    <h3 
                      onClick={() => setSelectedModalProduct(product)}
                      className="product-title"
                    >
                      {product.name}
                    </h3>

                    <p style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.4,
                      marginBottom: '12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.description}
                    </p>

                    {/* Application Tag */}
                    <div style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '5px 8px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <Layers size={12} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {product.application}
                      </span>
                    </div>

                    {/* Action Buttons: 2 Botoes de Compra solicitados */}
                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Botao 1: Comprar via WhatsApp */}
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
                        className="btn-card-whatsapp"
                      >
                        <MessageSquare size={16} />
                        <span>Comprar via WhatsApp</span>
                      </a>

                      {/* Botao 2: Comprar no Mercado Livre */}
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
                        className="btn-card-ml"
                      >
                        <ShoppingBag size={16} color="#2D3277" />
                        <span>Comprar no Mercado Livre</span>
                      </a>

                      {/* Quick Add to B2B Quote */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          color: isAdded ? '#00a651' : 'var(--text-secondary)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-subtle)',
                          padding: '6px 10px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.76rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                          marginTop: '2px'
                        }}
                      >
                        {isAdded ? (
                          <>
                            <Check size={13} color="#00a651" />
                            <span style={{ color: '#00a651' }}>Adicionado à Lista!</span>
                          </>
                        ) : (
                          <>
                            <Plus size={13} />
                            <span>+ Adicionar à Cotação PJ</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Product Quick View Modal */}
        {selectedModalProduct && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}>
            <div style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProduct(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image
                  src={selectedModalProduct.image}
                  alt={selectedModalProduct.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-surface) 5%, transparent 60%)'
                }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '16px' }}>
                  <span className={`badge ${selectedModalProduct.brand === 'gedore-blue' ? 'badge-blue' : selectedModalProduct.brand === 'tekbond' ? 'badge-green' : 'badge-red'}`}>
                    {selectedModalProduct.brandLabel}
                  </span>
                </div>
              </div>

              {/* Modal Details */}
              <div style={{ padding: '20px' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                  Código: <span style={{ color: '#ffffff' }}>{selectedModalProduct.code}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                  {selectedModalProduct.name}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '18px', fontSize: '0.9rem' }}>
                  {selectedModalProduct.description}
                </p>

                {/* Specs List */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    Especificações Técnicas:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedModalProduct.specs.map((spec, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '20px',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)'
                }}>
                  <strong style={{ color: '#ffffff' }}>Aplicação:</strong> {selectedModalProduct.application}
                </div>

                {/* Modal Buttons: WhatsApp, Mercado Livre & Cotação */}
                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  {/* Comprar via WhatsApp */}
                  <a
                    href={generateDirectProductWhatsAppLink(selectedModalProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                  >
                    <MessageSquare size={17} />
                    <span>Comprar via WhatsApp</span>
                  </a>

                  {/* Comprar no Mercado Livre */}
                  <a
                    href={buildMercadoLivreUrl(selectedModalProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: '#FFE600',
                      color: '#2D3277',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 4px 14px rgba(255, 230, 0, 0.25)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      textAlign: 'center'
                    }}
                  >
                    <ShoppingBag size={17} color="#2D3277" />
                    <span>Comprar no Mercado Livre</span>
                  </a>

                  {/* Adicionar à Cotação */}
                  <button
                    onClick={() => {
                      handleAddToCart(selectedModalProduct);
                      setSelectedModalProduct(null);
                    }}
                    className="btn-secondary"
                    style={{ width: '100%', padding: '11px', fontSize: '0.88rem' }}
                  >
                    <Plus size={16} />
                    <span>Adicionar à Lista de Cotação B2B</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .filter-box {
          padding: 16px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .search-input {
          width: 100%;
          background: rgba(11, 15, 23, 0.85);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 12px 14px 12px 42px;
          color: #ffffff;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .search-input:focus {
          border-color: var(--brand-red);
        }
        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .product-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .product-card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 8px;
          cursor: pointer;
        }

        @media (min-width: 560px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 22px;
          }
          .filter-box {
            padding: 20px;
          }
          .product-card-body {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
