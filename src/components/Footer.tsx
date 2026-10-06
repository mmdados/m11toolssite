'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#070a0f',
      borderTop: '1px solid var(--border-medium)',
      paddingTop: '48px',
      paddingBottom: '24px',
      color: 'var(--text-secondary)',
      fontSize: '0.88rem',
      position: 'relative',
      width: '100%'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{
              display: 'inline-block',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              border: '1px solid rgba(229, 36, 42, 0.4)',
              background: '#000',
              padding: '2px 4px',
              marginBottom: '14px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuidora Gedore e Tekbond" 
                width={130} 
                height={35} 
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ lineHeight: 1.5, color: 'var(--text-secondary)', marginBottom: '14px', fontSize: '0.85rem' }}>
              Distribuição e fornecimento de ferramentas industriais e soluções químicas de alta performance. 
              Especialistas em linhas Gedore Red, Gedore Blue e Tekbond com atendimento corporativo e faturamento B2B.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00a651', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={15} style={{ flexShrink: 0 }} />
              <span>Garantia de Fábrica & Procedência 100% Original</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.85rem' }}>
              <li><a href="#catalogo" className="footer-link">Catálogo Geral</a></li>
              <li><a href="#gedore-red" className="footer-link">Linha Gedore Red</a></li>
              <li><a href="#gedore-blue" className="footer-link">Gedore Industrial</a></li>
              <li><a href="#tekbond" className="footer-link">Tekbond Químicos</a></li>
              <li><a href="#diferenciais" className="footer-link">Faturamento PJ & Benefícios</a></li>
              <li><a href="#contato" className="footer-link">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Atendimento Direto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  WhatsApp / Comercial:
                </div>
                <a 
                  href={buildWhatsAppUrl('Olá M11tools! Gostaria de falar com o atendimento comercial.')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', fontWeight: 700, fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}
                >
                  <MessageSquare size={15} />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Horário:
                </div>
                <div style={{ color: '#ffffff', fontSize: '0.85rem' }}>
                  Segunda a Sexta: 08:00 às 18:00
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Envio:
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Despacho nacional via transportadoras parceiras e frete dedicado.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem'
        }}>
          <div>
            &copy; 2026 <strong>M11 Tools</strong>. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: 'var(--text-secondary)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '5px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.78rem'
            }}
          >
            <span>Topo</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 36px;
        }
        .footer-link:hover {
          color: #ffffff !important;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 36px;
          }
        }
      `}</style>
    </footer>
  );
}
