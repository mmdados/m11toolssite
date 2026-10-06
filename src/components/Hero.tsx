'use client';

import React from 'react';
import Image from 'next/image';
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
      paddingTop: '40px',
      paddingBottom: '60px',
      overflow: 'hidden',
    }}>
      {/* Background radial highlight */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(229, 36, 42, 0.15) 0%, rgba(0, 91, 170, 0.08) 45%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Headlines & CTAs */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(229, 36, 42, 0.12)',
              border: '1px solid rgba(229, 36, 42, 0.3)',
              borderRadius: '999px',
              padding: '6px 14px',
              marginBottom: '20px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--brand-red)',
                boxShadow: '0 0 10px var(--brand-red)'
              }} />
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#ff6b6b',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Distribuidores Oficiais Gedore & Tekbond
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}>
              Potência, Precisão e Produtividade para a sua Indústria e Oficina.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '560px'
            }}>
              Na <strong style={{ color: '#ffffff' }}>M11 Tools</strong> você encontra a linha completa de ferramentas profissionais 
              <strong style={{ color: '#ff6b6b' }}> Gedore Red</strong>, <strong style={{ color: '#4da6ff' }}> Gedore Industrial</strong> e os químicos industriais 
              <strong style={{ color: '#4ade80' }}> Tekbond</strong>. Atendimento ágil, cotações corporativas e faturamento para CNPJ.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '36px'
            }}>
              <a
                href="https://wa.me/5511972931840?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20especial%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp pulse-whatsapp"
                style={{ fontSize: '1rem', padding: '14px 28px' }}
              >
                <MessageSquare size={20} />
                <span>Solicitar Cotação no WhatsApp</span>
              </a>

              <a
                href="#catalogo"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '14px 24px' }}
              >
                <span>Explorar Catálogo</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--brand-red)" />
                <span>Linha 100% Original de Fábrica</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#00a651" />
                <span>Faturamento em Boleto para PJ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={16} color="#4da6ff" />
                <span>Despacho Rápido para Todo o Brasil</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#f59e0b" />
                <span>Garantia e Assistência Direta</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 36, 42, 0.2)',
              background: 'var(--bg-surface)'
            }}>
              <Image
                src="/images/hero-tools.jpg"
                alt="Ferramentas Gedore e Químicos Tekbond - M11tools"
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.4s ease'
                }}
                priority
              />

              {/* Floating Badge on Image */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(11, 15, 23, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                    Linha em Destaque
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
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
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  Ver Itens <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
