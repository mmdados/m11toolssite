'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Check, 
  Copy, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Layers, 
  ChevronRight,
  FileSpreadsheet,
  CheckCircle2,
  Wrench,
  Tag,
  Camera
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === productId);
  }, [productId]);

  // Galeria de Fotos Reais
  const productImages = product?.images && product.images.length > 0 ? product.images : (product ? [product.image] : []);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'composicao' | 'especificacoes' | 'descricao' | 'instrucoes'>('composicao');

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh', background: '#ffffff' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '16px' }}>
            Produto não encontrado
          </h1>
          <p style={{ color: '#475569', marginBottom: '24px' }}>
            O produto solicitado não foi localizado em nossa base atualizada.
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

  const directWhatsAppUrl = buildWhatsAppUrl(
    `*INTERESSE NO PRODUTO - M11 TOOLS*\nOlá! Gostaria de comprar o seguinte item:\n\n*Produto:* ${product.name}\n*Linha:* ${product.brandLabel}\n*Referência:* ${product.code}\n*Código GEDORE:* ${product.technicalCode || '3300246'}\n\nPoderia me informar as condições de envio e valor para fechamento?`
  );

  return (
    <>
      <Navbar />

      <main style={{ paddingBottom: '60px', width: '100%', overflowX: 'hidden', background: '#ffffff' }}>
        {/* Navegação Breadcrumb Limpa Sem 'Anúncios' */}
        <div style={{
          background: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          padding: '10px 0',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#475569', textDecoration: 'none' }}>
              Início
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#64748b' }}>
              {product.brandLabel}
            </span>
            <ChevronRight size={13} />
            <span style={{ color: '#0f172a', fontWeight: 700 }}>
              {product.code}
            </span>
          </div>
        </div>

        {/* Seção Principal do Produto (2 Colunas com Galeria) */}
        <div className="container" style={{ paddingTop: '28px' }}>
          <div className="product-layout-grid">
            
            {/* COLUNA ESQUERDA: Galeria de Fotos com Zoom e Miniaturas */}
            <div className="gallery-col">
              {/* Foto Principal */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                maxHeight: '440px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                overflow: 'hidden',
                boxSizing: 'border-box'
              }}>
                <img
                  src={productImages[selectedImageIndex]}
                  alt={`${product.name} - Foto ${selectedImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                
                {/* Badge da Marca no Canto Superior Esquerdo */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    background: '#e5242a',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {product.brandLabel}
                  </span>
                </div>

                {/* Contador de Foto Atual com Ícone de Câmera */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  zIndex: 2,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                }}>
                  <Camera size={13} />
                  <span>{selectedImageIndex + 1} / {productImages.length}</span>
                </div>
              </div>

              {/* Linha de Miniaturas Sequenciais (Fotos Reais) */}
              {productImages.length > 1 && (
                <div className="thumbnails-row">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      style={{
                        position: 'relative',
                        width: '82px',
                        height: '82px',
                        background: '#ffffff',
                        border: selectedImageIndex === idx ? '2px solid #e5242a' : '1px solid #cbd5e1',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px',
                        cursor: 'pointer',
                        flexShrink: 0,
                        transition: 'border-color 0.15s ease',
                        boxShadow: selectedImageIndex === idx ? '0 0 0 2px rgba(229,36,42,0.15)' : 'none'
                      }}
                      aria-label={`Ver foto ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        style={{ maxWidth: '100%', maxHeight: '72px', objectFit: 'contain' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* COLUNA DIREITA: Informações do Produto & Botões de Compra */}
            <div className="info-col">
              {/* Código de Referência e Tipo */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    color: '#e5242a',
                    fontWeight: 800,
                    background: '#fee2e2',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    flexShrink: 0
                  }}>
                    {product.brandLabel}
                  </span>
                  {product.itemTypeLabel && (
                    <span style={{
                      fontSize: '0.74rem',
                      color: '#334155',
                      fontWeight: 700,
                      background: '#f1f5f9',
                      padding: '2px 8px',
                      borderRadius: '3px',
                      border: '1px solid #e2e8f0',
                      flexShrink: 0
                    }}>
                      Tipo: {product.itemTypeLabel}
                    </span>
                  )}
                </div>

                {/* Botão de Copiar Código de Referência */}
                <button
                  onClick={handleCopyCode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.75rem',
                    color: '#334155',
                    background: '#f8fafc',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  title="Copiar código de referência"
                >
                  <span style={{ color: '#64748b' }}>Ref:</span>
                  <strong style={{ color: '#0f172a' }}>{product.code}</strong>
                  {copiedCode ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                </button>
              </div>

              {/* Título Oficial */}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '10px',
                letterSpacing: '-0.3px'
              }}>
                {product.name}
              </h1>

              {/* Badge de Procedência e Garantia (Substitui texto PJ conforme solicitado) */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                color: '#15803d',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <ShieldCheck size={15} color="#16a34a" />
                <span>Produto 100% Original GEDORE red com Garantia Oficial</span>
              </div>

              {/* Descrição em Destaque */}
              <p style={{
                fontSize: '0.94rem',
                color: '#334155',
                lineHeight: 1.6,
                marginBottom: '18px',
                fontWeight: 500
              }}>
                {product.description}
              </p>

              {/* Aplicação Recomendada */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.84rem',
                color: '#334155',
                marginBottom: '24px'
              }}>
                <Layers size={16} color="#e5242a" style={{ flexShrink: 0 }} />
                <span><strong>Aplicação:</strong> {product.application}</span>
              </div>

              {/* BOTÕES DE COMPRA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
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
                    gap: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 'clamp(0.88rem, 3.5vw, 1rem)',
                    padding: '13px 16px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25)',
                    transition: 'all 0.15s ease',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                    textAlign: 'center'
                  }}
                >
                  <MessageSquare size={19} style={{ flexShrink: 0 }} />
                  <span>Comprar via WhatsApp (Atendimento Imediato)</span>
                </a>

                {/* Botão 2: Comprar no Mercado Livre (Apagado / Em breve) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#f1f5f9',
                    color: '#94a3b8',
                    fontWeight: 600,
                    fontSize: 'clamp(0.82rem, 3vw, 0.92rem)',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0',
                    cursor: 'not-allowed',
                    opacity: 0.65,
                    userSelect: 'none',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                    textAlign: 'center'
                  }}
                  title="Vendas via Mercado Livre estarão disponíveis em breve"
                >
                  <ShoppingBag size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
                  <span>Comprar no Mercado Livre (Em Breve)</span>
                </div>
              </div>

              {/* Box de Confiança e Garantia */}
              <div style={{
                background: '#f8fafc',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                padding: '16px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '12px',
                fontSize: '0.84rem',
                color: '#475569'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                  <span>Produto novo, original Gedore Red com nota fiscal emitida</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Truck size={18} color="#e5242a" style={{ flexShrink: 0 }} />
                  <span>Envio seguro para todo o território nacional</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span>Suporte comercial direto com a equipe M11 Tools</span>
                </div>
              </div>
            </div>
          </div>

          {/* SEÇÃO ABAIXO: Tabs de Composição Completa, Especificações Técnicas e Instruções */}
          <div style={{ marginTop: '48px' }}>
            <div className="details-tabs-header">
              <button
                onClick={() => setActiveTab('composicao')}
                className={`tab-btn ${activeTab === 'composicao' ? 'active' : ''}`}
              >
                Composição Completa (100 Peças)
              </button>
              <button
                onClick={() => setActiveTab('especificacoes')}
                className={`tab-btn ${activeTab === 'especificacoes' ? 'active' : ''}`}
              >
                Tabela de Informações Técnicas
              </button>
              <button
                onClick={() => setActiveTab('descricao')}
                className={`tab-btn ${activeTab === 'descricao' ? 'active' : ''}`}
              >
                Descrição & Diferenciais
              </button>
              <button
                onClick={() => setActiveTab('instrucoes')}
                className={`tab-btn ${activeTab === 'instrucoes' ? 'active' : ''}`}
              >
                Recomendações de Uso
              </button>
            </div>

            <div className="tab-content-card">
              {/* TAB 1: Composição Completa detalhada do produto */}
              {activeTab === 'composicao' && (
                <div>
                  <div style={{ marginBottom: '18px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      {product.itemType === 'jogo' ? 'Itens Inclusos na Composição' : 'Especificações e Componentes do Produto'}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
                      {product.itemType === 'jogo' 
                        ? 'Confira a relação detalhada dos itens e ferramentas que compõem o conjunto:'
                        : 'Confira as características construtivas e itens integrados ao produto:'}
                    </p>
                  </div>

                  {product.composition && product.composition.length > 0 && (() => {
                    const cleanComposition = product.composition
                      .map(it => it.replace(/^[>›•\s]+/, '').trim())
                      .filter(it => it.length > 2 && !it.match(/^(CONTEÚDO|COMPOSIÇÃO|CONTEUDO|INFORMAÇÕES):?$/i));

                    return (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                        gap: '10px'
                      }}>
                        {cleanComposition.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '4px',
                              padding: '10px 14px',
                              fontSize: '0.86rem',
                              color: '#1e293b'
                            }}
                          >
                            <span style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#e5242a',
                              color: '#ffffff',
                              fontWeight: 800,
                              fontSize: '0.72rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '1px'
                            }}>
                              {idx + 1}
                            </span>
                            <span style={{ lineHeight: 1.45 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* TAB 2: Tabela de Informações Técnicas */}
              {activeTab === 'especificacoes' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                    Tabela de Informações Técnicas
                  </h3>
                  
                  {product.tableData ? (
                    <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                      <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '0.88rem',
                        textAlign: 'left',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px'
                      }}>
                        <thead>
                          <tr style={{ background: '#0f172a', color: '#ffffff' }}>
                            {product.tableData.headers.map((h, i) => (
                              <th key={i} style={{ padding: '12px 16px', fontWeight: 700 }}>
                                {h === '0' || !h ? 'Peso' : h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? '#f8fafc' : '#ffffff', color: '#0f172a', fontWeight: 600 }}>
                              {row.map((val, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  style={{ 
                                    padding: '12px 16px', 
                                    borderBottom: '1px solid #e2e8f0',
                                    color: cIdx === 1 ? '#e5242a' : '#0f172a',
                                    fontWeight: cIdx === 1 ? 800 : 600
                                  }}
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : product.technicalSpecs ? (
                    <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                      <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '0.88rem',
                        textAlign: 'left',
                        border: '1px solid #cbd5e1',
                        borderRadius: '4px'
                      }}>
                        <thead>
                          <tr style={{ background: '#0f172a', color: '#ffffff' }}>
                            <th style={{ padding: '12px 16px', fontWeight: 700 }}>Código</th>
                            <th style={{ padding: '12px 16px', fontWeight: 700 }}>Referência</th>
                            {product.technicalSpecs.comprimentoMaleta && <th style={{ padding: '12px 16px', fontWeight: 700 }}>Comprimento maleta</th>}
                            {product.technicalSpecs.larguraMaleta && <th style={{ padding: '12px 16px', fontWeight: 700 }}>Largura maleta</th>}
                            {product.technicalSpecs.alturaMaleta && <th style={{ padding: '12px 16px', fontWeight: 700 }}>Altura</th>}
                            {product.technicalSpecs.pecas && <th style={{ padding: '12px 16px', fontWeight: 700 }}>Peças</th>}
                            {product.technicalSpecs.pesoKg && <th style={{ padding: '12px 16px', fontWeight: 700 }}>Peso (kg)</th>}
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ background: '#f8fafc', color: '#0f172a', fontWeight: 600 }}>
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.codigoGedore || product.technicalCode}</td>
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0', color: '#e5242a', fontWeight: 800 }}>{product.technicalSpecs.referencia || product.code}</td>
                            {product.technicalSpecs.comprimentoMaleta && <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.comprimentoMaleta}</td>}
                            {product.technicalSpecs.larguraMaleta && <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.larguraMaleta}</td>}
                            {product.technicalSpecs.alturaMaleta && <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.alturaMaleta}</td>}
                            {product.technicalSpecs.pecas && <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.pecas}</td>}
                            {product.technicalSpecs.pesoKg && <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>{product.technicalSpecs.pesoKg}</td>}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {/* Lista de especificações técnicas em tópicos */}
                  {product.specs && product.specs.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      <h4 style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 800, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Destaques e Características Técnicas:
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '8px' }}>
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '0.84rem', color: '#334155' }}>
                            <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0 }} />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Descrição e Diferenciais */}
              {activeTab === 'descricao' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                    Diferenciais e Alta Performance GEDORE red
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '22px' }}>
                    {product.detailedDescription || product.description}
                  </p>

                  {product.properties && product.properties.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.86rem', color: '#0f172a', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px', fontWeight: 800 }}>
                        Vantagens Construtivas:
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {product.properties.map((prop, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#1e293b' }}>
                            <CheckCircle2 size={16} color="#e5242a" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ lineHeight: 1.5 }}>{prop}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: Recomendações de Uso */}
              {activeTab === 'instrucoes' && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                    Instruções & Boas Práticas de Conservação
                  </h3>

                  {product.instructions && product.instructions.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {product.instructions.map((inst, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#334155' }}>
                          <span style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                            background: '#fee2e2',
                            color: '#b91c1c',
                            fontWeight: 800,
                            fontSize: '0.78rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            {i + 1}
                          </span>
                          <span style={{ lineHeight: 1.5 }}>{inst}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <QuoteDrawer />
      <WhatsAppButton />

      <style jsx>{`
        .product-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          min-width: 0;
          width: 100%;
        }

        .gallery-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
          width: 100%;
        }

        .thumbnails-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
          max-width: 100%;
        }

        .info-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
          width: 100%;
        }

        .details-tabs-header {
          display: flex;
          gap: 6px;
          border-bottom: 2px solid #e2e8f0;
          overflow-x: auto;
          padding-bottom: 2px;
          max-width: 100%;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .tab-btn.active {
          color: #e5242a;
          border-bottom-color: #e5242a;
        }

        .tab-content-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 16px;
          min-width: 0;
        }

        @media (min-width: 768px) {
          .tab-content-card {
            padding: 28px;
          }
          .tab-btn {
            padding: 12px 18px;
            font-size: 0.9rem;
          }
        }

        @media (min-width: 900px) {
          .product-layout-grid {
            grid-template-columns: 1.1fr 1fr;
            align-items: start;
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
