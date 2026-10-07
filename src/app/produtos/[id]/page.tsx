'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG, buildWhatsAppUrl, buildMercadoLivreUrl } from '@/config/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteDrawer from '@/components/QuoteDrawer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  MessageSquare, 
  ShoppingBag, 
  Plus, 
  Check, 
  Copy, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Layers, 
  ChevronRight
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;
  const { addToQuote } = useQuote();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === productId);
  }, [productId]);

  // Gallery state (FuelTech style)
  const productImages = product?.images && product.images.length > 0 ? product.images : (product ? [product.image] : []);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'descricao' | 'especificacoes' | 'aplicacoes' | 'instrucoes'>('descricao');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Related products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh', background: '#ffffff' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#111827', marginBottom: '16px' }}>
            Produto não encontrado
          </h1>
          <p style={{ color: '#4b5563', marginBottom: '24px' }}>
            O produto solicitado não foi localizado em nosso catálogo.
          </p>
          <Link href="/#catalogo" className="btn-primary">
            <ArrowLeft size={16} />
            <span>Voltar ao Catálogo</span>
          </Link>
        </div>
        <Footer />
        <QuoteDrawer />
        <WhatsAppButton />
      </>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(product.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleAddToCart = () => {
    addToQuote(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const directWhatsAppUrl = buildWhatsAppUrl(
    `*INTERESSE EM PRODUTO - M11 TOOLS*\nOlá! Gostaria de comprar / cotar o seguinte item:\n\n*Item:* ${product.name}\n*Marca:* ${product.brandLabel}\n*Código:* ${product.code}\n\nPoderia me passar valores, condições de faturamento e prazo de entrega?`
  );

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
    <>
      <Navbar />

      <main style={{ paddingBottom: '60px', width: '100%', overflowX: 'hidden', background: '#ffffff' }}>
        {/* Breadcrumb Navigation */}
        <div style={{
          background: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          padding: '10px 0',
          fontSize: '0.82rem',
          color: '#6b7280'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#4b5563', transition: 'color 0.15s' }}>
              Início
            </Link>
            <ChevronRight size={13} />
            <Link href="/#catalogo" style={{ color: '#4b5563', transition: 'color 0.15s' }}>
              Produtos
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#6b7280' }}>
              {product.categoryLabel}
            </span>
            <ChevronRight size={13} />
            <span style={{ color: '#111827', fontWeight: 700 }}>
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Main Section (FuelTech Style 2-Columns) */}
        <div className="container" style={{ paddingTop: '28px' }}>
          <div className="product-layout-grid">
            
            {/* LEFT COLUMN: Gallery with multiple images */}
            <div className="gallery-col">
              {/* Main Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '380px',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                overflow: 'hidden'
              }}>
                <img
                  src={productImages[selectedImageIndex]}
                  alt={`${product.name} - Imagem ${selectedImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '340px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                
                {/* Brand Badge */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: badgeColor,
                    background: badgeBg,
                    padding: '3px 8px',
                    borderRadius: '2px',
                    border: '1px solid rgba(0,0,0,0.06)'
                  }}>
                    {product.brandLabel}
                  </span>
                </div>

                {/* Image Index Counter */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: '#f3f4f6',
                  color: '#374151',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '2px',
                  border: '1px solid #e5e7eb',
                  zIndex: 2
                }}>
                  {selectedImageIndex + 1} / {productImages.length}
                </div>
              </div>

              {/* Thumbnails Row (FuelTech Style) */}
              {productImages.length > 1 && (
                <div className="thumbnails-row">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      style={{
                        position: 'relative',
                        width: '74px',
                        height: '74px',
                        background: '#ffffff',
                        border: selectedImageIndex === idx ? '2px solid #e5242a' : '1px solid #e5e7eb',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                      aria-label={`Ver foto ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        style={{ maxWidth: '100%', maxHeight: '64px', objectFit: 'contain' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Product Information & Purchase Buttons */}
            <div className="info-col">
              {/* Category & SKU */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#6b7280', fontWeight: 800 }}>
                  {product.categoryLabel}
                </span>

                <button
                  onClick={handleCopyCode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.75rem',
                    color: '#374151',
                    background: '#f3f4f6',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    border: '1px solid #e5e7eb'
                  }}
                  title="Copiar código"
                >
                  <span style={{ color: '#6b7280' }}>Cód:</span>
                  <strong style={{ color: '#111827' }}>{product.code}</strong>
                  {copiedCode ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                </button>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.25,
                marginBottom: '12px',
                letterSpacing: '-0.3px'
              }}>
                {product.name}
              </h1>

              {/* Stock Status Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#dcfce7',
                border: '1px solid #bbf7d0',
                borderRadius: '2px',
                padding: '4px 10px',
                fontSize: '0.76rem',
                color: '#15803d',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <span style={{ width: '6px', height: '6px', background: '#16a34a', display: 'inline-block' }} />
                <span>Disponível para Faturamento PJ & Venda Direta</span>
              </div>

              {/* Short Description */}
              <p style={{
                fontSize: '0.92rem',
                color: '#4b5563',
                lineHeight: 1.6,
                marginBottom: '18px'
              }}>
                {product.description}
              </p>

              {/* Application Tag */}
              <div style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '2px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#374151',
                marginBottom: '22px'
              }}>
                <Layers size={16} color="#e5242a" style={{ flexShrink: 0 }} />
                <span><strong>Aplicação:</strong> {product.application}</span>
              </div>

              {/* OS 2 BOTÕES DE COMPRA SOLICITADOS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {/* Botão 1: Comprar via WhatsApp */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-product-whatsapp"
                  style={{ padding: '13px 20px', fontSize: '0.95rem' }}
                >
                  <MessageSquare size={18} />
                  <span>Comprar via WhatsApp</span>
                </a>

                {/* Botão 2: Comprar no Mercado Livre */}
                <a
                  href={buildMercadoLivreUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-product-ml"
                  style={{ padding: '13px 20px', fontSize: '0.95rem' }}
                >
                  <ShoppingBag size={18} color="#2D3277" />
                  <span>Comprar no Mercado Livre</span>
                </a>

                {/* Adicionar à Cotação PJ */}
                <button
                  onClick={handleAddToCart}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '11px 18px',
                    fontSize: '0.86rem',
                    marginTop: '2px'
                  }}
                >
                  {addedAnimation ? (
                    <>
                      <Check size={16} color="#15803d" />
                      <span style={{ color: '#15803d' }}>Adicionado à Lista de Cotação!</span>
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      <span>+ Adicionar à Cotação B2B (Múltiplos Itens)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Box Chapado */}
              <div style={{
                background: '#f9fafb',
                borderRadius: '2px',
                border: '1px solid #e5e7eb',
                padding: '14px 18px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '10px',
                fontSize: '0.82rem',
                color: '#4b5563'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                  <span>Produto 100% original com nota fiscal e garantia oficial</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} color="#e5242a" style={{ flexShrink: 0 }} />
                  <span>Faturamento em boleto bancário para empresas (PJ)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={16} color="#005baa" style={{ flexShrink: 0 }} />
                  <span>Despacho ágil via transportadoras parceiras e Correios</span>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW THE FOLD: Tabs inspiradas em Tekbond & FuelTech */}
          <div style={{ marginTop: '44px' }}>
            <div className="details-tabs-header">
              <button
                onClick={() => setActiveTab('descricao')}
                className={`tab-btn ${activeTab === 'descricao' ? 'active' : ''}`}
              >
                Descrição & Propriedades
              </button>
              <button
                onClick={() => setActiveTab('especificacoes')}
                className={`tab-btn ${activeTab === 'especificacoes' ? 'active' : ''}`}
              >
                Especificações Técnicas
              </button>
              <button
                onClick={() => setActiveTab('aplicacoes')}
                className={`tab-btn ${activeTab === 'aplicacoes' ? 'active' : ''}`}
              >
                Aplicações
              </button>
              <button
                onClick={() => setActiveTab('instrucoes')}
                className={`tab-btn ${activeTab === 'instrucoes' ? 'active' : ''}`}
              >
                Instruções & Cuidados
              </button>
            </div>

            <div className="tab-content-card">
              {activeTab === 'descricao' && (
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                    Propriedades e Características do Produto
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '20px' }}>
                    {product.detailedDescription || product.description}
                  </p>

                  {product.properties && product.properties.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: '#111827', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
                        Destaques de Fabricação:
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {product.properties.map((prop, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#374151' }}>
                            <span style={{ color: '#e5242a', fontWeight: 800 }}>•</span>
                            <span>{prop}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'especificacoes' && (
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '14px' }}>
                    Ficha Técnica Completa
                  </h3>
                  
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: '2px', overflow: 'hidden' }}>
                    {product.specs.map((spec, i) => {
                      const parts = spec.split(':');
                      const label = parts[0];
                      const val = parts.slice(1).join(':');
                      return (
                        <div
                          key={i}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(140px, 1fr) 2fr',
                            padding: '10px 14px',
                            background: i % 2 === 0 ? '#f9fafb' : '#ffffff',
                            borderBottom: i < product.specs.length - 1 ? '1px solid #e5e7eb' : 'none',
                            fontSize: '0.86rem'
                          }}
                        >
                          <span style={{ fontWeight: 700, color: '#111827' }}>
                            {label}
                          </span>
                          <span style={{ color: '#4b5563' }}>
                            {val ? val.trim() : label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'aplicacoes' && (
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                    Onde e Como Utilizar
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.6, fontSize: '0.92rem', marginBottom: '16px' }}>
                    Desenvolvido e homologado especificamente para: <strong>{product.application}</strong>.
                  </p>
                  <div style={{
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '2px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
                      Recomendado para:
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.5 }}>
                      Manutenção de frotas e centros automotivos, indústrias metalúrgicas, montagens de precisão, caldeiraria, marcenarias e prestadores de serviços de montagem e reparo.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'instrucoes' && (
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                    Instruções de Uso & Segurança
                  </h3>

                  {product.instructions && product.instructions.length > 0 ? (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {product.instructions.map((inst, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#374151' }}>
                          <span style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '2px',
                            background: '#fee2e2',
                            color: '#b91c1c',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}>
                            {i + 1}
                          </span>
                          <span style={{ lineHeight: 1.5 }}>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: '#4b5563', fontSize: '0.88rem' }}>
                      Siga sempre os procedimentos recomendados pelo fabricante e utilize os EPIs adequados para manuseio.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '50px', borderTop: '1px solid #e5e7eb', paddingTop: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827' }}>
                  Produtos Relacionados
                </h3>
                <Link href="/#catalogo" style={{ fontSize: '0.82rem', color: '#e5242a', fontWeight: 700 }}>
                  Ver catálogo completo &rarr;
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {relatedProducts.map((rel) => (
                  <div key={rel.id} className="tekbond-card">
                    <Link
                      href={`/produtos/${rel.id}`}
                      style={{
                        position: 'relative',
                        height: '160px',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid #f3f4f6',
                        padding: '10px'
                      }}
                    >
                      <img
                        src={rel.image}
                        alt={rel.name}
                        style={{ maxWidth: '100%', maxHeight: '140px', objectFit: 'contain' }}
                      />
                    </Link>

                    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2px' }}>
                        {rel.brandLabel}
                      </span>
                      <Link href={`/produtos/${rel.id}`}>
                        <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: '#111827', lineHeight: 1.35, marginBottom: '8px' }}>
                          {rel.name}
                        </h4>
                      </Link>

                      <div style={{ marginTop: 'auto', display: 'flex', gap: '6px' }}>
                        <Link
                          href={`/produtos/${rel.id}`}
                          className="btn-secondary"
                          style={{ flex: 1, padding: '7px 8px', fontSize: '0.76rem' }}
                        >
                          Ver Detalhes
                        </Link>
                        <a
                          href={buildWhatsAppUrl(`Olá! Tenho interesse no item ${rel.name} (Cód: ${rel.code}).`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp"
                          style={{ padding: '7px 10px', fontSize: '0.76rem' }}
                          title="WhatsApp"
                        >
                          <MessageSquare size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <QuoteDrawer />
      <WhatsAppButton />
    </>
  );
}
