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
  ChevronLeft,
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
  selectedCategory: Category | 'all';
  onCategoryChange: (cat: Category | 'all') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

// Card de Produto com Carousel Interativo de Fotos na Página Inicial
function CatalogProductCard({
  product,
  directWhatsAppUrl
}: {
  product: Product;
  directWhatsAppUrl: string;
}) {
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const selectImage = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Deslizar para esquerda -> próxima foto
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        // Deslizar para direita -> foto anterior
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStartX(null);
  };

  const brandColor = product.brand === 'gedore-blue' 
    ? '#005baa' 
    : (product.brand === 'gedore-robust' ? '#ea580c' : '#e5242a');

  return (
    <div className="store-product-card">
      {/* Container de Imagem com Carousel de Fotos Navegável */}
      <Link
        href={`/produtos/${product.id}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
        title={`Ver fotos e ficha técnica de ${product.name}`}
      >
        <img
          src={images[currentImageIndex]}
          alt={`${product.name} - Foto ${currentImageIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '220px',
            objectFit: 'contain',
            display: 'block',
            transition: 'transform 0.25s ease'
          }}
          className="product-card-img"
        />

        {/* Badge da Marca & Tipo */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px', zIndex: 4 }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#ffffff',
            background: brandColor,
            padding: '3px 8px',
            borderRadius: '3px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
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
          letterSpacing: '0.5px',
          zIndex: 4
        }}>
          Ref: {product.code}
        </div>

        {/* Setas de navegação do Carousel na Vitrine Inicial */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto anterior"
              title="Ver foto anterior"
              className="card-carousel-btn card-carousel-prev"
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.94)',
                border: '1px solid #cbd5e1',
                boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0f172a',
                zIndex: 6,
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Próxima foto"
              title="Ver próxima foto"
              className="card-carousel-btn card-carousel-next"
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.94)',
                border: '1px solid #cbd5e1',
                boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0f172a',
                zIndex: 6,
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronRight size={18} />
            </button>

            {/* Bullets / Dots Indicadores de Fotos */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(4px)',
                padding: '3px 7px',
                borderRadius: '12px',
                zIndex: 5
              }}
            >
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => selectImage(e, dotIdx)}
                  style={{
                    width: currentImageIndex === dotIdx ? '12px' : '5px',
                    height: '5px',
                    borderRadius: '3px',
                    background: currentImageIndex === dotIdx ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  aria-label={`Ir para foto ${dotIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Indicador de Fotos (Ícone de Câmera + Contagem Atual) */}
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
          gap: '4px',
          zIndex: 4
        }}>
          <Camera size={13} color="#475569" />
          <span>{images.length > 1 ? `${currentImageIndex + 1}/${images.length}` : '1 foto'}</span>
        </div>
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
            fontSize: '1.02rem',
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

          {/* Botão 2: Comprar no Mercado Livre (Em Breve) */}
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
            <span>Ver Todas as Fotos & Ficha</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Catalog({ 
  selectedBrand, 
  onBrandChange, 
  selectedCategory, 
  onCategoryChange,
  searchTerm,
  onSearchChange
}: CatalogProps) {
  const { generateDirectProductWhatsAppLink } = useQuote();
  const [selectedItemType, setSelectedItemType] = useState<ItemType | 'all'>('all');

  // Filtra produtos de forma combinada
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
    onCategoryChange('all');
    setSelectedItemType('all');
    onSearchChange('');
  };

  const selectedBrandObj = BRANDS.find(b => b.id === selectedBrand);
  const selectedCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  const hasActiveFilters = selectedBrand !== 'all' || selectedCategory !== 'all' || selectedItemType !== 'all' || searchTerm.trim() !== '';

  return (
    <section id="catalogo" style={{ padding: '32px 0 64px', background: '#ffffff', width: '100%' }}>
      <div id="mais-buscados" style={{ position: 'relative', top: '-70px' }} />
      <div className="container">
        
        {/* Layout E-commerce: Menu Lateral (PC) + Vitrine de Produtos */}
        <div className="store-layout">
          
          {/* MENU LATERAL ESQUERDO (PC) */}
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
                {hasActiveFilters && (
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

              {/* BOX 1: Campo de Busca na Barra Lateral */}
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
                    type="text"
                    placeholder="Ref (ex: R46023100)..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
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
                      onClick={() => onSearchChange('')}
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
                      title="Limpar busca"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* BOX 2: Filtrar por Categorias do Catálogo */}
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Categorias
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {CATEGORIES.map((cat) => {
                    const active = selectedCategory === cat.id;
                    const count = cat.id === 'all'
                      ? PRODUCTS.length
                      : PRODUCTS.filter(p => p.category === cat.id).length;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => onCategoryChange(cat.id as Category | 'all')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '4px',
                          background: active ? '#ffffff' : 'transparent',
                          border: active ? '1px solid #0f172a' : '1px solid transparent',
                          color: active ? '#0f172a' : '#334155',
                          fontSize: '0.82rem',
                          fontWeight: active ? 800 : 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease'
                        }}
                        className="sidebar-brand-btn"
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {cat.label}
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: active ? '#ffffff' : '#64748b',
                          background: active ? '#0f172a' : '#f1f5f9',
                          padding: '1px 6px',
                          borderRadius: '3px',
                          flexShrink: 0,
                          marginLeft: '6px'
                        }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BOX 3: Filtrar por Linhas Oficiais */}
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
                        type="button"
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

              {/* BOX 4: Tipo de Ferramenta (Jogo ou Peça) */}
              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Tipo de Produto
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <button
                    type="button"
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
                    type="button"
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
                    <span>Jogos & Conjuntos</span>
                    <span style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: 700 }}>
                      {PRODUCTS.filter(p => p.itemType === 'jogo').length}
                    </span>
                  </button>

                  <button
                    type="button"
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
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>
                      {PRODUCTS.filter(p => p.itemType === 'peca').length}
                    </span>
                  </button>
                </div>
              </div>

              {/* BOX 5: Atendimento Direto WhatsApp */}
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

          {/* VITRINE DIREITA: Header, Abas de Categorias & Grid de Produtos */}
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
                    Catálogo de Ferramentas
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: '3px' }}>
                    Produtos originais Gedore Red, Gedore Blue e Robust com pronta entrega.
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

              {/* ABAS / PILLS HORIZONTAIS DE CATEGORIAS (Filtro Rápido com 1 Toque) */}
              <div style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingTop: '14px',
                paddingBottom: '4px',
                scrollbarWidth: 'none'
              }}>
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat.id;
                  const count = cat.id === 'all'
                    ? PRODUCTS.length
                    : PRODUCTS.filter(p => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => onCategoryChange(cat.id as Category | 'all')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '7px 14px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: active ? 800 : 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        background: active ? '#0f172a' : '#f8fafc',
                        color: active ? '#ffffff' : '#334155',
                        border: active ? '1px solid #0f172a' : '1px solid #cbd5e1',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: active ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                      }}
                    >
                      <span>{cat.label}</span>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        background: active ? 'rgba(255,255,255,0.22)' : '#e2e8f0',
                        color: active ? '#ffffff' : '#64748b',
                        padding: '1px 6px',
                        borderRadius: '10px'
                      }}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Chips Horizontais de Marcas no Mobile */}
              <div className="hide-on-desktop" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingTop: '10px', paddingBottom: '4px' }}>
                {BRANDS.map(b => (
                  <button
                    key={b.id}
                    type="button"
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

              {/* Status do Filtro Ativo com Tags Removíveis */}
              {hasActiveFilters && (
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
                      <button 
                        type="button"
                        onClick={() => onBrandChange('all')} 
                        style={{ background: 'none', border: 'none', color: '#b91c1c', cursor: 'pointer', padding: 0 }}
                        title="Remover filtro de marca"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  {selectedCategory !== 'all' && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#fef3c7',
                      color: '#b45309',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '3px'
                    }}>
                      Categoria: {selectedCategoryObj?.label}
                      <button 
                        type="button"
                        onClick={() => onCategoryChange('all')} 
                        style={{ background: 'none', border: 'none', color: '#b45309', cursor: 'pointer', padding: 0 }}
                        title="Remover filtro de categoria"
                      >
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
                      Tipo: {selectedItemType === 'jogo' ? 'Jogo / Conjunto' : 'Peça Avulsa'}
                      <button 
                        type="button"
                        onClick={() => setSelectedItemType('all')} 
                        style={{ background: 'none', border: 'none', color: '#0369a1', cursor: 'pointer', padding: 0 }}
                        title="Remover filtro de tipo"
                      >
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
                      Busca: "{searchTerm}"
                      <button 
                        type="button"
                        onClick={() => onSearchChange('')} 
                        style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0 }}
                        title="Limpar busca"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  {/* Botão Limpar Tudo */}
                  <button
                    type="button"
                    onClick={resetFilters}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e5242a',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: '2px 6px',
                      textDecoration: 'underline'
                    }}
                  >
                    Limpar todos
                  </button>
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
                  Nenhum produto localizado
                </h3>
                <p style={{ color: '#64748b', marginBottom: '18px', fontSize: '0.86rem', maxWidth: '440px', margin: '0 auto 18px' }}>
                  Não encontramos ferramentas correspondentes aos filtros selecionados. Tente limpar os filtros ou buscar por outro código.
                </p>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    type="button"
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
                    Ver todas as {PRODUCTS.length} ferramentas
                  </button>
                  <a
                    href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de consultar a disponibilidade de um código específico.')}
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
                    <CatalogProductCard
                      key={product.id}
                      product={product}
                      directWhatsAppUrl={directWhatsAppUrl}
                    />
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

        .card-carousel-btn:hover {
          background: #ffffff !important;
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: 0 3px 8px rgba(0,0,0,0.25) !important;
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
            grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
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
