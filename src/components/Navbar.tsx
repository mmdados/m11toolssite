'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { 
  Phone, 
  MessageSquare, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  Search
} from 'lucide-react';

interface NavbarProps {
  onSearchFocus?: () => void;
}

export default function Navbar({ onSearchFocus }: NavbarProps) {
  const { totalItems, setIsDrawerOpen } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', background: '#ffffff' }}>
      {/* Top Announcement Bar - Chapada e Objetiva */}
      <div style={{
        background: '#111827',
        borderBottom: '1px solid #1f2937',
        fontSize: '0.78rem',
        color: '#9ca3af',
        padding: '6px 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px'
        }}>
          {/* Left badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <span style={{ width: '6px', height: '6px', background: '#e5242a', display: 'inline-block', flexShrink: 0 }} />
              M11 Tools • Produtos Originais Gedore & Tekbond
            </span>
            <span style={{ color: '#4b5563' }} className="hide-on-mobile">|</span>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px', color: '#e5e7eb' }} className="d-md-flex">
              <ShieldCheck size={13} color="#22c55e" />
              Faturamento PJ com Boleto Bancário
            </span>
          </div>

          {/* Right phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px', color: '#9ca3af' }} className="d-md-flex">
              <Clock size={12} />
              Seg a Sex das 08h às 18h
            </span>
            <a 
              href={SITE_CONFIG.phoneTel} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontWeight: 700 }}
            >
              <Phone size={12} color="#e5242a" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fundo Branco e Chapado */}
      <nav style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          paddingBottom: '12px',
          gap: '16px'
        }}>
          {/* Logo M11 Tools */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              position: 'relative',
              borderRadius: '0px',
              border: '1px solid #e5e7eb',
              background: '#000000',
              padding: '4px 6px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuição de Ferramentas e Químicos" 
                width={130} 
                height={35} 
                style={{ objectFit: 'contain', display: 'block', maxWidth: '130px', height: 'auto' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
          }} className="desktop-nav">
            <a href="/#catalogo" className="nav-link">Catálogo</a>
            <a href="/#gedore-red" className="nav-link">Gedore Red</a>
            <a href="/#gedore-blue" className="nav-link">Gedore Industrial</a>
            <a href="/#tekbond" className="nav-link">Tekbond</a>
            <a href="/#contato" className="nav-link">Fale Conosco</a>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Search Button */}
            {onSearchFocus && (
              <button
                onClick={onSearchFocus}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  color: '#4b5563',
                  fontSize: '0.84rem',
                  fontWeight: 600
                }}
                title="Buscar no catálogo"
              >
                <Search size={16} />
                <span className="hide-on-mobile">Buscar...</span>
              </button>
            )}

            {/* Quote Drawer Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: totalItems > 0 ? '#fee2e2' : '#f9fafb',
                border: totalItems > 0 ? '1px solid #e5242a' : '1px solid #e5e7eb',
                color: totalItems > 0 ? '#b91c1c' : '#111827',
                padding: '8px 12px',
                borderRadius: '2px',
                fontWeight: 700,
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
              aria-label="Abrir cotação"
            >
              <ShoppingBag size={17} />
              <span className="hide-on-mobile">Cotação</span>
              {totalItems > 0 && (
                <span style={{
                  background: '#e5242a',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  borderRadius: '2px',
                  padding: '1px 6px',
                  minWidth: '18px',
                  textAlign: 'center',
                }}>
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action Desktop */}
            <a
              href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e cotação comercial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hide-on-mobile"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 10px',
                borderRadius: '2px',
                color: '#111827',
                background: '#f3f4f6',
                border: '1px solid #e5e7eb'
              }}
              className="mobile-toggle"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <a 
              href="/#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 12px', borderBottom: '1px solid #f3f4f6', fontWeight: 600, fontSize: '0.92rem', color: '#111827' }}
            >
              📦 Catálogo de Produtos
            </a>
            <a 
              href="/#gedore-red" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 12px', borderBottom: '1px solid #f3f4f6', fontWeight: 600, color: '#dc2626', fontSize: '0.92rem' }}
            >
              🔴 Linha Gedore Red
            </a>
            <a 
              href="/#gedore-blue" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 12px', borderBottom: '1px solid #f3f4f6', fontWeight: 600, color: '#0284c7', fontSize: '0.92rem' }}
            >
              🔵 Linha Gedore Industrial
            </a>
            <a 
              href="/#tekbond" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 12px', borderBottom: '1px solid #f3f4f6', fontWeight: 600, color: '#16a34a', fontSize: '0.92rem' }}
            >
              🟢 Linha Tekbond Químicos
            </a>
            <a 
              href="/#contato" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 12px', fontWeight: 600, fontSize: '0.92rem', color: '#111827' }}
            >
              📞 Fale com a M11 Tools
            </a>

            <div style={{ paddingTop: '8px' }}>
              <a
                href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e cotação comercial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '12px' }}
              >
                <MessageSquare size={18} />
                <span>Chamar no WhatsApp {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
