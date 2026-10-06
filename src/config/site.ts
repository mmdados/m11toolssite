/**
 * CONFIGURAÇÃO CENTRALIZADA E PROTEGIDA - M11 TOOLS
 * 
 * Este arquivo é a ÚNICA fonte de verdade para os contatos, links de vendas,
 * canais de WhatsApp e Mercado Livre de todo o site.
 * 
 * Qualquer alteração no número ou loja deve ser feita EXCLUSIVAMENTE aqui.
 */

export const SITE_CONFIG = Object.freeze({
  companyName: 'M11 Tools',
  tagline: 'Distribuidora Oficial Gedore & Tekbond',
  
  // Contato Oficial (Lucas / Comercial)
  phoneRaw: '5511972931840',
  phoneDisplay: '(11) 97293-1840',
  phoneTel: 'tel:11972931840',

  // Horário Oficial
  openingHours: 'Segunda a Sexta: 08:00 às 18:00',

  // Domínio Oficial
  domain: 'https://m11tools.com.br',

  // Loja / Perfil Oficial no Mercado Livre
  // Se o produto tiver um link direto no cadastro, usa o direto.
  // Caso contrário, busca os anúncios da M11tools ou o código específico no Mercado Livre.
  mercadoLivreBaseUrl: 'https://lista.mercadolivre.com.br',
  mercadoLivreStoreQuery: 'm11tools',
});

/**
 * Gera URL segura do WhatsApp oficial com mensagem pré-formatada
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${cleanMessage}`;
}

/**
 * Gera URL segura para o anúncio ou busca no Mercado Livre
 */
export function buildMercadoLivreUrl(product: { name: string; code: string; mercadoLivreUrl?: string }): string {
  if (product.mercadoLivreUrl && product.mercadoLivreUrl.startsWith('http')) {
    return product.mercadoLivreUrl;
  }
  // Gera busca direta no Mercado Livre priorizando o código oficial da ferramenta
  const query = encodeURIComponent(`gedore ${product.code}`);
  return `https://lista.mercadolivre.com.br/${query}#D[A:${query}]`;
}
