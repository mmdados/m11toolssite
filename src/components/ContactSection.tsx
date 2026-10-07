'use client';

import React, { useState } from 'react';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileText,
  Phone
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    let msg = `*SOLICITAÇÃO DE COTAÇÃO - M11 TOOLS*\n\n`;
    msg += `*Nome:* ${formData.name}\n`;
    if (formData.company) msg += `*Empresa/CNPJ:* ${formData.company}\n`;
    if (formData.phone) msg += `*Telefone:* ${formData.phone}\n`;
    if (formData.email) msg += `*E-mail:* ${formData.email}\n`;
    msg += `\n*Necessidade/Itens Desejados:*\n${formData.message}\n`;

    const url = buildWhatsAppUrl(msg);
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section id="contato" style={{ padding: '40px 0 60px', background: '#f9fafb', borderTop: '1px solid #e5e7eb', width: '100%' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-card">
            <div>
              <span style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#e5242a',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Atendimento Comercial & PJ
              </span>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                fontWeight: 800,
                color: '#111827',
                marginTop: '4px',
                marginBottom: '10px'
              }}>
                Fale com a M11 Tools
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.5, marginBottom: '20px', fontSize: '0.9rem' }}>
                Solicite cotações em lote, faturamento para empresas (PJ) ou tire dúvidas técnicas sobre as linhas Gedore e Tekbond.
              </p>

              {/* Channels */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <a
                  href={buildWhatsAppUrl('Olá M11 Tools! Gostaria de falar com o departamento comercial.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-channel-btn"
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '2px',
                    background: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 700, textTransform: 'uppercase' }}>
                      WhatsApp Direto
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827' }}>
                      {SITE_CONFIG.phoneDisplay}
                    </div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '2px' }}>
                  <Clock size={16} color="#4b5563" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase' }}>
                      Horário de Funcionamento
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827' }}>
                      Segunda a Sexta, das 08h às 18h
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '2px' }}>
                  <FileText size={16} color="#e5242a" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase' }}>
                      Faturamento para Empresas
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827' }}>
                      Boleto bancário a prazo para CNPJ cadastrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Quote Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
              Solicitar Cotação Rápida
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.84rem', marginBottom: '16px' }}>
              Preencha os dados abaixo e o orçamento será gerado diretamente no WhatsApp da M11 Tools.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                    Empresa / CNPJ
                  </label>
                  <input
                    type="text"
                    placeholder="Razão Social / CNPJ"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                  Itens ou Ferramentas Desejadas *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Ex: Jogo de Soquetes 172 peças Gedore Red, 10 frascos Tekbond 793..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '4px' }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Abrindo WhatsApp Comercial...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar Cotação para a M11 Tools</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
