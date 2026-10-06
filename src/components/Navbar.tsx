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
      {/* Top Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0b0f17 0%, #171d2b 50%, #0b0f17 100%)',
        borderBottom: '1px solid var(--border-subtle)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        padding: '6px 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff4d4f', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4d4f', display: 'inline-block' }} />
              Distribuidores Especializados Gedore & Tekbond
            </span>
            <span style={{ display: 'none', alignItems: 'center', gap: '6px' }} className="d-md-flex">
              <ShieldCheck size={14} color="#00a651" />
              Faturamento para Empresas (PJ) & NF-e
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} />
              Seg a Sex: 08h às 18h
            </span>
            <a 
              href="tel:11972931840" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontWeight: 600 }}
            >
              <Phone size={13} color="var(--brand-red)" />
              (11) 97293-1840
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
          paddingTop: '12px',
          paddingBottom: '12px',
          gap: '20px'
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              border: '1px solid rgba(229, 36, 42, 0.4)',
              background: '#000',
              padding: '2px 4px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuidora Gedore e Tekbond" 
                width={160} 
                height={42} 
                style={{ objectFit: 'contain', display: 'block' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
            fontSize: '0.92rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }} className="desktop-nav">
            <a href="#catalogo" style={{ transition: 'color 0.2s' }} className="nav-link">Catálogo Geral</a>
            <a href="#gedore-red" style={{ transition: 'color 0.2s' }} className="nav-link">Gedore Red</a>
            <a href="#gedore-blue" style={{ transition: 'color 0.2s' }} className="nav-link">Gedore Industrial</a>
            <a href="#tekbond" style={{ transition: 'color 0.2s' }} className="nav-link">Tekbond</a>
            <a href="#diferenciais" style={{ transition: 'color 0.2s' }} className="nav-link">Diferenciais</a>
            <a href="#contato" style={{ transition: 'color 0.2s' }} className="nav-link">Contato</a>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {onSearchFocus && (
              <button
                onClick={onSearchFocus}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem'
                }}
                title="Buscar no catálogo"
              >
                <Search size={16} />
                <span className="d-md-inline" style={{ display: 'none' }}>Buscar ferramenta...</span>
              </button>
            )}

            {/* Quote Drawer Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: totalItems > 0 ? 'rgba(229, 36, 42, 0.2)' : 'rgba(255,255,255,0.06)',
                border: totalItems > 0 ? '1px solid var(--brand-red)' : '1px solid var(--border-medium)',
                color: totalItems > 0 ? '#ff6b6b' : '#ffffff',
                padding: '9px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              <ShoppingBag size={18} />
              <span className="d-md-inline">Cotação</span>
              {totalItems > 0 && (
                <span style={{
                  background: 'var(--brand-red)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  borderRadius: '999px',
                  padding: '1px 7px',
                  minWidth: '20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 6px rgba(229, 36, 42, 0.8)'
                }}>
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20produtos%20Gedore%20e%20Tekbond."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp d-md-flex"
              style={{ padding: '9px 16px', fontSize: '0.85rem', display: 'none' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                background: 'rgba(255,255,255,0.08)'
              }}
              className="mobile-toggle"
              aria-label="Abrir menu móvel"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>
            <a 
              href="#catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600 }}
            >
              Catálogo Geral
            </a>
            <a 
              href="#gedore-red" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#ff6b6b' }}
            >
              Linha Gedore Red
            </a>
            <a 
              href="#gedore-blue" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#4da6ff' }}
            >
              Linha Gedore Industrial / Blue
            </a>
            <a 
              href="#tekbond" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, color: '#4ade80' }}
            >
              Linha Tekbond Químicos
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600 }}
            >
              Vantagens & Faturamento PJ
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontWeight: 600 }}
            >
              Fale com um Consultor
            </a>
            <a
              href="https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20produtos%20Gedore%20e%20Tekbond."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', marginTop: '6px' }}
            >
              <MessageSquare size={18} />
              Conversar no WhatsApp (11) 97293-1840
            </a>
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
          .d-md-inline {
            display: inline !important;
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
