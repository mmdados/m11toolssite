'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const WHATSAPP_RAW = '5511972931840';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 99,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      {/* Tooltip bubble */}
      <div style={{
        background: 'var(--bg-surface)',
        color: '#ffffff',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-full)',
        padding: '8px 16px',
        boxShadow: 'var(--shadow-md)',
        fontSize: '0.85rem',
        fontWeight: 700,
        display: hovered ? 'flex' : 'none',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap',
        animation: 'fadeIn 0.2s ease'
      }} className="whatsapp-tooltip">
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25d366' }} />
        <span>Fale no WhatsApp (11) 97293-1840</span>
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_RAW}?text=Ol%C3%A1%20M11tools!%20Gostaria%20de%20um%20atendimento%20r%C3%A1pido.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        className="pulse-whatsapp"
        aria-label="Atendimento WhatsApp M11 Tools"
      >
        <MessageSquare size={30} />
      </a>
    </div>
  );
}
