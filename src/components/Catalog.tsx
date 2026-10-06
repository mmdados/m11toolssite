'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { BRANDS, CATEGORIES, PRODUCTS } from '@/data/products';
import { Brand, Category, Product } from '@/types';
import { useQuote } from '@/context/QuoteContext';
import { 
  Search, 
  Plus, 
  MessageSquare, 
  Check, 
  X, 
  Info, 
  Layers,
  Wrench,
  Sparkles
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
    <section id="catalogo" style={{ padding: '70px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--brand-red)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Catálogo Comercial
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginTop: '8px',
            marginBottom: '12px'
          }}>
            Ferramentas & Químicos para sua Empresa
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Consulte produtos, monte sua lista de cotação ou fale direto no WhatsApp com nossos especialistas.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass" style={{
          padding: '20px',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search 
              size={20} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
              type="text"
              placeholder="Pesquise por nome da ferramenta, código (ex: R45603172), ou aplicação..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(11, 15, 23, 0.8)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px 14px 48px',
                color: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--brand-red)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Brand Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '6px' }}>
              Marca:
            </span>
            {BRANDS.map((brand) => {
              const active = selectedBrand === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => onBrandChange(brand.id as Brand | 'all')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: active 
                      ? ('color' in brand ? brand.color : 'var(--brand-red)')
                      : 'rgba(255, 255, 255, 0.05)',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    border: active ? '1px solid transparent' : '1px solid var(--border-subtle)',
                    transition: 'all 0.2s ease',
                    boxShadow: active ? '0 4px 14px rgba(0,0,0,0.4)' : 'none'
                  }}
                >
                  {brand.label}
                </button>
              );
            })}
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginRight: '6px' }}>
              Categoria:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as Category | 'all')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    background: active ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
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

        {/* Product Count & Active Filters Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <div>
            Mostrando <strong>{filteredProducts.length}</strong> produto(s)
            {selectedBrand !== 'all' && <span> na marca selecionada</span>}
            {searchTerm && <span> para a busca &quot;{searchTerm}&quot;</span>}
          </div>

          {(selectedBrand !== 'all' || selectedCategory !== 'all' || searchTerm !== '') && (
            <button
              onClick={resetFilters}
              style={{
                color: '#ff6b6b',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <X size={14} /> Limpar filtros
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <Wrench size={48} color="var(--text-muted)" style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
              Nenhum produto encontrado com os filtros atuais
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.9rem' }}>
              Trabalhamos com a linha completa Gedore e Tekbond sob encomenda! Fale direto no nosso WhatsApp para solicitar qualquer código específico.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={resetFilters} className="btn-secondary">
                Limpar Filtros
              </button>
              <a
                href={`https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Procuro%20o%20produto%20${encodeURIComponent(searchTerm || 'Gedore / Tekbond')}%20que%20n%C3%A3o%20encontrei%20no%20site.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={16} />
                Consultar Código no WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((product) => {
              const isAdded = addedAnimationId === product.id;
              const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

              let badgeClass = 'badge-red';
              if (product.brand === 'gedore-blue') badgeClass = 'badge-blue';
              if (product.brand === 'tekbond') badgeClass = 'badge-green';

              return (
                <div
                  key={product.id}
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  className="product-card"
                >
                  {/* Image & Top Badges */}
                  <div 
                    style={{ position: 'relative', height: '190px', width: '100%', background: '#070a0f', cursor: 'pointer' }}
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
                      background: 'linear-gradient(to top, rgba(22, 30, 46, 0.8) 0%, transparent 60%)'
                    }} />

                    {/* Brand Pill */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className={`badge ${badgeClass}`}>
                        {product.brandLabel}
                      </span>
                    </div>

                    {/* Code Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      Cód: {product.code}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                      marginBottom: '6px'
                    }}>
                      {product.categoryLabel}
                    </div>

                    <h3 
                      onClick={() => setSelectedModalProduct(product)}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.35,
                        marginBottom: '10px',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                      }}
                      className="product-title"
                    >
                      {product.name}
                    </h3>

                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.description}
                    </p>

                    {/* Application Tag */}
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '6px 10px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Layers size={13} color="var(--brand-red)" />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {product.application}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Add to Quote Cart */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: isAdded ? '#00a651' : 'linear-gradient(135deg, var(--brand-red) 0%, #b8171d 100%)',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                        }}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} />
                            <span>Adicionado à Cotação!</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>Adicionar à Cotação</span>
                          </>
                        )}
                      </button>

                      {/* Direct WhatsApp Quote */}
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
                          background: 'rgba(37, 211, 102, 0.1)',
                          border: '1px solid rgba(37, 211, 102, 0.3)',
                          color: '#4ade80',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'all 0.2s ease'
                        }}
                        className="btn-item-whatsapp"
                      >
                        <MessageSquare size={14} />
                        <span>Cotar Item no WhatsApp</span>
                      </a>
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
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              maxWidth: '650px',
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
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  border: '1px solid var(--border-medium)'
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Banner */}
              <div style={{ position: 'relative', height: '260px', width: '100%' }}>
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
                <div style={{ position: 'absolute', bottom: '16px', left: '24px' }}>
                  <span className={`badge ${selectedModalProduct.brand === 'gedore-blue' ? 'badge-blue' : selectedModalProduct.brand === 'tekbond' ? 'badge-green' : 'badge-red'}`}>
                    {selectedModalProduct.brandLabel}
                  </span>
                </div>
              </div>

              {/* Modal Details */}
              <div style={{ padding: '24px' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                  Código de Referência: <span style={{ color: '#ffffff' }}>{selectedModalProduct.code}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                  {selectedModalProduct.name}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px', fontSize: '0.95rem' }}>
                  {selectedModalProduct.description}
                </p>

                {/* Specs List */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
                    Especificações Técnicas:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedModalProduct.specs.map((spec, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '24px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}>
                  <strong style={{ color: '#ffffff' }}>Aplicação Recomendada:</strong> {selectedModalProduct.application}
                </div>

                {/* Modal Buttons */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      handleAddToCart(selectedModalProduct);
                      setSelectedModalProduct(null);
                    }}
                    className="btn-primary"
                    style={{ flex: 1, padding: '12px 20px' }}
                  >
                    <Plus size={18} />
                    <span>Adicionar à Lista de Cotação</span>
                  </button>

                  <a
                    href={generateDirectProductWhatsAppLink(selectedModalProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, padding: '12px 20px' }}
                  >
                    <MessageSquare size={18} />
                    <span>Cotar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(229, 36, 42, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
        }
        .product-title:hover {
          color: var(--brand-red) !important;
        }
        .btn-item-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2) !important;
          border-color: #25d366 !important;
        }
      `}</style>
    </section>
  );
}
