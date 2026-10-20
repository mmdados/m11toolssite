'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import BrandCards from '@/components/BrandCards';
import Catalog from '@/components/Catalog';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Brand } from '@/types';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | 'all'>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInputRef.current.focus();
    }
  };

  return (
    <>
      <Navbar 
        onSearchFocus={handleSearchFocus} 
        onSelectBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
      />
      
      <main style={{ minHeight: '80vh', background: '#ffffff' }}>
        {/* Linhas Oficiais com os 4 Logos das Marcas */}
        <BrandCards 
          selectedBrand={selectedBrand} 
          onSelectBrand={setSelectedBrand} 
        />

        {/* Itens Mais Buscados com Menu Lateral para PC e Layout Padrão de Loja */}
        <Catalog 
          selectedBrand={selectedBrand} 
          onBrandChange={setSelectedBrand} 
          searchInputRef={searchInputRef}
        />
        
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
