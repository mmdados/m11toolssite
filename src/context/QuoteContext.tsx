'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, QuoteItem } from '@/types';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/config/site';

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (product: Product, qty?: number) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearQuote: () => void;
  totalItems: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  generateWhatsAppLink: (customerName?: string, customerCompany?: string) => string;
  generateDirectProductWhatsAppLink: (product: Product) => string;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('m11tools_quote_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('m11tools_quote_cart', JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, isMounted]);

  const addToQuote = (product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromQuote = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromQuote(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppLink = (customerName?: string, customerCompany?: string) => {
    let message = `*SOLICITAÇÃO DE COTAÇÃO - M11 TOOLS*\n`;
    message += `Olá! Gostaria de receber uma cotação para os itens abaixo:\n\n`;

    if (customerName) {
      message += `*Nome:* ${customerName}\n`;
    }
    if (customerCompany) {
      message += `*Empresa/CNPJ:* ${customerCompany}\n`;
    }
    message += `------------------------------------\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *[${item.product.brandLabel}]* ${item.product.name}\n`;
      message += `   Cód/Ref: ${item.product.code}\n`;
      message += `   Quantidade: *${item.quantity} unidade(s)*\n\n`;
    });

    message += `------------------------------------\n`;
    message += `Por favor, informar valores com impostos, prazo de entrega e condições de faturamento.`;

    return buildWhatsAppUrl(message);
  };

  const generateDirectProductWhatsAppLink = (product: Product) => {
    const message = `*COTAÇÃO RÁPIDA - M11 TOOLS*\nOlá! Tenho interesse no seguinte item do catálogo:\n\n*Item:* ${product.name}\n*Marca:* ${product.brandLabel}\n*Código:* ${product.code}\n\nPoderia me informar o valor e disponibilidade?`;
    return buildWhatsAppUrl(message);
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        totalItems,
        isDrawerOpen,
        setIsDrawerOpen,
        generateWhatsAppLink,
        generateDirectProductWhatsAppLink,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
