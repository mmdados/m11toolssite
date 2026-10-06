import { Product } from '@/types';

export const BRANDS = [
  { id: 'all', label: 'Todas as Marcas' },
  { id: 'gedore-red', label: 'Gedore Red', color: '#e5242a' },
  { id: 'gedore-blue', label: 'Gedore Industrial / Blue', color: '#005baa' },
  { id: 'tekbond', label: 'Tekbond Químicos', color: '#00a651' },
] as const;

export const CATEGORIES = [
  { id: 'all', label: 'Todas as Categorias' },
  { id: 'soquetes-chaves', label: 'Chaves & Soquetes' },
  { id: 'torquimetros', label: 'Torquímetros & Aperto' },
  { id: 'alicates', label: 'Alicates & Corte' },
  { id: 'maletas-carrinhos', label: 'Maletas & Armazenamento' },
  { id: 'adesivos-quimicos', label: 'Adesivos & Trava-Roscas' },
  { id: 'selantes-silicones', label: 'Silicones & Selantes' },
  { id: 'sprays-lubrificantes', label: 'Sprays & Desengraxantes' },
] as const;

export const PRODUCTS: Product[] = [
  // --- GEDORE RED ---
  {
    id: 'gr-jogo-soquetes-172',
    name: 'Jogo de Soquetes e Acessórios 1/4", 3/8" e 1/2" - 172 Peças',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    category: 'maletas-carrinhos',
    categoryLabel: 'Maletas & Armazenamento',
    code: 'R45603172',
    description: 'Composição completa para oficinas mecânicas, centros automotivos e manutenção industrial. Aço cromo-vanádio com acabamento acetinado fosco em maleta plástica antichoque.',
    specs: [
      '172 peças com catracas reversíveis de 72 dentes',
      'Encaixes 1/4", 3/8" e 1/2"',
      'Soquetes sextavados curtos e longos',
      'Bits perfil fenda, phillips, pozidriv, torx e hexagonal',
      'Maleta de polietileno de alta densidade com fecho metálico'
    ],
    image: '/images/gedore-red.jpg',
    featured: true,
    application: 'Automotivo, Linha Pesada, Manutenção Geral'
  },
  {
    id: 'gr-jogo-chaves-combinadas-12',
    name: 'Jogo de Chaves Combinadas 6 a 22mm - 12 Peças',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    category: 'soquetes-chaves',
    categoryLabel: 'Chaves & Soquetes',
    code: 'R09105012',
    description: 'Chaves combinadas com boca e estrela na mesma medida. Perfil Unit Drive com ângulos ergonômicos e acabamento fosco acetinado antideslizante.',
    specs: [
      'Medidas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22mm',
      'Aço Cromo-Vanádio GEDORE Red',
      'Inclinação da cabeça a 15º para melhor ergonomia',
      'Acompanha suporte plástico organizador de bancada'
    ],
    image: '/images/hero-tools.jpg',
    featured: true,
    application: 'Oficinas Mecânicas, Montagens Industriais'
  },
  {
    id: 'gr-torquimetro-estalido-1-2',
    name: 'Torquímetro de Estalo 1/2" (40 a 200 N.m)',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    category: 'torquimetros',
    categoryLabel: 'Torquímetros & Aperto',
    code: 'R68900200',
    description: 'Torquímetro com mecanismo de estalo tátil e sonoro. Precisão rigorosa de ±3% para controle exato de torque no aperto de cabeçotes, rodas e eixos.',
    specs: [
      'Faixa de torque: 40 a 200 N.m (Escala dupla com lbf.pé)',
      'Encaixe quadrado de 1/2" com catraca reversível',
      'Certificado de calibração incluso de fábrica',
      'Trava de empunhadura segura contra desajuste acidental'
    ],
    image: '/images/hero-tools.jpg',
    featured: true,
    application: 'Aperto Crítico Automotivo e Motores'
  },
  {
    id: 'gr-alicate-universal-8',
    name: 'Alicate Universal 8" com Isolação 1000V',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    category: 'alicates',
    categoryLabel: 'Alicates & Corte',
    code: 'R28301008',
    description: 'Alicate universal robusto para corte de arames duros e macios, com empunhadura ergonômica e isolação elétrica certificada para máxima proteção do operador.',
    specs: [
      'Comprimento: 200mm (8")',
      'Norma DIN ISO 5746 com têmpera por indução nas navalhas',
      'Isolação até 1.000V conforme NBR 9699',
      'Aço forjado de alta resistência mecânica'
    ],
    image: '/images/gedore-red.jpg',
    featured: false,
    application: 'Instalações Elétricas, Manutenção Predial e Industrial'
  },
  {
    id: 'gr-carrinho-ferramentas-7-gavetas',
    name: 'Carrinho para Ferramentas 7 Gavetas com Rodas Reforçadas',
    brand: 'gedore-red',
    brandLabel: 'Gedore Red',
    category: 'maletas-carrinhos',
    categoryLabel: 'Maletas & Armazenamento',
    code: 'R20100007',
    description: 'Estrutura em chapa reforçada de aço com pintura eletrostática a pó. Gavetas com trilhos telescópicos de rolamento suave e fechadura central com chave.',
    specs: [
      '7 gavetas deslizantes (5 rasas e 2 profundas)',
      'Capacidade de carga estática de 450 kg',
      '4 rodas giratórias de alta resistência com freio nas frontais',
      'Tampo superior emborrachado para apoio de peças e montagem'
    ],
    image: '/images/gedore-red.jpg',
    featured: true,
    application: 'Oficinas, Concessionárias e Centros de Reparo'
  },

  // --- GEDORE BLUE / INDUSTRIAL ---
  {
    id: 'gb-torquimetro-dremometer-a',
    name: 'Torquímetro Dremometer A 1/2" (20 a 120 N.m) Gedore',
    brand: 'gedore-blue',
    brandLabel: 'Gedore Blue / Industrial',
    category: 'torquimetros',
    categoryLabel: 'Torquímetros & Aperto',
    code: '047.010',
    description: 'O ícone mundial em aperto de precisão da Gedore alemã. Construído com corpo em liga de alumínio de alta resistência para operações industriais contínuas e pesadas.',
    specs: [
      'Faixa de torque: 20 a 120 N.m (Precisão garantida de ±3%)',
      'Corpo em alumínio forjado anodizado azul Gedore',
      'Princípio de alavanca com desarme automático indolor ao pulso',
      'Certificado de calibração RBC rastreável'
    ],
    image: '/images/hero-tools.jpg',
    featured: true,
    application: 'Linha de Montagem Industrial, Indústria Aeroespacial, Óleo & Gás'
  },
  {
    id: 'gb-chave-ajustavel-sueca-12',
    name: 'Chave Ajustável Sueca 12" Gedore Industrial',
    brand: 'gedore-blue',
    brandLabel: 'Gedore Blue / Industrial',
    category: 'soquetes-chaves',
    categoryLabel: 'Chaves & Soquetes',
    code: '028.004',
    description: 'Fabricada em aço Gedore-Vanadium com acabamento niquelado e cromado fosco. Sistema de rosca sem fim retificado de deslizamento suave e precisão milimétrica.',
    specs: [
      'Comprimento nominal: 300mm (12")',
      'Abertura máxima: 36mm',
      'Aço-liga forjado de alta tenacidade contra deformação',
      'Tratamento térmico de ponta para vida útil prolongada'
    ],
    image: '/images/hero-tools.jpg',
    featured: false,
    application: 'Usinagem, Tubulações Industriais, Caldeiraria'
  },
  {
    id: 'gb-alicate-pressao-10',
    name: 'Alicate de Pressão Mordente Curvo 10" Gedore',
    brand: 'gedore-blue',
    brandLabel: 'Gedore Blue / Industrial',
    category: 'alicates',
    categoryLabel: 'Alicates & Corte',
    code: '029.010',
    description: 'Mordentes usinados em aço cromo-vanádio forjado para fixação firme em peças cilíndricas, planas ou sextavadas. Alavanca de liberação com gatilho rápido.',
    specs: [
      'Comprimento: 250mm (10")',
      'Capacidade de abertura: até 48mm',
      'Parafuso de ajuste de pressão com entrada hexagonal para aperto extra',
      'Acabamento niquelado brilhante anticorrosivo'
    ],
    image: '/images/hero-tools.jpg',
    featured: true,
    application: 'Serralheria, Soldagem e Travamento Mecânico'
  },
  {
    id: 'gb-jogo-chaves-allen-l-10',
    name: 'Jogo de Chaves L Hexagonais Abauladas 1,5 a 10mm - 9 Peças',
    brand: 'gedore-blue',
    brandLabel: 'Gedore Blue / Industrial',
    category: 'soquetes-chaves',
    categoryLabel: 'Chaves & Soquetes',
    code: '012.153',
    description: 'Ponta abaulada que permite trabalhar com ângulo de até 25º em parafusos em locais de difícil acesso. Aço Gedore-Vanadium temperado e revenido.',
    specs: [
      'Medidas: 1,5; 2; 2,5; 3; 4; 5; 6; 8 e 10mm',
      'Ponta abaulada esférica para aperto angulado',
      'Suporte plástico inteligente com marcação de medidas',
      'Acabamento escurecido químico de máxima dureza'
    ],
    image: '/images/hero-tools.jpg',
    featured: false,
    application: 'Manutenção de Máquinas, CNC e Ferramentaria'
  },

  // --- TEKBOND QUÍMICOS ---
  {
    id: 'tb-adesivo-instantaneo-793',
    name: 'Adesivo Instantâneo Tekbond 793 - Frasco 100g / 20g',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'adesivos-quimicos',
    categoryLabel: 'Adesivos & Trava-Roscas',
    code: 'TB-793-100G',
    description: 'Adesivo à base de cianoacrilato de média viscosidade e cura ultra-rápida. Adere perfeitamente a borrachas, plásticos, madeiras, metais e cerâmicas em segundos.',
    specs: [
      'Viscosidade média: 80 a 120 cP',
      'Cura inicial: 5 a 20 segundos',
      'Alta resistência à tração e cisalhamento',
      'Bico anti-entupimento de precisão milimétrica'
    ],
    image: '/images/tekbond.jpg',
    featured: true,
    application: 'Linhas de Montagem, Colagens Rápidas, Indústria Moveleira e Manutenção'
  },
  {
    id: 'tb-trava-roscas-alto-torque-177',
    name: 'Trava Roscas Alto Torque Tekbond 177 (Vermelho) - 50g',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'adesivos-quimicos',
    categoryLabel: 'Adesivos & Trava-Roscas',
    code: 'TB-177-50G',
    description: 'Trava química anaeróbica tixotrópica de alta resistência. Impede o desaperto causado por vibração em parafusos, porcas e prisioneiros pesados.',
    specs: [
      'Torque de quebra: 26 a 36 N.m',
      'Temperatura de operação: -60°C até +150°C',
      'Preenche folgas de até 0,25mm',
      'Desmontagem somente com ferramentas manuais pesadas e aquecimento'
    ],
    image: '/images/tekbond.jpg',
    featured: true,
    application: 'Fixação de Parafusos de Motores, Caixas de Engrenagens e Chassi'
  },
  {
    id: 'tb-silicone-neutro-alta-temperatura',
    name: 'Silicone Neutro Formador de Juntas Alta Temp Cinza / Preto - 280g',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'selantes-silicones',
    categoryLabel: 'Silicones & Selantes',
    code: 'TB-SIL-NEUTRO-280G',
    description: 'Silicone oxímico mono-componente livre de solventes. Não oxida sensores e suporta contato contínuo com óleos, fluidos refrigerantes e altas temperaturas.',
    specs: [
      'Resistência contínua: até 260°C (picos até 315°C)',
      'Não corrói peças metálicas nem danifica sensores automotivos',
      'Substitui juntas de cortiça, borracha e feltro',
      'Cartucho 280g compatível com aplicador manual padrão'
    ],
    image: '/images/tekbond.jpg',
    featured: true,
    application: 'Cárteres, Tampas de Válvulas, Caixas de Câmbio e Flanges Industriais'
  },
  {
    id: 'tb-spray-desengripante-400ml',
    name: 'Desengripante Lubrificante Spray Tekbond - 300ml / 400ml',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'sprays-lubrificantes',
    categoryLabel: 'Sprays & Desengraxantes',
    code: 'TB-DESENG-300ML',
    description: 'Spray multiuso de alto poder de penetração. Solta porcas oxidadas, elimina rangidos, repele umidade e forma película anticorrosiva protetora duradoura.',
    specs: [
      'Ação capilar ultrarrápida contra ferrugem e corrosão',
      'Válvula 360° permite aplicação em qualquer posição',
      'Acompanha bico prolongador para locais de difícil alcance',
      'Livre de CFCs e seguro para superfícies pintadas'
    ],
    image: '/images/tekbond.jpg',
    featured: false,
    application: 'Oficinas, Máquinas Agrícolas, Náutica e Indústria Metalúrgica'
  },
  {
    id: 'tb-spray-limpa-contatos-300ml',
    name: 'Spray Limpa Contatos Elétricos e Eletrônicos Tekbond - 300ml',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'sprays-lubrificantes',
    categoryLabel: 'Sprays & Desengraxantes',
    code: 'TB-LIMPA-CONTATO-300',
    description: 'Solvente de secagem instantânea sem resíduos. Remove óleos, poeira, graxas leves e fluxo de solda restaurando a condutividade elétrica.',
    specs: [
      'Secagem ultrarrápida com evaporação total',
      'Não conduz eletricidade (alta rigidez dielétrica)',
      'Seguro para a maioria dos circuitos integrados e relés',
      'Volume líquido: 300ml / 200g'
    ],
    image: '/images/tekbond.jpg',
    featured: false,
    application: 'Painéis Elétricos, Alternadores, Centrais Eletrônicas e Conectores'
  },
  {
    id: 'tb-adesivo-fixa-espelho-silicone',
    name: 'Silicone Acético Multiuso Transparente / Branco Tekbond - 280g',
    brand: 'tekbond',
    brandLabel: 'Tekbond Químicos',
    category: 'selantes-silicones',
    categoryLabel: 'Silicones & Selantes',
    code: 'TB-SIL-ACET-280',
    description: 'Selante acético com fungicida para vedação duradoura em alumínio, vidro, cerâmica e superfícies não porosas. Resistente a intempéries e raios UV.',
    specs: [
      'Cura acética com proteção antifungo',
      'Elasticidade permanente contra dilatação mecânica',
      'Excelente resistência a intempéries e umidade constante',
      'Cartucho padrão 280g'
    ],
    image: '/images/tekbond.jpg',
    featured: false,
    application: 'Esquadrias, Boxes, Fachadas de Vidro e Vedação Geral'
  }
];
