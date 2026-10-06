'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileText 
} from 'lucide-react';

const CONTACT_PHONE = '(11) 97293-1840';
const WHATSAPP_RAW = '5511972931840';

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

    // Format WhatsApp message with details
    let msg = `*SOLICITAÇÃO DE COTAÇÃO - SITE M11 TOOLS*\n\n`;
    msg += `*Nome:* ${formData.name}\n`;
    if (formData.company) msg += `*Empresa/CNPJ:* ${formData.company}\n`;
    if (formData.phone) msg += `*Telefone:* ${formData.phone}\n`;
    if (formData.email) msg += `*E-mail:* ${formData.email}\n`;
    msg += `\n*Necessidade/Itens Desejados:*\n${formData.message}\n`;

    const url = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(msg)}`;
    
    // Open WhatsApp in new tab after 600ms
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section id="contato" style={{ padding: '54px 0', position: 'relative', width: '100%' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-card">
            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: 'var(--brand-red)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Atendimento Comercial
              </span>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '6px',
                marginBottom: '12px'
              }}>
                Fale com a M11 Tools
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px', fontSize: '0.92rem' }}>
                Precisa de uma cotação para sua indústria, oficina ou revenda? Fale com a gente pelo WhatsApp ou telefone.
              </p>

              {/* Channels */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW}?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20atendimento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-channel-btn"
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase' }}>
                      WhatsApp Direto
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                      {CONTACT_PHONE}
                    </div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-red)',
                    flexShrink: 0
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Horário de Funcionamento
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                      Segunda a Sexta: 08:00 às 18:00
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4da6ff',
                    flexShrink: 0
                  }}>
                    <FileText size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Atendimento B2B & PJ
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                      Faturamento em boleto e envio de planilhas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              padding: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}>
              Distribuímos a linha completa <strong>Gedore</strong> e <strong>Tekbond</strong> com entrega rápida em todo o Brasil.
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Solicitar Proposta Comercial
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '18px' }}>
              Preencha os campos abaixo para receber a cotação com condições para sua empresa.
            </p>

            {submitted ? (
              <div style={{
                padding: '24px 16px',
                textAlign: 'center',
                background: 'rgba(0, 166, 81, 0.1)',
                border: '1px solid rgba(0, 166, 81, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CheckCircle2 size={38} color="#00a651" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Solicitação Enviada!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Abrindo o atendimento no WhatsApp para envio imediato dos dados à nossa equipe...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '8px', padding: '10px 16px', fontSize: '0.85rem' }}
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="form-row">
                  <div>
                    <label className="form-label">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Empresa ou CNPJ (Opcional)</label>
                    <input
                      type="text"
                      placeholder="Ex: Mecânica Silva Ltda"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label className="form-label">WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">E-mail Corporativo</label>
                    <input
                      type="email"
                      placeholder="compras@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Itens Desejados ou Códigos *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Ferramentas ou químicos necessários, quantidades ou códigos Gedore/Tekbond..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '13px' }}
                >
                  <Send size={16} />
                  <span>Enviar Solicitação de Cotação</span>
                </button>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Sua solicitação é direcionada ao nosso WhatsApp para resposta em minutos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .contact-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }
        .whatsapp-channel-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(37, 211, 102, 0.08);
          border: 1px solid rgba(37, 211, 102, 0.25);
          border-radius: var(--radius-md);
          transition: all 0.2s;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .form-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 5px;
        }
        .form-input {
          width: 100%;
          background: var(--bg-main);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 11px 12px;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--brand-red);
        }

        @media (min-width: 600px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 28px;
          }
          .contact-card {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}
