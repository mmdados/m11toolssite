'use client';

import React, { useState } from 'react';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '18px',
      right: '18px',
      zIndex: 99,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      pointerEvents: 'none'
    }}>
      {/* Tooltip bubble on desktop */}
      <div style={{
        background: 'var(--bg-surface)',
        color: '#ffffff',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-full)',
        padding: '6px 14px',
        boxShadow: 'var(--shadow-md)',
        fontSize: '0.8rem',
        fontWeight: 700,
        display: hovered ? 'flex' : 'none',
        alignItems: 'center',
        gap: '6px',
        whiteSpace: 'nowrap',
        pointerEvents: 'auto',
      }} className="hide-on-mobile">
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25d366' }} />
        <span>WhatsApp {SITE_CONFIG.phoneDisplay}</span>
      </div>

      {/* Button */}
      <a
        href={buildWhatsAppUrl('Olá M11tools! Gostaria de um atendimento rápido.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          pointerEvents: 'auto',
        }}
        className="pulse-whatsapp"
        aria-label="Atendimento WhatsApp M11 Tools"
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
}
