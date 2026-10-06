'use client';

import React from 'react';
import Image from 'next/image';
import { buildWhatsAppUrl } from '@/config/site';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  FileText 
} from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '24px',
      paddingBottom: '48px',
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Background radial highlight - constrained */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '700px',
        height: '350px',
        background: 'radial-gradient(ellipse at center, rgba(229, 36, 42, 0.15) 0%, rgba(0, 91, 170, 0.08) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Headlines & CTAs */}
          <div className="hero-text-col">
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(229, 36, 42, 0.12)',
              border: '1px solid rgba(229, 36, 42, 0.3)',
              borderRadius: '999px',
              padding: '5px 12px',
              marginBottom: '16px',
              maxWidth: '100%'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--brand-red)',
                boxShadow: '0 0 8px var(--brand-red)',
                flexShrink: 0
              }} />
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#ff6b6b',
                textTransform: 'uppercase',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                Distribuidores Oficiais Gedore & Tekbond
              </span>
            </div>

            <h1 className="hero-heading">
              Potência, Precisão e Produtividade para a sua Indústria e Oficina.
            </h1>

            <p className="hero-description">
              Na <strong style={{ color: '#ffffff' }}>M11 Tools</strong> você encontra a linha completa 
              <strong style={{ color: '#ff6b6b' }}> Gedore Red</strong>, <strong style={{ color: '#4da6ff' }}> Gedore Blue Industrial</strong> e químicos 
              <strong style={{ color: '#4ade80' }}> Tekbond</strong>. Atendimento ágil e faturamento para CNPJ.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a
                href={buildWhatsAppUrl('Olá M11tools! Gostaria de solicitar uma cotação especial para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp pulse-whatsapp hero-btn"
              >
                <MessageSquare size={18} />
                <span>Solicitar Cotação no WhatsApp</span>
              </a>

              <a
                href="#catalogo"
                className="btn-secondary hero-btn"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={16} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span>Linha 100% Original de Fábrica</span>
              </div>
              <div className="highlight-item">
                <FileText size={16} color="#00a651" style={{ flexShrink: 0 }} />
                <span>Faturamento em Boleto para PJ</span>
              </div>
              <div className="highlight-item">
                <Truck size={16} color="#4da6ff" style={{ flexShrink: 0 }} />
                <span>Despacho Rápido para Todo o Brasil</span>
              </div>
              <div className="highlight-item">
                <ShieldCheck size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span>Garantia e Assistência de Fábrica</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="hero-img-col">
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 25px rgba(229, 36, 42, 0.2)',
              background: 'var(--bg-surface)'
            }}>
              <Image
                src="/images/hero-tools.jpg"
                alt="Ferramentas Gedore e Químicos Tekbond - M11tools"
                width={700}
                height={420}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                priority
              />

              {/* Floating Badge on Image */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                right: '10px',
                background: 'rgba(11, 15, 23, 0.9)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Linha em Destaque
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                    Gedore Red & Tekbond Químicos
                  </div>
                </div>

                <a
                  href="#catalogo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#ff6b6b',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  Ver Catálogo <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        .hero-heading {
          font-size: clamp(1.8rem, 6vw, 3.2rem);
          font-weight: 800;
          line-height: 1.18;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .hero-description {
          font-size: clamp(0.95rem, 3.5vw, 1.15rem);
          line-height: 1.55;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }
        .hero-btn {
          width: 100%;
          font-size: 0.95rem;
          padding: 13px 20px;
        }
        .hero-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (min-width: 600px) {
          .hero-cta-group {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .hero-btn {
            width: auto;
          }
          .hero-highlights {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
