import { Product } from '@/types';

export const BRANDS = [
  { 
    id: 'all', 
    label: 'Todas as Linhas',
    color: '#0f172a',
    logo: '',
    tagline: 'Todas as Marcas Oficiais',
    description: 'Catálogo completo M11 Tools com ferramentas e químicos industriais.'
  },
  { 
    id: 'gedore-red', 
    label: 'Gedore Red', 
    color: '#e5242a',
    logo: '/images/logos/gedore-red.png',
    tagline: 'Linha Automotiva & Oficinas',
    description: 'Jogos de soquetes, catracas de alta velocidade e ferramentas forjadas em aço Cromo-Vanádio.'
  },
  { 
    id: 'gedore-blue', 
    label: 'Gedore Industrial', 
    color: '#005baa',
    logo: '/images/logos/gedore-blue.jpg',
    tagline: 'Linha Industrial de Alta Precisão',
    description: 'Torquímetros de precisão, chaves industriais e aperto crítico para alta performance.'
  },
  { 
    id: 'gedore-robust', 
    label: 'Robust', 
    color: '#ea580c',
    logo: '/images/logos/gedore-robust.jpeg',
    tagline: 'Linha Robust / Grupo Gedore',
    description: 'Robustez, ergonomia e excelente durabilidade para aplicações pesadas.'
  },
  { 
    id: 'tekbond', 
    label: 'Tekbond', 
    color: '#00a651',
    logo: '/images/logos/tekbond.png',
    tagline: 'Adesivos & Químicos Industriais',
    description: 'Adesivos instantâneos, trava-roscas anaeróbicos, silicones e sprays técnicos.'
  },
] as const;

export const CATEGORIES = [
  { id: 'all', label: 'Todas as Categorias', count: 1 },
  { id: 'jogos-ferramentas', label: 'Jogos de Ferramentas', count: 1 },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'r46023100',
    name: 'R46023100 JOGO DE FERRAMENTAS 100 Peças',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    itemType: 'jogo',
    itemTypeLabel: 'Jogo',
    category: 'jogos-ferramentas',
    categoryLabel: 'Jogos de Ferramentas',
    code: 'R46023100',
    technicalCode: '3300246',
    description: 'Um mix completo de ferramentas: Chaves combinadas com catraca, alicates, martelo, chaves de fenda, soquetes e muito mais!',
    detailedDescription: 'O Jogo de Ferramentas GEDORE red R46023100 (Código 3300246) com 100 peças reúne a versatilidade, a resistência e a precisão exigidas por mecânicos profissionais, centros automotivos, indústrias e manutenções em geral. Desenvolvido para suprir uma ampla gama de aplicações de aperto e fixação, o jogo conta com soquetes sextavados de 1/2" e 1/4", catracas reversíveis de troca rápida, chaves combinadas com catraca integrada, alicates ergonômicos, chaves de fenda simples e cruzadas, jogo de pontas bits e martelo pena de 500g, tudo devidamente acomodado em uma maleta plástica antichoque com travas metálicas reforçadas.',
    composition: [
      'Soquetes 1/2” sextavados: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32 mm',
      'Catraca reversível 1/2” com botão de desengate rápido',
      'Extensões 1/2”: 125 e 250 mm',
      'Corpo para cabo T 1/2” com adaptador 3/8” x 1/2”',
      'Junta universal 1/2”',
      'Soquetes 1/4” sextavados: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13 mm',
      'Catraca reversível 1/4” com botão de desengate rápido',
      'Extensões 1/4”: 50 e 100 mm',
      'Cabo T 1/4” (105 mm)',
      'Junta universal 1/4”',
      'Cabo com quadrado 1/4”',
      'Bits 1/4” hexagonais: 3, 4, 5, 6, 8 mm',
      'Bits 1/4” fenda simples: 4, 5.5, 7 mm',
      'Bits 1/4” fenda cruzada PH: 0, 1, 2, 3',
      'Bits 1/4” fenda cruzada PZ: 0, 1, 2, 3',
      'Bits 1/4” TX: T8, T10, T15, T20, T25, T27, T30, T40',
      'Adaptador para bits 1/4” x 1/4”',
      'Chaves combinadas com catraca: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm',
      'Chaves L hexagonais: 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10 mm',
      'Chave ajustável 250 mm (10”) com escala milimétrica',
      'Chaves de fenda simples: 4, 5.5, 6.5 mm',
      'Chaves de fenda cruzada PH: 1, 2, 3',
      'Alicate de corte diagonal 160 mm',
      'Alicate tipo telefone reto 160 mm',
      'Alicate bomba d‘água 250 mm',
      'Martelo pena 500g'
    ],
    technicalSpecs: {
      codigoGedore: '3300246',
      referencia: 'R46023100',
      comprimentoMaleta: '525 mm',
      larguraMaleta: '380 mm',
      alturaMaleta: '110 mm',
      pecas: '100',
      pesoKg: '11 kg'
    },
    specs: [
      'Código GEDORE: 3300246',
      'Referência: R46023100',
      'Quantidade de peças: 100 peças',
      'Comprimento da maleta: 525 mm',
      'Largura da maleta: 380 mm',
      'Altura da maleta: 110 mm',
      'Peso total: 11 kg',
      'Encaixes: 1/2" e 1/4"',
      'Aço Cromo-Vanádio GEDORE red com acabamento acetinado fosco',
      'Maleta plástica em polietileno com design GEDORE red e fechos metálicos'
    ],
    properties: [
      'Aço Cromo-Vanádio GEDORE red de alta resistência mecânica contra torção e impacto',
      'Catracas reversíveis de acionamento macio com botão de alívio rápido de soquetes',
      'Chaves combinadas com catraca de precisão que agilizam o trabalho em locais de difícil acesso',
      'Perfil sextavado Unit Drive com alívio nos vértices, transmitindo o torque nas faces planas do parafuso',
      'Maleta reforçada e organizada com marcação em relevo de cada medida para rápido controle visual'
    ],
    instructions: [
      'Utilize sempre a ferramenta de medida exata correspondente ao fixador.',
      'Não utilize prolongadores tubulares como alavanca sobre catracas ou chaves combinadas.',
      'Após o uso em contato com óleo ou graxa, limpe as peças com pano macio e seco antes de guardar.',
      'Mantenha as ferramentas encaixadas em seus berços na maleta para conservação e transporte seguro.'
    ],
    image: '/images/products/r46023100-1.png',
    images: [
      '/images/products/r46023100-1.png',
      '/images/products/r46023100-2.jpg',
      '/images/products/r46023100-3.jpg',
      '/images/products/r46023100-4.jpg',
      '/images/products/r46023100-tabela.png'
    ],
    featured: true,
    application: 'Automotivo, Oficinas Mecânicas, Linha Pesada e Manutenção Geral',
    priceFormatted: 'Consulte Valor'
  }
];
