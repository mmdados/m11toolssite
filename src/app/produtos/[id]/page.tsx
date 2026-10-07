'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
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
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;
  const { addToQuote, generateDirectProductWhatsAppLink } = useQuote();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === productId);
  }, [productId]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '16px' }}>
            Produto não encontrado
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
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

  // Gallery state (FuelTech style)
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'descricao' | 'especificacoes' | 'aplicacoes' | 'instrucoes'>('descricao');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Related products
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)).slice(0, 3);
  }, [product]);

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

  let brandBadgeClass = 'badge-red';
  if (product.brand === 'gedore-blue') brandBadgeClass = 'badge-blue';
  if (product.brand === 'tekbond') brandBadgeClass = 'badge-green';

  return (
    <>
      <Navbar />

      <main style={{ paddingBottom: '70px', width: '100%', overflowX: 'hidden' }}>
        {/* Breadcrumb Navigation */}
        <div style={{
          background: 'rgba(11, 15, 23, 0.6)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '12px 0',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
              Início
            </Link>
            <ChevronRight size={14} />
            <Link href="/#catalogo" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
              Catálogo de Produtos
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-secondary)' }}>
              {product.categoryLabel}
            </span>
            <ChevronRight size={14} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Main Section (FuelTech Style 2-Columns) */}
        <div className="container" style={{ paddingTop: '32px' }}>
          <div className="product-layout-grid">
            
            {/* LEFT COLUMN: Gallery with multiple images */}
            <div className="gallery-col">
              {/* Main Image */}
              <div className="main-image-wrapper">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={`${product.name} - Imagem ${selectedImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                
                {/* Brand Badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2 }}>
                  <span className={`badge ${brandBadgeClass}`}>
                    {product.brandLabel}
                  </span>
                </div>

                {/* Image Index Counter */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 9px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
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
                      className={`thumbnail-btn ${selectedImageIndex === idx ? 'active' : ''}`}
                      aria-label={`Ver foto ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Product Information & 2 Purchase Buttons */}
            <div className="info-col">
              {/* Category & SKU */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 800 }}>
                  {product.categoryLabel}
                </span>

                <button
                  onClick={handleCopyCode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}
                  title="Copiar código"
                >
                  <span style={{ color: 'var(--text-muted)' }}>Cód:</span>
                  <strong style={{ color: '#ffffff' }}>{product.code}</strong>
                  {copiedCode ? <Check size={12} color="#00a651" /> : <Copy size={12} />}
                </button>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '14px',
                letterSpacing: '-0.3px'
              }}>
                {product.name}
              </h1>

              {/* Stock Status Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: 'rgba(0, 166, 81, 0.1)',
                border: '1px solid rgba(0, 166, 81, 0.3)',
                borderRadius: 'var(--radius-full)',
                padding: '4px 12px',
                fontSize: '0.78rem',
                color: '#4ade80',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00a651', display: 'inline-block' }} />
                <span>Disponível para Faturamento PJ & Venda Direta</span>
              </div>

              {/* Short Description */}
              <p style={{
                fontSize: '0.94rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '22px'
              }}>
                {product.description}
              </p>

              {/* Application Tag */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '26px'
              }}>
                <Layers size={16} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span><strong>Aplicação:</strong> {product.application}</span>
              </div>

              {/* ACTION BUTTONS: Os 2 botões de compra solicitados */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
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
                    gap: '8px',
                    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.25s ease',
                    textAlign: 'center'
                  }}
                  className="btn-product-whatsapp"
                >
                  <MessageSquare size={19} />
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
                    gap: '8px',
                    background: '#FFE600',
                    color: '#2D3277',
                    fontWeight: 800,
                    fontSize: '0.98rem',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 6px 20px rgba(255, 230, 0, 0.25)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.25s ease',
                    textAlign: 'center'
                  }}
                  className="btn-product-ml"
                >
                  <ShoppingBag size={19} color="#2D3277" />
                  <span>Comprar no Mercado Livre</span>
                </a>

                {/* Adicionar à Cotação PJ */}
                <button
                  onClick={handleAddToCart}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    fontSize: '0.88rem',
                    marginTop: '4px'
                  }}
                >
                  {addedAnimation ? (
                    <>
                      <Check size={16} color="#00a651" />
                      <span style={{ color: '#00a651' }}>Adicionado à Lista de Cotação!</span>
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      <span>+ Adicionar à Cotação B2B (Múltiplos Itens)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Box (FuelTech / Tekbond style) */}
              <div style={{
                background: 'rgba(18, 24, 36, 0.7)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                padding: '16px 20px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '12px',
                fontSize: '0.84rem',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#00a651" style={{ flexShrink: 0 }} />
                  <span>Produto 100% original com garantia e nota fiscal emitida</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText size={18} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                  <span>Faturamento em boleto para empresas (PJ) mediante cadastro</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Truck size={18} color="#4da6ff" style={{ flexShrink: 0 }} />
                  <span>Despacho ágil via transportadoras e Correios para todo o Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW THE FOLD: Tabs inspired by Tekbond & FuelTech */}
          <div style={{ marginTop: '54px' }}>
            {/* Tabs Header */}
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

            {/* Tabs Content */}
            <div className="glass tab-content-card">
              {/* Tab 1: Descrição */}
              {activeTab === 'descricao' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                    Propriedades e Características do Produto
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '22px' }}>
                    {product.detailedDescription || product.description}
                  </p>

                  {product.properties && product.properties.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
                        Destaques de Fabricação:
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {product.properties.map((prop, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>•</span>
                            <span>{prop}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Especificações Técnicas */}
              {activeTab === 'especificacoes' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                    Ficha Técnica Completa
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '10px 14px',
                          background: i % 2 === 0 ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-red)', flexShrink: 0 }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Aplicações */}
              {activeTab === 'aplicacoes' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                    Onde e Como Utilizar
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '16px' }}>
                    Ferramenta recomendada para profissionais que buscam confiabilidade absoluta nas seguintes operações:
                  </p>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '18px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    fontWeight: 600
                  }}>
                    {product.application}
                  </div>
                </div>
              )}

              {/* Tab 4: Instruções de Uso */}
              {activeTab === 'instrucoes' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                    Instruções de Uso & Cuidados com a Ferramenta
                  </h3>
                  {product.instructions && product.instructions.length > 0 ? (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {product.instructions.map((inst, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: '#4ade80', fontWeight: 800 }}>✓</span>
                          <span>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      Mantenha a ferramenta limpa e armazenada em local protegido contra umidade e poeira para garantir sua máxima vida útil.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RELATED PRODUCTS (FuelTech style: "Você também pode se interessar") */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                  Você Também Pode se Interessar
                </h3>
                <Link href="/#catalogo" style={{ fontSize: '0.85rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                  Ver Todo o Catálogo &rarr;
                </Link>
              </div>

              <div className="related-grid">
                {relatedProducts.map((rel) => (
                  <div key={rel.id} className="related-card">
                    <Link href={`/produtos/${rel.id}`} style={{ position: 'relative', height: '170px', width: '100%', display: 'block', background: '#070a0f' }}>
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>

                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
                        {rel.brandLabel} • Cód: {rel.code}
                      </div>
                      <Link href={`/produtos/${rel.id}`}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, marginBottom: '14px' }}>
                          {rel.name}
                        </h4>
                      </Link>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <a
                          href={generateDirectProductWhatsAppLink(rel)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            background: 'rgba(37, 211, 102, 0.12)',
                            color: '#4ade80',
                            border: '1px solid rgba(37, 211, 102, 0.3)',
                            padding: '8px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.78rem',
                            fontWeight: 700
                          }}
                        >
                          <MessageSquare size={13} />
                          <span>Comprar via WhatsApp</span>
                        </a>

                        <a
                          href={buildMercadoLivreUrl(rel)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            background: '#FFE600',
                            color: '#2D3277',
                            padding: '8px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.78rem',
                            fontWeight: 800
                          }}
                        >
                          <ShoppingBag size={13} color="#2D3277" />
                          <span>Comprar no Mercado Livre</span>
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

      <style jsx>{`
        .product-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }

        .main-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #070a0f;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-md);
        }

        .thumbnails-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumbnail-btn {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #070a0f;
          border: 2px solid var(--border-subtle);
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .thumbnail-btn.active {
          border-color: var(--brand-red);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(229, 36, 42, 0.4);
        }

        .details-tabs-header {
          display: flex;
          gap: 6px;
          border-bottom: 1px solid var(--border-medium);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .details-tabs-header::-webkit-scrollbar {
          display: none;
        }

        .tab-btn {
          padding: 12px 18px;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.88rem;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .tab-btn.active {
          color: #ffffff;
          border-bottom-color: var(--brand-red);
        }

        .tab-content-card {
          padding: 24px;
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
          border-top: none;
        }

        .related-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .related-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 600px) {
          .related-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 860px) {
          .product-layout-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
          .main-image-wrapper {
            height: 480px;
          }
          .thumbnail-btn {
            width: 88px;
            height: 88px;
          }
        }
      `}</style>
    </>
  );
}
