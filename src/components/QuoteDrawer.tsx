'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
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
    }}>
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Slide Drawer */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        height: '100%',
        background: 'var(--bg-surface)',
        borderLeft: '1px solid var(--border-medium)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 10,
        animation: 'slideIn 0.25s ease',
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
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
              padding: '8px',
              borderRadius: 'var(--radius-md)'
            }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                Lista de Cotação
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {totalItems} item(ns) selecionado(s)
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
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {items.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 10px',
              color: 'var(--text-secondary)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'var(--text-muted)'
              }}>
                <ShoppingBag size={30} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '8px' }}>
                Sua lista está vazia
              </h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
                Navegue pelo catálogo e clique em &quot;Adicionar à Cotação&quot; para orçar múltiplos produtos de uma só vez.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <span>Ver Produtos no Catálogo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    style={{
                      background: 'var(--bg-card)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      padding: '12px',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center'
                    }}
                  >
                    {/* Thumbnail */}
                    <div style={{
                      position: 'relative',
                      width: '60px',
                      height: '60px',
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
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-red)', fontWeight: 700 }}>
                        {product.brandLabel}
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {product.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Cód: {product.code}
                      </div>

                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '8px'
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
                            style={{ padding: '3px 7px', color: '#ffffff' }}
                            title="Diminuir"
                          >
                            <Minus size={13} />
                          </button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            style={{ padding: '3px 7px', color: '#ffffff' }}
                            title="Aumentar"
                          >
                            <Plus size={13} />
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
                          <Trash2 size={15} />
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
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Dados para Agilizar o Orçamento (Opcional):
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
                    padding: '8px 12px',
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
                    padding: '8px 12px',
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
            padding: '20px 24px',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {/* WhatsApp Send Button */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '14px 20px', fontSize: '0.95rem' }}
            >
              <MessageSquare size={18} />
              <span>Enviar Cotação pelo WhatsApp</span>
            </a>

            {/* Secondary actions */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleCopy}
                className="btn-secondary"
                style={{ flex: 1, padding: '10px', fontSize: '0.82rem' }}
              >
                {copied ? <Check size={14} color="#00a651" /> : <Copy size={14} />}
                <span>{copied ? 'Copiado!' : 'Copiar Lista'}</span>
              </button>

              <button
                onClick={clearQuote}
                style={{
                  padding: '10px 14px',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Limpar
              </button>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '4px' }}>
              Atendimento direto: (11) 97293-1840 • M11 Tools
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
