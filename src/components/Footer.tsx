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
      background: '#111827',
      borderTop: '1px solid #1f2937',
      paddingTop: '40px',
      paddingBottom: '24px',
      color: '#9ca3af',
      fontSize: '0.85rem',
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
              border: '1px solid #374151',
              background: '#000000',
              padding: '3px 6px',
              marginBottom: '12px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuição de Ferramentas e Químicos" 
                width={130} 
                height={35} 
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ lineHeight: 1.5, color: '#9ca3af', marginBottom: '12px', fontSize: '0.83rem' }}>
              Distribuição comercial de ferramentas manuais e químicos de alta performance. 
              Trabalhamos com produtos 100% originais das marcas Gedore Red, Gedore Blue Industrial e Tekbond.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#22c55e', fontSize: '0.78rem', fontWeight: 600 }}>
              <ShieldCheck size={14} style={{ flexShrink: 0 }} />
              <span>Garantia de Procedência & Faturamento PJ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <li><a href="/#catalogo" className="footer-link">Catálogo Completo</a></li>
              <li><a href="/#gedore-red" className="footer-link">Linha Gedore Red</a></li>
              <li><a href="/#gedore-blue" className="footer-link">Gedore Industrial</a></li>
              <li><a href="/#tekbond" className="footer-link">Tekbond Químicos</a></li>
              <li><a href="/#contato" className="footer-link">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Atendimento Comercial
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 700 }}>
                  WhatsApp / Televendas:
                </div>
                <a 
                  href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de falar com o atendimento comercial.')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}
                >
                  <MessageSquare size={14} />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 700 }}>
                  Horário:
                </div>
                <div style={{ color: '#e5e7eb', fontSize: '0.82rem' }}>
                  Segunda a Sexta: 08:00 às 18:00
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 700 }}>
                  Logística:
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                  Envio para todo o Brasil via transportadoras e Correios.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1f2937',
          paddingTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '0.76rem'
        }}>
          <div>
            &copy; 2026 <strong>M11 Tools</strong>. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#9ca3af',
              background: '#1f2937',
              padding: '4px 8px',
              borderRadius: '2px',
              fontSize: '0.76rem'
            }}
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={11} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 28px;
        }
        .footer-link {
          color: #9ca3af;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #ffffff !important;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </footer>
  );
}
