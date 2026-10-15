'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRANDS, CATEGORIES, PRODUCTS } from '@/data/products';
import { Brand, Category, ItemType, Product } from '@/types';
import { useQuote } from '@/context/QuoteContext';
import { buildMercadoLivreUrl } from '@/config/site';
import { 
  Search, 
  MessageSquare, 
  ShoppingBag, 
  ChevronRight, 
  X, 
  Wrench,
  Layers,
  Sparkles,
  CheckCircle2,
  Tag
} from 'lucide-react';

interface CatalogProps {
  selectedBrand: Brand | 'all';
  onBrandChange: (brand: Brand | 'all') => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function Catalog({ selectedBrand, onBrandChange, searchInputRef }: CatalogProps) {
  const { generateDirectProductWhatsAppLink } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedItemType, setSelectedItemType] = useState<ItemType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by brand, category, itemType and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedItemType !== 'all' && product.itemType !== selectedItemType) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCode = product.code.toLowerCase().includes(query);
        const matchesTechCode = product.technicalCode?.toLowerCase().includes(query) || false;
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesApp = product.application.toLowerCase().includes(query);
        const matchesType = product.itemTypeLabel?.toLowerCase().includes(query) || false;
        const matchesComposition = product.composition?.some((c) => c.toLowerCase().includes(query)) || false;
        return matchesName || matchesCode || matchesTechCode || matchesDesc || matchesApp || matchesType || matchesComposition;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, selectedItemType, searchTerm]);

  const resetFilters = () => {
    onBrandChange('all');
    setSelectedCategory('all');
    setSelectedItemType('all');
    setSearchTerm('');
  };

  return (
    <section id="catalogo" style={{ padding: '32px 0 64px', background: '#ffffff', width: '100%' }}>
      <div className="container">
        {/* Breadcrumb e Cabeçalho do Catálogo */}
        <div style={{ marginBottom: '24px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748b', marginBottom: '8px' }}>
            <Link href="/" style={{ color: '#475569' }}>Início</Link>
            <ChevronRight size={13} />
            <span style={{ color: '#e5242a', fontWeight: 700 }}>Catálogo de Produtos</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2
              }}>
                Anúncios Oficiais
              </h1>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '4px' }}>
                Produtos com fotos reais, dados técnicos de fábrica e procedência garantida.
              </p>
            </div>

            {/* Totalizador de itens */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              padding: '6px 14px',
              fontSize: '0.82rem',
              color: '#334155'
            }}>
              Exibindo <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> de {PRODUCTS.length} anúncio(s)
            </div>
          </div>
        </div>

        {/* BARRA DE PESQUISA PRINCIPAL PROEMINENTE (Por Referência / Código / Nome) */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '16px',
          marginBottom: '28px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Input de busca */}
            <div style={{ position: 'relative', width: '100%' }}>
              <Search 
                size={18} 
                color="#64748b" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
                type="text"
                placeholder="Buscar por referência (ex: R46023100), código (ex: 3300246) ou nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  padding: '12px 40px 12px 42px',
                  color: '#0f172a',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  outline: 'none',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  transition: 'border-color 0.15s ease'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                  title="Limpar busca"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filtros Rápidos (Pills): Marcas & Tipo (Jogo ou Peça) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>
                  Filtros:
                </span>

                {/* Filtro: Todas */}
                <button
                  onClick={() => { onBrandChange('all'); setSelectedItemType('all'); }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: selectedBrand === 'all' && selectedItemType === 'all' ? 700 : 500,
                    background: selectedBrand === 'all' && selectedItemType === 'all' ? '#0f172a' : '#ffffff',
                    color: selectedBrand === 'all' && selectedItemType === 'all' ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  Todos
                </button>

                {/* Filtro: Gedore Red */}
                <button
                  onClick={() => onBrandChange(selectedBrand === 'gedore-red' ? 'all' : 'gedore-red')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: selectedBrand === 'gedore-red' ? 700 : 500,
                    background: selectedBrand === 'gedore-red' ? '#e5242a' : '#ffffff',
                    color: selectedBrand === 'gedore-red' ? '#ffffff' : '#334155',
                    border: selectedBrand === 'gedore-red' ? '1px solid #e5242a' : '1px solid #cbd5e1',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', background: selectedBrand === 'gedore-red' ? '#ffffff' : '#e5242a', borderRadius: '50%' }} />
                  Gedore Red
                </button>

                {/* Filtro: Tipo Jogo */}
                <button
                  onClick={() => setSelectedItemType(selectedItemType === 'jogo' ? 'all' : 'jogo')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: selectedItemType === 'jogo' ? 700 : 500,
                    background: selectedItemType === 'jogo' ? '#0f172a' : '#ffffff',
                    color: selectedItemType === 'jogo' ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}
                >
                  Tipo: Jogo
                </button>

                {/* Filtro: Tipo Peça */}
                <button
                  onClick={() => setSelectedItemType(selectedItemType === 'peca' ? 'all' : 'peca')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: selectedItemType === 'peca' ? 700 : 500,
                    background: selectedItemType === 'peca' ? '#0f172a' : '#ffffff',
                    color: selectedItemType === 'peca' ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}
                >
                  Tipo: Peça
                </button>
              </div>

              {(selectedBrand !== 'all' || selectedItemType !== 'all' || searchTerm.trim() !== '') && (
                <button
                  onClick={resetFilters}
                  style={{
                    fontSize: '0.78rem',
                    color: '#e5242a',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  Limpar todos os filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* VITRINE DE PRODUTOS */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '56px 20px',
            background: '#f8fafc',
            borderRadius: '6px',
            border: '1px dashed #cbd5e1'
          }}>
            <Wrench size={42} color="#94a3b8" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '6px', fontWeight: 700 }}>
              Nenhum produto localizado
            </h3>
            <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.88rem', maxWidth: '440px', margin: '0 auto 16px' }}>
              Não encontramos nenhum anúncio correspondente ao termo "{searchTerm}". Tente buscar por "R46023100" ou limpar os filtros.
            </p>
            <button 
              onClick={resetFilters} 
              style={{
                background: '#e5242a',
                color: '#ffffff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '4px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Ver todos os anúncios
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

              return (
                <div key={product.id} className="product-card">
                  {/* Container de Imagem com badges e contador */}
                  <Link
                    href={`/produtos/${product.id}`}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '260px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderBottom: '1px solid #f1f5f9',
                      padding: '16px'
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '220px',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.3s ease'
                      }}
                      className="product-card-img"
                    />

                    {/* Badge da Marca */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        background: '#e5242a',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        boxShadow: '0 2px 4px rgba(229, 36, 42, 0.2)'
                      }}>
                        {product.brandLabel}
                      </span>
                      {product.itemTypeLabel && (
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          background: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          padding: '3px 8px',
                          borderRadius: '3px'
                        }}>
                          {product.itemTypeLabel}
                        </span>
                      )}
                    </div>

                    {/* Referência e Código SKU */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      background: '#0f172a',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '3px',
                      letterSpacing: '0.5px'
                    }}>
                      Ref: {product.code}
                    </div>

                    {/* Indicador de Quantidade de Fotos */}
                    {product.images && product.images.length > 1 && (
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: '#ffffff',
                        color: '#0f172a',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '3px',
                        border: '1px solid #cbd5e1',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}>
                        {product.images.length} fotos reais
                      </div>
                    )}
                  </Link>

                  {/* Corpo do Anúncio */}
                  <div className="product-card-body">
                    {/* Código Técnico GEDORE */}
                    {product.technicalCode && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.72rem',
                        color: '#64748b',
                        fontWeight: 600,
                        marginBottom: '4px'
                      }}>
                        <Tag size={12} color="#e5242a" />
                        <span>Código GEDORE: <strong>{product.technicalCode}</strong></span>
                      </div>
                    )}

                    {/* Título Principal */}
                    <Link href={`/produtos/${product.id}`}>
                      <h2 style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.35,
                        marginBottom: '8px',
                        transition: 'color 0.15s ease'
                      }} className="card-title-hover">
                        {product.name}
                      </h2>
                    </Link>

                    {/* Descrição Curta */}
                    <p style={{
                      fontSize: '0.84rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      marginBottom: '14px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.description}
                    </p>

                    {/* Badge de Aplicação */}
                    <div style={{
                      fontSize: '0.76rem',
                      color: '#334155',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Layers size={13} color="#e5242a" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {product.application}
                      </span>
                    </div>

                    {/* BOTÕES DE COMPRA E DETALHES (Sem botão de Cotação PJ conforme solicitado) */}
                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Botão 1: Comprar via WhatsApp */}
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-product-whatsapp"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: '#25D366',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          boxShadow: '0 2px 4px rgba(37, 211, 102, 0.2)',
                          transition: 'background 0.15s ease'
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
                        className="btn-product-ml"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: '#FFE600',
                          color: '#2D3277',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          border: '1px solid rgba(0,0,0,0.06)',
                          transition: 'background 0.15s ease'
                        }}
                      >
                        <ShoppingBag size={16} color="#2D3277" />
                        <span>Comprar no Mercado Livre</span>
                      </a>

                      {/* Botão 3: Ver Detalhes do Anúncio */}
                      <Link
                        href={`/produtos/${product.id}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: '#f8fafc',
                          color: '#0f172a',
                          border: '1px solid #cbd5e1',
                          borderRadius: '4px',
                          padding: '9px 12px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span>Ver Fotos & Ficha Técnica Completa</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          border-color: #94a3b8;
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .product-card:hover .product-card-img {
          transform: scale(1.03);
        }

        .card-title-hover:hover {
          color: #e5242a !important;
        }

        .product-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
