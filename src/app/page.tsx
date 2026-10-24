'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BrandCards from '@/components/BrandCards';
import Catalog from '@/components/Catalog';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import QuoteDrawer from '@/components/QuoteDrawer';
import { Brand, Category } from '@/types';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sincroniza filtros com os parâmetros da URL no carregamento inicial
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const marcaParam = params.get('marca') || params.get('brand');
    const catParam = params.get('categoria') || params.get('category');
    const buscaParam = params.get('busca') || params.get('q');

    if (marcaParam && ['gedore-red', 'gedore-blue', 'gedore-robust', 'tekbond', 'all'].includes(marcaParam)) {
      setSelectedBrand(marcaParam as Brand | 'all');
    }
    if (catParam && ['jogos-ferramentas', 'soquetes-chaves', 'maletas-carrinhos', 'automotivo', 'all'].includes(catParam)) {
      setSelectedCategory(catParam as Category | 'all');
    }
    if (buscaParam) {
      setSearchTerm(buscaParam);
    }

    if (marcaParam || catParam || buscaParam || window.location.hash === '#catalogo') {
      setTimeout(() => {
        const el = document.getElementById('catalogo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  // Atualiza os parâmetros na barra de endereços sem recarregar a página
  const updateUrlParams = (brand: Brand | 'all', cat: Category | 'all', search: string) => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (brand !== 'all') params.set('marca', brand);
    if (cat !== 'all') params.set('categoria', cat);
    if (search.trim()) params.set('busca', search.trim());

    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  };

  const handleBrandChange = (brand: Brand | 'all') => {
    setSelectedBrand(brand);
    updateUrlParams(brand, selectedCategory, searchTerm);
  };

  const handleCategoryChange = (cat: Category | 'all') => {
    setSelectedCategory(cat);
    updateUrlParams(selectedBrand, cat, searchTerm);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    updateUrlParams(selectedBrand, selectedCategory, term);
  };

  return (
    <>
      <Navbar 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSelectBrand={handleBrandChange}
        selectedBrand={selectedBrand}
      />
      
      <main style={{ minHeight: '80vh', background: '#ffffff' }}>
        {/* Linhas Oficiais com os 4 Logos das Marcas */}
        <BrandCards 
          selectedBrand={selectedBrand} 
          onSelectBrand={handleBrandChange} 
        />

        {/* Vitrine de Produtos & Menu Lateral com Carousel e Filtros */}
        <Catalog 
          selectedBrand={selectedBrand} 
          onBrandChange={handleBrandChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        
        <ContactSection />
      </main>

      <QuoteDrawer />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
