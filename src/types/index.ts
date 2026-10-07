export type Brand = 'gedore-red' | 'gedore-blue' | 'tekbond';

export type Category = 
  | 'soquetes-chaves'
  | 'torquimetros'
  | 'alicates'
  | 'maletas-carrinhos'
  | 'adesivos-quimicos'
  | 'selantes-silicones'
  | 'sprays-lubrificantes';

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  brandLabel: string;
  category: Category;
  categoryLabel: string;
  code: string; // Part number / SKU
  description: string;
  detailedDescription?: string;
  properties?: string[];
  specs: string[];
  instructions?: string[];
  image: string; // Main image
  images: string[]; // Multiple gallery images (FuelTech style)
  featured?: boolean;
  application: string;
  mercadoLivreUrl?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}
