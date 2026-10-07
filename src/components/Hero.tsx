'use client';

import React from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/config/site';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  FileText,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '32px 0 24px',
      width: '100%'
    }}>
      <div className="container">
        {/* Top Header Information */}
        <div style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#fee2e2',
            border: '1px solid #fca5a5',
            borderRadius: '2px',
            padding: '3px 8px',
            marginBottom: '12px'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#e5242a', display: 'inline-block' }} />
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#b91c1c',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              M11 Tools • Distribuição Comercial
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.25,
            marginBottom: '10px',
            letterSpacing: '-0.3px'
          }}>
            Ferramentas Profissionais & Químicos de Alta Performance
          </h1>

          <p style={{
            fontSize: '0.96rem',
            color: '#4b5563',
            lineHeight: 1.55,
            marginBottom: '20px'
          }}>
            Linha completa e 100% original das marcas líderes <strong>Gedore Red</strong>, <strong>Gedore Industrial</strong> e <strong>Tekbond</strong>. Atendimento técnico especializado, despacho ágil e faturamento direto para empresas (PJ).
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href="#catalogo"
              className="btn-primary"
              style={{ padding: '11px 20px', fontSize: '0.9rem' }}
            >
              <span>Ver Catálogo de Produtos</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de consultar preços e faturamento para minha empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '11px 20px', fontSize: '0.9rem' }}
            >
              <MessageSquare size={16} />
              <span>Cotação Imediata no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 3 Pillars Flat Bar (Estilo Tekbond) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid #f3f4f6'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#e5242a" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111827' }}>Linha 100% Original</div>
              <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>Gedore Red, Gedore Blue & Tekbond</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} color="#00a651" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111827' }}>Faturamento PJ</div>
              <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>Boleto faturado para empresas com CNPJ</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={18} color="#005baa" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111827' }}>Pronta Entrega</div>
              <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>Envio rápido via transportadoras e Correios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
