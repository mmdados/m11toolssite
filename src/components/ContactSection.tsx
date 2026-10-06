'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
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
    
    // Open WhatsApp in new tab after 800ms
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section id="contato" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {/* Left: Contact Info & Channels */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--brand-red)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Atendimento Comercial
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '16px'
              }}>
                Fale com a M11 Tools
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px', fontSize: '0.98rem' }}>
                Precisa de uma cotação para sua indústria, oficina ou revenda? Entre em contato agora mesmo pelo WhatsApp ou telefone.
              </p>

              {/* Contact list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW}?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20atendimento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s'
                  }}
                  className="contact-channel"
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#25d366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase' }}>
                      WhatsApp Direto
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                      {CONTACT_PHONE}
                    </div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-red)'
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Horário de Funcionamento
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                      Segunda a Sexta: 08:00 às 18:00
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4da6ff'
                  }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Atendimento B2B & CNPJ
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                      Envio de planilhas e ordens de compra
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              Distribuímos a linha completa de ferramentas <strong>Gedore</strong> e químicos <strong>Tekbond</strong> para oficinas, indústrias e frotistas em todo o Brasil.
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Solicitar Proposta Comercial
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Preencha os campos abaixo e nosso consultor responderá com a cotação detalhada.
            </p>

            {submitted ? (
              <div style={{
                padding: '30px 20px',
                textAlign: 'center',
                background: 'rgba(0, 166, 81, 0.1)',
                border: '1px solid rgba(0, 166, 81, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}>
                <CheckCircle2 size={44} color="#00a651" />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Solicitação Enviada com Sucesso!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Abrindo o atendimento no WhatsApp para envio imediato dos dados à nossa equipe comercial...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '12px' }}
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Empresa ou CNPJ (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Mecânica Silva Ltda"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      placeholder="compras@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-main)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '11px 14px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Itens Desejados, Códigos ou Dúvida *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva as ferramentas ou químicos necessários, quantidades ou códigos específicos Gedore/Tekbond..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 14px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', marginTop: '8px' }}
                >
                  <Send size={18} />
                  <span>Enviar Solicitação de Cotação</span>
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Ao enviar, sua solicitação será direcionada ao nosso atendimento no WhatsApp para resposta ágil.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-channel:hover {
          background: rgba(37, 211, 102, 0.15) !important;
          border-color: #25d366 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
