'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Catalog from '@/components/Catalog';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuoteDrawer from '@/components/QuoteDrawer';
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
      <Navbar onSearchFocus={handleSearchFocus} />
      
      <main style={{ minHeight: '80vh', background: '#ffffff' }}>
        <Catalog 
          selectedBrand={selectedBrand} 
          onBrandChange={setSelectedBrand} 
          searchInputRef={searchInputRef}
        />
        <ContactSection />
      </main>

      <Footer />
      <QuoteDrawer />
      <WhatsAppButton />
    </>
  );
}
