'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
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
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #090d14 0%, #141b27 50%, #090d14 100%)',
        borderBottom: '1px solid var(--border-subtle)',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
        padding: '5px 0',
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
              gap: '5px',
              color: '#ff4d4f',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff4d4f', display: 'inline-block', flexShrink: 0 }} />
              Gedore & Tekbond Distribuidora
            </span>
            <span style={{ color: 'var(--text-muted)' }} className="hide-on-mobile">•</span>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px' }} className="d-md-flex">
              <ShieldCheck size={13} color="#00a651" />
              Faturamento PJ (Boleto)
            </span>
          </div>

          {/* Right phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <span style={{ display: 'none', alignItems: 'center', gap: '5px' }} className="d-md-flex">
              <Clock size={12} />
              08h às 18h
            </span>
            <a 
              href="tel:11972931840" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#ffffff', fontWeight: 700 }}
            >
              <Phone size={12} color="var(--brand-red)" />
              <span>(11) 97293-1840</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '10px',
          paddingBottom: '10px',
          gap: '12px'
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              position: 'relative',
              borderRadius: '7px',
              overflow: 'hidden',
              boxShadow: '0 3px 12px rgba(0,0,0,0.5)',
              border: '1px solid rgba(229, 36, 42, 0.4)',
              background: '#000',
              padding: '2px 3px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuidora Gedore e Tekbond" 
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
            gap: '20px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }} className="desktop-nav">
            <a href="#catalogo" className="nav-link">Catálogo</a>
            <a href="#gedore-red" className="nav-link">Gedore Red</a>
            <a href="#gedore-blue" className="nav-link">Gedore Industrial</a>
            <a href="#tekbond" className="nav-link">Tekbond</a>
            <a href="#diferenciais" className="nav-link">Diferenciais</a>
            <a href="#contato" className="nav-link">Contato</a>
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
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-subtle)',
                  padding: '7px 10px',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.82rem'
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
                background: totalItems > 0 ? 'rgba(229, 36, 42, 0.22)' : 'rgba(255,255,255,0.06)',
                border: totalItems > 0 ? '1px solid var(--brand-red)' : '1px solid var(--border-medium)',
                color: totalItems > 0 ? '#ff6b6b' : '#ffffff',
                padding: '7px 12px',
                borderRadius: 'var(--radius-md)',
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
                  background: 'var(--brand-red)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  borderRadius: '999px',
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
              href="https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20produtos%20Gedore%20e%20Tekbond."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hide-on-mobile"
              style={{ padding: '7px 14px', fontSize: '0.82rem' }}
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '7px 9px',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--border-subtle)'
              }}
              className="mobile-toggle"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Layout */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, fontSize: '0.95rem' }}
            >
              📦 Catálogo Geral
            </a>
            <a 
              href="#gedore-red" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#ff6b6b', fontSize: '0.95rem' }}
            >
              🔴 Linha Gedore Red
            </a>
            <a 
              href="#gedore-blue" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#4da6ff', fontSize: '0.95rem' }}
            >
              🔵 Linha Gedore Industrial (Blue)
            </a>
            <a 
              href="#tekbond" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#4ade80', fontSize: '0.95rem' }}
            >
              🟢 Linha Tekbond Químicos
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, fontSize: '0.95rem' }}
            >
              ⭐ Vantagens & Faturamento PJ
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontWeight: 600, fontSize: '0.95rem' }}
            >
              📞 Fale com um Consultor
            </a>

            <div style={{ paddingTop: '8px' }}>
              <a
                href="https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20produtos%20Gedore%20e%20Tekbond."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '12px' }}
              >
                <MessageSquare size={18} />
                Chamar no WhatsApp (11) 97293-1840
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .nav-link:hover {
          color: #ffffff;
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .d-md-flex {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
