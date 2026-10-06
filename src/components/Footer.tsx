'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#070a0f',
      borderTop: '1px solid var(--border-medium)',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
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
              marginBottom: '18px'
            }}>
              <Image 
                src="/logo.jpg" 
                alt="M11 Tools - Distribuidora Gedore e Tekbond" 
                width={150} 
                height={40} 
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '0.88rem' }}>
              Distribuição e fornecimento de ferramentas industriais e químicas de alta performance. 
              Especialistas em linhas Gedore Red, Gedore Blue e Tekbond com atendimento corporativo e faturamento B2B.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00a651', fontSize: '0.82rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Garantia de Fábrica & Procedência 100% Original</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Navegação Rápida
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#catalogo" style={{ transition: 'color 0.2s' }} className="footer-link">Catálogo de Produtos</a></li>
              <li><a href="#gedore-red" style={{ transition: 'color 0.2s' }} className="footer-link">Linha Gedore Red</a></li>
              <li><a href="#gedore-blue" style={{ transition: 'color 0.2s' }} className="footer-link">Gedore Industrial / Blue</a></li>
              <li><a href="#tekbond" style={{ transition: 'color 0.2s' }} className="footer-link">Linha Tekbond Químicos</a></li>
              <li><a href="#diferenciais" style={{ transition: 'color 0.2s' }} className="footer-link">Faturamento PJ & Benefícios</a></li>
              <li><a href="#contato" style={{ transition: 'color 0.2s' }} className="footer-link">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Lines & Categories */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Principais Soluções
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>Jogos de Soquetes & Catracas</li>
              <li>Torquímetros de Estalo & Relógio</li>
              <li>Chaves Combinadas & Estrela</li>
              <li>Alicates Isolados 1000V & Universais</li>
              <li>Adesivos Instantâneos Tekbond (793/200)</li>
              <li>Trava-Roscas & Formadores de Juntas</li>
              <li>Sprays Desengripantes & Limpa Contato</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Atendimento Direto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  WhatsApp / Comercial:
                </div>
                <a 
                  href="https://wa.me/5511972931840" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}
                >
                  <MessageSquare size={16} />
                  (11) 97293-1840
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Horário de Atendimento:
                </div>
                <div style={{ color: '#ffffff', fontSize: '0.9rem', marginTop: '2px' }}>
                  Segunda a Sexta: 08:00 às 18:00
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Envio e Entrega:
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>
                  Despacho nacional via transportadoras parceiras e frete dedicado.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            &copy; 2026 <strong>M11 Tools</strong>. Todos os direitos reservados. 
            Distribuidora de ferramentas e produtos químicos industriais.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #ffffff !important;
          transform: translateX(2px);
        }
      `}</style>
    </footer>
  );
}
