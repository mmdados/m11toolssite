export type Brand = 'gedore-red' | 'gedore-blue' | 'tekbond';

export type ItemType = 'jogo' | 'peca';

export type Category = 
  | 'jogos-ferramentas'
  | 'soquetes-chaves'
  | 'torquimetros'
  | 'alicates'
  | 'maletas-carrinhos'
  | 'adesivos-quimicos'
  | 'selantes-silicones'
  | 'sprays-lubrificantes';

export interface TechnicalTableSpecs {
  codigoGedore: string;
  referencia: string;
  comprimentoMaleta: string;
  larguraMaleta: string;
  alturaMaleta: string;
  pecas: number | string;
  pesoKg: number | string;
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  brandLabel: string;
  itemType: ItemType;
  itemTypeLabel: string;
  category: Category;
  categoryLabel: string;
  code: string; // Part number / SKU / Referência
  technicalCode?: string; // Código técnico (ex: 3300246)
  description: string;
  detailedDescription?: string;
  composition?: string[];
  properties?: string[];
  specs: string[];
  technicalSpecs?: TechnicalTableSpecs;
  instructions?: string[];
  image: string; // Main image
  images: string[]; // Multiple gallery images (FuelTech style)
  featured?: boolean;
  application: string;
  price?: number;
  priceFormatted?: string;
  mercadoLivreUrl?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}
