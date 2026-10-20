'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRANDS, CATEGORIES, PRODUCTS } from '@/data/products';
import { Brand, Category, ItemType, Product } from '@/types';
import { useQuote } from '@/context/QuoteContext';
import { buildWhatsAppUrl } from '@/config/site';
import { 
  Search, 
  MessageSquare, 
  ShoppingBag, 
  ChevronRight, 
  X, 
  Wrench,
  Layers,
  Camera,
  CheckCircle2,
  Tag,
  Filter,
  RotateCcw
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

  const selectedBrandObj = BRANDS.find(b => b.id === selectedBrand);

  return (
    <section id="catalogo" style={{ padding: '32px 0 64px', background: '#ffffff', width: '100%' }}>
      <div id="mais-buscados" style={{ position: 'relative', top: '-70px' }} />
      <div className="container">
        
        {/* Layout E-commerce Padrão: Menu Lateral (PC) + Vitrine de Produtos */}
        <div className="store-layout">
          
          {/* MENU LATERAL ESQUERDO (Versão PC) */}
          <aside className="store-sidebar">
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {/* Header do Menu Lateral */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>
                  <Filter size={16} color="#e5242a" />
                  <span>Filtrar Loja</span>
                </div>
                {(selectedBrand !== 'all' || selectedItemType !== 'all' || searchTerm.trim() !== '') && (
                  <button
                    onClick={resetFilters}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#dc2626',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Limpar todos os filtros"
                  >
                    <RotateCcw size={12} />
                    <span>Limpar</span>
                  </button>
                )}
              </div>

              {/* BOX 1: Campo de Busca por Referência / Código */}
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Pesquisar Produto
                </label>
                <div style={{ position: 'relative' }}>
                  <Search 
                    size={16} 
                    color="#64748b" 
                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} 
                  />
                  <input
                    ref={searchInputRef as React.LegacyRef<HTMLInputElement>}
                    type="text"
                    placeholder="Ref (ex: R46023100)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '9px 30px 9px 32px',
                      color: '#0f172a',
                      fontSize: '0.82rem',
                      outline: 'none',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
                    }}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        padding: '2px'
                      }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* BOX 2: Filtrar por Linhas Oficiais */}
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Linhas Oficiais
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {BRANDS.map((brand) => {
                    const active = selectedBrand === brand.id;
                    const count = brand.id === 'all' 
                      ? PRODUCTS.length 
                      : PRODUCTS.filter(p => p.brand === brand.id).length;

                    return (
                      <button
                        key={brand.id}
                        onClick={() => onBrandChange(brand.id as Brand | 'all')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '4px',
                          background: active ? '#ffffff' : 'transparent',
                          border: active ? `1px solid ${brand.color || '#0f172a'}` : '1px solid transparent',
                          color: active ? '#0f172a' : '#334155',
                          fontSize: '0.82rem',
                          fontWeight: active ? 800 : 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease'
                        }}
                        className="sidebar-brand-btn"
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: brand.color || '#64748b',
                            flexShrink: 0
                          }} />
                          <span>{brand.label}</span>
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: count > 0 ? (active ? '#e5242a' : '#059669') : '#94a3b8',
                          background: count > 0 ? '#f1f5f9' : 'transparent',
                          padding: '1px 6px',
                          borderRadius: '3px'
                        }}>
                          {count > 0 ? `${count}` : '0'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BOX 3: Tipo de Ferramenta (Jogo ou Peça) */}
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Tipo de Produto
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <button
                    onClick={() => setSelectedItemType('all')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '4px',
                      background: selectedItemType === 'all' ? '#ffffff' : 'transparent',
                      border: selectedItemType === 'all' ? '1px solid #0f172a' : '1px solid transparent',
                      color: selectedItemType === 'all' ? '#0f172a' : '#334155',
                      fontSize: '0.8rem',
                      fontWeight: selectedItemType === 'all' ? 800 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Todos os Tipos</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{PRODUCTS.length}</span>
                  </button>

                  <button
                    onClick={() => setSelectedItemType(selectedItemType === 'jogo' ? 'all' : 'jogo')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '4px',
                      background: selectedItemType === 'jogo' ? '#ffffff' : 'transparent',
                      border: selectedItemType === 'jogo' ? '1px solid #e5242a' : '1px solid transparent',
                      color: selectedItemType === 'jogo' ? '#b91c1c' : '#334155',
                      fontSize: '0.8rem',
                      fontWeight: selectedItemType === 'jogo' ? 800 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Jogos de Ferramentas</span>
                    <span style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: 700 }}>
                      {PRODUCTS.filter(p => p.itemType === 'jogo').length}
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedItemType(selectedItemType === 'peca' ? 'all' : 'peca')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '4px',
                      background: selectedItemType === 'peca' ? '#ffffff' : 'transparent',
                      border: selectedItemType === 'peca' ? '1px solid #0f172a' : '1px solid transparent',
                      color: selectedItemType === 'peca' ? '#0f172a' : '#334155',
                      fontSize: '0.8rem',
                      fontWeight: selectedItemType === 'peca' ? 800 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Peças Avulsas</span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>0</span>
                  </button>
                </div>
              </div>

              {/* BOX 4: Atendimento Direto WhatsApp */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                padding: '14px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Não achou o código?
                </div>
                <p style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.4, marginBottom: '10px' }}>
                  Temos acesso a todo o catálogo das marcas oficiais sob encomenda.
                </p>
                <a
                  href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de consultar um código ou produto específico.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={14} />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>

          {/* VITRINE DIREITA: Header & Grid de Itens Mais Buscados */}
          <div className="store-main">
            {/* Header da Vitrine */}
            <div style={{ marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.35rem, 3.5vw, 1.8rem)',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.2
                  }}>
                    Itens Mais Buscados
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: '3px' }}>
                    Produtos originais com alta saída para oficinas e manutenção.
                  </p>
                </div>

                {/* Totalizador de itens */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  padding: '5px 12px',
                  fontSize: '0.8rem',
                  color: '#334155'
                }}>
                  Mostrando <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> de {PRODUCTS.length} produto(s)
                </div>
              </div>

              {/* Filtro Rápido no Mobile (Barra de busca + chips visíveis no celular) */}
              <div className="mobile-search-bar hide-on-desktop" style={{ marginTop: '14px' }}>
                <div style={{ position: 'relative', marginBottom: '10px' }}>
                  <Search 
                    size={16} 
                    color="#64748b" 
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} 
                  />
                  <input
                    type="text"
                    placeholder="Buscar por código ou referência..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '10px 32px 10px 36px',
                      color: '#0f172a',
                      fontSize: '0.86rem',
                      outline: 'none'
                    }}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8' }}
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* Chips Horizontais de Marcas no Mobile */}
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {BRANDS.map(b => (
                    <button
                      key={b.id}
                      onClick={() => onBrandChange(b.id as Brand | 'all')}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.76rem',
                        fontWeight: selectedBrand === b.id ? 800 : 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        background: selectedBrand === b.id ? (b.color || '#0f172a') : '#f8fafc',
                        color: selectedBrand === b.id ? '#ffffff' : '#334155',
                        border: '1px solid #cbd5e1',
                        cursor: 'pointer'
                      }}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status do Filtro Ativo */}
              {(selectedBrand !== 'all' || selectedItemType !== 'all' || searchTerm.trim() !== '') && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Filtros ativos:</span>
                  {selectedBrand !== 'all' && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#fee2e2',
                      color: '#b91c1c',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '3px'
                    }}>
                      Marca: {selectedBrandObj?.label}
                      <button onClick={() => onBrandChange('all')} style={{ background: 'none', border: 'none', color: '#b91c1c', cursor: 'pointer', padding: 0 }}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedItemType !== 'all' && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#e0f2fe',
                      color: '#0369a1',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '3px'
                    }}>
                      Tipo: {selectedItemType === 'jogo' ? 'Jogo' : 'Peça'}
                      <button onClick={() => setSelectedItemType('all')} style={{ background: 'none', border: 'none', color: '#0369a1', cursor: 'pointer', padding: 0 }}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {searchTerm && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#f1f5f9',
                      color: '#334155',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '3px'
                    }}>
                      Termo: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0 }}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* LISTAGEM DE PRODUTOS */}
            {filteredProducts.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '48px 20px',
                background: '#f8fafc',
                borderRadius: '6px',
                border: '1px dashed #cbd5e1'
              }}>
                <Wrench size={38} color="#94a3b8" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '6px', fontWeight: 700 }}>
                  {selectedBrand !== 'all' && selectedBrand !== 'gedore-red' 
                    ? `Novos produtos ${selectedBrandObj?.label} em cadastro`
                    : 'Nenhum produto localizado'}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '18px', fontSize: '0.86rem', maxWidth: '440px', margin: '0 auto 18px' }}>
                  {selectedBrand !== 'all' && selectedBrand !== 'gedore-red'
                    ? `Estamos preparando o catálogo oficial da linha ${selectedBrandObj?.label}. Se precisar de qualquer item agora, consulte nossa equipe via WhatsApp.`
                    : `Não encontramos produtos correspondentes aos filtros selecionados. Tente buscar por "R46023100" ou limpar os filtros.`}
                </p>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    onClick={resetFilters} 
                    style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Ver todos os produtos
                  </button>
                  <a
                    href={buildWhatsAppUrl(`Olá M11 Tools! Gostaria de consultar itens e cotação da linha ${selectedBrandObj?.label || 'de ferramentas'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <MessageSquare size={15} />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="store-products-grid">
                {filteredProducts.map((product) => {
                  const directWhatsAppUrl = generateDirectProductWhatsAppLink(product);

                  return (
                    <div key={product.id} className="store-product-card">
                      {/* Container de Imagem com badges e contador de fotos */}
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

                        {/* Indicador de Fotos (Apenas Ícone e Quantidade conforme solicitado) */}
                        {product.images && product.images.length > 1 && (
                          <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(4px)',
                            color: '#0f172a',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '3px 7px',
                            borderRadius: '3px',
                            border: '1px solid #cbd5e1',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <Camera size={13} color="#475569" />
                            <span>{product.images.length}</span>
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
                        <Link href={`/produtos/${product.id}`} style={{ textDecoration: 'none' }}>
                          <h3 style={{
                            fontSize: '1.05rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            lineHeight: 1.35,
                            marginBottom: '8px',
                            transition: 'color 0.15s ease'
                          }} className="card-title-hover">
                            {product.name}
                          </h3>
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

                        {/* BOTÕES DE COMPRA E DETALHES */}
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

                          {/* Botão 2: Comprar no Mercado Livre (Apagado / Em breve conforme solicitado) */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              background: '#f1f5f9',
                              color: '#94a3b8',
                              fontWeight: 600,
                              fontSize: '0.82rem',
                              padding: '9px 12px',
                              borderRadius: '4px',
                              border: '1px solid #e2e8f0',
                              cursor: 'not-allowed',
                              opacity: 0.65,
                              userSelect: 'none'
                            }}
                            title="Em breve disponível para compra pelo Mercado Livre"
                          >
                            <ShoppingBag size={15} color="#94a3b8" />
                            <span>Comprar no Mercado Livre (Em Breve)</span>
                          </div>

                          {/* Botão 3: Ver Fotos & Ficha Técnica Completa */}
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
                            <span>Ver Fotos & Ficha Técnica</span>
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
        </div>
      </div>

      <style jsx>{`
        .store-layout {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .store-sidebar {
          display: none;
        }

        .store-products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .store-product-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .store-product-card:hover {
          border-color: #94a3b8;
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .store-product-card:hover .product-card-img {
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

        .sidebar-brand-btn:hover {
          background: #f1f5f9 !important;
        }

        @media (min-width: 640px) {
          .store-products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (min-width: 900px) {
          .store-layout {
            flex-direction: row;
            align-items: flex-start;
          }

          .store-sidebar {
            display: block;
            width: 270px;
            flex-shrink: 0;
            position: sticky;
            top: 80px;
          }

          .store-main {
            flex: 1;
            min-width: 0;
          }

          .hide-on-desktop {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
