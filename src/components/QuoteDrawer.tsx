'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG } from '@/config/site';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  Copy, 
  Check, 
  ShoppingBag, 
  ArrowRight 
} from 'lucide-react';

export default function QuoteDrawer() {
  const { 
    items, 
    isDrawerOpen, 
    setIsDrawerOpen, 
    removeFromQuote, 
    updateQuantity, 
    clearQuote, 
    totalItems,
    generateWhatsAppLink 
  } = useQuote();

  const [customerName, setCustomerName] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isDrawerOpen) return null;

  const handleCopy = () => {
    let text = `LISTA DE COTAÇÃO - M11 TOOLS\n`;
    if (customerName) text += `Nome: ${customerName}\n`;
    if (customerCompany) text += `Empresa/CNPJ: ${customerCompany}\n`;
    text += `------------------------------------\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. [${item.product.brandLabel}] ${item.product.name} (Cód: ${item.product.code}) - Qtd: ${item.quantity}\n`;
    });
    text += `------------------------------------\n`;
    text += `Solicitado via m11tools.com.br`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsAppUrl = generateWhatsAppLink(customerName, customerCompany);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
    }}>
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Slide Drawer */}
      <div className="drawer-panel">
        {/* Drawer Header */}
        <div style={{
          padding: '16px 18px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-card)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'rgba(229, 36, 42, 0.15)',
              color: 'var(--brand-red)',
              padding: '6px',
              borderRadius: 'var(--radius-md)'
            }}>
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                Lista de Cotação
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {totalItems} item(ns)
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              color: 'var(--text-muted)',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Fechar gaveta"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {items.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 10px',
              color: 'var(--text-secondary)'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
                color: 'var(--text-muted)'
              }}>
                <ShoppingBag size={26} />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '6px' }}>
                Sua lista está vazia
              </h4>
              <p style={{ fontSize: '0.82rem', marginBottom: '20px' }}>
                Navegue pelo catálogo e adicione as ferramentas que precisa.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn-secondary"
                style={{ width: '100%', padding: '11px' }}
              >
                <span>Ver Produtos</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    style={{
                      background: 'var(--bg-card)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      padding: '10px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center'
                    }}
                  >
                    {/* Thumbnail */}
                    <div style={{
                      position: 'relative',
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      flexShrink: 0,
                      background: '#070a0f'
                    }}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                        {product.brandLabel}
                      </div>
                      <div style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {product.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Cód: {product.code}
                      </div>

                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '6px'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: 'rgba(255,255,255,0.06)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            style={{ padding: '4px 8px', color: '#ffffff' }}
                            title="Diminuir"
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, minWidth: '22px', textAlign: 'center' }}>
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            style={{ padding: '4px 8px', color: '#ffffff' }}
                            title="Aumentar"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromQuote(product.id)}
                          style={{
                            color: 'var(--text-muted)',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 'auto'
                          }}
                          title="Remover item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Buyer Info */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Dados para Cotação (Opcional):
                </div>
                <input
                  type="text"
                  placeholder="Seu Nome / Comprador"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 10px',
                    color: '#ffffff',
                    fontSize: '0.82rem'
                  }}
                />
                <input
                  type="text"
                  placeholder="Empresa / CNPJ"
                  value={customerCompany}
                  onChange={(e) => setCustomerCompany(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 10px',
                    color: '#ffffff',
                    fontSize: '0.82rem'
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div style={{
            padding: '16px',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {/* WhatsApp Send Button */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem' }}
            >
              <MessageSquare size={17} />
              <span>Enviar Cotação pelo WhatsApp</span>
            </a>

            {/* Secondary actions */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleCopy}
                className="btn-secondary"
                style={{ flex: 1, padding: '9px', fontSize: '0.8rem' }}
              >
                {copied ? <Check size={14} color="#00a651" /> : <Copy size={14} />}
                <span>{copied ? 'Copiado!' : 'Copiar Lista'}</span>
              </button>

              <button
                onClick={clearQuote}
                style={{
                  padding: '9px 12px',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Limpar
              </button>
            </div>

            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              {SITE_CONFIG.phoneDisplay} • {SITE_CONFIG.companyName}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .drawer-panel {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100%;
          background: var(--bg-surface);
          border-left: 1px solid var(--border-medium);
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
          z-index: 10;
        }

        @media (min-width: 500px) {
          .drawer-panel {
            max-width: 440px;
          }
        }
      `}</style>
    </div>
  );
}
