'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { BRANDS } from '@/data/products';
import { Brand } from '@/types';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Search,
  CheckCircle2,
  Layers,
  Home,
  Flame,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onSearchFocus?: () => void;
  onSelectBrand?: (brand: Brand | 'all') => void;
  selectedBrand?: Brand | 'all';
}

export default function Navbar({ onSearchFocus, onSelectBrand, selectedBrand = 'all' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsDrawerOpen } = useQuote();

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

  const officialBrands = BRANDS.filter(b => b.id !== 'all');

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%', background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      {/* Barra de Navegação Principal - Fundo Branco Limpo */}
      <nav style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          paddingBottom: '12px',
          gap: '12px'
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
                width={125} 
                height={34} 
                style={{ objectFit: 'contain', display: 'block', maxWidth: '125px', height: 'auto' }}
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
            <Link href="/" className="nav-link">Início</Link>
            <a href="/#mais-buscados" className="nav-link">Itens Mais Buscados</a>
            <a href="/#linhas" className="nav-link">Linhas Oficiais</a>
            <a href="/#contato" className="nav-link">Fale Conosco</a>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Search Button (Desktop) */}
            {onSearchFocus && (
              <button
                onClick={onSearchFocus}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  color: '#475569',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                className="hide-on-mobile"
                title="Buscar no catálogo"
              >
                <Search size={15} />
                <span>Buscar por código...</span>
              </button>
            )}

            {/* Direct WhatsApp Action (Desktop) */}
            <a
              href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e atendimento comercial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hide-on-mobile"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Carrinho / Cotação - VISÍVEL TANTO NO DESKTOP QUANTO NO MOBILE */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 12px',
                background: totalItems > 0 ? '#fee2e2' : '#f8fafc',
                color: totalItems > 0 ? '#b91c1c' : '#1e293b',
                border: totalItems > 0 ? '1px solid #e5242a' : '1px solid #cbd5e1',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="Abrir lista de cotação / carrinho"
              aria-label={`Carrinho com ${totalItems} itens`}
            >
              <ShoppingBag size={18} color={totalItems > 0 ? '#e5242a' : '#0f172a'} />
              <span className="hide-on-mobile">Cotação</span>
              {totalItems > 0 && (
                <span style={{
                  background: '#e5242a',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '10px',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '18px',
                  height: '18px'
                }}>
                  {totalItems}
                </span>
              )}
            </button>

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
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Menu Sanduíche Profissional com Logos Oficiais) */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto'
          }}>
            {/* Campo de Busca Rápida Mobile */}
            {onSearchFocus && (
              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSearchFocus();
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    padding: '10px 14px',
                    color: '#64748b',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Search size={16} color="#64748b" />
                  <span>Buscar código (ex: R46023100)...</span>
                </button>
              </div>
            )}

            {/* Links Principais de Navegação com Ícones Profissionais */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', paddingLeft: '8px' }}>
                Navegação
              </div>
              <Link
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  textDecoration: 'none',
                  background: '#f8fafc'
                }}
              >
                <Home size={18} color="#0f172a" />
                <span>Início</span>
              </Link>
              <a 
                href="/#mais-buscados" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  textDecoration: 'none'
                }}
              >
                <Flame size={18} color="#e5242a" />
                <span>Itens Mais Buscados</span>
              </a>
              <a 
                href="/#linhas" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  color: '#0f172a',
                  fontSize: '0.92rem',
                  textDecoration: 'none'
                }}
              >
                <Layers size={18} color="#005baa" />
                <span>Linhas Oficiais</span>
              </a>
              <a 
                href="/#contato" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: '#0f172a',
                  textDecoration: 'none'
                }}
              >
                <Phone size={18} color="#15803d" />
                <span>Fale Conosco</span>
              </a>
            </div>

            {/* SEÇÃO PRINCIPAL: LINHAS OFICIAIS COM OS LOGOS REAIS */}
            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Filtrar por Linha Oficial:
                </span>
                {selectedBrand !== 'all' && (
                  <button
                    onClick={() => handleBrandClick('all')}
                    style={{ fontSize: '0.72rem', color: '#e5242a', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  >
                    Limpar filtro
                  </button>
                )}
              </div>

              {/* Botão Ver Todas as Linhas */}
              <button
                onClick={() => handleBrandClick('all')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '4px',
                  background: selectedBrand === 'all' ? '#0f172a' : '#ffffff',
                  color: selectedBrand === 'all' ? '#ffffff' : '#334155',
                  border: selectedBrand === 'all' ? '1px solid #0f172a' : '1px solid #cbd5e1',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                <span>Todas as Linhas Oficiais</span>
                {selectedBrand === 'all' ? (
                  <CheckCircle2 size={15} color="#ffffff" />
                ) : (
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Ver tudo</span>
                )}
              </button>

              {/* Grid de Cards com os Logos Oficiais das Linhas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {officialBrands.map((brand) => {
                  const isSelected = selectedBrand === brand.id;
                  const isGedoreRed = brand.id === 'gedore-red';

                  return (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandClick(brand.id as Brand)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 8px',
                        borderRadius: '6px',
                        background: '#ffffff',
                        border: isSelected 
                          ? `2px solid ${brand.color}` 
                          : '1px solid #cbd5e1',
                        boxShadow: isSelected 
                          ? `0 2px 8px rgba(0,0,0,0.08)` 
                          : 'none',
                        cursor: 'pointer',
                        textAlign: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {/* Logo da Marca */}
                      <div style={{
                        height: '38px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}>
                        <Image
                          src={brand.logo}
                          alt={brand.label}
                          width={95}
                          height={32}
                          style={{
                            maxWidth: '95px',
                            maxHeight: '32px',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                      </div>

                      {/* Nome da Linha e Status */}
                      <div style={{ width: '100%' }}>
                        <div style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: isSelected ? brand.color : '#0f172a',
                          lineHeight: 1.2
                        }}>
                          {brand.label}
                        </div>
                        <div style={{
                          fontSize: '0.66rem',
                          fontWeight: 600,
                          color: isGedoreRed ? '#15803d' : '#94a3b8',
                          marginTop: '2px'
                        }}>
                          {isGedoreRed ? '1 item ativo' : 'Em breve'}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão Ver Cotação no Menu */}
            <div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDrawerOpen(true);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px 16px',
                  borderRadius: '4px',
                  background: totalItems > 0 ? '#fee2e2' : '#f1f5f9',
                  color: totalItems > 0 ? '#b91c1c' : '#1e293b',
                  border: totalItems > 0 ? '1px solid #e5242a' : '1px solid #cbd5e1',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                <ShoppingBag size={18} color={totalItems > 0 ? '#e5242a' : '#1e293b'} />
                <span>
                  {totalItems > 0 ? `Ver Lista de Cotação (${totalItems} itens)` : 'Minha Cotação (0 itens)'}
                </span>
              </button>
            </div>

            {/* Ação WhatsApp Mobile com Atendimento Oficial */}
            <div>
              <a
                href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de informações sobre produtos e atendimento comercial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
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
