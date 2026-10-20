'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { Brand } from '@/types';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  Search,
  CheckCircle2,
  Layers
} from 'lucide-react';

interface NavbarProps {
  onSearchFocus?: () => void;
  onSelectBrand?: (brand: Brand | 'all') => void;
  selectedBrand?: Brand | 'all';
}

export default function Navbar({ onSearchFocus, onSelectBrand, selectedBrand = 'all' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBrandClick = (brandId: Brand | 'all') => {
    if (onSelectBrand) {
      onSelectBrand(brandId);
    }
    setMobileMenuOpen(false);
    const el = document.getElementById('catalogo') || document.getElementById('mais-buscados');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', background: '#ffffff' }}>
      {/* Top Announcement Bar - Limpa e Sem Faturamento PJ */}
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
              M11 Tools • Distribuição Oficial Gedore, Robust & Tekbond
            </span>
            <span style={{ color: '#4b5563' }} className="hide-on-mobile">|</span>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px', color: '#e5e7eb' }} className="d-md-flex">
              <ShieldCheck size={13} color="#22c55e" />
              Garantia de Procedência & Produtos 100% Originais
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
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontWeight: 700, textDecoration: 'none' }}
            >
              <Phone size={12} color="#e5242a" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fundo Branco */}
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

          {/* Desktop Nav Links (Início, Itens Mais Buscados, Linhas, Fale Conosco) */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
          }} className="desktop-nav">
            <Link href="/" className="nav-link">Início</Link>
            <a href="/#mais-buscados" className="nav-link">Itens Mais Buscados</a>
            <a href="/#linhas" className="nav-link">Linhas Oficiais</a>
            <a href="/#contato" className="nav-link">Fale Conosco</a>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Search Button */}
            {onSearchFocus && (
              <button
                onClick={onSearchFocus}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  color: '#475569',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Buscar no catálogo"
              >
                <Search size={16} />
                <span className="hide-on-mobile">Buscar por código...</span>
              </button>
            )}

            {/* Direct WhatsApp Action Desktop */}
            <a
              href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e atendimento comercial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hide-on-mobile"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
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
                borderRadius: '4px',
                color: '#0f172a',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Menu Sanduíche com Navegação e Filtro por Logos) */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Links Principais */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '9px 12px', fontWeight: 700, fontSize: '0.92rem', color: '#0f172a', textDecoration: 'none' }}
              >
                🏠 Início
              </Link>
              <a 
                href="/#mais-buscados" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '9px 12px', borderBottom: '1px solid #f1f5f9', fontWeight: 600, fontSize: '0.92rem', color: '#0f172a', textDecoration: 'none' }}
              >
                🔥 Itens Mais Buscados
              </a>
              <a 
                href="/#linhas" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '9px 12px', borderBottom: '1px solid #f1f5f9', fontWeight: 600, color: '#0f172a', fontSize: '0.92rem', textDecoration: 'none' }}
              >
                🏷️ Linhas Oficiais
              </a>
              <a 
                href="/#contato" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '9px 12px', borderBottom: '1px solid #f1f5f9', fontWeight: 600, fontSize: '0.92rem', color: '#0f172a', textDecoration: 'none' }}
              >
                📞 Fale Conosco
              </a>
            </div>

            {/* SEÇÃO NO MENU SANDUÍCHE: Filtrar por Linhas com Logos */}
            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                Filtrar por Linha / Marca:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {/* Todas as Linhas */}
                <button
                  onClick={() => handleBrandClick('all')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    background: selectedBrand === 'all' ? '#0f172a' : '#ffffff',
                    color: selectedBrand === 'all' ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span>Todas as Linhas</span>
                  {selectedBrand === 'all' && <CheckCircle2 size={14} color="#ffffff" />}
                </button>

                {/* Gedore Red */}
                <button
                  onClick={() => handleBrandClick('gedore-red')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    background: selectedBrand === 'gedore-red' ? '#fee2e2' : '#ffffff',
                    color: selectedBrand === 'gedore-red' ? '#b91c1c' : '#334155',
                    border: selectedBrand === 'gedore-red' ? '1px solid #e5242a' : '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#e5242a', borderRadius: '50%' }} />
                    <span>Gedore Red</span>
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: 700 }}>1 item</span>
                </button>

                {/* Gedore Industrial */}
                <button
                  onClick={() => handleBrandClick('gedore-blue')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    background: selectedBrand === 'gedore-blue' ? '#e0f2fe' : '#ffffff',
                    color: selectedBrand === 'gedore-blue' ? '#0369a1' : '#334155',
                    border: selectedBrand === 'gedore-blue' ? '1px solid #005baa' : '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#005baa', borderRadius: '50%' }} />
                    <span>Gedore Industrial</span>
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Em breve</span>
                </button>

                {/* Robust */}
                <button
                  onClick={() => handleBrandClick('gedore-robust')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    background: selectedBrand === 'gedore-robust' ? '#ffedd5' : '#ffffff',
                    color: selectedBrand === 'gedore-robust' ? '#c2410c' : '#334155',
                    border: selectedBrand === 'gedore-robust' ? '1px solid #ea580c' : '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#ea580c', borderRadius: '50%' }} />
                    <span>Robust</span>
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Em breve</span>
                </button>

                {/* Tekbond */}
                <button
                  onClick={() => handleBrandClick('tekbond')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    background: selectedBrand === 'tekbond' ? '#dcfce7' : '#ffffff',
                    color: selectedBrand === 'tekbond' ? '#15803d' : '#334155',
                    border: selectedBrand === 'tekbond' ? '1px solid #00a651' : '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#00a651', borderRadius: '50%' }} />
                    <span>Tekbond</span>
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Em breve</span>
                </button>
              </div>
            </div>

            {/* Ação WhatsApp Mobile */}
            <div style={{ paddingTop: '4px' }}>
              <a
                href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e atendimento comercial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '12px' }}
              >
                <MessageSquare size={18} />
                <span>Atendimento WhatsApp {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
