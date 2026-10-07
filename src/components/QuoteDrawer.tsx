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
  ShoppingBag
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
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Slide Drawer */}
      <div className="drawer-panel">
        {/* Drawer Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: '#fee2e2',
              color: '#b91c1c',
              padding: '6px',
              borderRadius: '2px'
            }}>
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827' }}>
                Lista de Cotação PJ
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                {totalItems} item(ns) selecionado(s)
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              color: '#6b7280',
              padding: '6px',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Fechar gaveta"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background: '#f9fafb'
        }}>
          {items.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6b7280',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <ShoppingBag size={44} color="#9ca3af" />
              <p style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>
                Sua lista de cotação está vazia.
              </p>
              <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                Navegue pelo catálogo e clique em "+ Cotação PJ" nos produtos desejados.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.82rem', marginTop: '8px' }}
              >
                Ver Catálogo
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '2px',
                    border: '1px solid #e5e7eb',
                    padding: '12px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                  }}
                >
                  {/* Thumbnail em fundo branco */}
                  <div style={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid #f3f4f6',
                    flexShrink: 0
                  }}>
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      style={{ objectFit: 'contain', padding: '4px' }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.68rem', color: '#b91c1c', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.product.brandLabel}
                    </div>
                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#111827',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      marginBottom: '2px'
                    }}>
                      {item.product.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                      Cód: {item.product.code}
                    </div>

                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#f3f4f6',
                        borderRadius: '2px',
                        border: '1px solid #e5e7eb'
                      }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{ padding: '4px 8px', color: '#4b5563' }}
                          aria-label="Diminuir"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0 6px', color: '#111827' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{ padding: '4px 8px', color: '#4b5563' }}
                          aria-label="Aumentar"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromQuote(item.product.id)}
                        style={{ color: '#ef4444', padding: '4px' }}
                        title="Remover item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Form de identificação */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '2px',
                padding: '14px',
                marginTop: '8px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                  Identificação para Faturamento (Opcional)
                </div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    border: '1px solid #d1d5db',
                    borderRadius: '2px',
                    padding: '8px 10px',
                    color: '#111827',
                    fontSize: '0.82rem',
                    marginBottom: '8px',
                    outline: 'none'
                  }}
                />
                <input
                  type="text"
                  placeholder="Empresa / CNPJ"
                  value={customerCompany}
                  onChange={(e) => setCustomerCompany(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    border: '1px solid #d1d5db',
                    borderRadius: '2px',
                    padding: '8px 10px',
                    color: '#111827',
                    fontSize: '0.82rem',
                    outline: 'none'
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
            borderTop: '1px solid #e5e7eb',
            background: '#ffffff',
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
                style={{ flex: 1, padding: '8px', fontSize: '0.8rem' }}
              >
                {copied ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                <span>{copied ? 'Copiado!' : 'Copiar Lista'}</span>
              </button>

              <button
                onClick={clearQuote}
                style={{
                  padding: '8px 12px',
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '2px',
                  background: '#f9fafb'
                }}
              >
                Limpar
              </button>
            </div>

            <div style={{ fontSize: '0.72rem', color: '#6b7280', textAlign: 'center' }}>
              {SITE_CONFIG.phoneDisplay} • {SITE_CONFIG.companyName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
