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
  { id: 'all', label: 'Todas as Categorias', count: 130 },
  { id: 'jogos-ferramentas', label: 'Jogos de Ferramentas & Soquetes', count: 23 },
  { id: 'soquetes-chaves', label: 'Chaves de Aperto, Estrela & Tubos', count: 48 },
  { id: 'maletas-carrinhos', label: 'Carros, Bancadas & Mochilas', count: 23 },
  { id: 'automotivo', label: 'Linha Automotiva & Oficina', count: 36 },
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": "r46023100",
    "name": "R46023100 JOGO DE FERRAMENTAS 100 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "R46023100",
    "technicalCode": "3300246",
    "description": "Um mix completo de ferramentas: Chaves combinadas com catraca, alicates, martelo, chaves de fenda, soquetes e muito mais!",
    "detailedDescription": "O Jogo de Ferramentas GEDORE red R46023100 (Código 3300246) com 100 peças reúne a versatilidade, a resistência e a precisão exigidas por mecânicos profissionais, centros automotivos, indústrias e manutenções em geral. Desenvolvido para suprir uma ampla gama de aplicações de aperto e fixação, o jogo conta com soquetes sextavados de 1/2\" e 1/4\", catracas reversíveis de troca rápida, chaves combinadas com catraca integrada, alicates ergonômicos, chaves de fenda simples e cruzadas, jogo de pontas bits e martelo pena de 500g, tudo devidamente acomodado em uma maleta plástica antichoque com travas metálicas reforçadas.",
    "composition": [
      "Soquetes 1/2” sextavados: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32 mm",
      "Catraca reversível 1/2” com botão de desengate rápido",
      "Extensões 1/2”: 125 e 250 mm",
      "Corpo para cabo T 1/2” com adaptador 3/8” x 1/2”",
      "Junta universal 1/2”",
      "Soquetes 1/4” sextavados: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13 mm",
      "Catraca reversível 1/4” com botão de desengate rápido",
      "Extensões 1/4”: 50 e 100 mm",
      "Cabo T 1/4” (105 mm)",
      "Junta universal 1/4”",
      "Cabo com quadrado 1/4”",
      "Bits 1/4” hexagonais: 3, 4, 5, 6, 8 mm",
      "Bits 1/4” fenda simples: 4, 5.5, 7 mm",
      "Bits 1/4” fenda cruzada PH: 0, 1, 2, 3",
      "Bits 1/4” fenda cruzada PZ: 0, 1, 2, 3",
      "Bits 1/4” TX: T8, T10, T15, T20, T25, T27, T30, T40",
      "Adaptador para bits 1/4” x 1/4”",
      "Chaves combinadas com catraca: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "Chaves L hexagonais: 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10 mm",
      "Chave ajustável 250 mm (10”) com escala milimétrica",
      "Chaves de fenda simples: 4, 5.5, 6.5 mm",
      "Chaves de fenda cruzada PH: 1, 2, 3",
      "Alicate de corte diagonal 160 mm",
      "Alicate tipo telefone reto 160 mm",
      "Alicate bomba d‘água 250 mm",
      "Martelo pena 500g"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300246",
      "referencia": "R46023100",
      "comprimentoMaleta": "525 mm",
      "larguraMaleta": "380 mm",
      "alturaMaleta": "110 mm",
      "pecas": "100",
      "pesoKg": "11 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento maleta",
        "Largura maleta",
        "Altura maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300246",
          "R46023100",
          "525 mm",
          "380 mm",
          "110 mm",
          "100",
          "11 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300246",
      "Referência: R46023100",
      "Quantidade de peças: 100 peças",
      "Comprimento da maleta: 525 mm",
      "Largura da maleta: 380 mm",
      "Altura da maleta: 110 mm",
      "Peso total: 11 kg",
      "Encaixes: 1/2\" e 1/4\"",
      "Aço Cromo-Vanádio GEDORE red com acabamento acetinado fosco",
      "Maleta plástica em polietileno com design GEDORE red e fechos metálicos"
    ],
    "properties": [
      "Aço Cromo-Vanádio GEDORE red de alta resistência mecânica contra torção e impacto",
      "Catracas reversíveis de acionamento macio com botão de alívio rápido de soquetes",
      "Chaves combinadas com catraca de precisão que agilizam o trabalho em locais de difícil acesso",
      "Perfil sextavado Unit Drive com alívio nos vértices, transmitindo o torque nas faces planas do parafuso",
      "Maleta reforçada e organizada com marcação em relevo de cada medida para rápido controle visual"
    ],
    "instructions": [
      "Utilize sempre a ferramenta de medida exata correspondente ao fixador.",
      "Não utilize prolongadores tubulares como alavanca sobre catracas ou chaves combinadas.",
      "Após o uso em contato com óleo ou graxa, limpe as peças com pano macio e seco antes de guardar.",
      "Mantenha as ferramentas encaixadas em seus berços na maleta para conservação e transporte seguro."
    ],
    "image": "/images/products/r46023100-1.png",
    "images": [
      "/images/products/r46023100-1.png",
      "/images/products/r46023100-2.jpg",
      "/images/products/r46023100-3.jpg",
      "/images/products/r46023100-4.jpg",
      "/images/products/r46023100-tabela.png"
    ],
    "featured": true,
    "application": "Automotivo, Oficinas Mecânicas, Linha Pesada e Manutenção Geral",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r45603172",
    "name": "R45603172 JOGO DE SOQUETES 1/4\" + 3/8\" + 1/2\" Sextavados 172 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes",
    "code": "R45603172",
    "technicalCode": "3300058",
    "description": "Jogo de soquetes e acessórios com 172 peças com encaixes de 1/4\", 3/8\" e 1/2\". O conjunto mais completo da linha GEDORE red.",
    "detailedDescription": "O Jogo de Soquetes GEDORE red R45603172 (Código 3300058) é a solução definitiva para mecânicos e indústrias. Contempla uma linha abrangente de soquetes curtos e longos, pontas bits diversas (Hexagonais, Fenda, Cruzada, TX, Ribe, Multidentadas), três catracas reversíveis de dentes finos e acessórios para encaixes de 1/4\", 3/8\" e 1/2\". Acompanha maleta plástica resistente com fechos metálicos.",
    "composition": [
      "Cabo com quadrado 1/4″",
      "Dobradiças/fecho em metal",
      "Para situações de aperto manual",
      "Extensões para soquete 1/4″+3/8″+1/2″",
      "Cabo T 1/4″: conforme DIN 3122, ISO 3315",
      "Soquetes TX 1/4″+ 3/8″ (perfil hexalobular)",
      "Chaves soquete 1/4″ hexagonais: haste fosfatizada",
      "Chaves soquete 1/4″ fenda simples: haste fosfatizada",
      "Chaves soquete 1/4″ fenda pozidriv PZ: haste fosfatizada",
      "Chaves soquete 1/4″ fenda cruzada PH: haste fosfatizada",
      "Jogo de chaves L hexagonais (Allen): conforme DIN ISO 2936",
      "Chaves soquete 1/4″ TX (perfil hexalobular): haste fosfatizada",
      "Soquete para vela 1/2″: sextavado 16 mm, com borracha de proteção",
      "Aço cromo-vanádio GEDORE red, acabamento cromado mate acetinado",
      "Adaptador quadrado conforme DIN 3120, ISO 1174, com bloqueio de esfera",
      "Encaixe quadrado conforme DIN 3120, ISO 1174, com estria de retenção da esfera",
      "Soquetes 1/4″+ 3/8″+1/2″ sextavados curtos e longos : conforme DIN 3124, ISO 2725",
      "Juntas universais 1/4″+3/8″+1/2″: articulação aparafusada, conforme DIN 3123 – C 12,5",
      "Corpo para cabo T 1/2″ / Adaptador 3/8″ x 1/2″: para utilização com soquetes e chaves soquete",
      "Chaves soquete 1/4″ TX com guia (perfil hexalobular): haste fosfatizada, para parafusos com pino guia",
      "Maleta de plástico em GEDORE red Design com maior resistência oferecendo uma proteção as ferramentas",
      "Soquete para vela 3/8″: sextavado 18 mm, com borracha de proteção e sextavado de acionamento adicional 21 mm",
      "Soquete para vela 1/2″: sextavado 21 mm, com borracha de proteção e sextavado de acionamento adicional 24 mm",
      "Adaptadores para bits 1/4″+3/8″+1/2″: quadrado x sextavado, para bits e ferramentas com encaixe sextavado 1/4″",
      "Bits 5/16″: hexagonais, fenda simples, fenda cruzada PH, TX (perfil hexalobular), TX com guia (perfil hexalobular), conforme DIN ISO 1173 – D 8",
      "Bits 1/4″: TX (perfil hexalobular), TX com guia (perfil hexalobular), TX plus security (perfil hexalobular), Ribe®, multidentado XZN, conforme DIN ISO 1173 – D 6,3",
      "Catracas reversíveis 1/4″+ 3/8″+1/2″: rotação reversível à direita/esquerda através de alavanca, desengate por botão de pressão, dentes finos, cabeça oval, punho de 2 componentes, fácil manuseio, para utilização com soquetes",
    ],
    "technicalSpecs": {
      "codigoGedore": "3300058",
      "referencia": "R45603172",
      "comprimentoMaleta": "452 mm",
      "larguraMaleta": "340 mm",
      "alturaMaleta": "86 mm",
      "pecas": "172",
      "pesoKg": "10,5 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento maleta",
        "Largura maleta",
        "Profundidade maleta",
        "Peças",
        "0"
      ],
      "rows": [
        [
          "3300058",
          "R45603172",
          "452 mm",
          "340 mm",
          "86 mm",
          "172",
          "10,500"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300058",
      "Referência: R45603172",
      "Quantidade de peças: 172 peças",
      "Encaixes: 1/4\", 3/8\" e 1/2\"",
      "Aço Cromo-Vanádio GEDORE red",
      "Soquetes sextavados normais e longos",
      "Maleta em polietileno com fechos em metal"
    ],
    "properties": [
      "Gama ultra completa cobrindo todas as necessidades de fixação sextavada e pontas especiais",
      "Catracas reversíveis com desengate rápido para agilidade e segurança",
      "Fabricado em aço Cromo-Vanádio com acabamento acetinado fosco antirreflexo"
    ],
    "instructions": [
      "Utilize sempre o soquete correspondente à bitola do fixador.",
      "Guarde na maleta após a limpeza para evitar oxidação."
    ],
    "image": "/images/products/r45603172-1.jpg",
    "images": [
      "/images/products/r45603172-1.jpg",
      "/images/products/r45603172-2.jpg",
      "/images/products/r45603172-3.jpg"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas, Centros Automotivos, Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r49003016",
    "name": "R49003016 JOGO DE SOQUETES 1/4\" Sextavados 4-13mm 16 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes",
    "code": "R49003016",
    "technicalCode": "3300050",
    "description": "Jogo compacto de soquetes 1/4\" sextavados de 4 a 13 mm com catraca reversível e extensões em estojo robusto.",
    "detailedDescription": "O Jogo de Soquetes 1/4\" GEDORE red R49003016 (Código 3300050) é ideal para trabalhos de precisão em espaços reduzidos, painéis, motocicletas, eletrônica e manutenção leve. Possui 16 peças forjadas em aço Cromo-Vanádio, catraca reversível de 72 dentes com cabo ergonômico e estojo plástico de alta resistência.",
    "composition": [
      "Dobradiças/fecho de metal",
      "Extensão para soquete 1/4″",
      "Para situações de aperto manual",
      "Cabo T 1/4″: conforme DIN 3122, ISO 3315",
      "Aço cromo-vanádio, cromado mate acetinado",
      "Soquetes 1/4″: sextavados, conforme DIN 3124, ISO 2725",
      "Adaptador quadrado conforme DIN 3120 – A 6,3, ISO 1174, com bloqueio de esfera",
      "Encaixe quadrado conforme DIN 3120 – C 6,3, ISO 1174, com estria de retenção da esfera",
      "Adaptador para bits 1/4″: sextavado x quadrado, para bits e ferramentas com encaixe sextavado 1/4″",
      "Maleta de plástico em GEDORE red Design com maior resistência oferecendo uma proteção as ferramentas",
      "Catraca reversível: rotação reversível à direita/esquerda através de alavanca, desengate por botão de pressão, dentes finos, cabeça oval, punho de 2 componentes, fácil manuseio, para utilização com soquetes",
    ],
    "technicalSpecs": {
      "codigoGedore": "3300050",
      "referencia": "R49003016",
      "comprimentoMaleta": "180 mm",
      "larguraMaleta": "110 mm",
      "alturaMaleta": "52 mm",
      "pecas": "16",
      "pesoKg": "0,62 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento estojo",
        "Largura estojo",
        "Profundidade estojo",
        "Peças",
        "0"
      ],
      "rows": [
        [
          "3300050",
          "R49003016",
          "180 mm",
          "110 mm",
          "52 mm",
          "16",
          "0,620 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300050",
      "Referência: R49003016",
      "Encaixe: 1/4\"",
      "Medidas dos soquetes: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13 mm",
      "Aço Cromo-Vanádio GEDORE red",
      "Estojo compacto com trava de metal"
    ],
    "properties": [
      "Compacto e portátil para transporte fácil em mochilas ou caixas de ferramentas",
      "Catraca reversível com botão de alívio rápido e ângulo de retorno reduzido"
    ],
    "instructions": [
      "Ideal para torques moderados e aperto de precisão.",
      "Mantenha o estojo fechado após o uso."
    ],
    "image": "/images/products/r49003016-1.jpg",
    "images": [
      "/images/products/r49003016-1.jpg"
    ],
    "featured": false,
    "application": "Manutenção Leve, Elétrica Automotiva, Motocicletas, Montagens",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r19352000",
    "name": "R19352000 ESTEIRA PARA MECÂNICO",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Acessórios Automotivos",
    "code": "R19352000",
    "technicalCode": "3301876",
    "description": "Esteira anatômica para mecânico em polietileno de alta densidade (HDPE) com apoio de cabeça acolchoado e 6 rodízios giratórios.",
    "detailedDescription": "A Esteira para Mecânico GEDORE red R19352000 (Código 3301876) foi projetada para oferecer máximo conforto e ergonomia nas manutenções sob veículos. Com corpo anatômico em polietileno (HDPE) de 1.020 mm, encosto de cabeça acolchoado, cavidades laterais para descanso dos braços e porta-ferramentas integrados, permite mobilidade total com seus 6 rodízios giratórios.",
    "composition": [
      "Corpo em plástico Polietileno (HDPE) resistente.",
      "Comprimento de 1.020 mm permite acomodar toda a coluna do usuário.",
      "Encosto de cabeça almofadado",
      "Capacidade de até 180 kg.",
      "Design anatômico traz ergonomia e conforto na movimentação dos braços.",
      "Com 6 rodízios giratórios resistentes que possibilitam manobras ágeis e seguras.",
      "Pegador na parte inferior para fácil transporte e movimentação.",
      "Compartimento nas duas laterais para acomodação de peças e ferramentas."
    ],
    "technicalSpecs": {
      "codigoGedore": "3301876",
      "referencia": "R19352000",
      "larguraMaleta": "475 mm",
      "comprimentoMaleta": "1020 mm",
      "alturaMaleta": "120 mm",
      "pesoKg": "4,6 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Largura",
        "Comprimento",
        "Altura",
        "0"
      ],
      "rows": [
        [
          "3301876",
          "R19352000",
          "475 mm",
          "1020 mm",
          "120mm",
          "4,6 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301876",
      "Referência: R19352000",
      "Comprimento: 1.020 mm",
      "Largura: 475 mm",
      "Altura: 120 mm",
      "Peso: 4,6 kg",
      "Corpo em plástico Polietileno (HDPE) de alta resistência",
      "6 rodízios giratórios de polipropileno e borracha",
      "Almofada de cabeça estofada e lavável"
    ],
    "properties": [
      "Design ergonômico que acomoda a coluna com total conforto durante trabalhos prolongados",
      "Dois compartimentos laterais para acomodar parafusos, porcas e ferramentas de mão",
      "Resistente a óleos, graxas e solventes comuns em oficinas mecânicas"
    ],
    "instructions": [
      "Utilize em superfícies planas e limpas para melhor rolagem dos rodízios.",
      "Limpe periodicamente a almofada e a superfície plástica com pano úmido e sabão neutro."
    ],
    "image": "/images/products/r19352000-1.jpeg",
    "images": [
      "/images/products/r19352000-1.jpeg",
      "/images/products/r19352000-2.jpeg",
      "/images/products/r19352000-3.jpeg",
      "/images/products/r19352000-4.jpeg"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas, Centros de Troca de Óleo, Concessionárias, Garagens",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r19352002",
    "name": "R19352002 BANQUETA AJUSTÁVEL PARA MECÂNICO",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Acessórios Automotivos",
    "code": "R19352002",
    "technicalCode": "3301878",
    "description": "Banqueta giratória ajustável a gás com assento almofadado, bandeja porta-ferramentas e rodízios reforçados.",
    "detailedDescription": "A Banqueta Ajustável para Mecânico GEDORE red R19352002 (Código 3301878) combina praticidade e postura correta para manutenções em suspensões, freios, alinhamento e detalhamento automotivo. Possui regulagem de altura por pistão a gás, assento redondo acolchoado em espuma de alta densidade e bandeja plástica inferior para acomodação de ferramentas e parafusos.",
    "composition": [
      "Estrutura em aço especial GEDORE red",
      "Bandeja para peças e ferramentas",
      "4 rodízios giratórios",
      "Capacidade de carga de 136kg",
      "Regulagem de altura com alavanca de acionamento (40 a 54 cm)",
      "Acompanha manual de montagem em português."
    ],
    "technicalSpecs": {
      "codigoGedore": "3301878",
      "referencia": "R19352002",
      "alturaMaleta": "46,5 cm",
      "pesoKg": "4,5 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Altura",
        "0"
      ],
      "rows": [
        [
          "3301878",
          "R19352002",
          "46,5 cm",
          "4,5 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301878",
      "Referência: R19352002",
      "Altura máxima: 46,5 cm",
      "Peso: 4,5 kg",
      "Estrutura em aço especial GEDORE red",
      "Pistão pneumático a gás com alavanca lateral",
      "Bandeja plástica porta-ferramentas integrada na base",
      "4 rodízios giratórios 360°"
    ],
    "properties": [
      "Regulagem de altura suave e instantânea adaptável a diferentes estaturas e serviços",
      "Assento giratório almofadado em vinil resistente a graxa de fácil higienização",
      "Bandeja inferior bipartida para peças e ferramentas sempre ao alcance das mãos"
    ],
    "instructions": [
      "Não exceder a capacidade máxima recomendada pelo fabricante.",
      "Acione a alavanca do pistão aliviando o peso para subir ou sentado para descer."
    ],
    "image": "/images/products/r19352002-1.jpeg",
    "images": [
      "/images/products/r19352002-1.jpeg",
      "/images/products/r19352002-2.jpeg",
      "/images/products/r19352002-3.jpeg"
    ],
    "featured": false,
    "application": "Oficinas Mecânicas, Borracharias, Detalhamento Estético (Detailing), Indústrias",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r20662000",
    "name": "R20662000 MOCHILA PARA FERRAMENTAS GEDORE RED",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mochilas e Maletas",
    "code": "R20662000",
    "technicalCode": "3301969",
    "description": "Mochila técnica para ferramentas em poliéster 1680D de alta densidade, capacidade de 30L / 20kg com fundo plástico reforçado.",
    "detailedDescription": "A Mochila para Ferramentas GEDORE red R20662000 (Código 3301969) foi concebida para técnicos em campo e profissionais que demandam mobilidade sem abrir mão de proteção. Fabricada em poliéster balístico 1680D ultrarresistente a rasgos e abrasão, conta com base plástica injetada impermeável que mantém a mochila em pé no solo, compartimento almofadado para notebook, múltiplos bolsos internos e alças ergonômicas acolchoadas com tecido respirável.",
    "composition": [
      "Fabricada em poliéster 1680D de alta densidade, proporcionando elevada resistência ao desgaste e ao transporte frequente de ferramentas.",
      "Capacidade máxima de carga de 20 kg.",
      "Fundo plástico reforçado para maior proteção, estabilidade e durabilidade durante o uso.",
      "Costuras reforçadas que aumentam a resistência estrutural da mochila.",
      "Capacidade volumétrica de 30 L para armazenamento de ferramentas, acessórios e itens de trabalho.",
      "Bolsos internos desenvolvidos para organização vertical das ferramentas, facilitando a visualização e o acesso aos itens armazenados.",
      "Bolsos e encaixes externos para acondicionamento e acesso rápido às ferramentas de uso frequente.",
      "Alças ergonômicas almofadadas para maior conforto durante o transporte.",
      "Alça superior revestida em EVA, proporcionando resistência e praticidade no manuseio.",
      "Painel traseiro almofadado e respirável, contribuindo para maior conforto durante o uso."
    ],
    "technicalSpecs": {
      "codigoGedore": "3301969",
      "referencia": "R20662000",
      "dimensoes": "36 x 18 x 47 cm",
      "capacidade": "30 L / 20 kg",
      "pesoKg": "1,93 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Capacidade (volume)",
        "Capacidade de carga",
        "Dimensões (C x L x A) (mm)",
        "0"
      ],
      "rows": [
        [
          "3301969",
          "R20662000",
          "Mochila para Ferramentas",
          "30 L",
          "20 kg",
          "36 x 18 x 47cm",
          "1,93"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301969",
      "Referência: R20662000",
      "Volume: 30 Litros",
      "Capacidade de carga: 20 kg",
      "Dimensões: 360 x 180 x 470 mm",
      "Peso: 1,93 kg",
      "Material: Poliéster 1680D impermeável de alta densidade",
      "Fundo rígido em polímero antichoque"
    ],
    "properties": [
      "Fundo plástico estanque que protege as ferramentas contra umidade e poeira do chão",
      "Costuras reforçadas em pontos de tração e zíperes robustos com puxadores ergonômicos",
      "Alças anatômicas de ombro e encosto acolchoado para conforto em longos deslocamentos"
    ],
    "instructions": [
      "Distribua o peso uniformemente entre os compartimentos.",
      "Mantenha ferramentas pontiagudas voltadas para baixo em seus respectivos bolsos elásticos."
    ],
    "image": "/images/products/r20662000-1.jpeg",
    "images": [
      "/images/products/r20662000-1.jpeg",
      "/images/products/r20662000-2.jpeg",
      "/images/products/r20662000-3.jpeg",
      "/images/products/r20662000-4.jpeg"
    ],
    "featured": true,
    "application": "Técnicos de Manutenção Externa, Eletricistas, Instaladores de Climatização, Mecânicos de Campo",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r19101006",
    "name": "R19101006 JOGO DE ESPÁTULAS PARA ACABAMENTO 5 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Ferramentas de Acabamento",
    "code": "R19101006",
    "technicalCode": "3301973",
    "description": "Jogo com 5 espátulas em nylon com fibra de vidro para desmontagem de acabamentos automotivos, forros e painéis sem danificar.",
    "detailedDescription": "O Jogo de Espátulas para Acabamento GEDORE red R19101006 (Código 3301973) é indispensável para desmontagens automotivas sensíveis. Fabricadas em polímero de nylon reforçado com fibra de vidro, as 5 espátulas possuem diferentes formatos de pontas e curvas que se encaixam sob presilhas, frisos, forros de porta, telas multimídia e painéis sem riscar nem marcar peças plásticas ou pinturas.",
    "composition": [
      "Espátula reta de ponta estreita para aberturas iniciais",
      "Espátula angular com ponta forquilha para remoção de presilhas",
      "Espátula em cunha larga para painéis e frisos extensos",
      "Espátula puxadora com gancho para desencaixe de grampos",
      "Espátula plana para acabamentos delicados e laterais"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301973",
      "referencia": "R19101006",
      "dimensoes": "300 x 280 x 50 mm",
      "pecas": "5",
      "pesoKg": "0,31 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Dimensões (C x L x A) (mm)",
        "0"
      ],
      "rows": [
        [
          "3301973",
          "R19101006",
          "Jogo de Espátulas para Acabamento",
          "300 x 280 x 50",
          "0,311"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301973",
      "Referência: R19101006",
      "Quantidade de peças: 5 peças",
      "Material: Nylon de alta resistência reforçado com fibra de vidro",
      "Embalagem em blister autosserviço",
      "Peso: 0,311 kg"
    ],
    "properties": [
      "Composto plástico especial que não risca painéis, vernizes automotivos nem superfícies cromadas",
      "Alta rigidez mecânica para alavanca eficiente de presilhas plásticas sem deformar",
      "Geometrias variadas que alcançam presilhas nos cantos mais difíceis do habitáculo"
    ],
    "instructions": [
      "Aplique pressão progressiva na base do grampo para evitar quebra das travas plásticas.",
      "Limpe as espátulas com pano seco após o término da montagem."
    ],
    "image": "/images/products/r19101006-1.jpeg",
    "images": [
      "/images/products/r19101006-1.jpeg",
      "/images/products/r19101006-2.jpeg"
    ],
    "featured": false,
    "application": "Instaladores de Som e Acessórios, Tapeçaria Automotiva, Funilaria e Pintura, Manutenção Geral",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r20150005",
    "name": "R20150005 CARRO PARA FERRAMENTAS GEDORE RED PLUS",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R20150005",
    "technicalCode": "3301653",
    "description": "Carro para ferramentas profissional com 4 gavetas telescópicas, porta frontal rebatível, porta lateral e painéis perfurados.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red PLUS R20150005 (Código 3301653) é a estação de trabalho definitiva para centros automotivos e indústrias. Sua estrutura soldada em chapa de aço reforçada (0,75 a 1,5 mm) garante rigidez estrutural incomparável. Conta com 4 gavetas com corrediças telescópicas macias, compartimento inferior com porta frontal rebatível, armário lateral com porta e fechadura, além de painéis laterais perfurados para ganchos e acessórios. Pintura epóxi vermelha com detalhes pretos padrão GEDORE red.",
    "composition": [
      "Estrutura em chapa reforçada de aço especial entre 0,75 e 1,5 mm.",
      "Carro resistente e soldado, com grande estabilidade.",
      "Dimensão da Gaveta pequena: 460x348x75 mm.",
      "As dimensões da estrutura do carro montado são: 921 x 743 x 413 mm.",
      "Capacidade de carga das gavetas de 20kg.",
      "Capacidade de carga do carro de 300kg.",
      "Composto de dois rodízios giratórios, sendo um com freio, e dois rodízios fixos. Rodízios montados na base com 4 parafusos M8 em cada.",
      "Porta lateral de 740 mm de altura, 250 mm de largura e 60 mm de profundidade para maior otimização do espaço e armazenamento de peças maiores, como um torquímetro.",
      "Painel perfurado em ambas as laterais com furos redondos de 5 mm diâmetro para fixação de ganchos e acessórios.",
      "Acompanha um suporte para torquímetro* e 10 ganchos (*Torquímetros GEDORE red de encaixe de 1/2” e 3/4”, R68900100; R68900200; R68900300 e R78900400).",
      "Porta inferior rebatível de 330 mm de altura, 500 mm de largura e 390 mm de profundidade permite armazenamento de maiores volumes, como utensílios pessoais.",
      "Porta latas e catálogos.",
      "Fechaduras de mesmo segredo com duas cópias de chave."
    ],
    "technicalSpecs": {
      "codigoGedore": "3301653",
      "referencia": "R20150005",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Largura",
        "Altura",
        "Peso"
      ],
      "rows": [
        [
          "3301653",
          "R20150005",
          "743 mm",
          "413 mm",
          "921 mm",
          "46,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301653",
      "Referência: R20150005",
      "Dimensões (C x L x A): 743 x 413 x 921 mm",
      "Peso: 46,3 kg",
      "Estrutura em chapa de aço reforçada de 0,75 a 1,5 mm",
      "4 gavetas pequenas: 460 x 348 x 75 mm",
      "1 compartimento inferior com porta frontal rebatível",
      "1 armário lateral com prateleiras e porta com chave",
      "4 rodízios reforçados (2 giratórios, 1 com freio)"
    ],
    "properties": [
      "Múltiplos compartimentos dedicados que organizam ferramentas de mão, máquinas pneumáticas e insumos",
      "Painéis perfurados de 5 mm nas laterais para fixação de ganchos rápidos e porta-latas",
      "Rodízios robustos montados com 4 parafusos M8 em cada base para deslocamento suave com carga máxima"
    ],
    "instructions": [
      "Trave o rodízio com freio ao posicionar o carro na baia de trabalho.",
      "Abra uma gaveta por vez para manter a estabilidade do centro de gravidade."
    ],
    "image": "/images/products/r20150005-1.png",
    "images": [
      "/images/products/r20150005-1.png",
      "/images/products/r20150005-2.png",
      "/images/products/r20150005-3.png",
      "/images/products/r20150005-4.png",
      "/images/products/r20150005-5.png",
      "/images/products/r20150005-6.png",
      "/images/products/r20150005-7.png"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas de Alta Performance, Concessionárias, Linhas de Montagem, Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r21560241",
    "name": "R21560241 CARRO PARA FERRAMENTAS GEDORE RED PLUS COM FERRAMENTAS 241 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21560241",
    "technicalCode": "3369841",
    "description": "Carro GEDORE red PLUS equipado com 241 ferramentas de alta performance: soquetes, torquímetro, chaves catraca, alicates e muito mais.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red PLUS com Ferramentas R21560241 (Código 3369841) entrega um posto de trabalho 100% equipado com 241 itens de nível profissional. Inclui o renomado jogo de soquetes de 172 peças (1/4\", 3/8\", 1/2\"), torquímetro de estalo 1/2\" (20-100 N.m), jogo completo de chaves combinadas com catraca de 8 a 32 mm, alicates de corte, bico e pressão, chaves de fenda, chaves biela, jogos de punções e martelo bola. Tudo alojado na robusta estrutura de aço do carro GEDORE red PLUS.",
    "composition": [
      "3300058 Jogo de soquetes 1/4\" + 3/8\" + 1/2\" sextavados (172 peças)",
      "3369939 Torquímetro de estalo 1/2\" (20-100 N.m)",
      "Chaves combinadas com catraca: 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24, 27, 30, 32 mm",
      "Alicates profissionais: universal, corte diagonal, bico telefone, pressão, anéis internos e externos",
      "Chaves biela: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "Chaves de fenda simples e cruzadas PH de precisão",
      "Jogo de chaves L perfil TX hexalobular (9 peças)",
      "Saca-filtros com 3 garras, lanterna LED e removedor de grampos",
      "Punções de centro, saca-pinos, talhadeira de impacto e martelo bola 300g"
    ],
    "technicalSpecs": {
      "codigoGedore": "3369841",
      "referencia": "R21560241",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pecas": "241",
      "pesoKg": "70,7 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "0"
      ],
      "rows": [
        [
          "3369841",
          "R21560241",
          "Carro para ferramentas GEDORE red Plus – Com ferramentas",
          "70,7"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3369841",
      "Referência: R21560241",
      "Total de ferramentas: 241 peças",
      "Peso total com ferramentas: 70,7 kg",
      "Aço Cromo-Vanádio GEDORE red",
      "Estrutura com 4 gavetas, porta rebatível e armário lateral",
      "Acompanha suporte para torquímetro e 10 ganchos organizadores"
    ],
    "properties": [
      "Solução completa chave na mão para equipar imediatamente mecânicos em montadoras ou oficinas de ponta",
      "Garante padronização de ferramentas, organização visual e produtividade máxima na bancada",
      "Acabamento epóxi premium com gavetas que suportam trabalho pesado contínuo"
    ],
    "instructions": [
      "Mantenha o torquímetro com a escala zerada após a utilização para preservação da mola de calibração.",
      "Limpe as ferramentas e guarde-as em suas respectivas gavetas ao final do expediente."
    ],
    "image": "/images/products/r21560241-1.jpeg",
    "images": [
      "/images/products/r21560241-1.jpeg",
      "/images/products/r21560241-2.jpeg",
      "/images/products/r21560241-3.jpeg",
      "/images/products/r21560241-4.jpeg",
      "/images/products/r21560241-5.jpeg",
      "/images/products/r21560241-6.jpeg"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas Premium, Concessionárias Automotivas, Centros de Manutenção Pesada, Aviação Leve",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r20152005",
    "name": "R20152005 CARRO PARA FERRAMENTAS GEDORE RED PLUS BLACK EDITION",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R20152005",
    "technicalCode": "3301648",
    "description": "Edição especial Black Edition do carro de ferramentas GEDORE red PLUS com pintura eletrostática preta fosca de alta durabilidade.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red PLUS Black Edition R20152005 (Código 3301648) une a consagradas robustez do modelo PLUS a uma estética moderna e imponente em preto acetinado. Construído com chapas de aço selecionadas de até 1,5 mm de espessura, conta com 4 gavetas com trilhos telescópicos de deslizamento suave, porta rebatível frontal, armário lateral com fechadura e painéis perfurados para suporte de ferramentas.",
    "composition": [
      "Estrutura em chapa reforçada de aço especial entre 0,75 e 1,5 mm.",
      "Carro resistente e soldado, com grande estabilidade.",
      "Dimensão da Gaveta pequena: 460x348x75 mm.",
      "As dimensões da estrutura do carro montado são: 921 x 743 x 413 mm.",
      "Capacidade de carga das gavetas de 20kg.",
      "Capacidade de carga do carro de 300kg.",
      "Composto de dois rodízios giratórios, sendo um com freio, e dois rodízios fixos. Rodízios montados na base com 4 parafusos M8 em cada.",
      "Porta lateral de 740 mm de altura, 250 mm de largura e 60 mm de profundidade para maior otimização do espaço e armazenamento de peças maiores, como um torquímetro.",
      "Painel perfurado em ambas as laterais com furos redondos de 5 mm diâmetro para fixação de ganchos e acessórios.",
      "Acompanha um suporte para torquímetro* e 10 ganchos (*Torquímetros GEDORE red de encaixe de 1/2” e 3/4”, R68900100; R68900200; R68900300 e R78900400).",
      "Porta inferior rebatível de 330 mm de altura, 500 mm de largura e 390 mm de profundidade permite armazenamento de maiores volumes, como utensílios pessoais.",
      "Porta latas e catálogos.",
      "Fechaduras de mesmo segredo com duas cópias de chave."
    ],
    "technicalSpecs": {
      "codigoGedore": "3301648",
      "referencia": "R20152005",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Largura",
        "Altura",
        "Peso"
      ],
      "rows": [
        [
          "3301648",
          "R20152005",
          "743 mm",
          "413 mm",
          "921 mm",
          "46,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301648",
      "Referência: R20152005",
      "Acabamento: Edição Especial Black Edition (Preto Acetinado)",
      "Dimensões: 743 x 413 x 921 mm",
      "Peso: 46,3 kg",
      "4 gavetas pequenas (460 x 348 x 75 mm)",
      "Porta rebatível inferior + porta lateral com chave",
      "Rodízios giratórios para 300 kg de capacidade estática"
    ],
    "properties": [
      "Design Black Edition diferenciado e exclusivo que valoriza a estética visual de oficinas e garagens de alto padrão",
      "Pintura a pó microtexturizada altamente resistente a riscos, solventes e sujeira de oficina",
      "Corrediças telescópicas reforçadas que permitem abertura 100% da gaveta para fácil acesso"
    ],
    "instructions": [
      "Utilize os ganchos perfurados para fixação de ferramentas de uso frequente.",
      "Limpe a superfície texturizada com pano macio e desengraxante leve."
    ],
    "image": "/images/products/r20152005-1.png",
    "images": [
      "/images/products/r20152005-1.png",
      "/images/products/r20152005-2.png",
      "/images/products/r20152005-3.png",
      "/images/products/r20152005-4.png",
      "/images/products/r20152005-5.png",
      "/images/products/r20152005-6.png",
      "/images/products/r20152005-7.png"
    ],
    "featured": false,
    "application": "Oficinas Mecânicas de Alta Performance, Estética Automotiva Premium, Centros Técnicos de Treinamento",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r21561241",
    "name": "R21561241 CARRO PARA FERRAMENTAS GEDORE RED PLUS BLACK EDITION COM FERRAMENTAS 241 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21561241",
    "technicalCode": "3369842",
    "description": "Edição especial Black Edition do carro GEDORE red PLUS equipado com 241 ferramentas profissionais de alto padrão.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red PLUS Black Edition com Ferramentas R21561241 (Código 3369842) é o ápice em organização e sofisticação mecânica. Alia a elegante pintura preta da edição especial a um kit incomparável de 241 ferramentas de alta performance: jogo de soquetes 172 peças, torquímetro 1/2\", chaves combinadas com catraca de precisão, alicates industriais, chaves biela e acessórios completos.",
    "composition": [
      "3300058 Jogo de soquetes 1/4\" + 3/8\" + 1/2\" sextavados (172 peças)",
      "3369939 Torquímetro de estalo 1/2\" (20-100 N.m)",
      "Chaves combinadas com catraca: 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24, 27, 30, 32 mm",
      "Alicates de alta precisão: universal, corte diagonal, bico telefone, pressão, anéis internos e externos",
      "Chaves biela forjadas: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "Chaves de fenda simples e cruzadas ergonômicas",
      "Jogo de chaves L TX perfil hexalobular de 9 peças",
      "Saca-filtros 3 garras, lanterna LED e removedor de grampos",
      "Punções de centro, saca-pinos, talhadeira e martelo bola 300g"
    ],
    "technicalSpecs": {
      "codigoGedore": "3369842",
      "referencia": "R21561241",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pecas": "241",
      "pesoKg": "70,7 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "0"
      ],
      "rows": [
        [
          "3369842",
          "R21561241",
          "Carro para ferramentas GEDORE red Plus – Com ferramentas - Black Edition",
          "70,7"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3369842",
      "Referência: R21561241",
      "Edição: Black Edition",
      "Peças inclusas: 241 ferramentas profissionais",
      "Peso total: 70,7 kg",
      "Estrutura reforçada de aço com 4 gavetas e armário lateral",
      "Suporte para torquímetro e 10 ganchos inclusos"
    ],
    "properties": [
      "Visual sofisticado em preto acetinado que eleva o nível estético da oficina ou concessionária",
      "Composição completa para aperto, fixação e corte abrangendo todas as etapas da mecânica moderna",
      "Trava central com chave que protege todo o ferramental durante o fechamento da oficina"
    ],
    "instructions": [
      "Conserve o torquímetro e ferramentas de aperto calibradas em suas gavetas dedicadas.",
      "Evite pancadas laterais nas corrediças ao puxar as gavetas com carga máxima."
    ],
    "image": "/images/products/r21561241-1.jpeg",
    "images": [
      "/images/products/r21561241-1.jpeg",
      "/images/products/r21561241-2.jpeg",
      "/images/products/r21561241-3.jpeg",
      "/images/products/r21561241-4.jpeg",
      "/images/products/r21561241-5.jpeg",
      "/images/products/r21561241-6.jpeg"
    ],
    "featured": true,
    "application": "Oficinas de Veículos Importados, Centros de Customização, Preparadoras de Motores, Concessionárias",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r21560101",
    "name": "R21560101 CARRO PARA FERRAMENTAS GEDORE RED ESSENCIAL COM FERRAMENTAS",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21560101",
    "technicalCode": "3301669",
    "description": "Carro para ferramentas com 6 gavetas equipado com jogo de soquetes 172 peças, chaves combinadas, chaves biela, alicates e martelo.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red Essencial com Ferramentas R21560101 (Código 3301669) é a escolha certeira para oficinas que buscam o melhor custo-benefício em estações completas de ferramentas. Com estrutura em chapa de aço soldada e 6 gavetas com corrediças telescópicas (5 gavetas de 75 mm e 1 gaveta grande de 155 mm), vem acompanhado do jogo de soquetes 172 peças, jogo de chaves combinadas de 6 a 32 mm, chaves biela de 8 a 19 mm, alicates de precisão e martelo.",
    "composition": [
      "Jogo de soquetes 1/4\" + 3/8\" + 1/2\" sextavados (172 peças)",
      "Chaves combinadas: 6, 7, 8, 10, 11, 12, 13, 14, 17, 19, 22, 24, 27, 30, 32 mm",
      "Chaves biela tipo L vazadas: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "Jogo de chaves L TX perfil hexalobular de 9 peças",
      "Alicate universal 200 mm",
      "Alicate de pressão 250 mm (10\")",
      "Alicates para anéis internos e externos (retos e curvos)",
      "Chaves de fenda simples: 4x100, 6.5x152, 8x200 mm",
      "Chaves de fenda cruzada PH1 e PH2",
      "Martelo bola 300g com cabo de madeira tratada"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301669",
      "referencia": "R21560101",
      "dimensoes": "6 gavetas (5 pequenas + 1 grande)",
      "capacidade": "300 kg estático / 20 kg por gaveta",
      "pesoKg": "64,3 kg"
    },
    "tableData": {
      "headers": [
        "Cód",
        "Ref",
        "Descrição",
        ""
      ],
      "rows": [
        [
          "3301669",
          "R21560101",
          "Carro para ferramentas 6 gavetas Essencial - Com Ferramentas",
          "64,31kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301669",
      "Referência: R21560101",
      "Estrutura com 6 gavetas (5 pequenas + 1 grande)",
      "Capacidade total de carga: 300 kg",
      "Capacidade por gaveta: 20 kg",
      "Fechadura central com chave",
      "Peso total com ferramentas: 64,31 kg"
    ],
    "properties": [
      "6 gavetas espaçosas que permitem guardar desde soquetes delicados até marretas e ferramentas pneumáticas na gaveta inferior",
      "Corrediças telescópicas com trava de segurança para abertura suave",
      "Aço carbono e Cromo-Vanádio tratados termicamente para longa vida útil"
    ],
    "instructions": [
      "Utilize as gavetas superiores para ferramentas mais leves e a gaveta inferior profunda para itens pesados.",
      "Mantenha a fechadura trancada ao deslocar o carro pela oficina."
    ],
    "image": "/images/products/r21560101-1.png",
    "images": [
      "/images/products/r21560101-1.png",
      "/images/products/r21560101-2.png",
      "/images/products/r21560101-3.png",
      "/images/products/r21560101-4.png"
    ],
    "featured": false,
    "application": "Oficinas Mecânicas Gerais, Autocenters, Frotistas, Setores de Manutenção Fabril",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r21562101",
    "name": "R21562101 CARRO PARA FERRAMENTAS GEDORE RED ESSENCIAL BLACK EDITION COM FERRAMENTAS",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21562101",
    "technicalCode": "3301671",
    "description": "Edição Black Edition do carro Essencial 6 gavetas completo com jogo de soquetes 172 peças, chaves combinadas, bielas e alicates.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red Essencial Black Edition com Ferramentas R21562101 (Código 3301671) traz o acabamento preto acetinado exclusivo com o consagrado kit de ferramentas Essencial, incluindo jogo de soquetes 172 peças, chaves combinadas, chaves biela, alicates para anéis, fendas, phillips e martelo bola, organizados em um carro de 6 gavetas com capacidade estática para 300 kg.",
    "composition": [
      "Jogo de soquetes 1/4\" + 3/8\" + 1/2\" sextavados (172 peças)",
      "Chaves combinadas: 6, 7, 8, 10, 11, 12, 13, 14, 17, 19, 22, 24, 27, 30, 32 mm",
      "Chaves biela: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "Jogo de chaves L TX perfil hexalobular (9 peças)",
      "Alicate universal 200 mm",
      "Alicate de pressão 250 mm (10\")",
      "Alicates para anéis internos e externos (retos e curvos)",
      "Chaves de fenda simples e cruzadas",
      "Martelo bola 300g"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301671",
      "referencia": "R21562101",
      "dimensoes": "6 gavetas (5 pequenas + 1 grande)",
      "capacidade": "300 kg estático / 20 kg por gaveta",
      "pesoKg": "64,3 kg"
    },
    "tableData": {
      "headers": [
        "Cód",
        "Ref",
        "Desc.",
        ""
      ],
      "rows": [
        [
          "3301671",
          "R21562101",
          "Carro para ferramentas 6 gavetas Essencial Black Edition - Com Ferramentas",
          "64,31kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301671",
      "Referência: R21562101",
      "Edição Especial: Black Edition",
      "Estrutura com 6 gavetas",
      "Capacidade: 300 kg",
      "Peso com ferramentas: 64,31 kg",
      "Fechadura de gavetas com chave"
    ],
    "properties": [
      "Pintura epóxi preto fosco antiaderente a óleo e graxa de altíssima durabilidade",
      "Rodízios largos de fácil manobrabilidade entre rampas e elevadores automotivos",
      "Composição pensada para cobrir 90% das rotinas diárias de desmontagem e montagem mecânica"
    ],
    "instructions": [
      "Utilize graxa lubrificante periódica nas corrediças telescópicas para manutenção da suavidade.",
      "Não force o fechamento das gavetas caso haja ferramentas desencaixadas."
    ],
    "image": "/images/products/r21562101-1.png",
    "images": [
      "/images/products/r21562101-1.png",
      "/images/products/r21562101-2.png",
      "/images/products/r21562101-3.png"
    ],
    "featured": false,
    "application": "Oficinas Automotivas, Garagens Custom, Frotas de Transporte, Linhas de Montagem",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r20400000",
    "name": "R20400000 BANCADA PARA FERRAMENTAS GEDORE RED",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R20400000",
    "technicalCode": "3301670",
    "description": "Bancada industrial para ferramentas em aço reforçado com tampo multilaminado de madeira de 25 mm e capacidade para 500 kg.",
    "detailedDescription": "A Bancada para Ferramentas GEDORE red R20400000 (Código 3301670) é a base de trabalho pesada para oficinas mecânicas, tornearias, serralherias e setores de manutenção industrial. Construída com pés em perfil de aço reforçado e travessas estruturais rígidas, suporta até 500 kg de carga estática. Seu tampo em madeira multilaminada de 25 mm de espessura (1.200 x 700 mm) suporta fixação de morsas, desmontagem de motores, caixas de câmbio e ferramentas elétricas.",
    "composition": [
      "Alta resistência",
      "Altura de 86cm",
      "Tampo Multilaminado",
      "Estrutura em aço reforçado",
      "Capacidade de carga 500kg",
      "Tampo nas medidas 1200x700x25mm"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301670",
      "referencia": "R20400000",
      "dimensoes": "1200 x 700 x 860 mm",
      "capacidade": "500 kg",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": [
        "Cód",
        "Ref.",
        "Desc.",
        ""
      ],
      "rows": [
        [
          "3301670",
          "R20400000",
          "Bancada GEDORE red",
          "46,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301670",
      "Referência: R20400000",
      "Capacidade máxima de carga: 500 kg",
      "Dimensões do tampo: 1.200 x 700 x 25 mm",
      "Altura total de trabalho: 86 cm (860 mm)",
      "Peso: 46,3 kg",
      "Tampo em madeira multilaminada naval tratada",
      "Estrutura em aço com pintura eletrostática a pó"
    ],
    "properties": [
      "Tampo maciço de 25 mm ideal para fixação de tornos de bancada (morsas) e trabalhos de prensagem manual",
      "Pés com sapatas de apoio que asseguram estabilidade absoluta e nivelamento preciso no piso da oficina",
      "Capacidade para até 500 kg sem qualquer torção ou envergamento estrutural"
    ],
    "instructions": [
      "Fixe a bancada em piso plano para máxima distribuição da capacidade de carga.",
      "Para montagem de morsas ou equipamentos pesados, perfure o tampo utilizando broca para madeira adequada."
    ],
    "image": "/images/products/r20400000-1.png",
    "images": [
      "/images/products/r20400000-1.png",
      "/images/products/r20400000-2.png",
      "/images/products/r20400000-3.png"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas Pesadas, Retíficas de Motores, Indústrias Metalúrgicas, Centros de Usinagem",
    "priceFormatted": "Consulte Valor"
  }
,
  {
    "id": "r20402000",
    "name": "R20402000 BANCADA BLACK EDITION GEDORE RED",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros, Bancadas & Mochilas",
    "code": "R20402000",
    "technicalCode": "3301674",
    "description": "Bancada profissional para ferramentas GEDORE red Black Edition com estrutura reforçada de aço e tampo multilaminado para 500kg.",
    "detailedDescription": "A Bancada GEDORE red Black Edition R20402000 (Código 3301674) foi desenvolvida e produzida no Brasil para atender às mais rigorosas necessidades de organização e espaço de trabalho do usuário profissional. Construída com estrutura em chapa de aço reforçada soldada com pintura eletrostática a pó preta de alta durabilidade e tampo em madeira multilaminada de 25 mm de espessura, oferece estabilidade absoluta e capacidade de carga estática de até 500 kg.",
    "composition": [
      "Tampo de madeira multilaminada de alta densidade (1200 x 700 x 25 mm)",
      "Estrutura soldada em chapa de aço especial reforçada",
      "Pintura eletrostática a pó na elegante cor preta (Black Edition)",
      "Pés estruturais robustos com furação para fixação no solo",
      "Capacidade de carga estática de 500 kg"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301674",
      "referencia": "R20402000",
      "comprimentoTampo": "1200 mm",
      "larguraTampo": "700 mm",
      "espessuraTampo": "25 mm",
      "alturaTotal": "860 mm",
      "pesoKg": "46,3 kg",
      "capacidadeCarga": "500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Descrição",
        "Dimensões (mm)",
        "Capacidade",
        "Peso"
      ],
      "rows": [
        [
          "3301674",
          "R20402000",
          "Bancada GEDORE red - Black Edition",
          "1200 x 700 x 860 mm",
          "500 kg",
          "46,3 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301674",
      "Referência: R20402000",
      "Dimensões do Tampo: 1.200 x 700 x 25 mm",
      "Altura de trabalho: 86 cm (860 mm)",
      "Capacidade de carga estática: 500 kg",
      "Peso total: 46,3 kg",
      "Acabamento: Pintura epóxi preta fosca anticorrosiva",
      "Tampo: Madeira multilaminada tratada de alta resistência"
    ],
    "properties": [
      "Estrutura soldada de altíssima rigidez que suporta trabalhos mecânicos e industriais pesados",
      "Tampo robusto com tratamento contra óleos e desgaste superficial",
      "Furação na base para ancoragem segura no piso da oficina ou indústria"
    ],
    "instructions": [
      "Posicione a bancada em superfície plana e nivelada antes de carregar peso.",
      "Recomenda-se a fixação ao solo através dos orifícios nos pés para máxima estabilidade.",
      "Mantenha o tampo de madeira limpo e seco após atividades com derivados de petróleo."
    ],
    "image": "/images/products/r20402000-1.png",
    "images": [
      "/images/products/r20402000-1.png",
      "/images/products/r20402000-2.png"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas, Centros Automotivos, Linha Pesada, Serralherias e Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r09115013",
    "name": "R09115013 JOGO DE CHAVES COMBINADAS POL. 13 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R09115013",
    "technicalCode": "3301042",
    "description": "Jogo de chaves combinadas em polegadas com 13 peças de 1/4\" a 1\", forjadas em aço Cromo-Vanádio com acabamento niquelado e cromado.",
    "detailedDescription": "O Jogo de Chaves Combinadas GEDORE red R09115013 (Código 3301042) contém 13 peças em polegadas que cobrem de 1/4\" até 1\". Fabricadas em conformidade com as normas DIN 3113 forma A e ISO 3318 / ISO 7738, possuem cabeça com inclinação de 15° na boca e estria com inclinação de 15°, facilitando o acesso a fixadores em locais de difícil alcance.",
    "composition": [
      "Chave combinada 1/4\"",
      "Chave combinada 5/16\"",
      "Chave combinada 3/8\"",
      "Chave combinada 7/16\"",
      "Chave combinada 1/2\"",
      "Chave combinada 9/16\"",
      "Chave combinada 5/8\"",
      "Chave combinada 11/16\"",
      "Chave combinada 3/4\"",
      "Chave combinada 13/16\"",
      "Chave combinada 7/8\"",
      "Chave combinada 15/16\"",
      "Chave combinada 1\"",
      "Suporte especial para acondicionamento e organização"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301042",
      "referencia": "R09115013",
      "pecas": "13",
      "pesoKg": "2,0 kg",
      "faixaMedidas": "1/4\" a 1\"",
      "norma": "DIN 3113 forma A / ISO 3318"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3301042",
          "R09115013",
          "13",
          "1/4; 5/16; 3/8; 7/16; 1/2; 9/16; 5/8; 11/16; 3/4; 13/16; 7/8; 15/16; 1\"",
          "2,0 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301042",
      "Referência: R09115013",
      "Quantidade de peças: 13",
      "Faixa de medidas: 1/4\" a 1\"",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Acabamento: Niquelado e cromado fosco acetinado",
      "Normas: DIN 3113 forma A, ISO 3318, ISO 7738",
      "Acompanha suporte organizador"
    ],
    "properties": [
      "Boca com inclinação de 15° para melhor empunhadura e agilidade de giro",
      "Estria com inclinação de 15° permitindo trabalho livre dos dedos em superfícies planas",
      "Geometria com perfil unit-drive que distribui o esforço nas faces dos parafusos evitando cantos arredondados"
    ],
    "instructions": [
      "Utilize sempre a chave de bitola idêntica ao fixador em polegadas.",
      "Não aplique golpes de martelo no corpo das chaves.",
      "Após o uso, guarde no suporte plástico organizador para preservação do conjunto."
    ],
    "image": "/images/products/r09115013-1.jpeg",
    "images": [
      "/images/products/r09115013-1.jpeg"
    ],
    "application": "Manutenção Industrial, Aviação, Maquinário Agrícola e Oficinas de Veículos Importados",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r09115016",
    "name": "R09115016 JOGO DE CHAVES COMBINADAS POL. 16 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R09115016",
    "technicalCode": "3301043",
    "description": "Jogo completo de chaves combinadas em polegadas com 16 peças de 1/4\" a 1.1/4\", forjadas em aço cromo-vanádio GEDORE red.",
    "detailedDescription": "O Jogo de Chaves Combinadas GEDORE red R09115016 (Código 3301043) com 16 peças é a solução mais completa da linha em polegadas, alcançando até 1.1/4\". Produzidas em aço cromo-vanádio com acabamento niquelado cromado, são adequadas para aplicações profissionais pesadas em maquinários, implementos e frotas.",
    "composition": [
      "Chave combinada 1/4\"",
      "Chave combinada 5/16\"",
      "Chave combinada 3/8\"",
      "Chave combinada 7/16\"",
      "Chave combinada 1/2\"",
      "Chave combinada 9/16\"",
      "Chave combinada 5/8\"",
      "Chave combinada 11/16\"",
      "Chave combinada 3/4\"",
      "Chave combinada 13/16\"",
      "Chave combinada 7/8\"",
      "Chave combinada 15/16\"",
      "Chave combinada 1\"",
      "Chave combinada 1.1/16\"",
      "Chave combinada 1.1/8\"",
      "Chave combinada 1.1/4\"",
      "Suporte especial organizador"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301043",
      "referencia": "R09115016",
      "pecas": "16",
      "pesoKg": "3,5 kg",
      "faixaMedidas": "1/4\" a 1.1/4\""
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3301043",
          "R09115016",
          "16",
          "1/4; 5/16; 3/8; 7/16; 1/2; 9/16; 5/8; 11/16; 3/4; 13/16; 7/8; 15/16; 1; 1.1/16; 1.1/8; 1.1/4\"",
          "3,5 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301043",
      "Referência: R09115016",
      "Quantidade de peças: 16",
      "Faixa de bitolas: 1/4\" a 1.1/4\"",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Acabamento: Niquelado e cromado",
      "Peso total: 3,5 kg"
    ],
    "properties": [
      "Gama ampliada que atende desde pequenos parafusos até grandes eixos de 1.1/4\"",
      "Boca e estria inclinadas a 15°",
      "Acompanha suporte de bancada/parede com travamento individual das peças"
    ],
    "instructions": [
      "Selecione o tamanho nominal exato em polegadas.",
      "Limpe as chaves após contato com graxas pesadas e fluidos hidráulicos."
    ],
    "image": "/images/products/r09115016-1.png",
    "images": [
      "/images/products/r09115016-1.png"
    ],
    "application": "Linha Pesada, Máquinas Agrícolas, Indústrias Químicas e Centros Automotivos",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r07105005",
    "name": "R07105005 JOGO DE CHAVES COMBINADAS COM CATRACA 8-19mm 5 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R07105005",
    "technicalCode": "3300849",
    "description": "Jogo com 5 chaves combinadas com catraca de 72 dentes e ângulo de retorno de apenas 5°, medidas 8, 10, 13, 17 e 19 mm.",
    "detailedDescription": "O Jogo de Chaves Combinadas com Catraca GEDORE red R07105005 (Código 3300849) é composto pelas medidas essenciais da mecânica (8, 10, 13, 17 e 19 mm). Seu mecanismo de catraca de 72 dentes com ângulo de trabalho de 5° permite agilidade ímpar em espaços confinados, dispensando a retirada da chave a cada volta.",
    "composition": [
      "Chave combinada com catraca 8 mm",
      "Chave combinada com catraca 10 mm",
      "Chave combinada com catraca 13 mm",
      "Chave combinada com catraca 17 mm",
      "Chave combinada com catraca 19 mm",
      "Suporte especial organizador de encaixe rápido"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300849",
      "referencia": "R07105005",
      "pecas": "5",
      "pesoKg": "0,699 kg",
      "dentesCatraca": "72 dentes",
      "anguloRetorno": "5°"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300849",
          "R07105005",
          "5",
          "8; 10; 13; 17; 19 mm",
          "0,699 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300849",
      "Referência: R07105005",
      "Quantidade de peças: 5",
      "Medidas: 8, 10, 13, 17 e 19 mm",
      "Mecanismo de catraca: 72 dentes",
      "Ângulo de trabalho: 5°",
      "Acabamento: Cromado polido espelhado de alta qualidade"
    ],
    "properties": [
      "Produtividade até 10x superior a uma chave convencional em locais apertados",
      "Acabamento polido de fácil higienização",
      "Aço cromo-vanádio forjado e temperado"
    ],
    "instructions": [
      "Utilize o lado da catraca para rotação contínua e a boca fixa para torque inicial de desaperto extremo se necessário.",
      "Mantenha o mecanismo lubrificado e livre de limalhas."
    ],
    "image": "/images/products/r07105005-1.png",
    "images": [
      "/images/products/r07105005-1.png"
    ],
    "application": "Oficinas Mecânicas, Manutenção Automotiva, Montagem de Motores e Indústria",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r07105012",
    "name": "R07105012 JOGO DE CHAVES COMBINADAS COM CATRACA 8-19mm 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R07105012",
    "technicalCode": "3300850",
    "description": "Jogo profissional com 12 chaves combinadas com catraca de 72 dentes e acabamento cromado polido, medidas de 8 a 19 mm.",
    "detailedDescription": "O Jogo de Chaves Combinadas com Catraca GEDORE red R07105012 (Código 3300850) oferece uma escala completa milimétrica contínua do 8 ao 19 mm (sem saltos). Construídas em aço cromo-vanádio com polimento espelhado premium, suas catracas de 72 dentes proporcionam giro suave e confiável.",
    "composition": [
      "Chave combinada com catraca 8 mm",
      "Chave combinada com catraca 9 mm",
      "Chave combinada com catraca 10 mm",
      "Chave combinada com catraca 11 mm",
      "Chave combinada com catraca 12 mm",
      "Chave combinada com catraca 13 mm",
      "Chave combinada com catraca 14 mm",
      "Chave combinada com catraca 15 mm",
      "Chave combinada com catraca 16 mm",
      "Chave combinada com catraca 17 mm",
      "Chave combinada com catraca 18 mm",
      "Chave combinada com catraca 19 mm",
      "Estojo organizador prático"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300850",
      "referencia": "R07105012",
      "pecas": "12",
      "pesoKg": "1,569 kg",
      "dentesCatraca": "72 dentes",
      "anguloRetorno": "5°"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300850",
          "R07105012",
          "12",
          "8; 9; 10; 11; 12; 13; 14; 15; 16; 17; 18; 19 mm",
          "1,569 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300850",
      "Referência: R07105012",
      "Quantidade de peças: 12",
      "Medidas: 8 a 19 mm contínuos",
      "Catraca: 72 dentes com giro a 5°",
      "Acabamento: Cromado polido de alto brilho",
      "Peso: 1,569 kg"
    ],
    "properties": [
      "Kit completo que atende 100% da linha automotiva leve e média",
      "Boca fixa com inclinação a 15°",
      "Estojo para fixação em painel ou bancada"
    ],
    "instructions": [
      "Utilize sempre a bitola correspondente ao parafuso.",
      "Evite pancadas sobre a extremidade da catraca."
    ],
    "image": "/images/products/r07105012-1.jpeg",
    "images": [
      "/images/products/r07105012-1.jpeg"
    ],
    "application": "Centros Automotivos, Oficinas de Motocicletas, Indústrias e Mecânica Pesada",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r09105112",
    "name": "R09105112 JOGO DE CHAVES COMBINADAS 6-22mm 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R09105112",
    "technicalCode": "3300992",
    "description": "Jogo de chaves combinadas milimétricas com 12 peças de 6 a 22 mm em aço Cromo-Vanádio com estria a 15°.",
    "detailedDescription": "O Jogo de Chaves Combinadas GEDORE red R09105112 (Código 3300992) com 12 peças foi desenvolvido para o profissional exigente. Em conformidade com as normas DIN 3113 forma A, ISO 3318 e ISO 7738, combina boca a 15° e estria unit-drive inclinada para acesso facilitado a parafusos em locais apertados.",
    "composition": [
      "Chaves combinadas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22 mm",
      "Suporte especial organizador GEDORE red"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300992",
      "referencia": "R09105112",
      "pecas": "12",
      "pesoKg": "1,172 kg",
      "faixaMedidas": "6 a 22 mm"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Medidas (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300992",
          "R09105112",
          "12",
          "6; 7; 8; 9; 10; 11; 12; 13; 14; 17; 19; 22 mm",
          "1,172 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300992",
      "Referência: R09105112",
      "Peças: 12 peças",
      "Material: Aço cromo-vanádio GEDORE red",
      "Acabamento: Niquelado e cromado fosco",
      "Peso total: 1,172 kg"
    ],
    "properties": [
      "Encaixe estriado unit-drive de alta segurança que não danifica as arestas dos fixadores",
      "Corpo esbelto e confortável para manuseio prolongado",
      "Suporte com trava que facilita o transporte na caixa de ferramentas"
    ],
    "instructions": [
      "Utilize no sentido correto de tração e evite prolongadores tubulares.",
      "Mantenha limpo e seco em seu estojo após o uso."
    ],
    "image": "/images/products/r09105112-1.jpeg",
    "images": [
      "/images/products/r09105112-1.jpeg",
      "/images/products/r09105112-2.jpeg"
    ],
    "application": "Oficinas Mecânicas, Manutenção Industrial, Serralherias e Linha Branca",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r09105015",
    "name": "R09105015 JOGO DE CHAVES COMBINADAS 6-32mm 15 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R09105015",
    "technicalCode": "3300993",
    "description": "Jogo de chaves combinadas milimétricas com 15 peças de 6 a 32 mm cobrindo as principais bitolas industriais e mecânicas.",
    "detailedDescription": "O Jogo de Chaves Combinadas GEDORE red R09105015 (Código 3300993) contém 15 peças estratégicas que abrangem desde pequenos fixadores de 6 mm até grandes porcas de 32 mm. Forjadas em aço cromo-vanádio tratado termicamente, são a base indispensável para qualquer bancada profissional.",
    "composition": [
      "Chaves combinadas: 6, 7, 8, 10, 11, 12, 13, 14, 17, 19, 22, 24, 27, 30 e 32 mm",
      "Suporte especial de acondicionamento"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300993",
      "referencia": "R09105015",
      "pecas": "15",
      "pesoKg": "2,850 kg",
      "faixaMedidas": "6 a 32 mm"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Medidas (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300993",
          "R09105015",
          "15",
          "6; 7; 8; 10; 11; 12; 13; 14; 17; 19; 22; 24; 27; 30; 32 mm",
          "2,850 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300993",
      "Referência: R09105015",
      "Peças: 15 peças",
      "Faixa: 6 a 32 mm",
      "Material: Aço Cromo-Vanádio",
      "Peso: 2,850 kg"
    ],
    "properties": [
      "Cobre as medidas mais pesadas da mecânica pesada e industrial (24, 27, 30 e 32 mm)",
      "Boca a 15° e estria unit-drive",
      "Acabamento acetinado antirreflexo"
    ],
    "instructions": [
      "Aplique força no sentido da tração do operador para segurança.",
      "Guarde no suporte organizador em local seco."
    ],
    "image": "/images/products/r09105015-1.png",
    "images": [
      "/images/products/r09105015-1.png",
      "/images/products/r09105015-2.jpeg"
    ],
    "application": "Mecânica Pesada, Centros Automotivos, Tratores, Caminhões e Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r09105024",
    "name": "R09105024 JOGO DE CHAVES COMBINADAS 6-32mm 24 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R09105024",
    "technicalCode": "3300995",
    "description": "O jogo de chaves combinadas mais completo da GEDORE red com 24 peças sem saltos de medida: de 6 a 32 mm.",
    "detailedDescription": "O Jogo de Chaves Combinadas GEDORE red R09105024 (Código 3300995) com 24 peças é o topo de linha para equipar oficinas e indústrias. Contempla todas as bitolas métricas de 6 a 32 mm, garantindo que o mecânico nunca fique sem a ferramenta correta em suas operações diárias.",
    "composition": [
      "Chaves combinadas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 30 e 32 mm",
      "Suporte especial organizador de alta durabilidade"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300995",
      "referencia": "R09105024",
      "pecas": "24",
      "pesoKg": "4,850 kg",
      "faixaMedidas": "6 a 32 mm (24 medidas)"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Medidas (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300995",
          "R09105024",
          "24",
          "6; 7; 8; 9; 10; 11; 12; 13; 14; 15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 26; 27; 28; 30; 32 mm",
          "4,850 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300995",
      "Referência: R09105024",
      "Peças: 24 peças",
      "Medidas: 6 a 32 mm completas",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Acabamento: Niquelado e cromado fosco",
      "Peso: 4,850 kg"
    ],
    "properties": [
      "O conjunto definitivo: 24 chaves sem saltos para total cobertura",
      "Perfil unit-drive na estria para máximo torque sem danificar parafusos",
      "Atende todas as normas técnicas DIN 3113 forma A e ISO 3318"
    ],
    "instructions": [
      "Utilize sempre a ferramenta correspondente à cabeça do fixador.",
      "Mantenha as chaves organizadas no suporte após o trabalho."
    ],
    "image": "/images/products/r09105024-1.png",
    "images": [
      "/images/products/r09105024-1.png"
    ],
    "featured": true,
    "application": "Oficinas Mecânicas Completas, Centros de Usinagem, Indústrias Metalúrgicas e Linha Pesada",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r01185008",
    "name": "R01185008 JOGO DE CHAVES ESTRELA 6-22mm 8 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R01185008",
    "technicalCode": "3301810",
    "description": "Jogo de chaves estrela planas profundas com 8 peças em milímetros, paredes finas e cabeças inclinadas para alto torque.",
    "detailedDescription": "O Jogo de Chaves Estrela GEDORE red R01185008 (Código 3301810) contém 8 peças com medidas duplas de 6 a 22 mm. Produzidas conforme a norma DIN 838 e ISO 3318, possuem cabeças profundas e paredes finas, proporcionando excelente transmissão de força sem risco de escorregamento.",
    "composition": [
      "Chave estrela 6 x 7 mm",
      "Chave estrela 8 x 9 mm",
      "Chave estrela 10 x 11 mm",
      "Chave estrela 12 x 13 mm",
      "Chave estrela 14 x 15 mm",
      "Chave estrela 16 x 17 mm",
      "Chave estrela 18 x 19 mm",
      "Chave estrela 20 x 22 mm",
      "Suporte especial organizador"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301810",
      "referencia": "R01185008",
      "pecas": "8",
      "pesoKg": "0,900 kg",
      "norma": "DIN 838 / ISO 3318"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3301810",
          "R01185008",
          "8",
          "6x7; 8x9; 10x11; 12x13; 14x15; 16x17; 18x19; 20x22 mm",
          "0,900 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301810",
      "Referência: R01185008",
      "Peças: 8 peças",
      "Medidas: 6x7 a 20x22 mm",
      "Material: Aço cromo-vanádio GEDORE red",
      "Perfil: Unit-Drive de paredes finas",
      "Norma: DIN 838, ISO 3318, ISO 1085"
    ],
    "properties": [
      "Cabeças profundas com rebaixo que facilitam o acesso a porcas e parafusos alojados em locais fundos",
      "Paredes finas de alta resistência mecânica",
      "Acabamento niquelado e cromado fosco acetinado"
    ],
    "instructions": [
      "Encaixe a estrela totalmente sobre o fixador antes de aplicar torque.",
      "Não utilize extensões no cabo da ferramenta."
    ],
    "image": "/images/products/r01185008-1.png",
    "images": [
      "/images/products/r01185008-1.png",
      "/images/products/r01185008-2.jpeg"
    ],
    "application": "Oficinas Mecânicas, Manutenção de Motores, Sistemas Hidráulicos e Indústria",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r01185012",
    "name": "R01185012 JOGO DE CHAVES ESTRELA 6-32mm 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R01185012",
    "technicalCode": "3301811",
    "description": "Jogo de chaves estrela profissionais com 12 peças de 6 a 32 mm, forjadas em aço cromo-vanádio com acabamento niquelado e cromado.",
    "detailedDescription": "O Jogo de Chaves Estrela GEDORE red R01185012 (Código 3301811) com 12 peças cobre desde 6x7 mm até a pesada bitola 27x32 mm. Suas extremidades rebaixadas profundas e paredes finas permitem alcançar parafusos emblocados em blocos de motores, cabeçotes e máquinas de grande porte com precisão absoluta.",
    "composition": [
      "Chave estrela 6 x 7 mm",
      "Chave estrela 8 x 9 mm",
      "Chave estrela 10 x 11 mm",
      "Chave estrela 12 x 13 mm",
      "Chave estrela 14 x 15 mm",
      "Chave estrela 16 x 17 mm",
      "Chave estrela 18 x 19 mm",
      "Chave estrela 20 x 22 mm",
      "Chave estrela 21 x 23 mm",
      "Chave estrela 24 x 26 mm",
      "Chave estrela 25 x 28 mm",
      "Chave estrela 27 x 32 mm",
      "Suporte especial de acondicionamento"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301811",
      "referencia": "R01185012",
      "pecas": "12",
      "pesoKg": "2,200 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3301811",
          "R01185012",
          "12",
          "6x7; 8x9; 10x11; 12x13; 14x15; 16x17; 18x19; 20x22; 21x23; 24x26; 25x28; 27x32 mm",
          "2,200 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301811",
      "Referência: R01185012",
      "Quantidade de peças: 12",
      "Faixa: 6x7 a 27x32 mm",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Peso total: 2,200 kg"
    ],
    "properties": [
      "Gama pesada que alcança fixadores industriais de até 32 mm",
      "Estrias rebaixadas para perfeito assentamento da chave",
      "Acabamento acetinado mate que previne reflexos e melhora a aderência das mãos"
    ],
    "instructions": [
      "Limpe as superfícies estriadas após o uso em ambientes oleosos.",
      "Utilize sempre a bitola correspondente para evitar folgas."
    ],
    "image": "/images/products/r01185012-1.png",
    "images": [
      "/images/products/r01185012-1.png",
      "/images/products/r01185012-2.jpeg"
    ],
    "application": "Centros Automotivos de Linha Pesada, Manutenção Mecânica Industrial e Náutica",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r01195008",
    "name": "R01195008 JOGO DE CHAVES ESTRELA POL. 1/4 - 1.1/4 8 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R01195008",
    "technicalCode": "3301045",
    "description": "Jogo de chaves estrela em polegadas com 8 peças de 1/4\" a 1.1/4\", com paredes finas e perfil unit-drive que preserva os fixadores.",
    "detailedDescription": "O Jogo de Chaves Estrela GEDORE red R01195008 (Código 3301045) é a referência em aperto estriado para polegadas. Composto por 8 ferramentas que cobrem de 1/4\" até 1.1/4\", possui cabeças profundas conformadas a frio em aço cromo-vanádio, garantindo torque elevado com total proteção aos parafusos.",
    "composition": [
      "Chave estrela 1/4\" x 5/16\"",
      "Chave estrela 3/8\" x 7/16\"",
      "Chave estrela 1/2\" x 9/16\"",
      "Chave estrela 5/8\" x 11/16\"",
      "Chave estrela 3/4\" x 25/32\"",
      "Chave estrela 13/16\" x 7/8\"",
      "Chave estrela 15/16\" x 1\"",
      "Chave estrela 1.1/16\" x 1.1/4\"",
      "Suporte especial de acondicionamento"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301045",
      "referencia": "R01195008",
      "pecas": "8",
      "pesoKg": "1,600 kg",
      "faixaMedidas": "1/4\" a 1.1/4\""
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (pol)",
        "Peso"
      ],
      "rows": [
        [
          "3301045",
          "R01195008",
          "8",
          "1/4x5/16; 3/8x7/16; 1/2x9/16; 5/8x11/16; 3/4x25/32; 13/16x7/8; 15/16x1; 1.1/16x1.1/4\"",
          "1,600 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301045",
      "Referência: R01195008",
      "Quantidade de peças: 8",
      "Medidas em polegadas: 1/4x5/16 a 1.1/16x1.1/4\"",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Peso: 1,600 kg"
    ],
    "properties": [
      "Perfil unit-drive de paredes finas para máximo rendimento",
      "Cabeças rebaixadas profundas",
      "Acabamento niquelado e cromado acetinado mate"
    ],
    "instructions": [
      "Verifique sempre a medida em polegadas antes de tracionar.",
      "Mantenha guardada em suporte para rápida identificação visual."
    ],
    "image": "/images/products/r01195008-2.jpeg",
    "images": [
      "/images/products/r01195008-2.jpeg"
    ],
    "application": "Motores Importados, Máquinas Pesadas, Aeronáutica e Equipamentos Agrícolas",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r05125008",
    "name": "R05125008 JOGO DE CHAVES FIXAS 6-22mm 8 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R05125008",
    "technicalCode": "3301812",
    "description": "Jogo de chaves fixas (dupla boca) com 8 peças em milímetros de 6 a 22 mm em aço Cromo-Vanádio com bocas a 15°.",
    "detailedDescription": "O Jogo de Chaves Fixas GEDORE red R05125008 (Código 3301812) é composto por 8 ferramentas de duas bocas que cobrem de 6 a 22 mm. Fabricadas de acordo com as normas DIN 3110 e ISO 3318, apresentam cabeças finas e bocas com inclinação de 15° para rápida inserção e giro em espaços reduzidos.",
    "composition": [
      "Chave fixa 6 x 7 mm",
      "Chave fixa 8 x 9 mm",
      "Chave fixa 10 x 11 mm",
      "Chave fixa 12 x 13 mm",
      "Chave fixa 14 x 15 mm",
      "Chave fixa 16 x 17 mm",
      "Chave fixa 18 x 19 mm",
      "Chave fixa 20 x 22 mm",
      "Suporte especial organizador"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301812",
      "referencia": "R05125008",
      "pecas": "8",
      "pesoKg": "0,900 kg",
      "norma": "DIN 3110 / ISO 3318"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3301812",
          "R05125008",
          "8",
          "6x7; 8x9; 10x11; 12x13; 14x15; 16x17; 18x19; 20x22 mm",
          "0,900 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301812",
      "Referência: R05125008",
      "Peças: 8 peças",
      "Medidas: 6x7 a 20x22 mm",
      "Posição das bocas: 15°",
      "Material: Aço cromo-vanádio GEDORE red",
      "Acabamento: Niquelado e cromado acetinado"
    ],
    "properties": [
      "Cabeças estreitas e usinadas para encaixe sem folgas",
      "Corpo forjado com alta resistência à flexão",
      "Suporte plástico para fixação em bancada ou carrinho"
    ],
    "instructions": [
      "Encaixe a boca perfeitamente perpendicular ao fixador.",
      "Não bata com martelos na ferramenta."
    ],
    "image": "/images/products/r05125008-2.jpeg",
    "images": [
      "/images/products/r05125008-2.jpeg"
    ],
    "application": "Oficinas Mecânicas, Manutenção Geral, Instalações Hidráulicas e Elétricas",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r05125012",
    "name": "R05125012 JOGO DE CHAVES FIXAS 6-32mm 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto",
    "code": "R05125012",
    "technicalCode": "3300961",
    "description": "Jogo de chaves fixas com 12 peças de 6 a 32 mm em aço cromo-vanádio GEDORE red conforme DIN 3110 e ISO 3318.",
    "detailedDescription": "O Jogo de Chaves Fixas GEDORE red R05125012 (Código 3300961) com 12 peças abrange desde pequenos parafusos de 6x7 mm até porcas industriais de 27x32 mm. Fabricadas com aço cromo-vanádio temperado e acabamento fosco acetinado, são ferramentas robustas e confiáveis para o trabalho contínuo.",
    "composition": [
      "Chave fixa 6 x 7 mm",
      "Chave fixa 8 x 9 mm",
      "Chave fixa 10 x 11 mm",
      "Chave fixa 12 x 13 mm",
      "Chave fixa 14 x 15 mm",
      "Chave fixa 16 x 17 mm",
      "Chave fixa 18 x 19 mm",
      "Chave fixa 20 x 22 mm",
      "Chave fixa 21 x 23 mm",
      "Chave fixa 24 x 26 mm",
      "Chave fixa 25 x 28 mm",
      "Chave fixa 27 x 32 mm",
      "Suporte especial de acondicionamento"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300961",
      "referencia": "R05125012",
      "pecas": "12",
      "pesoKg": "1,800 kg",
      "norma": "DIN 3110 / ISO 3318"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3300961",
          "R05125012",
          "12",
          "6x7; 8x9; 10x11; 12x13; 14x15; 16x17; 18x19; 20x22; 21x23; 24x26; 25x28; 27x32 mm",
          "1,800 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300961",
      "Referência: R05125012",
      "Quantidade de peças: 12",
      "Medidas: 6x7 a 27x32 mm",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Peso: 1,800 kg"
    ],
    "properties": [
      "Escala ampla cobrindo a rotina mecânica completa",
      "Cabeças usinadas com tolerâncias estritas",
      "Acabamento cromado fosco anticorrosivo"
    ],
    "instructions": [
      "Mantenha as chaves no suporte plástico para evitar extravios.",
      "Limpe após o trabalho em ambientes com óleo ou poeira abrasiva."
    ],
    "image": "/images/products/r05125012-2.jpeg",
    "images": [
      "/images/products/r05125012-2.jpeg"
    ],
    "application": "Oficinas Mecânicas, Montagens Industriais, Implementos Agrícolas e Linha Pesada",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r03800010",
    "name": "R03800010 CHAVE AJUSTÁVEL 10\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Ajustáveis",
    "code": "R03800010",
    "technicalCode": "3301062",
    "description": "Chave ajustável de 10\" (250 mm) modelo sueco com abertura de até 30 mm, forjada em aço Cromo-Vanádio com acabamento fosfatado.",
    "detailedDescription": "A Chave Ajustável GEDORE red R03800010 (Código 3301062) de 10 polegadas (250 mm) é uma ferramenta versátil e indispensável. Conta com mecanismo de rosca sem-fim à esquerda modelo sueco com movimento suave e mordentes com escala métrica milimétrica gravada a laser, permitindo pré-ajuste visual antes do encaixe na peça.",
    "composition": [
      "Corpo forjado em aço Cromo-Vanádio GEDORE red",
      "Acabamento fosfatado escuro com cabeça retificada",
      "Mandíbula móvel com rosca sem-fim de regulagem precisa à esquerda (modelo sueco)",
      "Escala milimétrica gravada a laser no mordente para pré-ajuste de medida",
      "Orifício no cabo para suspensão e armazenamento seguro"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301062",
      "referencia": "R03800010",
      "comprimentoMm": "250 mm",
      "comprimentoPol": "10\"",
      "aberturaMaximaMm": "30 mm",
      "aberturaMaximaPol": "1.3/16\"",
      "pesoKg": "0,440 kg",
      "posicaoBoca": "15°"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura Máx (mm)",
        "Abertura Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301062",
          "R03800010",
          "250 mm",
          "10\"",
          "30 mm",
          "1.3/16\"",
          "0,440 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301062",
      "Referência: R03800010",
      "Comprimento: 10\" (250 mm)",
      "Abertura máxima: 30 mm (1.3/16\")",
      "Acabamento: Fosfatado com cabeça polida",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Posição da boca: 15°",
      "Peso: 0,440 kg"
    ],
    "properties": [
      "Modelo sueco de alta durabilidade com rosca à esquerda",
      "Escala milimétrica no mordente para agilidade no trabalho",
      "Mordentes paralelos usinados com exatidão que não escorregam"
    ],
    "instructions": [
      "Ajuste sempre a mandíbula móvel firmemente contra a face do fixador antes de aplicar torque.",
      "Aplique a força de preferência no sentido da mandíbula fixa para preservar o mecanismo."
    ],
    "image": "/images/products/r03800010-1.jpg",
    "images": [
      "/images/products/r03800010-1.jpg"
    ],
    "application": "Instalações Hidráulicas, Oficinas Mecânicas, Manutenção Predial e Linhas de Produção",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r03800012",
    "name": "R03800012 CHAVE AJUSTÁVEL 12\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Ajustáveis",
    "code": "R03800012",
    "technicalCode": "3301063",
    "description": "Chave ajustável de 12\" (300 mm) modelo sueco com abertura de até 36 mm e acabamento fosfatado de alta resistência.",
    "detailedDescription": "A Chave Ajustável GEDORE red R03800012 (Código 3301063) de 12 polegadas (300 mm) oferece torque ampliado graças ao seu comprimento de alavanca e abertura de mandíbula de até 36 mm. Forjada em aço cromo-vanádio tratado, é a escolha certa para porcas e parafusos de médio e grande porte.",
    "composition": [
      "Corpo forjado em aço Cromo-Vanádio GEDORE red",
      "Acabamento fosfatado com cabeça usinada e retificada",
      "Rosca à esquerda para regulagem milimétrica suave",
      "Abertura máxima de 36 mm (1.7/16\")",
      "Orifício para pendurar"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301063",
      "referencia": "R03800012",
      "comprimentoMm": "300 mm",
      "comprimentoPol": "12\"",
      "aberturaMaximaMm": "36 mm",
      "pesoKg": "0,700 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura Máx (mm)",
        "Abertura Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301063",
          "R03800012",
          "300 mm",
          "12\"",
          "36 mm",
          "1.7/16\"",
          "0,700 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301063",
      "Referência: R03800012",
      "Comprimento: 12\" (300 mm)",
      "Abertura: 36 mm (1.7/16\")",
      "Material: Aço Cromo-Vanádio",
      "Peso: 0,700 kg"
    ],
    "properties": [
      "Alavanca de 300 mm que reduz o esforço físico na operação",
      "Mordente móvel reforçado",
      "Acabamento fosfatado de elevada durabilidade contra oxidação"
    ],
    "instructions": [
      "Regule a folga com a rosca para evitar cantos arredondados na porca.",
      "Não utilize marretas para golpear o cabo."
    ],
    "image": "/images/products/r03800012-1.jpg",
    "images": [
      "/images/products/r03800012-1.jpg"
    ],
    "application": "Oficinas Mecânicas, Manutenção de Frotas, Indústrias e Construção Civil",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r03800015",
    "name": "R03800015 CHAVE AJUSTÁVEL 15\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Ajustáveis",
    "code": "R03800015",
    "technicalCode": "3301064",
    "description": "Chave ajustável pesada de 15\" (380 mm) com abertura máxima de 46 mm (1.13/16\"), ideal para serviços pesados industriais.",
    "detailedDescription": "A Chave Ajustável GEDORE red R03800015 (Código 3301064) de 15 polegadas (380 mm) atende a demandas severas de manutenção industrial e tubulações. Forjada em liga de aço cromo-vanádio de alta resistência, suporta elevados momentos de torção sem deformação.",
    "composition": [
      "Corpo forjado em aço Cromo-Vanádio GEDORE red de alta resistência",
      "Acabamento fosfatado com proteção anticorrosiva duradoura",
      "Mordente móvel robusto com rosca à esquerda reforçada",
      "Abertura máxima de 46 mm",
      "Orifício de suspensão no cabo"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301064",
      "referencia": "R03800015",
      "comprimentoMm": "380 mm",
      "comprimentoPol": "15\"",
      "aberturaMaximaMm": "46 mm",
      "pesoKg": "1,320 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura Máx (mm)",
        "Abertura Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301064",
          "R03800015",
          "380 mm",
          "15\"",
          "46 mm",
          "1.13/16\"",
          "1,320 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301064",
      "Referência: R03800015",
      "Comprimento: 15\" (380 mm)",
      "Abertura máxima: 46 mm (1.13/16\")",
      "Peso: 1,320 kg",
      "Material: Aço Cromo-Vanádio"
    ],
    "properties": [
      "Robustez extrema para serviços pesados em tubulações e conexões hidráulicas",
      "Acabamento fosfatado anticorrosivo",
      "Rosca usinada de grande diâmetro"
    ],
    "instructions": [
      "Aperte o ajuste completamente antes de exercer o torque.",
      "Guarde em painel de ferramentas através do olhal do cabo."
    ],
    "image": "/images/products/r03800015-1.jpg",
    "images": [
      "/images/products/r03800015-1.jpg"
    ],
    "application": "Indústria Pesada, Máquinas Agrícolas, Caldeiraria, Saneamento e Mineração",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r03800018",
    "name": "R03800018 CHAVE AJUSTÁVEL 18\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Ajustáveis",
    "code": "R03800018",
    "technicalCode": "3301065",
    "description": "Chave ajustável extrapesada de 18\" (450 mm) com abertura máxima de 53 mm (2.1/16\") para grandes porcas e conexões mecânicas.",
    "detailedDescription": "A Chave Ajustável GEDORE red R03800018 (Código 3301065) de 18 polegadas (450 mm) é o maior modelo da série, oferecendo abertura máxima de 53 mm e empunhadura longa de alto braço de alavanca. Projetada para atender montagens industriais pesadas e equipamentos pesados de terraplanagem.",
    "composition": [
      "Corpo forjado em liga de aço Cromo-Vanádio GEDORE red de seção reforçada",
      "Acabamento fosfatado fosco de alta durabilidade mecânica",
      "Capacidade de abertura de mordentes até 53 mm",
      "Mecanismo de rosca à esquerda usinado com folgas mínimas",
      "Orifício na extremidade para gancho de segurança e fixação"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301065",
      "referencia": "R03800018",
      "comprimentoMm": "450 mm",
      "comprimentoPol": "18\"",
      "aberturaMaximaMm": "53 mm",
      "pesoKg": "1,900 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura Máx (mm)",
        "Abertura Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301065",
          "R03800018",
          "450 mm",
          "18\"",
          "53 mm",
          "2.1/16\"",
          "1,900 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301065",
      "Referência: R03800018",
      "Comprimento: 18\" (450 mm)",
      "Abertura máxima: 53 mm (2.1/16\")",
      "Peso: 1,900 kg",
      "Acabamento: Fosfatado com mordentes polidos"
    ],
    "properties": [
      "Capacidade de abertura de mais de 2 polegadas (53 mm)",
      "Alta tenacidade contra choques mecânicos e vibrações",
      "Furo no cabo que viabiliza o uso de cabo de segurança em trabalho em altura"
    ],
    "instructions": [
      "Certifique-se de que a porca do parafuso esteja assentada no fundo da boca da chave.",
      "Após o uso, aplique fina camada de óleo protetivo na rosca sem-fim."
    ],
    "image": "/images/products/r03800018-1.jpg",
    "images": [
      "/images/products/r03800018-1.jpg"
    ],
    "application": "Manutenção Naval, Usinas, Máquinas Pesadas, Mineração e Indústria Petrolífera",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r27160012",
    "name": "R27160012 CHAVE PARA TUBOS MODELO AMERICANO 14\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves para Tubos",
    "code": "R27160012",
    "technicalCode": "3301206",
    "description": "Chave para tubos tipo Stillson modelo americano 14\" (350 mm) com mordentes forjados em aço especial e dentes endurecidos.",
    "detailedDescription": "A Chave para Tubos Modelo Americano GEDORE red R27160012 (Código 3301206) de 14 polegadas (350 mm) é projetada para aperto e desaperto de tubos e conexões de até 2\" (60 mm). Com corpo forjado em ferro fundido nodular e mordentes em aço GEDORE red temperados por indução, proporciona travamento instantâneo em tubulações cilíndricas.",
    "composition": [
      "Corpo robusto forjado em ferro fundido nodular com cabo de perfil duplo T",
      "Mordentes forjados em aço especial temperado de alta dureza",
      "Dentes com geometria auto-apertante e tratamento térmico por indução",
      "Porca de regulagem em aço com recartilho antiderrapante",
      "Orifício de suspensão no cabo"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301206",
      "referencia": "R27160012",
      "comprimentoMm": "350 mm",
      "comprimentoPol": "14\"",
      "aberturaMaximaMm": "60 mm",
      "aberturaMaximaPol": "2\" (60 mm)",
      "pesoKg": "1,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura (mm)",
        "Tubo Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301206",
          "R27160012",
          "350 mm",
          "14\"",
          "60 mm",
          "2\" (60 mm)",
          "1,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301206",
      "Referência: R27160012",
      "Comprimento: 14\" (350 mm)",
      "Capacidade de tubo: até 2\" (60 mm)",
      "Mordentes: Aço forjado temperado por indução",
      "Peso: 1,500 kg"
    ],
    "properties": [
      "Mola de retenção no mordente móvel que cria efeito de catraca no avanço",
      "Dentes endurecidos que mordem mesmo em tubos lisos e galvanizados",
      "Cabo com perfil anatômico confortável"
    ],
    "instructions": [
      "Posicione a chave perpendicularmente ao eixo do tubo.",
      "Gire no sentido em que os dentes puxam a peça para o fundo da boca."
    ],
    "image": "/images/products/r27160012-1.jpg",
    "images": [
      "/images/products/r27160012-1.jpg"
    ],
    "application": "Instalações Hidráulicas, Redes de Incêndio, Indústria de Gás e Manutenção Geral",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r27160016",
    "name": "R27160016 CHAVE PARA TUBOS MODELO AMERICANO 18\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves para Tubos",
    "code": "R27160016",
    "technicalCode": "3301207",
    "description": "Chave para tubos modelo americano 18\" (450 mm) com capacidade para tubos de até 2.1/2\" (76 mm) e máxima aderência mecânica.",
    "detailedDescription": "A Chave para Tubos GEDORE red R27160016 (Código 3301207) de 18 polegadas (450 mm) suporta conexões tubulares de até 2.1/2\" (76 mm). Apresenta corpo monobloco com grande momento de inércia e mordentes tratados termicamente que impedem o escorregamento mesmo sob óleo ou graxa.",
    "composition": [
      "Corpo forjado em liga nodular de alta resistência mecânica contra torção",
      "Mordentes forjados com dentes endurecidos e grip instantâneo",
      "Porca de ajuste de fácil manuseio com encaixe auto-limpante",
      "Comprimento nominal de 450 mm (18\")"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301207",
      "referencia": "R27160016",
      "comprimentoMm": "450 mm",
      "comprimentoPol": "18\"",
      "aberturaMaximaMm": "76 mm",
      "pesoKg": "2,400 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura (mm)",
        "Tubo Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301207",
          "R27160016",
          "450 mm",
          "18\"",
          "76 mm",
          "2.1/2\" (76 mm)",
          "2,400 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301207",
      "Referência: R27160016",
      "Comprimento: 18\" (450 mm)",
      "Capacidade: até 2.1/2\" (76 mm)",
      "Peso: 2,400 kg"
    ],
    "properties": [
      "Excelente relação entre peso e alavanca para serviço contínuo",
      "Mordente móvel flutuante com dentes afiados",
      "Acabamento com pintura resistente à corrosão"
    ],
    "instructions": [
      "Não utilize extensões no cabo.",
      "Mantenha a porca recartilhada limpa de detritos de cimento e poeiras metálicas."
    ],
    "image": "/images/products/r27160016-1.jpg",
    "images": [
      "/images/products/r27160016-1.jpg"
    ],
    "application": "Tubulações Industriais, Encanamentos Prediais, Redes de Ar Comprimido e Linha a Gás",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r27160021",
    "name": "R27160021 CHAVE PARA TUBOS MODELO AMERICANO 24\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves para Tubos",
    "code": "R27160021",
    "technicalCode": "3301208",
    "description": "Chave para tubos modelo americano pesada de 24\" (600 mm) para tubulações de até 3\" (90 mm) na linha pesada e industrial.",
    "detailedDescription": "A Chave para Tubos GEDORE red R27160021 (Código 3301208) de 24 polegadas (600 mm) foi construída para aplicações severas que demandam torque elevado em canos e uniões de até 3 polegadas (90 mm). Corpo reforçado em perfil I para suportar cargas pesadas de aperto mecânico.",
    "composition": [
      "Corpo extrapesado forjado para trabalho contínuo em encanamentos e plataformas",
      "Mordente móvel e fixo usinados com precisão e revenidos",
      "Mola de retorno que garante ação tipo catraca durante o rosqueamento",
      "Orifício para amarração ou gancho"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301208",
      "referencia": "R27160021",
      "comprimentoMm": "600 mm",
      "comprimentoPol": "24\"",
      "aberturaMaximaMm": "90 mm",
      "pesoKg": "4,200 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura (mm)",
        "Tubo Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301208",
          "R27160021",
          "600 mm",
          "24\"",
          "90 mm",
          "3\" (90 mm)",
          "4,200 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301208",
      "Referência: R27160021",
      "Comprimento: 24\" (600 mm)",
      "Capacidade: até 3\" (90 mm)",
      "Peso: 4,200 kg"
    ],
    "properties": [
      "Alavanca de 600 mm capaz de quebrar juntas travadas ou oxidadas com facilidade",
      "Dentes temperados resistentes ao lascamento",
      "Porca em aço com rosca rápida"
    ],
    "instructions": [
      "Garanta que os mordentes estejam limpos antes de agarrar a tubulação.",
      "Após o serviço, guarde em prateleira ou gancho adequado."
    ],
    "image": "/images/products/r27160021-1.jpg",
    "images": [
      "/images/products/r27160021-1.jpg"
    ],
    "application": "Montagem de Poços Artesianos, Indústria Pesada, Caldeiraria e Saneamento Básico",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r27160030",
    "name": "R27160030 CHAVE PARA TUBOS MODELO AMERICANO 36\"",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves para Tubos",
    "code": "R27160030",
    "technicalCode": "3301209",
    "description": "Chave para tubos modelo americano extrapesada de 36\" (900 mm) com capacidade de até 5\" (140 mm) para tubulações de grande porte.",
    "detailedDescription": "A Chave para Tubos GEDORE red R27160030 (Código 3301209) de 36 polegadas (900 mm) é uma ferramenta maciça com capacidade para tubos industriais de até 5\" (140 mm). Forjada com tecnologia de ponta, oferece alavanca massiva para afrouxar e apertar uniões de grande porte em refinarias, saneamento e infraestrutura pesada.",
    "composition": [
      "Estrutura maciça em liga de ferro nodular de altíssima tenacidade e capacidade de carga",
      "Mordentes forjados em aço especial temperado de alta resistência ao desgaste",
      "Dentes endurecidos com desenho otimizado para agarrar tubulações lisas e galvanizadas",
      "Cabo longo para efeito de alavanca com esforço reduzido"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301209",
      "referencia": "R27160030",
      "comprimentoMm": "900 mm",
      "comprimentoPol": "36\"",
      "aberturaMaximaMm": "140 mm",
      "pesoKg": "8,700 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento (mm)",
        "Comprimento (\")",
        "Abertura (mm)",
        "Tubo Máx (\")",
        "Peso"
      ],
      "rows": [
        [
          "3301209",
          "R27160030",
          "900 mm",
          "36\"",
          "140 mm",
          "5\" (140 mm)",
          "8,700 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301209",
      "Referência: R27160030",
      "Comprimento: 36\" (900 mm)",
      "Capacidade: até 5\" (140 mm)",
      "Peso: 8,700 kg",
      "Material: Ferro nodular especial com mordentes forjados"
    ],
    "properties": [
      "Comprimento de quase 1 metro (900 mm) gerando altíssimo torque manual",
      "Mordentes substituíveis e porca de alta precisão",
      "Construção inquebrável para trabalho extrapesado contínuo"
    ],
    "instructions": [
      "Requer manuseio firme de dois operadores ou apoio estável para alavanca máxima com segurança.",
      "Inspecione os dentes periodicamente para verificar ausência de trincas por fadiga extrema."
    ],
    "image": "/images/products/r27160030-1.jpg",
    "images": [
      "/images/products/r27160030-1.jpg"
    ],
    "application": "Indústria Naval, Mineração, Plataformas de Óleo e Gás, Infraestrutura de Saneamento e Usinas",
    "priceFormatted": "Consulte Valor"
  },
  {
    "id": "r38001005",
    "name": "R38001005 JOGO DE CHAVE DE FENDA 5 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Fenda & Phillips",
    "code": "R38001005",
    "technicalCode": "3365101",
    "description": "Jogo de chaves de fenda simples e cruzadas PH com 5 peças em cromo-vanádio GEDORE red e cabo ergonômico injetado.",
    "detailedDescription": "O Jogo de Chaves de Fenda GEDORE red R38001005 (Código 3365101) reúne 5 peças fundamentais para o dia a dia profissional: 3 chaves de fenda simples e 2 chaves de fenda cruzada (Phillips). Produzidas conforme as normas DIN/ISO, possuem haste em aço cromo-vanádio niquelado e cabo injetado em polipropileno com cantos arredondados que proporciona excelente empunhadura e transmissão de torque sem fadiga.",
    "composition": [
      "Chave de fenda simples 3/16\" x 4\" (5 x 100 mm)",
      "Chave de fenda simples 1/4\" x 6\" (6 x 150 mm)",
      "Chave de fenda simples 5/16\" x 8\" (8 x 200 mm)",
      "Chave de fenda cruzada 3/16\" x 4\" PH1 (5 x 100 mm)",
      "Chave de fenda cruzada 1/4\" x 6\" PH2 (6 x 150 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3365101",
      "referencia": "R38001005",
      "pecas": "5",
      "pesoKg": "0,450 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3365101",
          "R38001005",
          "5",
          "3 Fenda Simples (3/16x4\", 1/4x6\", 5/16x8\") + 2 Fenda Cruzada (PH1, PH2)",
          "0,450 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3365101",
      "Referência: R38001005",
      "Peças: 5 peças",
      "Haste: Aço cromo-vanádio com superfície niquelada",
      "Cabo: Polipropileno ergonômico injetado",
      "Ponta: Fosfatizada preta para ajuste perfeito no parafuso",
      "Normas: DIN / ISO",
      "Peso: 0,450 kg"
    ],
    "properties": [
      "Cabo com formato anatômico e cantos arredondados para maior conforto no giro contínuo",
      "Ponta fosfatizada que garante aderência superior e previne desgaste precoce da fenda",
      "Haste niquelada de alta resistência contra ferrugem e oxidação"
    ],
    "instructions": [
      "Utilize a ponta de tamanho idêntico à ranhura do parafuso para evitar espanar a cabeça.",
      "Não utilize a haste da chave como alavanca ou ponteira."
    ],
    "image": "/images/products/r38001005-1.jpg",
    "images": [
      "/images/products/r38001005-1.jpg"
    ],
    "application": "Montagem de Painéis Elétricos, Marcenarias, Manutenção Automotiva, Eletrônica e Linha Branca",
    "priceFormatted": "Consulte Valor"
  }
,
  {
    "id": "r36605109",
    "name": "R36605109 JOGO DE CHAVES L HEXAGONAIS ALLEN 1,5 A 10MM 9 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto & Hexagonais",
    "code": "R36605109",
    "technicalCode": "3369998",
    "description": "Jogo de chaves L hexagonais tipo Allen de 1,5 a 10mm com 9 peças forjadas em aço cromo-vanádio com suporte compacto.",
    "detailedDescription": "O Jogo de Chaves L Hexagonais (Allen) GEDORE red R36605109 (Código 3369998) com 9 peças foi projetado para operações de aperto e desaperto em parafusos com sextavado interno. Fabricadas em aço Cromo-Vanádio de altíssima resistência com acabamento fosfatizado, as chaves oferecem precisão dimensional nas pontas e proteção superior contra corrosão. Acompanha suporte plástico de alta densidade que mantém todas as peças organizadas e identificadas de forma rápida na bancada ou caixa de ferramentas.",
    "composition": [
      "Chave L hexagonal 1,5 mm",
      "Chave L hexagonal 2,0 mm",
      "Chave L hexagonal 2,5 mm",
      "Chave L hexagonal 3,0 mm",
      "Chave L hexagonal 4,0 mm",
      "Chave L hexagonal 5,0 mm",
      "Chave L hexagonal 6,0 mm",
      "Chave L hexagonal 8,0 mm",
      "Chave L hexagonal 10,0 mm",
      "Suporte plástico organizador de alta resistência com trava"
    ],
    "technicalSpecs": {
      "codigoGedore": "3369998",
      "referencia": "R36605109",
      "pecas": "9",
      "pesoKg": "0,240 kg",
      "norma": "DIN ISO 2936"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Conteúdo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3369998",
          "R36605109",
          "1,5; 2; 2,5; 3; 4; 5; 6; 8; 10 mm",
          "9",
          "0,240 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3369998",
      "Referência: R36605109",
      "Composição: 9 peças (1,5 a 10 mm)",
      "Material: Aço Cromo-Vanádio (Cr-V) de alta tenacidade",
      "Acabamento: Superfície fosfatizada anticorrosiva",
      "Norma: Em conformidade com DIN ISO 2936",
      "Peso do jogo: 0,240 kg"
    ],
    "properties": [
      "Bordas chanfradas para acoplamento rápido e seguro na cabeça do parafuso",
      "Tratamento térmico de precisão para máxima resistência à torção sem deformações",
      "Estojo compacto articulado com indicação gravada em relevo de cada bitola"
    ],
    "instructions": [
      "Encaixe a chave completamente no sextavado interno antes de aplicar o torque.",
      "Evite o uso de extensores improvisados no braço curto para não danificar o perfil."
    ],
    "application": "Oficinas Mecânicas, Manutenção Industrial, Montagem de Máquinas, Linha Branca e Bicicletários",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r36605109-1.jpg",
    "images": [
      "/images/products/r36605109-1.jpg"
    ]
  },
  {
    "id": "r36405009",
    "name": "R36405009 JOGO DE CHAVES L TX PERFIL HEXALOBULAR T10 A T50 9 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto & Hexalobulares",
    "code": "R36405009",
    "technicalCode": "3369856",
    "description": "Jogo de chaves L com perfil hexalobular (TX / Torx) T10 a T50 com 9 peças forjadas em aço cromo-vanádio fosfatizado.",
    "detailedDescription": "O Jogo de Chaves L TX Perfil Hexalobular GEDORE red R36405009 (Código 3369856) reúne 9 medidas essenciais (T10 a T50) desenvolvidas para sistemas de transmissão de torque elevado com perfil hexalobular. Fabricadas em aço Cromo-Vanádio com rigoroso controle térmico e acabamento fosfatizado, garantem encaixe sem folgas nas cabeças dos parafusos automotivos e industriais, prevenindo o espanamento do perfil. Acompanha suporte plástico ergonômico.",
    "composition": [
      "Chave L TX T10",
      "Chave L TX T15",
      "Chave L TX T20",
      "Chave L TX T25",
      "Chave L TX T27",
      "Chave L TX T30",
      "Chave L TX T40",
      "Chave L TX T45",
      "Chave L TX T50",
      "Suporte plástico organizador com encaixe seguro"
    ],
    "technicalSpecs": {
      "codigoGedore": "3369856",
      "referencia": "R36405009",
      "pecas": "9",
      "pesoKg": "0,250 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3369856",
          "R36405009",
          "9",
          "T10, T15, T20, T25, T27, T30, T40, T45, T50",
          "0,250 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3369856",
      "Referência: R36405009",
      "Quantidade: 9 peças",
      "Material: Aço cromo-vanádio GEDORE red",
      "Acabamento: Fosfatizado escuro",
      "Perfil: Hexalobular (TX) conforme normas técnicas internacionais",
      "Peso total: 0,250 kg"
    ],
    "properties": [
      "Perfil hexalobular que distribui as forças de aperto uniformemente nos cantos",
      "Excelente retenção de torque em parafusos automotivos e eletrônicos",
      "Suporte dobrável com trava que previne a perda acidental de medidas menores"
    ],
    "instructions": [
      "Verifique o número exato do perfil TX gravado na chave correspondente ao parafuso.",
      "Não utilize martelos ou impactos mecânicos nas hastes das chaves L."
    ],
    "application": "Montagem Automotiva, Fixação de Painéis, Injeção Eletrônica, Eletrodomésticos e Máquinas Agrícolas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r36405009-1.jpg",
    "images": [
      "/images/products/r36405009-1.jpg"
    ]
  },
  {
    "id": "r36455009",
    "name": "R36455009 JOGO DE CHAVES L TX LONGAS T10 A T50 9 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Aperto & Hexalobulares",
    "code": "R36455009",
    "technicalCode": "3369967",
    "description": "Jogo de chaves L TX hexalobulares longas T10 a T50 com 9 peças para alcance superior em cavidades profundas.",
    "detailedDescription": "O Jogo de Chaves L TX Longas GEDORE red R36455009 (Código 3369967) com 9 peças foi projetado para operações que demandam maior alavancagem de torque e acesso facilitado a parafusos embutidos ou de difícil alcance. O corpo estendido proporciona braço de alavanca aumentado, permitindo soltar parafusos emperrados com menor esforço físico do mecânico. Produzidas em aço Cromo-Vanádio com tratamento térmico especial e acabamento fosfatizado.",
    "composition": [
      "Chave L TX longa T10",
      "Chave L TX longa T15",
      "Chave L TX longa T20",
      "Chave L TX longa T25",
      "Chave L TX longa T27",
      "Chave L TX longa T30",
      "Chave L TX longa T40",
      "Chave L TX longa T45",
      "Chave L TX longa T50",
      "Suporte plástico organizador articulado"
    ],
    "technicalSpecs": {
      "codigoGedore": "3369967",
      "referencia": "R36455009",
      "pecas": "9",
      "pesoKg": "0,404 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3369967",
          "R36455009",
          "9",
          "T10, T15, T20, T25, T27, T30, T40, T45, T50 (Longas)",
          "0,404 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3369967",
      "Referência: R36455009",
      "Haste: Longa para maior alcance e alavanca",
      "Peças: 9 peças",
      "Material: Aço Cromo-Vanádio (Cr-V)",
      "Acabamento: Fosfatizado de alta durabilidade",
      "Peso: 0,404 kg"
    ],
    "properties": [
      "Hastes longas que alcançam fixadores em locais profundos de motores e compartimentos",
      "Maior efeito alavanca para desaperto de parafusos com alto torque e travas químicas",
      "Pontas usinadas com precisão micrométrica para assentamento perfeito"
    ],
    "instructions": [
      "Alinhe a chave axialmente ao parafuso antes de girar com alavanca máxima.",
      "Mantenha o suporte limpo de limalhas e óleos para prolongar a vida útil."
    ],
    "application": "Motores Automotivos, Câmbios, Motocicletas, Manutenção Industrial Pesada e Máquinas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r36455009-1.jpg",
    "images": [
      "/images/products/r36455009-1.jpg",
      "/images/products/r36455009-2.jpg"
    ]
  },
  {
    "id": "r01802012",
    "name": "R01802012 JOGO DE CHAVES BIELA 8 A 19MM 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Biela & Tubo",
    "code": "R01802012",
    "technicalCode": "3301527",
    "description": "Jogo de chaves biela tipo L de 8 a 19mm com 12 peças sextavadas vazadas forjadas em aço cromo-vanádio niquelado.",
    "detailedDescription": "O Jogo de Chaves Biela GEDORE red R01802012 (Código 3301527) com 12 peças é um clássico indispensável para mecânicos e preparadores. Composto pelas bitolas de 8 a 19 mm, cada chave possui perfil sextavado em ambos os lados e cabeça cônica de parede fina, viabilizando o aperto e desaperto ágil de porcas em prisioneiros compridos e locais rebaixados. O corpo em L com furo passante na curva permite a passagem de hastes rosqueadas longas com facilidade incomparável.",
    "composition": [
      "Chave biela 8 mm",
      "Chave biela 9 mm",
      "Chave biela 10 mm",
      "Chave biela 11 mm",
      "Chave biela 12 mm",
      "Chave biela 13 mm",
      "Chave biela 14 mm",
      "Chave biela 15 mm",
      "Chave biela 16 mm",
      "Chave biela 17 mm",
      "Chave biela 18 mm",
      "Chave biela 19 mm",
      "Caixa de papelão estruturado para acondicionamento e transporte"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301527",
      "referencia": "R01802012",
      "pecas": "12",
      "pesoKg": "4,300 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Bitolas Inclusas",
        "Peso"
      ],
      "rows": [
        [
          "3301527",
          "R01802012",
          "12",
          "8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
          "4,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301527",
      "Referência: R01802012",
      "Quantidade: 12 peças",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Acabamento: Niquelado e cromado fosco anti-reflexo",
      "Perfil: Sextavado com cabeças de paredes finas e furo passante",
      "Peso do jogo: 4,300 kg"
    ],
    "properties": [
      "Perfil sextavado com encaixe preciso que não arredonda os cantos de porcas e parafusos",
      "Furo passante na curvatura que permite acomodar parafusos e prisioneiros longos",
      "Forjamento a quente para suportar torques contínuos de alta intensidade em oficinas"
    ],
    "instructions": [
      "Utilize o braço longo para soltar porcas travadas e o braço curto para rotação rápida.",
      "Mantenha as pontas sextavadas limpas de graxa espessa e terra abrasiva."
    ],
    "application": "Oficinas Mecânicas Automotivas, Centro Automotivo, Caminhões Leves, Máquinas e Implementos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r01802012-1.jpg",
    "images": [
      "/images/products/r01802012-1.jpg",
      "/images/products/r01802012-2.jpg",
      "/images/products/r01802012-3.jpg",
      "/images/products/r01802012-4.jpg",
      "/images/products/r01802012-5.jpg"
    ]
  },
  {
    "id": "r01902007",
    "name": "R01902007 JOGO DE CHAVES BIELA 3/8\" A 3/4\" 7 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Biela & Tubo",
    "code": "R01902007",
    "technicalCode": "3301528",
    "description": "Jogo de chaves biela em polegadas 3/8\" a 3/4\" com 7 peças forjadas em aço cromo-vanádio com furo passante.",
    "detailedDescription": "O Jogo de Chaves Biela em Polegadas GEDORE red R01902007 (Código 3301528) conta com 7 peças projetadas para atender equipamentos, motores náuticos, máquinas agrícolas e veículos que adotam o padrão imperial (polegadas). Fabricadas em aço Cromo-Vanádio com acabamento niquelado protetivo, as chaves possuem formato em L, cabeças sextavadas cônica de parede fina e orifício na curvatura para passagem de tirantes e parafusos de comprimento elevado.",
    "composition": [
      "Chave biela 3/8\"",
      "Chave biela 7/16\"",
      "Chave biela 1/2\"",
      "Chave biela 9/16\"",
      "Chave biela 5/8\"",
      "Chave biela 11/16\"",
      "Chave biela 3/4\"",
      "Embalagem estruturada original Gedore Red"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301528",
      "referencia": "R01902007",
      "pecas": "7",
      "pesoKg": "2,700 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Bitolas Polegadas",
        "Peso"
      ],
      "rows": [
        [
          "3301528",
          "R01902007",
          "7",
          "3/8\", 7/16\", 1/2\", 9/16\", 5/8\", 11/16\", 3/4\"",
          "2,700 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301528",
      "Referência: R01902007",
      "Quantidade: 7 peças",
      "Material: Aço Cromo-Vanádio Cr-V",
      "Acabamento: Niquelado e cromado",
      "Bitolas: 3/8\" a 3/4\"",
      "Peso: 2,700 kg"
    ],
    "properties": [
      "Medidas em polegadas essenciais para manutenção em importados, aviação e náutica",
      "Corpo vazado para aperto de porcas em barras roscadas profundas",
      "Geometria esguia com cantos arredondados que proporciona manuseio confortável"
    ],
    "instructions": [
      "Use sempre a bitola em polegadas correta para não danificar fixadores padrão imperial.",
      "Limpe após o contato com fluídos hidráulicos para preservar o acabamento niquelado."
    ],
    "application": "Motores Importados, Máquinas Agrícolas, Equipamentos Náuticos, Compressores e Aviação Leve",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r01902007-1.jpg",
    "images": [
      "/images/products/r01902007-1.jpg"
    ]
  },
  {
    "id": "r19401001",
    "name": "R19401001 ALICATE PARA ABRAÇADEIRAS ELÁSTICAS PONTA RETA 215MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R19401001",
    "technicalCode": "3300230",
    "description": "Alicate com pontas retas giratórias com ranhuras cruzadas para montagem e desmontagem de abraçadeiras elásticas automotivas.",
    "detailedDescription": "O Alicate para Abraçadeiras Elásticas Ponta Reta GEDORE red R19401001 (Código 3300230) foi concebido para facilitar a remoção e instalação de abraçadeiras elásticas auto-compensadoras em mangueiras de radiador, arrefecimento e combustível. Seus mordentes contam com ponteiras giratórias ranhuradas que se adaptam em múltiplos ângulos de fixação sem deslizar. Conta com mecanismo de cremalheira/trava com catraca que mantém a abraçadeira aberta, poupando a força do profissional.",
    "composition": [
      "Alicate para abraçadeiras elásticas com ponta reta 215 mm",
      "Ponteiras móveis ranhuradas giratórias 360°",
      "Cabo com revestimento emborrachado ergonômico",
      "Sistema de trava com catraca de desengate rápido"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300230",
      "referencia": "R19401001",
      "pecas": "1",
      "pesoKg": "0,220 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300230",
          "R19401001",
          "215 mm",
          "0,220 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300230",
      "Referência: R19401001",
      "Comprimento total: 215 mm",
      "Ponteira: Reta com ranhuras em cruz",
      "Mecanismo: Catraca de trava com mola de retenção",
      "Material: Aço especial de alta resistência",
      "Peso: 0,220 kg"
    ],
    "properties": [
      "Pontas com rotação que acomodam abraçadeiras em diferentes posições espaciais",
      "Trava automática com cremalheira que mantém a abraçadeira comprimida com segurança",
      "Empunhadura plastificada antideslizante para máximo controle durante o manuseio"
    ],
    "instructions": [
      "Posicione as pontas ranhuradas nas abas da abraçadeira e aperte até a trava engatar.",
      "Para destravar, pressione a alavanca de desengate rápido na parte traseira do alicate."
    ],
    "application": "Sistemas de Arrefecimento, Mangueiras de Radiador, Ar Condicionado e Linhas de Combustível",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19401001-1.jpeg",
    "images": [
      "/images/products/r19401001-1.jpeg",
      "/images/products/r19401001-2.jpeg",
      "/images/products/r19401001-3.jpeg",
      "/images/products/r19401001-4.jpeg"
    ]
  },
  {
    "id": "r19401002",
    "name": "R19401002 ALICATE PARA ABRAÇADEIRAS ELÁSTICAS PONTA CURVA 215MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R19401002",
    "technicalCode": "3300231",
    "description": "Alicate com pontas curvas angulares para abraçadeiras elásticas em mangueiras de difícil acesso no cofre do motor.",
    "detailedDescription": "O Alicate para Abraçadeiras Elásticas Ponta Curva GEDORE red R19401002 (Código 3300231) possui formato angular especial desenhado para vencer obstáculos e alcançar conexões rebaixadas sob o coletor ou atrás do radiador. As cabeças móveis com fendas em cruz travam com firmeza as extremidades da abraçadeira sem escapar, enquanto a cremalheira progressiva mantém a peça aberta durante o posicionamento ou troca da mangueira.",
    "composition": [
      "Alicate para abraçadeiras elásticas ponta curva 215 mm",
      "Pontas giratórias angulares com perfil ranhurado",
      "Alavanca de liberação rápida da trava de catraca",
      "Cabos plastificados de alta aderência"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300231",
      "referencia": "R19401002",
      "pecas": "1",
      "pesoKg": "0,185 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300231",
          "R19401002",
          "215 mm",
          "0,185 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300231",
      "Referência: R19401002",
      "Comprimento: 215 mm",
      "Geometria: Pontas curvas inclinadas para acesso angular",
      "Acabamento: Pintura protetiva preta anticorrosão",
      "Peso: 0,185 kg"
    ],
    "properties": [
      "Cabeça curva que contorna suportes, mangotes e tubulações de ar-condicionado",
      "Mordentes giratórios que se auto-alinham na geometria da abraçadeira elástica",
      "Sistema de catraca com múltiplos estágios de compressão"
    ],
    "instructions": [
      "Use o ângulo curvado para contornar chicotes ou mangueiras paralelas.",
      "Acione a alavanca de liberação suavemente para evitar o salto repentino da abraçadeira."
    ],
    "application": "Cofre do Motor, Mangueiras de Aquecedor Interno, Turbinas e Termostáticas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19401002-1.jpeg",
    "images": [
      "/images/products/r19401002-1.jpeg",
      "/images/products/r19401002-2.jpeg",
      "/images/products/r19401002-3.jpeg",
      "/images/products/r19401002-4.jpeg"
    ]
  },
  {
    "id": "r15101215",
    "name": "R15101215 ALICATE PARA ABRAÇADEIRA ELÁSTICA COM HASTE FLEXÍVEL",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R15101215",
    "technicalCode": "3300375",
    "description": "Alicate com cabo de aço e haste flexível de longo alcance com trava tipo catraca para abraçadeiras inacessíveis.",
    "detailedDescription": "O Alicate com Haste Flexível GEDORE red R15101215 (Código 3300375) é a solução definitiva para abraçadeiras elásticas instaladas em pontos cegos ou inacessíveis por alicates convencionais. Dotado de conduíte reforçado e cabo de aço flexível de 630 mm, o mordente na extremidade do cabo alcança abraçadeiras situadas na base do radiador ou atrás do motor. O corpo conta com trava de catraca contínua que mantém a tensão ajustada enquanto você posiciona a mangueira com as duas mãos livres.",
    "composition": [
      "Alicate acionador com trava de cremalheira",
      "Haste flexível com cabo de aço de alta resistência (aprox. 630 mm)",
      "Mordente terminal compacto com garra autoajustável",
      "Cabos emborrachados anatômicos"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300375",
      "referencia": "R15101215",
      "pecas": "1",
      "pesoKg": "0,539 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300375",
          "R15101215",
          "215 mm (Corpo) / 630 mm (Cabo)",
          "0,539 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300375",
      "Referência: R15101215",
      "Alcance do cabo flexível: 630 mm",
      "Comprimento da empunhadura: 215 mm",
      "Capacidade de abertura: 18 a 54 mm",
      "Mecanismo: Cabo de aço com conduíte de alta flexibilidade",
      "Peso: 0,539 kg"
    ],
    "properties": [
      "Permite desmontar mangueiras do radiador sem precisar retirar o para-choque ou ventoinha",
      "Cabo de aço blindado contra torção e atrito em chapas do motor",
      "Trava automática de pressão com liberação imediata por alavanca de polegar"
    ],
    "instructions": [
      "Evite dobras vivas com raio inferior a 50mm no cabo durante a compressão.",
      "Aplique lubrificante spray no cabo de aço periodicamente para garantir suavidade no retorno."
    ],
    "application": "Oficinas Mecânicas, Veículos Nacionais e Importados com Cofres de Motor Compactos e Híbridos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r15101215-1.jpeg",
    "images": [
      "/images/products/r15101215-1.jpeg",
      "/images/products/r15101215-2.jpeg",
      "/images/products/r15101215-3.jpeg",
      "/images/products/r15101215-4.jpeg"
    ]
  },
  {
    "id": "r19401003",
    "name": "R19401003 ALICATE PARA ABRAÇADEIRA TIPO CLIC E CLIC-R 175MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R19401003",
    "technicalCode": "3300248",
    "description": "Alicate forjado reversível para abrir e fechar com perfeição abraçadeiras tipo Clic e Clic-R em veículos modernos.",
    "detailedDescription": "O Alicate para Abraçadeiras Clic e Clic-R GEDORE red R19401003 (Código 3300248) foi especificamente desenvolvido para os sistemas de abraçadeiras reutilizáveis do tipo Clic e Clic-R, comuns em montadoras europeias e asiáticas. Ao virar o alicate em 180°, ele alterna entre as funções de abertura e de travamento (fechamento) da abraçadeira, sem entortar ou danificar os ganchos metálicos originais. Forjado em aço especial com pontas temperadas por indução.",
    "composition": [
      "Alicate para abraçadeiras Clic e Clic-R 175 mm",
      "Mordentes duplos usinados com encaixes para abertura e fechamento",
      "Mola de retorno de abertura automática",
      "Cabo revestido em vinil vermelho antiderrapante"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300248",
      "referencia": "R19401003",
      "pecas": "1",
      "pesoKg": "0,270 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300248",
          "R19401003",
          "175 mm",
          "0,270 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300248",
      "Referência: R19401003",
      "Comprimento: 175 mm",
      "Compatibilidade: Abraçadeiras metálicas tipo Clic e Clic-R",
      "Material: Aço forjado temperado de alta qualidade",
      "Peso: 0,270 kg"
    ],
    "properties": [
      "Função dupla: abre a abraçadeira de um lado e trava com segurança virando o alicate",
      "Preserva a abraçadeira original do veículo para reutilização sem perda de pressão",
      "Mola interna que auxilia na abertura rápida dos mordentes após o aperto"
    ],
    "instructions": [
      "Posicione os dentes do alicate no fecho da abraçadeira Clic no lado correspondente (abrir ou fechar).",
      "Aperte as empunhaduras até ouvir o clique de travamento característico do fecho."
    ],
    "application": "Manutenção em Linhas de Combustível, Vácuo, Respiro do Cárter, Ar e Injeção Eletrônica",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19401003-1.jpeg",
    "images": [
      "/images/products/r19401003-1.jpeg",
      "/images/products/r19401003-2.jpeg",
      "/images/products/r19401003-3.jpeg"
    ]
  },
  {
    "id": "r19401000",
    "name": "R19401000 ALICATE PARA REMOÇÃO DE GRAMPOS DE ACABAMENTO 235MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Funilaria & Acabamento Automotivo",
    "code": "R19401000",
    "technicalCode": "3300229",
    "description": "Alicate extrator com mordente biselado para remoção segura de grampos plásticos de painéis e forrações sem riscar.",
    "detailedDescription": "O Alicate para Remoção de Grampos de Acabamento GEDORE red R19401000 (Código 3300229) foi criado para profissionais de funilaria, tapeçaria e instaladores de som e películas. Suas pontas afiladas em formato de garfo deslizam com extrema suavidade por baixo de presilhas plásticas, grampos de forro de porta e guarnições sem quebrar o pino ou danificar a pintura do veículo. O ponto de apoio curvo cria uma alavanca suave e eficiente que extrai os grampos intactos.",
    "composition": [
      "Alicate extrator de grampos e presilhas 235 mm",
      "Mordente em cunha com chanfro de apoio alavancado",
      "Mola de abertura suave",
      "Cabos emborrachados isolantes com textura aderente"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300229",
      "referencia": "R19401000",
      "pecas": "1",
      "pesoKg": "0,210 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300229",
          "R19401000",
          "235 mm",
          "0,210 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300229",
      "Referência: R19401000",
      "Comprimento: 235 mm",
      "Perfil da garra: Garfo com chanfro para alavancagem plana",
      "Material: Aço carbono tratado termicamente",
      "Peso: 0,210 kg"
    ],
    "properties": [
      "Remove grampos de forração de portas, teto e para-barros sem partir a cabeça plástica",
      "Base com fulcro curvo que apoia na lataria sem riscar ou afundar o metal",
      "Diminui o tempo de desmontagem de acabamentos internos e externos pela metade"
    ],
    "instructions": [
      "Insira o garfo sob a cabeça do grampo e pressione o cabo para levantá-lo suavemente.",
      "Utilize uma fita crepe de apoio na lataria em caso de pinturas delicadas e restauradas."
    ],
    "application": "Tapeçaria Automotiva, Funilaria e Pintura, Instalação de Som, Envelopamento e Acessórios",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19401000-1.jpeg",
    "images": [
      "/images/products/r19401000-1.jpeg",
      "/images/products/r19401000-2.jpeg",
      "/images/products/r19401000-3.jpeg",
      "/images/products/r19401000-4.jpeg"
    ]
  },
  {
    "id": "r15101000",
    "name": "R15101000 ALICATE PARA CONECTOR DO FILTRO DE COMBUSTÍVEL 230MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R15101000",
    "technicalCode": "3300221",
    "description": "Alicate extrator com pontas curvas especiais para destravar engates rápidos do filtro e linhas de combustível com segurança.",
    "detailedDescription": "O Alicate para Conector do Filtro de Combustível GEDORE red R15101000 (Código 3300221) elimina o risco de quebrar as travas plásticas de engates rápidos durante a substituição periódica do filtro de combustível. Desenvolvido com ponteiras de desenho especial que comprimem uniformemente as duas aletas de travamento do conector, permite desacoplar a mangueira com um único puxão firme e sem vazamentos indesejados. Essencial para revisões de injeção eletrônica e troca de filtros.",
    "composition": [
      "Alicate para conectores de linha de combustível 230 mm",
      "Mordentes curvos com encaixe anatômico para botões de engate rápido",
      "Mola de retorno para abertura automática",
      "Cabos com acabamento plástico ergonômico"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300221",
      "referencia": "R15101000",
      "pecas": "1",
      "pesoKg": "0,270 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300221",
          "R15101000",
          "230 mm",
          "0,270 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300221",
      "Referência: R15101000",
      "Comprimento: 230 mm",
      "Aplicação: Engates rápidos de linhas de combustível e filtro",
      "Material: Aço forjado com tratamento superficial fosfatizado",
      "Peso: 0,270 kg"
    ],
    "properties": [
      "Pressiona as duas aletas do engate simultaneamente com pressão equilibrada",
      "Previne quebras acidentais de conectores plásticos caros da linha de injeção",
      "Formato longo que alcança conectores instalados acima do tanque de combustível"
    ],
    "instructions": [
      "Despressurize a linha de combustível antes de desconectar o filtro.",
      "Posicione as pontas do alicate nos botões de pressão do engate, aperte e puxe a mangueira suavemente para trás."
    ],
    "application": "Troca de Filtro de Combustível, Manutenção de Bomba de Combustível e Injeção Eletrônica",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r15101000-1.jpeg",
    "images": [
      "/images/products/r15101000-1.jpeg",
      "/images/products/r15101000-2.jpeg",
      "/images/products/r15101000-3.jpeg",
      "/images/products/r15101000-4.jpeg"
    ]
  },
  {
    "id": "r09120014",
    "name": "R09120014 CHAVE DE VELA ARTICULADA CABO T 14MM 335MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Vela Automotivas",
    "code": "R09120014",
    "technicalCode": "3365220",
    "description": "Chave de vela articulada 14mm com cabo T longo de 335mm, encaixe sextavado e borracha interna de retenção.",
    "detailedDescription": "A Chave de Vela Articulada com Cabo T GEDORE red R09120014 (Código 3365220) na medida 14 mm é fabricada especialmente para motores modernos com cabeçotes compactos multiválvulas (16V/24V) que utilizam velas estreitas de 14mm. Com comprimento total de 335 mm e junta cardan articulada de alta resistência, permite retirar e rosquear velas em túneis profundos e com ângulos inclinados. Possui inserto de borracha interno que segura a vela com firmeza para extração segura.",
    "composition": [
      "Chave de vela articulada com cabo T 14 mm x 335 mm",
      "Junta cardan articulada 360° reforçada",
      "Borracha interna de retenção para fixação da vela",
      "Cabo em T deslizante ergonômico"
    ],
    "technicalSpecs": {
      "codigoGedore": "3365220",
      "referencia": "R09120014",
      "pecas": "1",
      "pesoKg": "0,435 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Sextavado",
        "Encaixe",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3365220",
          "R09120014",
          "14 mm",
          "3/8\"",
          "335 mm",
          "0,435 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3365220",
      "Referência: R09120014",
      "Medida do sextavado: 14 mm",
      "Comprimento: 335 mm",
      "Articulação: Junta universal integrada",
      "Material: Aço Cromo-Vanádio com acabamento niquelado",
      "Peso: 0,435 kg"
    ],
    "properties": [
      "Borracha interna especial que prende a vela para facilitar a extração do túnel do cabeçote",
      "Junta cardan que possibilita trabalhar em ângulos inclinados de até 45 graus",
      "Haste longa de 335 mm ideal para motores 16 válvulas profundos e compactos"
    ],
    "instructions": [
      "Inicie sempre o rosqueamento da vela manualmente para evitar cruzar as roscas de alumínio do cabeçote.",
      "Não aplique torque excessivo além da especificação recomendada pelo fabricante da vela."
    ],
    "application": "Troca de Velas de Ignição em Motores 1.0 a 2.0 16V, Motores Modernos com Injeção Direta e Motos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r09120014-1.jpeg",
    "images": [
      "/images/products/r09120014-1.jpeg",
      "/images/products/r09120014-2.jpeg",
      "/images/products/r09120014-3.jpeg",
      "/images/products/r09120014-4.jpeg"
    ]
  },
  {
    "id": "r09120016",
    "name": "R09120016 CHAVE DE VELA ARTICULADA CABO T 16MM 335MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Vela Automotivas",
    "code": "R09120016",
    "technicalCode": "3365221",
    "description": "Chave de vela articulada 16mm (5/8\") com cabo T 335mm forjada em cromo-vanádio com anel retentor interno.",
    "detailedDescription": "A Chave de Vela Articulada com Cabo T GEDORE red R09120016 (Código 3365221) no padrão 16 mm (5/8\") é a chave mais utilizada na mecânica automotiva nacional e importada. Equipada com haste longa de 335 mm e articulação tipo cardan flexível, proporciona alcance suave até o fundo do cabeçote sem interferência nos coletores de admissão ou cabos de vela. O soquete possui retentor interno de borracha sintética que trava a vela durante a descida ou retirada.",
    "composition": [
      "Chave de vela articulada cabo T 16 mm x 335 mm",
      "Articulação cardan de alta tenacidade",
      "Borracha interna retentora de vela",
      "Barra transversal em T de giro rápido"
    ],
    "technicalSpecs": {
      "codigoGedore": "3365221",
      "referencia": "R09120016",
      "pecas": "1",
      "pesoKg": "0,447 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Sextavado",
        "Encaixe",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3365221",
          "R09120016",
          "16 mm (5/8\")",
          "3/8\"",
          "335 mm",
          "0,447 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3365221",
      "Referência: R09120016",
      "Sextavado: 16 mm (equivalente a 5/8\")",
      "Comprimento total: 335 mm",
      "Material: Aço Cromo-Vanádio niquelado e polido",
      "Peso: 0,447 kg"
    ],
    "properties": [
      "Medida universal padrão mais comum da frota veicular brasileira",
      "Junta articulada resistente que permite operar em compartimentos estreitos",
      "Retentor de borracha resistente a derivados de petróleo e calor do motor"
    ],
    "instructions": [
      "Verifique se o soquete está alinhado com a vela antes de aplicar força.",
      "Deixe o motor esfriar antes de remover velas em cabeçotes de alumínio para evitar danos na rosca."
    ],
    "application": "Veículos das linhas VW, GM, Fiat, Ford, Toyota, Honda, Hyundai, Renault, Peugeot e motos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r09120016-1.jpeg",
    "images": [
      "/images/products/r09120016-1.jpeg",
      "/images/products/r09120016-2.jpeg",
      "/images/products/r09120016-3.jpeg",
      "/images/products/r09120016-4.jpeg"
    ]
  },
  {
    "id": "r09120021",
    "name": "R09120021 CHAVE DE VELA ARTICULADA CABO T 21MM 335MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves de Vela Automotivas",
    "code": "R09120021",
    "technicalCode": "3365222",
    "description": "Chave de vela articulada 21mm (13/16\") com cabo T 335mm reforçado para motores convencionais e clássicos.",
    "detailedDescription": "A Chave de Vela Articulada com Cabo T GEDORE red R09120021 (Código 3365222) com soquete sextavado de 21 mm (13/16\") foi projetada para veículos tradicionais, motores estacionários, cortadores de grama, geradores, motores marítimos e motos de média/alta cilindrada que utilizam velas maiores. Conta com junta cardan reforçada e comprimento de 335 mm que permite contornar tubulações com conforto, além da borracha interna para sacar a vela sem risco de queda no cofre do motor.",
    "composition": [
      "Chave de vela articulada cabo T 21 mm x 335 mm",
      "Junta universal articulada de alto torque",
      "Anel de borracha interno retentor",
      "Manípulo T para aperto manual equilibrado"
    ],
    "technicalSpecs": {
      "codigoGedore": "3365222",
      "referencia": "R09120021",
      "pecas": "1",
      "pesoKg": "0,545 kg",
      "norma": "DIN / ISO"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Sextavado",
        "Encaixe",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3365222",
          "R09120021",
          "21 mm (13/16\")",
          "3/8\"",
          "335 mm",
          "0,545 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3365222",
      "Referência: R09120021",
      "Sextavado: 21 mm (13/16\")",
      "Comprimento: 335 mm",
      "Acabamento: Niquelado com proteção antiferrugem",
      "Peso: 0,545 kg"
    ],
    "properties": [
      "Perfeita para motores tradicionais (AP, Opala, Fusca/VW Boxer, motos clássicas e geradores)",
      "Articulação cardan macia que compensa desalinhamentos no túnel da vela",
      "Revestimento interno em borracha que absorve choques e previne trinca na porcelana da vela"
    ],
    "instructions": [
      "Não utilize alavancas auxiliares ou canos para aumentar a força do cabo T.",
      "Certifique-se de que a vela esteja firmemente presa na borracha antes de puxar para fora."
    ],
    "application": "Carros Clássicos, Motores Estacionários, Geradores, Motosserras, Barcos e Motocicletas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r09120021-1.jpeg",
    "images": [
      "/images/products/r09120021-1.jpeg",
      "/images/products/r09120021-2.jpeg",
      "/images/products/r09120021-3.jpeg",
      "/images/products/r09120021-4.jpeg"
    ]
  },
  {
    "id": "r19202400",
    "name": "R19202400 TRAVA POLIAS DO COMANDO DE VÁLVULAS AUTOAJUSTÁVEL 485MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Sincronismo & Ponto de Motores",
    "code": "R19202400",
    "technicalCode": "3300390",
    "description": "Ferramenta autoajustável com pinos intercambiáveis para travar com precisão polias do comando de válvulas e bomba d'água.",
    "detailedDescription": "A Trava Polias do Comando de Válvulas Autoajustável GEDORE red R19202400 (Código 3300390) com 485 mm é uma ferramenta indispensável para a troca segura de correias dentadas, correntes de sincronismo e retentores de óleo. Equipada com braços articulados pantográficos com parafuso de bloqueio central, ela se ajusta instantaneamente aos diâmetros de furos de diversas polias dentadas do mercado. Acompanha pinos cônicos rosqueados de alta resistência que travam firmemente a polia durante o torque do parafuso central.",
    "composition": [
      "Ferramenta trava polias pantográfica com braço longo de 485 mm",
      "Conjunto de pinos de retenção cilíndricos e cônicos intercambiáveis",
      "Parafuso de travamento e ajuste de abertura",
      "Cabo longo para contra-apoio seguro sem deslizar"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300390",
      "referencia": "R19202400",
      "pecas": "1",
      "pesoKg": "1,010 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Abertura / Ajuste",
        "Peso"
      ],
      "rows": [
        [
          "3300390",
          "R19202400",
          "485 mm",
          "Autoajustável universal",
          "1,010 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300390",
      "Referência: R19202400",
      "Comprimento total: 485 mm",
      "Ajuste: Abertura variável autoajustável",
      "Material: Aço carbono tratado com alta tenacidade estrutural",
      "Peso: 1,010 kg"
    ],
    "properties": [
      "Evita que o comando de válvulas saia de fase e atropele as válvulas nos pistões",
      "Braço de alavanca de 485 mm que suporta o torque de desaperto do parafuso central",
      "Pinos parafusáveis que eliminam folgas perigosas nos furos da engrenagem da polia"
    ],
    "instructions": [
      "Ajuste a abertura dos braços e aperte firmemente o botão central antes de aplicar torque no parafuso da polia.",
      "Nunca utilize pistola de impacto diretamente enquanto segura a ferramenta com uma única mão."
    ],
    "application": "Troca de Correia Dentada, Troca de Bomba D'água, Manutenção em Cabeçotes e Sincronismo de Motores",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19202400-1.jpeg",
    "images": [
      "/images/products/r19202400-1.jpeg",
      "/images/products/r19202400-2.jpeg",
      "/images/products/r19202400-3.jpeg",
      "/images/products/r19202400-4.jpeg"
    ]
  },
  {
    "id": "r15101075",
    "name": "R15101075 ESTETOSCÓPIO PARA MECÂNICO 900MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Diagnóstico Automotivo & Oficina",
    "code": "R15101075",
    "technicalCode": "3300385",
    "description": "Estetoscópio acústico automotivo de alta sensibilidade para localização precisa de ruídos em rolamentos, válvulas e tuchos.",
    "detailedDescription": "O Estetoscópio para Mecânico GEDORE red R15101075 (Código 3300385) com comprimento total de 900 mm é um instrumento de diagnóstico acústico indispensável em oficinas mecânicas modernas. Sua sonda metálica de alta precisão capta vibrações internas do motor e transmite amplificadas aos fones de ouvido isolados, permitindo ao mecânico isolar e identificar com exatidão a origem de estalos, assobios, rolamentos roncando, tuchos hidráulicos batendo, pistões folgados ou engrenagens de câmbio desgastadas sem desmontar nada antes da hora.",
    "composition": [
      "Estetoscópio mecânico com diafragma acústico de alta sensibilidade",
      "Haste metálica de palpação com extensão de longo alcance (900 mm total)",
      "Mangueiras acústicas de silicone flexível de alta densidade",
      "Fones auriculares com almofadas anatômicas de vedação de ruído externo"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300385",
      "referencia": "R15101075",
      "pecas": "1",
      "pesoKg": "0,095 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento Total",
        "Peso"
      ],
      "rows": [
        [
          "3300385",
          "R15101075",
          "900 mm",
          "0,095 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300385",
      "Referência: R15101075",
      "Comprimento da haste: Sonda metálica fina de longo alcance",
      "Comprimento total: 900 mm",
      "Diafragma: Alumínio acústico de alta frequência",
      "Peso: 0,095 kg"
    ],
    "properties": [
      "Detecta folgas ocultas em rolamentos de alternador, bomba d'água, tensor e compressor de ar condicionado",
      "Isola ruídos metálicos internos de tuchos, válvulas e anéis com o motor em funcionamento",
      "Design ultra-leve com fones confortáveis que silenciam ruídos do ambiente da oficina"
    ],
    "instructions": [
      "Mantenha distância de correias, hélices e polias em movimento ao encostar a ponta da haste.",
      "Encoste a ponta metálica suavemente sobre o bloco, mancais ou carcaças para escutar a vibração."
    ],
    "application": "Diagnóstico de Ruídos em Motores, Câmbios Manuais e Automáticos, Rolamentos e Bombas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r15101075-1.jpeg",
    "images": [
      "/images/products/r15101075-1.jpeg",
      "/images/products/r15101075-2.jpeg",
      "/images/products/r15101075-3.jpeg"
    ]
  },
  {
    "id": "r19101005",
    "name": "R19101005 JOGO DE MINIPEGADORES 4 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas & Precisão",
    "code": "R19101005",
    "technicalCode": "3301571",
    "description": "Jogo de minipegadores de precisão com 4 peças (reto, 90°, gancho e ângulo 45°) para anéis o-ring, gaxetas e travas.",
    "detailedDescription": "O Jogo de Minipegadores GEDORE red R19101005 (Código 3301571) com 4 peças foi desenhado para trabalhos minuciosos que exigem alta destreza manual e pontas afiladas. Composto por quatro geometrias distintas (ponta reta, curva 90°, gancho semicircular e ponta angulada 45°), é ideal para remoção de anéis o-ring de borracha, retentores, gaxetas de pistão, molas de retorno, fusíveis e pequenos cabos elétricos sem riscar as sedes usinadas.",
    "composition": [
      "Minipegador com ponta reta",
      "Minipegador com ponta em ângulo de 90°",
      "Minipegador com ponta tipo gancho semicircular",
      "Minipegador com ponta em ângulo de 45°",
      "Cabos emborrachados anatômicos texturizados"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301571",
      "referencia": "R19101005",
      "pecas": "4",
      "pesoKg": "0,070 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Geometrias Inclusas",
        "Peso"
      ],
      "rows": [
        [
          "3301571",
          "R19101005",
          "4",
          "Reto, 90°, Gancho, 45°",
          "0,070 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301571",
      "Referência: R19101005",
      "Quantidade: 4 peças",
      "Hastes: Aço cromo-vanádio tratado termicamente",
      "Cabo: Bicomponente ergonômico antiderrapante",
      "Peso total: 0,070 kg"
    ],
    "properties": [
      "Pontas finas de alta precisão que pescam retentores e travas em orifícios milimétricos",
      "Cabos bicomponentes que proporcionam firmeza no controle com pontas dos dedos oleosas",
      "Haste cromada resistente a solventes, desengraxantes e ferrugem"
    ],
    "instructions": [
      "Utilize a ponta em gancho ou curva para levantar o-rings sem perfurar a borracha de vedação.",
      "Não utilize as pontas como talhadeiras ou punções de impacto."
    ],
    "application": "Montagem de Câmbios Automáticos, Injeção Eletrônica, Freios, Carburadores e Circuitos Pneumáticos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19101005-1.jpeg",
    "images": [
      "/images/products/r19101005-1.jpeg",
      "/images/products/r19101005-2.jpeg",
      "/images/products/r19101005-3.jpeg"
    ]
  },
  {
    "id": "r15151002",
    "name": "R15151002 JOGO DE PINÇAS CURVAS PARA ESTRANGULAR MANGUEIRAS 3 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Automotivas",
    "code": "R15151002",
    "technicalCode": "3301538",
    "description": "Jogo de pinças curvas para estrangular e estancar mangueiras de fluidos sem cortar ou danificar a borracha (3 peças).",
    "detailedDescription": "O Jogo de Pinças Curvas para Estrangular Mangueiras GEDORE red R15151002 (Código 3301538) com 3 peças é a ferramenta ideal para conter vazamentos durante a manutenção em linhas de combustível, vácuo, arrefecimento e freio. Fabricadas em polímero técnico termoplástico reforçado e não condutor, as pinças possuem mordentes com bordas arredondadas que interrompem o fluxo de líquidos por compressão controlada, evitando vazamento no chão da oficina sem esmagar ou romper a malha interna da mangueira.",
    "composition": [
      "Pinça curva pequena para mangueiras de 1/8\" a 5/16\" (combustível e vácuo)",
      "Pinça curva média para mangueiras de 1/2\" a 3/4\" (aquecedor e arrefecimento)",
      "Pinça curva grande para mangueiras de 3/4\" a 2.1/4\" (radiador principal)",
      "Anel corrediço de bloqueio e retenção contínua em cada pinça"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301538",
      "referencia": "R15151002",
      "pecas": "3",
      "pesoKg": "0,280 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Capacidade de Diâmetro",
        "Peso"
      ],
      "rows": [
        [
          "3301538",
          "R15151002",
          "3",
          "Pequena, Média e Grande (1/8\" a 2.1/4\")",
          "0,280 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301538",
      "Referência: R15151002",
      "Quantidade: 3 peças",
      "Material: Nylon técnico reforçado com fibra, não condutor de eletricidade",
      "Formato dos mordentes: Curvos com cantos biselados anti-corte",
      "Peso do jogo: 0,280 kg"
    ],
    "properties": [
      "Estanca o fluxo de combustível ou aditivo sem precisar drenar todo o sistema do veículo",
      "Bordas lisas arredondadas que não machucam o revestimento têxtil interno das mangueiras",
      "Mecanismo de anel de trava rápida que mantém o estrangulamento sem cansar as mãos"
    ],
    "instructions": [
      "Deslize o anel de travamento para fechar os mordentes até estancar o vazamento.",
      "Não utilize em mangueiras metálicas flexíveis ou linhas com malha de aço externa trançada."
    ],
    "application": "Troca de Bombas D'água, Válvulas Termostáticas, Filtros de Combustível e Servofreio",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r15151002-1.jpeg",
    "images": [
      "/images/products/r15151002-1.jpeg",
      "/images/products/r15151002-2.jpeg",
      "/images/products/r15151002-3.jpeg"
    ]
  },
  {
    "id": "r15551001",
    "name": "R15551001 SACA FILTRO DE ÓLEO TRÊS GARRAS AUTOAJUSTÁVEL",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Troca de Óleo & Lubrificação",
    "code": "R15551001",
    "technicalCode": "3301542",
    "description": "Saca filtro de óleo bidirecional com três garras estriadas autoajustáveis para encaixe de 1/2\" e 3/8\".",
    "detailedDescription": "O Saca Filtro de Óleo Três Garras GEDORE red R15551001 (Código 3301542) é uma das ferramentas mais eficientes para a troca rápida de óleo automotivo. Projetado com sistema de engrenagens planetárias autoajustáveis e três garras cilíndricas com estrias serrilhadas de alta aderência, ele morde a carcaça metálica do filtro com firmeza crescente à medida que mais torque é aplicado. Opera nos dois sentidos (aperto e desaperto) e conta com encaixe quadrado de 1/2\" e adaptador para 3/8\" ou chave fixa de 21 mm.",
    "composition": [
      "Saca filtro de óleo de 3 garras autoajustável para filtros de 63 a 102 mm",
      "Adaptador com encaixe quadrado interno de 1/2\" e externo de 21 mm",
      "Garras cilíndricas temperadas com recartilho antiderrapante"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301542",
      "referencia": "R15551001",
      "pecas": "1",
      "pesoKg": "0,370 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Encaixe Quadrado",
        "Capacidade Diâmetro",
        "Peso"
      ],
      "rows": [
        [
          "3301542",
          "R15551001",
          "1/2\" e 3/8\" (com adaptador)",
          "63 a 102 mm",
          "0,370 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301542",
      "Referência: R15551001",
      "Abertura: 63 a 102 mm",
      "Encaixe: Quadrado 1/2\" (ou sextavado 21 mm com chave combinada)",
      "Mecanismo: 3 garras sincronizadas bidirecionais",
      "Material: Aço forjado com engrenagens usinadas de alta resistência",
      "Peso: 0,370 kg"
    ],
    "properties": [
      "Garras serrilhadas que cravam no filtro mesmo sujo de óleo escorregadio",
      "Ajuste progressivo: quanto maior a força na catraca, mais forte as garras prendem",
      "Compatível com catracas de 1/2\", extensores longos ou chaves fixas de 21 mm"
    ],
    "instructions": [
      "Posicione o saca filtro centralizado na ponta do filtro de óleo.",
      "Gire no sentido anti-horário com a catraca para travar as garras e soltar o filtro com facilidade."
    ],
    "application": "Centros de Troca de Óleo, Oficinas Mecânicas, Frotas, Vans, Utilitários e Caminhões Leves",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r15551001-1.jpeg",
    "images": [
      "/images/products/r15551001-1.jpeg",
      "/images/products/r15551001-2.jpeg",
      "/images/products/r15551001-3.jpeg",
      "/images/products/r15551001-4.jpeg"
    ]
  },
  {
    "id": "r19102001",
    "name": "R19102001 BANDEJA MAGNÉTICA RETANGULAR 237X135MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Organização & Fixação de Oficina",
    "code": "R19102001",
    "technicalCode": "3301545",
    "description": "Bandeja magnética retangular em aço inox com base emborrachada de imã duplo de neodímio para parafusos e ferramentas.",
    "detailedDescription": "A Bandeja Magnética Retangular GEDORE red R19102001 (Código 3301545) com dimensões de 237 x 135 mm e profundidade de 30 mm é um item indispensável para manter a organização e produtividade em desmontagens de motores e suspensões. Fabricada em chapa de aço inoxidável polida resistente à corrosão e solventes, conta com dois ímãs de neodímio de alta potência na base. Ela pode ser fixada na vertical, de ponta-cabeça no elevador automotivo ou sobre o capô sem riscar a pintura graças à capa de borracha protetora.",
    "composition": [
      "Bandeja retangular em aço inoxidável 237 x 135 x 30 mm",
      "Base com 2 ímãs permanentes de alta atração magnética",
      "Revestimento protetor de borracha nas bases magnéticas"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301545",
      "referencia": "R19102001",
      "pecas": "1",
      "pesoKg": "0,590 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Comprimento",
        "Largura",
        "Profundidade",
        "Peso"
      ],
      "rows": [
        [
          "3301545",
          "R19102001",
          "237 mm (9,5\")",
          "135 mm",
          "30 mm",
          "0,590 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301545",
      "Referência: R19102001",
      "Dimensões: 237 mm x 135 mm x 30 mm",
      "Material: Aço inoxidável polido",
      "Bases magnéticas: 2 ímãs com capa protetora de borracha",
      "Peso: 0,590 kg"
    ],
    "properties": [
      "Retém porcas, arruelas, parafusos, pontas de bits e chaves pequenas mesmo inclinada a 90° ou 180°",
      "Bases emborrachadas macias que aderem à lataria ou elevador sem arranhar a pintura",
      "Aço inox imune à oxidação por óleo de motor, líquido de arrefecimento e solventes"
    ],
    "instructions": [
      "Limpe a superfície de apoio da bandeja para garantir máxima área de contato magnético.",
      "Não posicione próximo a módulos de injeção eletrônica sensíveis ou cartões magnéticos."
    ],
    "application": "Oficinas Mecânicas, Funilarias, Elevadores Automotivos, Bancadas de Montagem e Motocicletas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19102001-1.jpeg",
    "images": [
      "/images/products/r19102001-1.jpeg",
      "/images/products/r19102001-2.jpeg",
      "/images/products/r19102001-3.jpeg"
    ]
  },
  {
    "id": "r19101004",
    "name": "R19101004 BANDEJA MAGNÉTICA REDONDA 150MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Organização & Fixação de Oficina",
    "code": "R19101004",
    "technicalCode": "3301567",
    "description": "Prato magnético redondo de 150mm em aço inoxidável com ímã permanente emborrachado para parafusos.",
    "detailedDescription": "A Bandeja Magnética Redonda GEDORE red R19101004 (Código 3301567) com diâmetro de 150 mm é a companheira perfeita para o mecânico que precisa de mobilidade e agilidade em serviços rápidos. Com fundo côncavo em aço inox resistente e potente base magnética emborrachada, mantém pequenos fixadores, travas e porcas sempre ao alcance das mãos sem risco de rolarem pelo chão da oficina. Fixa-se instantaneamente em colunas metálicas, longarinas e braços de elevadores automotivos.",
    "composition": [
      "Bandeja / prato redondo magnético Ø 150 mm",
      "Ímã permanente redondo central de alta força",
      "Proteção de borracha flexível na base contra riscos"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301567",
      "referencia": "R19101004",
      "pecas": "1",
      "pesoKg": "0,315 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Diâmetro do Prato",
        "Material",
        "Peso"
      ],
      "rows": [
        [
          "3301567",
          "R19101004",
          "150 mm",
          "Aço inoxidável",
          "0,315 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301567",
      "Referência: R19101004",
      "Diâmetro do prato: 150 mm",
      "Material: Chapa de aço inoxidável prensada",
      "Base: Ímã circular com capa de borracha antiriscos",
      "Peso: 0,315 kg"
    ],
    "properties": [
      "Design circular compacto que cabe perfeitamente no vão de qualquer bandeja ou carrinho",
      "Ímã de alta indução que segura com firmeza parafusos de cabeçote e pequenas ferramentas",
      "Borracha na base que não transfere atrito para a pintura de para-lamas e laterais de veículos"
    ],
    "instructions": [
      "Evite quedas fortes de altura para não descolar o imã permanente da base.",
      "Lave com desengraxante neutro para retirar excesso de óleo e poeira de ferro."
    ],
    "application": "Troca de Pastilhas de Freio, Desmontagem de Painéis, Manutenção em Motos e Bancadas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r19101004-1.jpeg",
    "images": [
      "/images/products/r19101004-1.jpeg",
      "/images/products/r19101004-2.jpeg"
    ]
  },
  {
    "id": "r17152000",
    "name": "R17152000 SACA POLIAS DUAS GARRAS 4\" CAPACIDADE 2.300KG",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Extratores & Saca Polias",
    "code": "R17152000",
    "technicalCode": "3300386",
    "description": "Extrator mecânico de duas garras articuladas reversíveis de 4 polegadas com capacidade de carga de 2.300 kg.",
    "detailedDescription": "O Saca Polias com Duas Garras GEDORE red R17152000 (Código 3300386) de 4 polegadas (abertura máxima de 100 mm) foi forjado para extração segura de rolamentos, buchas, engrenagens e polias cravadas em eixos de motores e transmissões. Projetado com fuso mecânico roscado de alta resistência com ponta cônica de apoio e garras reversíveis (para extração externa ou interna), suporta com folga até 2.300 kg (22,5 kN) de força de tração, prevenindo empenamentos no eixo do motor.",
    "composition": [
      "Corpo travessa forjado em aço especial de alto limite elástico",
      "Fuso mecânico roscado temperado com cabeça sextavada",
      "Par de garras reversíveis de 4 polegadas (100 mm de abertura máxima)",
      "Parafusos e porcas de fixação e articulação das garras"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300386",
      "referencia": "R17152000",
      "pecas": "1",
      "pesoKg": "0,750 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Descrição",
        "Código",
        "Referência",
        "Capacidade de Carga",
        "Abertura Máxima"
      ],
      "rows": [
        [
          "Saca polias 2 garras 4\"",
          "3300386",
          "R17152000",
          "2.300 kg (2,3 t)",
          "100 mm"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300386",
      "Referência: R17152000",
      "Abertura máxima das garras: 100 mm (4\")",
      "Capacidade de carga: 2.300 kg (22,5 kN)",
      "Garras: Reversíveis para pega interna e externa",
      "Fuso: Aço temperado de alta dureza com ponta cônica de centragem",
      "Peso: 0,750 kg"
    ],
    "properties": [
      "Garras com perfil delgado que encaixam atrás de polias com folga mínima na carcaça",
      "Garras reversíveis que alternam entre extração externa e interna de pistas de rolamentos",
      "Fuso com rosca trapezoidal usinada para avanço suave com mínimo atrito mecânico"
    ],
    "instructions": [
      "Lubrifique a rosca do fuso antes de aplicar carga para garantir o rendimento máximo da força mecânica.",
      "Certifique-se de que as duas garras estejam posicionadas simetricamente no centro do eixo."
    ],
    "application": "Extração de Rolamentos, Polias de Virabrequim, Engrenagens de Câmbio e Buchas Industriais",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r17152000-1.jpeg",
    "images": [
      "/images/products/r17152000-1.jpeg",
      "/images/products/r17152000-2.jpeg",
      "/images/products/r17152000-3.jpeg"
    ]
  }
,
  {
    "id": "r17152001",
    "name": "R17152001 SACA POLIAS DUAS GARRAS 6\" CAPACIDADE 2.800KG",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Extratores & Saca Polias",
    "code": "R17152001",
    "technicalCode": "3300387",
    "description": "Extrator mecânico com duas garras reversíveis de 6 polegadas (150mm) e fuso temperado com capacidade de 2.800 kg.",
    "detailedDescription": "O Saca Polias com Duas Garras GEDORE red R17152001 (Código 3300387) com alcance de 6 polegadas (abertura máxima de 150 mm) foi especialmente dimensionado para extrair com segurança polias de correias automotivas, engrenagens de eixos secundários e rolamentos industriais. Forjado em aço de altíssima resistência com fuso roscado tratado e temperado, ele suporta até 2.800 kg de carga trativa. Suas garras reversíveis permitem tanto a pega externa convencional quanto a extração interna de peças com apoio rebaixado.",
    "composition": [
      "Corpo travessa forjado em aço especial de alta resistência",
      "Fuso mecânico roscado com cabeça sextavada e ponta cônica de centragem",
      "Par de garras reversíveis de 6 polegadas (150 mm de abertura máxima)",
      "Parafusos de retenção e articulação das garras"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300387",
      "referencia": "R17152001",
      "pecas": "1",
      "pesoKg": "1,200 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Descrição",
        "Código",
        "Referência",
        "Capacidade de Carga",
        "Abertura Máxima"
      ],
      "rows": [
        [
          "Saca polias 2 garras 6\"",
          "3300387",
          "R17152001",
          "2.800 kg (2,8 t)",
          "150 mm"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300387",
      "Referência: R17152001",
      "Abertura máxima das garras: 150 mm (6\")",
      "Capacidade de carga: 2.800 kg (27,4 kN)",
      "Garras: Reversíveis para pega externa e interna",
      "Fuso: Aço temperado de alta dureza",
      "Peso: 1,200 kg"
    ],
    "properties": [
      "Garras longas de 150 mm para polias largas de virabrequim e alternadores pesados",
      "Versatilidade de inversão das garras para extrações internas em cubos e pistas",
      "Fuso robusto com encaixe sextavado para aperto com chaves ou soquetes manuais"
    ],
    "instructions": [
      "Mantenha o fuso sempre lubrificado com graxa ou óleo para evitar desgaste precoce do passo de rosca.",
      "Posicione a ponta cônica perfeitamente alinhada com o furo de centro do eixo."
    ],
    "application": "Oficinas Mecânicas, Manutenção de Frotas, Caminhões, Tratores e Motores Industriais",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r17152001-1.jpeg",
    "images": [
      "/images/products/r17152001-1.jpeg",
      "/images/products/r17152001-2.jpeg",
      "/images/products/r17152001-3.jpeg"
    ]
  },
  {
    "id": "r17202000",
    "name": "R17202000 SACA POLIAS TRÊS GARRAS 4\" CAPACIDADE 2.700KG",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Extratores & Saca Polias",
    "code": "R17202000",
    "technicalCode": "3300388",
    "description": "Extrator mecânico autocentrante com três garras reversíveis de 4 polegadas (100mm) e capacidade para 2.700 kg.",
    "detailedDescription": "O Saca Polias com Três Garras GEDORE red R17202000 (Código 3300388) de 4 polegadas (100 mm de abertura máxima) oferece distribuição homogênea das forças de extração através do seu cubo triangular de 3 apoios simétricos a 120°. Essa geometria previne o empenamento ou a ovalização de polias e engrenagens delicadas de alumínio ou ferro fundido durante o desmonte. Suporta com total estabilidade esforços de tração de até 2.700 kg com garras articuladas e reversíveis.",
    "composition": [
      "Cubo central triangular forjado para distribuição em 3 pontos a 120°",
      "Fuso central de acionamento em aço tratado com ponta de apoio",
      "3 garras forjadas reversíveis de 4 polegadas (100 mm)",
      "Conjunto de parafusos e porcas de fixação das garras"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300388",
      "referencia": "R17202000",
      "pecas": "1",
      "pesoKg": "1,050 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Descrição",
        "Código",
        "Referência",
        "Capacidade de Carga",
        "Abertura Máxima"
      ],
      "rows": [
        [
          "Saca polias 3 garras 4\"",
          "3300388",
          "R17202000",
          "2.700 kg (2,7 t)",
          "100 mm"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300388",
      "Referência: R17202000",
      "Capacidade de carga: 2.700 kg (26,5 kN)",
      "Abertura máxima: 100 mm (4\")",
      "Configuração: Três garras simétricas para pega equilibrada",
      "Peso: 1,050 kg"
    ],
    "properties": [
      "Distribuição triangular que reduz o risco de quebra ou deformação da polia",
      "Fixação mais estável que não escorrega lateralmente durante o torque",
      "Garras reversíveis para alcance interno ou externo em peças automotivas"
    ],
    "instructions": [
      "Ajuste os três braços de maneira simétrica para garantir tração alinhada.",
      "Não utilize chaves de impacto de alta vibração; utilize catraca ou chave manual."
    ],
    "application": "Oficinas Mecânicas, Retíficas de Motores, Bombas Hidráulicas e Engrenagens Automotivas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r17202000-1.jpeg",
    "images": [
      "/images/products/r17202000-1.jpeg",
      "/images/products/r17202000-2.jpeg",
      "/images/products/r17202000-3.jpeg"
    ]
  },
  {
    "id": "r17202001",
    "name": "R17202001 SACA POLIAS TRÊS GARRAS 6\" CAPACIDADE 3.300KG",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Extratores & Saca Polias",
    "code": "R17202001",
    "technicalCode": "3300389",
    "description": "Extrator mecânico reforçado com três garras reversíveis de 6 polegadas (150mm) e capacidade para 3.300 kg.",
    "detailedDescription": "O Saca Polias com Três Garras GEDORE red R17202001 (Código 3300389) de 6 polegadas (150 mm de abertura máxima) foi desenvolvido para componentes mecânicos de maior porte e alta interferência de montagem. Com três garras articuladas e capacidade trativa de até 3.300 kg, entrega o dobro de estabilidade e segurança em relação aos modelos de duas garras, garantindo que polias pesadas, rotores e rolamentos de esteiras sejam extraídos em linha reta sem danificar eixos de acionamento.",
    "composition": [
      "Flange triangular forjada para montagem de 3 garras",
      "Fuso temperado de avanço suave com rosca trapezoidal e cabeça sextavada",
      "3 garras reversíveis de 6 polegadas (150 mm de abertura máxima)",
      "Parafusos e porcas de travamento mecânico"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300389",
      "referencia": "R17202001",
      "pecas": "1",
      "pesoKg": "1,600 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Descrição",
        "Código",
        "Referência",
        "Capacidade de Carga",
        "Abertura Máxima"
      ],
      "rows": [
        [
          "Saca polias 3 garras 6\"",
          "3300389",
          "R17202001",
          "3.300 kg (3,3 t)",
          "150 mm"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300389",
      "Referência: R17202001",
      "Abertura máxima: 150 mm (6\")",
      "Capacidade trativa: 3.300 kg (32,3 kN)",
      "Material: Aço forjado temperado de alta densidade",
      "Peso: 1,600 kg"
    ],
    "properties": [
      "Capacidade estendida de 3,3 toneladas para polias emperradas e engrenagens cônicas",
      "Pega uniforme em três pontos a 120 graus que elimina torções no eixo do motor",
      "Garras articuladas e reversíveis que se adaptam a diferentes rebaixos e diâmetros"
    ],
    "instructions": [
      "Lubrifique a ponta cônica e a rosca antes de apertar sob alta pressão.",
      "Garanta que a peça a ser extraída esteja livre de travas ou anéis elásticos ocultos."
    ],
    "application": "Linha Pesada, Máquinas Agrícolas, Compressores Industriais, Motores Elétricos e Caminhões",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r17202001-1.jpeg",
    "images": [
      "/images/products/r17202001-1.jpeg",
      "/images/products/r17202001-2.jpeg",
      "/images/products/r17202001-3.jpeg"
    ]
  },
  {
    "id": "r49003033",
    "name": "R49003033 JOGO DE SOQUETES 1/4\" SEXTAVADOS 4 A 13MM 33 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes 1/4\"",
    "code": "R49003033",
    "technicalCode": "3300051",
    "description": "Jogo compacto de soquetes 1/4\" sextavados de 4 a 13mm, catraca reversível de dentes finos e bits em maleta técnica com 33 peças.",
    "detailedDescription": "O Jogo de Soquetes 1/4\" GEDORE red R49003033 (Código 3300051) reúne 33 peças essenciais acondicionadas em um estojo plástico de alta resistência com fecho metálico. Ideal para trabalhos em espaços confinados, o conjunto conta com soquetes curtos de 4 a 13 mm conforme normas DIN 3124 e ISO 2725, catraca reversível com botão de desengate rápido e empunhadura ergonômica bicomponente, além de extensões, junta universal e chaves soquete com pontas hexagonais, fenda, phillips, pozidriv e torx.",
    "composition": [
      "12 Soquetes 1/4\" sextavados: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13 mm",
      "1 Catraca reversível 1/4\" com desengate rápido",
      "1 Cabo com quadrado 1/4\"",
      "2 Extensões 1/4\": 50 e 100 mm",
      "1 Junta universal 1/4\"",
      "1 Adaptador para bits 1/4\" x 1/4\"",
      "4 Chaves soquete 1/4\" hexagonais: 3, 4, 5, 6 mm",
      "3 Chaves soquete 1/4\" fenda simples: 4, 5.5, 6.5 mm",
      "2 Chaves soquete 1/4\" fenda cruzada PH: PH1, PH2",
      "2 Chaves soquete 1/4\" fenda cruzada PZ: PZ1, PZ2",
      "4 Chaves soquete 1/4\" TX (hexalobular): T15, T20, T25, T30",
      "Maleta plástica com dobradiças e fecho metálico (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300051",
      "referencia": "R49003033",
      "pecas": "33",
      "pesoKg": "1,310 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Estojo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300051",
          "R49003033",
          "300 x 180 x 52 mm",
          "33",
          "1,310 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300051",
      "Referência: R49003033",
      "Encaixe: Quadrado de 1/4\"",
      "Peças: 33 peças",
      "Acabamento: Cromado mate acetinado com pontas fosfatizadas",
      "Catraca: Reversível por alavanca com botão de pressão para extração de soquetes",
      "Peso total: 1,310 kg"
    ],
    "properties": [
      "Catraca com mecanismo de dentes finos que opera em ângulos de giro reduzidos",
      "Chaves soquete com haste fosfatizada antiferrugem e precisão milimétrica",
      "Maleta plástica com travas de aço resistente a quedas e produtos químicos de bancada"
    ],
    "instructions": [
      "Pressione o botão traseiro da catraca para inserir ou remover o soquete com suavidade.",
      "Utilize o cabo com quadrado para apertos manuais rápidos sem necessidade da catraca."
    ],
    "application": "Painéis Elétricos, Injeção Eletrônica, Motocicletas, Informática, Eletrodomésticos e Manutenção Geral",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r49003033-1.jpg",
    "images": [
      "/images/products/r49003033-1.jpg"
    ]
  },
  {
    "id": "r49003046",
    "name": "R49003046 JOGO DE SOQUETES 1/4\" SEXTAVADOS 4 A 14MM 46 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes 1/4\"",
    "code": "R49003046",
    "technicalCode": "3300052",
    "description": "Jogo completo de soquetes 1/4\" de 4 a 14mm com extensão flexível, cabo T, catraca reversível e chaves soquete (46 peças).",
    "detailedDescription": "O Jogo de Soquetes 1/4\" GEDORE red R49003046 (Código 3300052) com 46 peças é a solução mais completa da categoria para serviços de precisão e acesso difícil. Forjado em aço Cromo-Vanádio com acabamento acetinado de alta qualidade, inclui soquetes de 4 a 14 mm, catraca de dentes finos com troca rápida, cabo T deslizante, extensão flexível de 150 mm para locais curvos, junta universal articulada, adaptadores, chaves L hexagonais e um amplo sortimento de chaves soquete.",
    "composition": [
      "13 Soquetes 1/4\" sextavados: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14 mm",
      "1 Catraca reversível 1/4\" com desengate rápido",
      "1 Cabo T 1/4\" deslizante",
      "1 Cabo com quadrado 1/4\"",
      "2 Extensões 1/4\": 50 e 100 mm",
      "1 Extensão flexível 1/4\": 150 mm",
      "1 Junta universal 1/4\"",
      "1 Adaptador para bits 1/4\" x 1/4\"",
      "4 Chaves L hexagonais: 1.27, 1.5, 2, 2.5 mm",
      "6 Chaves soquete 1/4\" hexagonais: 3, 4, 5, 6, 7, 8 mm",
      "3 Chaves soquete 1/4\" fenda simples: 4, 5.5, 6.5 mm",
      "3 Chaves soquete 1/4\" fenda cruzada PH: PH1, PH2, PH3",
      "3 Chaves soquete 1/4\" fenda cruzada PZ: PZ1, PZ2, PZ3",
      "7 Chaves soquete 1/4\" TX (hexalobular): T10, T15, T20, T25, T27, T30, T40",
      "Maleta plástica com fechos metálicos (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300052",
      "referencia": "R49003046",
      "pecas": "46",
      "pesoKg": "1,450 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Estojo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300052",
          "R49003046",
          "300 x 180 x 52 mm",
          "46",
          "1,450 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300052",
      "Referência: R49003046",
      "Encaixe: 1/4\"",
      "Composição: 46 peças",
      "Material: Aço Cromo-Vanádio (Cr-V)",
      "Diferencial: Inclui extensão flexível de 150 mm para contorno de obstáculos",
      "Peso do jogo: 1,450 kg"
    ],
    "properties": [
      "Extensão flexível de 150 mm que permite girar parafusos atrás de condutos e mangueiras",
      "Cabo T deslizante para aplicação de torque equilibrado com as duas mãos",
      "Acompanha chaves L hexagonais auxiliares para calibragem e ajustes de precisão"
    ],
    "instructions": [
      "Evite aplicar torque extremo na extensão flexível; use-a apenas para condução inicial.",
      "Limpe os soquetes após o uso para preservar a marcação em baixo relevo das medidas."
    ],
    "application": "Mecânica de Precisão, Ajustes Automotivos, Robótica, Manutenção de Aeronaves Leves e Motos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r49003046-1.jpg",
    "images": [
      "/images/products/r49003046-1.jpg"
    ]
  },
  {
    "id": "r69008012",
    "name": "R69008012 JOGO DE SOQUETES 1/2\" SEXTAVADOS 10 A 19MM COM CATRACA 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes 1/2\"",
    "code": "R69008012",
    "technicalCode": "3300030",
    "description": "Jogo de soquetes 1/2\" sextavados de 10 a 19mm com catraca reversível e extensão em régua metálica (12 peças).",
    "detailedDescription": "O Jogo de Soquetes 1/2\" GEDORE red R69008012 (Código 3300030) com 12 peças é um kit prático e enxuto que reúne as bitolas mais frequentes do dia a dia da oficina. Acompanha os soquetes de 10 a 19 mm, extensão de 125 mm e a consagrada catraca reversível de 1/2\" com botão de desengate rápido e cabo ergonômico. Todas as peças são organizadas sobre um trilho metálico compacto que pode ser fixado diretamente na parede ou colocado no carrinho de ferramentas.",
    "composition": [
      "10 Soquetes 1/2\" sextavados: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 mm",
      "1 Catraca reversível 1/2\" com desengate rápido",
      "1 Extensão 1/2\": 125 mm",
      "1 Trilho / régua metálica de fixação e organização"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300030",
      "referencia": "R69008012",
      "pecas": "12",
      "pesoKg": "1,300 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3300030",
          "R69008012",
          "12",
          "10 a 19 mm + Catraca 1/2\" + Extensão 125 mm",
          "1,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300030",
      "Referência: R69008012",
      "Encaixe: 1/2\"",
      "Peças: 12 peças",
      "Acabamento: Cromado mate acetinado com estrias de fricção",
      "Fixação: Trilho metálico para organização rápida",
      "Peso: 1,300 kg"
    ],
    "properties": [
      "Concentra as medidas mais demandadas (10 a 19 mm) em formato ultra-portátil",
      "Soquetes com rebaixo interno especial que abraça as faces das porcas sem arredondar",
      "Trilho de suporte metálico que impede que os soquetes se espalhem na caixa"
    ],
    "instructions": [
      "Encaixe o soquete firmemente na esfera de retenção da catraca ou extensão.",
      "Não utilize extensores improvisados no cabo da catraca."
    ],
    "application": "Oficinas Mecânicas, Borracharias, Suspensão, Manutenção Predial e Montagens Industriais",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r69008012-1.jpg",
    "images": [
      "/images/products/r69008012-1.jpg"
    ]
  },
  {
    "id": "r59003026",
    "name": "R59003026 JOGO DE SOQUETES 3/8\" SEXTAVADOS 6 A 24MM 26 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes 3/8\"",
    "code": "R59003026",
    "technicalCode": "3300053",
    "description": "Jogo de soquetes 3/8\" sextavados de 6 a 24mm com soquetes de vela, catraca, extensões e cabo T em maleta com 26 peças.",
    "detailedDescription": "O Jogo de Soquetes 3/8\" GEDORE red R59003026 (Código 3300053) com 26 peças é o equilíbrio perfeito entre leveza, robustez e alcance dimensional. Cobrindo do 6 ao 24 mm, atende desde pequenos parafusos de sensores e coletores até fixações médias de suspensão e freios. Forjado em aço Cromo-Vanádio com acabamento acetinado fosco, o jogo conta com catraca reversível 3/8\", soquetes de vela de 16 e 21 mm com borracha retentora, extensões de 75 e 150 mm, cabo T com corpo deslizante e junta articulada universal.",
    "composition": [
      "18 Soquetes 3/8\" sextavados: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24 mm",
      "2 Soquetes de vela 3/8\": 16 e 21 mm",
      "1 Catraca reversível 3/8\" com desengate rápido",
      "2 Extensões 3/8\": 75 e 150 mm",
      "1 Cabo T 3/8\" com adaptador deslizante",
      "1 Junta universal 3/8\"",
      "1 Adaptador quadrado 3/8\" x 1/4\"",
      "Maleta plástica de alta resistência com fecho metálico (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300053",
      "referencia": "R59003026",
      "pecas": "26",
      "pesoKg": "2,440 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300053",
          "R59003026",
          "300 x 180 x 52 mm",
          "26",
          "2,440 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300053",
      "Referência: R59003026",
      "Encaixe: 3/8\"",
      "Peças: 26 peças",
      "Faixa de bitolas: 6 a 24 mm",
      "Soquetes de vela inclusos: 16 mm e 21 mm",
      "Peso do jogo: 2,440 kg"
    ],
    "properties": [
      "Encaixe 3/8\" que proporciona excelente acesso em cofre de motores modernos",
      "Soquetes de vela com borracha que seguram a vela para descer e subir sem cair",
      "Catraca ergonômica com empunhadura suave que reduz a fadiga em apertos repetitivos"
    ],
    "instructions": [
      "Utilize as extensões para afastar a catraca de superfícies cortantes e chapas quentes.",
      "Guarde todas as peças nos nichos moldados da maleta para evitar perdas na bancada."
    ],
    "application": "Manutenção Automotiva Geral, Motocicletas, Motores Náuticos e Linhas de Montagem",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r59003026-1.jpg",
    "images": [
      "/images/products/r59003026-1.jpg",
      "/images/products/r59003026-2.jpg",
      "/images/products/r59003026-3.jpg"
    ]
  },
  {
    "id": "r69003024",
    "name": "R69003024 JOGO DE SOQUETES 1/2\" SEXTAVADOS 10 A 32MM 24 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes 1/2\"",
    "code": "R69003024",
    "technicalCode": "3300055",
    "description": "Jogo profissional de soquetes 1/2\" sextavados de 10 a 32mm com catraca reversível, soquetes de vela e extensões (24 peças).",
    "detailedDescription": "O Jogo de Soquetes 1/2\" GEDORE red R69003024 (Código 3300055) com 24 peças é um dos kits mais consagrados em oficinas automotivas, concessionárias e indústrias pesadas. Cobre de 10 a 32 mm com soquetes sextavados robustos forjados em aço Cromo-Vanádio, capazes de transmitir torques pesados sem escorregar. O conjunto acompanha catraca de 1/2\" com trava por botão, extensões de 125 e 250 mm, cabo T deslizante, junta articulada universal e soquetes magnéticos de vela de 16 e 21 mm em maleta reforçada com dobradiças metálicas.",
    "composition": [
      "18 Soquetes 1/2\" sextavados: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 27, 30, 32 mm",
      "2 Soquetes de vela 1/2\": 16 e 21 mm",
      "1 Catraca reversível 1/2\" com desengate rápido",
      "2 Extensões 1/2\": 125 e 250 mm",
      "1 Corpo para cabo T 1/2\" com adaptador 3/8\" x 1/2\"",
      "1 Junta universal 1/2\"",
      "Maleta plástica reforçada antichoque (383 x 272 x 80 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300055",
      "referencia": "R69003024",
      "pecas": "24",
      "pesoKg": "4,430 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300055",
          "R69003024",
          "383 x 272 x 80 mm",
          "24",
          "4,430 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300055",
      "Referência: R69003024",
      "Encaixe: 1/2\"",
      "Composição: 24 peças",
      "Bitolas: 10 a 32 mm",
      "Material: Aço cromo-vanádio GEDORE red",
      "Peso do jogo: 4,430 kg"
    ],
    "properties": [
      "Ampla gama de 10 a 32 mm cobrindo cubos de roda, pivôs, buchas e suportes de motor",
      "Corpo deslizante para cabo T que funciona como adaptador de 3/8\" para 1/2\"",
      "Maleta com canaleta organizadora que mantém cada soquete firme durante o transporte"
    ],
    "instructions": [
      "Use o cabo T para soltar porcas com torque muito elevado e a catraca para o giro rápido.",
      "Nunca utilize soquetes manuais em chaves de impacto pneumáticas."
    ],
    "application": "Centros Automotivos, Suspensão e Freios, Oficinas Diesel, Manutenção Industrial e Agrícola",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r69003024-1.jpg",
    "images": [
      "/images/products/r69003024-1.jpg",
      "/images/products/r69003024-2.jpg",
      "/images/products/r69003024-3.jpg"
    ]
  },
  {
    "id": "r46013094",
    "name": "R46013094 JOGO DE SOQUETES 1/4\" E 1/2\" 94 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Maletas de Soquetes Completas",
    "code": "R46013094",
    "technicalCode": "3300247",
    "description": "Maleta mestre de ferramentas com 94 peças: soquetes 1/4\" e 1/2\" curtos e longos, catracas de alta velocidade e sortimento de bits.",
    "detailedDescription": "O Jogo de Soquetes 1/4\" e 1/2\" GEDORE red R46013094 (Código 3300247) com 94 peças é a oficina móvel completa para o mecânico exigente. Integrando os dois padrões de encaixe mais utilizados no mundo (1/4\" e 1/2\"), conta com soquetes sextavados curtos e longos (para porcas sobre prisioneiros fundos), soquetes de vela, catracas com botão de desengate rápido, extensões rígidas e flexíveis, juntas cardan, cabo T e um generoso estojo de bits hexagonais, fenda, phillips e torx forjados em aço Cr-V.",
    "composition": [
      "13 Soquetes 1/4\" sextavados curtos: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14 mm",
      "8 Soquetes 1/4\" sextavados longos: 6, 7, 8, 9, 10, 11, 12, 13 mm",
      "18 Soquetes 1/2\" sextavados curtos: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 30, 32 mm",
      "4 Soquetes 1/2\" sextavados longos: 14, 15, 17, 19 mm",
      "2 Soquetes de vela 1/2\": 16 e 21 mm",
      "2 Catracas reversíveis com desengate rápido: 1/4\" e 1/2\"",
      "4 Extensões: 1/4\" (50 e 100 mm) e 1/2\" (125 e 250 mm)",
      "1 Extensão flexível 1/4\" (150 mm)",
      "2 Juntas universais: 1/4\" e 1/2\"",
      "1 Cabo T 1/4\" deslizante",
      "1 Cabo com quadrado 1/4\"",
      "1 Adaptador 3/8\" x 1/2\" para cabo T",
      "1 Adaptador para bits 1/2\" x 5/16\"",
      "3 Chaves L hexagonais: 1.5, 2, 2.5 mm",
      "17 Chaves soquete 1/4\" (hex, fenda, phillips, pozidriv, torx)",
      "15 Bits 5/16\" de alto torque",
      "Maleta plástica reforçada GEDORE red com fecho metálico (380 x 280 x 90 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300247",
      "referencia": "R46013094",
      "pecas": "94",
      "pesoKg": "6,500 kg",
      "norma": "DIN 3120 / DIN 3124 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Dimensões Maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300247",
          "R46013094",
          "380 x 280 x 90 mm",
          "94",
          "6,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300247",
      "Referência: R46013094",
      "Total de itens: 94 peças",
      "Encaixes inclusos: 1/4\" e 1/2\"",
      "Soquetes longos inclusos para porcas embutidas",
      "Maleta antichoque com berço termomoldado",
      "Peso do jogo: 6,500 kg"
    ],
    "properties": [
      "Solução all-in-one para quem atende em campo ou quer uma oficina organizada numa só maleta",
      "Presença de soquetes longos de 1/4\" e 1/2\" que eliminam a necessidade de comprar kits avulsos",
      "Duas catracas de alta precisão com sistema de desengate rápido para máxima agilidade"
    ],
    "instructions": [
      "Organize cada soquete em sua respectiva posição numerada na maleta após o serviço.",
      "Mantenha a maleta fechada com as travas metálicas para transporte seguro."
    ],
    "application": "Socorro Móvel, Oficinas Mecânicas, Centros Automotivos, Manutenção Industrial e Competições",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r46013094-1.png",
    "images": [
      "/images/products/r46013094-1.png",
      "/images/products/r46013094-2.jpeg"
    ]
  },
  {
    "id": "r68003016",
    "name": "R68003016 JOGO DE SOQUETES E CHAVES SOQUETE 1/2\" TORX E10 A E24 E T30 A T70 16 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes Torx",
    "code": "R68003016",
    "technicalCode": "3300009",
    "description": "Jogo de soquetes fêmea E10 a E24 e chaves soquete macho T30 a T70 com encaixe 1/2\" em estojo plástico (16 peças).",
    "detailedDescription": "O Jogo de Soquetes e Chaves Soquete 1/2\" Perfil Hexalobular (TX / Torx) GEDORE red R68003016 (Código 3300009) com 16 peças reúne todas as medidas pesadas exigidas por montadoras modernas em cabeçotes, mangas de eixo, freios e caixas de transmissão. Composto por 9 soquetes de perfil fêmea (E10 a E24) e 7 chaves soquete macho com hastes fosfatizadas (T30 a T70), suporta torques intensos com total precisão dimensional, impedindo o arredondamento dos fixadores hexalobulares.",
    "composition": [
      "9 Soquetes 1/2\" TX fêmea: E10, E11, E12, E14, E16, E18, E20, E22, E24",
      "7 Chaves soquete 1/2\" TX macho: T30, T40, T45, T50, T55, T60, T70",
      "Maleta plástica com travas metálicas (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300009",
      "referencia": "R68003016",
      "pecas": "16",
      "pesoKg": "1,690 kg",
      "norma": "DIN 3120 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Estojo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300009",
          "R68003016",
          "300 x 180 x 52 mm",
          "16",
          "1,690 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300009",
      "Referência: R68003016",
      "Encaixe: 1/2\"",
      "Peças: 16 peças",
      "Perfil: Hexalobular interno (Torx macho) e externo (Torx fêmea E-Torx)",
      "Hastes: Aço especial temperado com tratamento fosfatizado",
      "Peso do jogo: 1,690 kg"
    ],
    "properties": [
      "Kit completo para a linha pesada de fixadores Torx em motores Euro 5/Euro 6 e suspensões",
      "Hastes usinadas sob tolerâncias restritas para encaixe justo sem folgas perigosas",
      "Estojo com identificação em relevo das bitolas em cada berço"
    ],
    "instructions": [
      "Verifique a limpeza da fenda do parafuso antes de inserir a chave soquete.",
      "Para parafusos de cabeçote com aperto angular, utilize o goniômetro adequado acoplado."
    ],
    "application": "Parafusos de Cabeçote, Freios ABS, Câmbios Automáticos, Picapes e Veículos Europeus",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r68003016-1.jpg",
    "images": [
      "/images/products/r68003016-1.jpg",
      "/images/products/r68003016-2.jpg"
    ]
  },
  {
    "id": "r68003020",
    "name": "R68003020 JOGO DE SOQUETES 3/8\" E 1/2\" TORX E8 A E20 E T10 A T55 20 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Soquetes Torx",
    "code": "R68003020",
    "technicalCode": "3300045",
    "description": "Jogo versátil de soquetes Torx fêmea e chaves soquete macho nos encaixes 3/8\" e 1/2\" com adaptador em estojo (20 peças).",
    "detailedDescription": "O Jogo de Soquetes 3/8\" e 1/2\" TX GEDORE red R68003020 (Código 3300045) com 20 peças combina perfeitamente a agilidade do encaixe 3/8\" para locais compactos com a robustez do encaixe 1/2\" para torques elevados. O conjunto conta com 9 soquetes fêmea (E6 a E10 em 3/8\" e E12 a E20 em 1/2\"), 10 chaves soquete macho (T10 a T27 em 3/8\" e T30 a T55 em 1/2\") e 1 adaptador de 1/2\" para 3/8\", fornecendo cobertura total em sistemas de injeção, carroceria e mecânica veicular.",
    "composition": [
      "4 Soquetes 3/8\" TX fêmea: E6, E7, E8, E10",
      "5 Soquetes 1/2\" TX fêmea: E12, E14, E16, E18, E20",
      "5 Chaves soquete 3/8\" TX macho: T10, T15, T20, T25, T27",
      "5 Chaves soquete 1/2\" TX macho: T30, T40, T45, T50, T55",
      "1 Adaptador quadrado 1/2\" x 3/8\"",
      "Maleta plástica organizadora com travas metálicas (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300045",
      "referencia": "R68003020",
      "pecas": "20",
      "pesoKg": "2,000 kg",
      "norma": "DIN 3120 / ISO 1174"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Estojo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300045",
          "R68003020",
          "300 x 180 x 52 mm",
          "20",
          "2,000 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300045",
      "Referência: R68003020",
      "Encaixes: 3/8\" e 1/2\"",
      "Peças: 20 peças",
      "Gama fêmea: E6 a E20",
      "Gama macho: T10 a T55",
      "Peso do jogo: 2,000 kg"
    ],
    "properties": [
      "Atende tanto parafusos miúdos de acabamento interno quanto parafusos estruturais de suspensão",
      "Adaptador 1/2\" x 3/8\" incluso que amplia as possibilidades de combinação com catracas",
      "Aço Cromo-Vanádio com tratamento térmico que suporta torques repetitivos sem deformar as pontas"
    ],
    "instructions": [
      "Use o encaixe 3/8\" para pontos de difícil acesso no cofre do motor.",
      "Não aplique pancadas na chave soquete para soltar parafusos oxidados; use desengripante prévio."
    ],
    "application": "Manutenção Automotiva Geral, Freios, Painéis, Câmbios e Linha Leve Nacional e Importada",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r68003020-1.jpg",
    "images": [
      "/images/products/r68003020-1.jpg",
      "/images/products/r68003020-2.jpg",
      "/images/products/r68003020-3.jpg"
    ]
  },
  {
    "id": "r40000027",
    "name": "R40000027 CATRACA REVERSÍVEL 1/4\" COM DESENGATE RÁPIDO 150MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Catracas Reversíveis",
    "code": "R40000027",
    "technicalCode": "3300158",
    "description": "Catraca reversível 1/4\" de dentes finos com cabeça oval compacta, botão de desengate rápido e cabo bicomponente (150mm).",
    "detailedDescription": "A Catraca Reversível 1/4\" GEDORE red R40000027 (Código 3300158) foi projetada para trabalhos ágeis que exigem rotação suave e manuseio confortável. Com comprimento de 150 mm e mecanismo interno de dentes finos (72 dentes), ela opera com ângulo de retorno de apenas 5 graus, permitindo movimentar parafusos em vãos extremamente estreitos. Possui alavanca de inversão rápida de sentido e botão de pressão no topo da cabeça para ejeção instantânea do soquete com as mãos sujas de graxa.",
    "composition": [
      "Catraca reversível 1/4\" com cabeça oval de 150 mm",
      "Mecanismo de dentes finos com ângulo de retorno de 5°",
      "Botão de desengate rápido de soquetes",
      "Empunhadura bicomponente ergonômica com furo para pendurar"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300158",
      "referencia": "R40000027",
      "pecas": "1",
      "pesoKg": "0,122 kg",
      "norma": "DIN 3122 / ISO 3315"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Encaixe Quadrado",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300158",
          "R40000027",
          "1/4\"",
          "150 mm",
          "0,122 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300158",
      "Referência: R40000027",
      "Encaixe: 1/4\"",
      "Comprimento total: 150 mm",
      "Mecanismo: Dentes finos reversível por alavanca",
      "Material: Aço Cromo-Vanádio niquelado e cromado fosco",
      "Peso: 0,122 kg"
    ],
    "properties": [
      "Cabeça oval esguia que entra em cantos de painéis e cofres de motor apertados",
      "Botão de desengate por pressão que solta o soquete com apenas um toque",
      "Cabo bicomponente confortável que não desliza e protege contra calos"
    ],
    "instructions": [
      "Utilize a catraca para o giro contínuo de porcas e parafusos já aliviados.",
      "Evite aplicar trancos ou pancadas na cabeça da catraca."
    ],
    "application": "Painéis Elétricos, Injeção Eletrônica, Eletroeletrônica, Motos e Manutenção Leve",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r40000027-1.jpg",
    "images": [
      "/images/products/r40000027-1.jpg"
    ]
  },
  {
    "id": "r50000027",
    "name": "R50000027 CATRACA REVERSÍVEL 3/8\" COM DESENGATE RÁPIDO 200MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Catracas Reversíveis",
    "code": "R50000027",
    "technicalCode": "3300224",
    "description": "Catraca reversível 3/8\" com cabeça oval compacta, botão de troca rápida e empunhadura ergonômica bicomponente (200mm).",
    "detailedDescription": "A Catraca Reversível 3/8\" GEDORE red R50000027 (Código 3300224) com comprimento de 200 mm é o instrumento ideal para mecânicos automotivos que buscam a manobrabilidade de um encaixe leve com a resistência mecânica necessária para torques médios. Equipada com catraca de engrenagens finas, alavanca seletora de sentido (direita/esquerda) e botão no dorso para liberação e trava segura dos soquetes, oferece excelente rendimento na montagem e desmontagem de componentes de motores e transmissões.",
    "composition": [
      "Catraca reversível 3/8\" com comprimento de 200 mm",
      "Mecanismo de dentes finos reversível por alavanca",
      "Botão de liberação rápida com esfera de pressão",
      "Cabo ergonômico bicomponente em vermelho e preto"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300224",
      "referencia": "R50000027",
      "pecas": "1",
      "pesoKg": "0,282 kg",
      "norma": "DIN 3122 / ISO 3315"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Encaixe Quadrado",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300224",
          "R50000027",
          "3/8\"",
          "200 mm",
          "0,282 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300224",
      "Referência: R50000027",
      "Encaixe: 3/8\"",
      "Comprimento: 200 mm",
      "Material: Aço Cromo-Vanádio GEDORE red",
      "Peso: 0,282 kg"
    ],
    "properties": [
      "Perfeita para operações automotivas onde a catraca de 1/2\" é volumosa demais e a de 1/4\" é frágil",
      "Engrenamento suave que economiza tempo de giro nos dois sentidos",
      "Acabamento cromado acetinado que não reflete a luz de luminárias de oficina nos olhos"
    ],
    "instructions": [
      "Certifique-se de que a alavanca seletora esteja completamente posicionada no sentido desejado.",
      "Não utilize tubos extensores para alavanca na empunhadura plástica."
    ],
    "application": "Oficinas Mecânicas Automotivas, Linha de Montagem, Manutenção de Máquinas e Motos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r50000027-1.jpg",
    "images": [
      "/images/products/r50000027-1.jpg",
      "/images/products/r50000027-2.jpg"
    ]
  },
  {
    "id": "r45200022",
    "name": "R45200022 CABO T 1/4\" DESLIZANTE 115MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Acessórios para Soquetes",
    "code": "R45200022",
    "technicalCode": "3300143",
    "description": "Cabo T deslizante 1/4\" de 115mm (4,5\") forjado em cromo-vanádio com trava de esfera para aperto manual equilibrado.",
    "detailedDescription": "O Cabo T Deslizante 1/4\" GEDORE red R45200022 (Código 3300143) de 115 mm (4,5 polegadas) é um acessório clássico de alta resistência fabricado em conformidade com as normas DIN 3122 e ISO 3315. O cabeçote deslizante permite posicionar o quadrado de acionamento tanto no centro da haste (para giro balanceado com ambas as mãos como um manípulo T) quanto em uma das extremidades (funcionando como um braço de alavanca L rígido para desaperto inicial).",
    "composition": [
      "Haste cilíndrica de 115 mm com limitadores de curso nas pontas",
      "Cabeçote deslizante com encaixe quadrado 1/4\" e esfera de retenção sob pressão"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300143",
      "referencia": "R45200022",
      "pecas": "1",
      "pesoKg": "0,038 kg",
      "norma": "DIN 3122 / ISO 3315"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Comprimento mm",
        "Comprimento Pol.",
        "Encaixe",
        "Peso"
      ],
      "rows": [
        [
          "3300143",
          "R45200022",
          "115 mm",
          "4,5\"",
          "1/4\"",
          "0,038 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300143",
      "Referência: R45200022",
      "Encaixe: Quadrado de 1/4\"",
      "Comprimento: 115 mm (4,5\")",
      "Material: Aço Cromo-Vanádio com acabamento acetinado",
      "Peso: 0,038 kg"
    ],
    "properties": [
      "Dupla função: opera como chave T balanceada ou como chave L de maior alavanca",
      "Esfera de retenção sob pressão que impede a queda involuntária de soquetes",
      "Resistente a torções elevadas sem componentes mecânicos internos sujeitos a quebra"
    ],
    "instructions": [
      "Deslize o cabeçote até o batente da extremidade para obter torque máximo de desaperto.",
      "Mantenha a haste livre de rebarbas mecânicas para deslizamento suave."
    ],
    "application": "Montagem de Painéis, Injeção Eletrônica, Manutenção de Equipamentos e Bancadas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r45200022-1.jpg",
    "images": [
      "/images/products/r45200022-1.jpg"
    ]
  },
  {
    "id": "r60000027",
    "name": "R60000027 CATRACA REVERSÍVEL 1/2\" COM DESENGATE RÁPIDO 250MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Catracas Reversíveis",
    "code": "R60000027",
    "technicalCode": "3300410",
    "description": "Catraca reversível 1/2\" de alta resistência com dentes finos, botão de desengate rápido e cabo ergonômico (250mm).",
    "detailedDescription": "A Catraca Reversível 1/2\" GEDORE red R60000027 (Código 3300410) com comprimento de 250 mm é a ferramenta de aperto mais emblemática para serviços automotivos pesados e industriais. Forjada em aço Cromo-Vanádio de altíssima tenacidade com acabamento acetinado fosco, possui engrenagem de 72 dentes com ângulo de trabalho de 5 graus para aperto contínuo em locais com pouco espaço. O botão central no topo da cabeça trava firmemente o soquete e o ejeta instantaneamente ao ser pressionado.",
    "composition": [
      "Catraca reversível 1/2\" de 250 mm com cabeça oval",
      "Mecanismo de dentes finos com ângulo de retorno de 5°",
      "Botão de liberação rápida com esfera de bloqueio",
      "Cabo bicomponente ergonômico reforçado"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300410",
      "referencia": "R60000027",
      "pecas": "1",
      "pesoKg": "0,586 kg",
      "norma": "DIN 3122 / ISO 3315"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Encaixe Quadrado",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3300410",
          "R60000027",
          "1/2\"",
          "250 mm",
          "0,586 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300410",
      "Referência: R60000027",
      "Encaixe: Quadrado de 1/2\"",
      "Comprimento: 250 mm",
      "Mecanismo: 72 dentes com inversão rápida por alavanca",
      "Peso: 0,586 kg"
    ],
    "properties": [
      "Construção forjada robusta que suporta torques rigorosos do dia a dia da oficina",
      "Desengate rápido por botão de pressão que evita que soquetes fiquem presos na porca",
      "Empunhadura ergonômica anatômica com apoio para o polegar para máxima firmeza"
    ],
    "instructions": [
      "Não utilize a catraca como martelo ou alavanca de impacto contra eixos emperrados.",
      "Para quebrar torques extremamente travados, inicie o desaperto com um cabo articulado de força."
    ],
    "application": "Centros Automotivos, Concessionárias, Suspensão, Manutenção Pesada e Máquinas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r60000027-1.jpg",
    "images": [
      "/images/products/r60000027-1.jpg",
      "/images/products/r60000027-2.jpg"
    ]
  },
  {
    "id": "r63003008",
    "name": "R63003008 JOGO DE SOQUETES DE IMPACTO 1/2\" SEXTAVADOS 10 A 24MM 8 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Linha de Impacto",
    "code": "R63003008",
    "technicalCode": "3300575",
    "description": "Jogo de soquetes de impacto 1/2\" sextavados de 10 a 24mm em aço cromo-molibdênio para parafusadeiras e chaves de impacto (8 peças).",
    "detailedDescription": "O Jogo de Soquetes de Impacto 1/2\" GEDORE red R63003008 (Código 3300575) com 8 peças é fabricado em aço Cromo-Molibdênio (Cr-Mo) de alta resistência e tenacidade elástica, próprio para absorver os golpes cíclicos e picos de torque de chaves de impacto pneumáticas e a bateria. Com acabamento fosfatizado preto protetivo, furos passantes e ranhura de retenção para pino e anel de segurança, inclui as bitolas de 10, 12, 13, 14, 17, 19, 21 e 24 mm acomodadas em estojo plástico antichoque com fecho de aço.",
    "composition": [
      "8 Soquetes de impacto 1/2\" sextavados: 10, 12, 13, 14, 17, 19, 21, 24 mm",
      "Estojo plástico resistente a impacto com fecho metálico (190 x 110 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300575",
      "referencia": "R63003008",
      "pecas": "8",
      "pesoKg": "1,100 kg",
      "norma": "DIN 3129 / ISO 2725-2"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Estojo",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300575",
          "R63003008",
          "190 x 110 x 52 mm",
          "8",
          "1,100 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300575",
      "Referência: R63003008",
      "Encaixe: 1/2\"",
      "Peças: 8 peças (10, 12, 13, 14, 17, 19, 21, 24 mm)",
      "Material: Aço Cromo-Molibdênio (Cr-Mo) especial para impacto",
      "Acabamento: Fosfatizado antiferrugem",
      "Peso do jogo: 1,100 kg"
    ],
    "properties": [
      "Desenvolvido especificamente para suportar o impacto violento de pistolas pneumáticas de 1/2\"",
      "Orifício transversal e canaleta para travamento por pino e anel o-ring conforme normas de segurança",
      "Estojo compacto ideal para levar direto para o box de alinhamento ou elevador"
    ],
    "instructions": [
      "Utilize sempre pino e anel elástico de retenção ao acoplar soquetes em ferramentas pneumáticas de alto torque.",
      "Não utilize soquetes comuns cromados em máquinas de impacto para evitar estilhaçamento."
    ],
    "application": "Troca de Pneus, Suspensão Automotiva, Montagem de Estruturas Metálicas e Indústria Mecânica",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r63003008-1.jpg",
    "images": [
      "/images/products/r63003008-1.jpg"
    ]
  },
  {
    "id": "r63003012",
    "name": "R63003012 JOGO DE SOQUETES DE IMPACTO 1/2\" SEXTAVADOS 10 A 24MM 12 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Linha de Impacto",
    "code": "R63003012",
    "technicalCode": "3300574",
    "description": "Jogo profissional de soquetes de impacto 1/2\" sextavados de 10 a 24mm em aço cromo-molibdênio fosfatizado em maleta técnica com 12 peças.",
    "detailedDescription": "O Jogo de Soquetes de Impacto 1/2\" GEDORE red R63003012 (Código 3300574, também listado como R62300012) com 12 peças oferece uma sequência contínua de medidas para trabalho intenso com parafusadeiras e chaves pneumáticas de 1/2\". Forjados em liga especial de Cromo-Molibdênio com têmpera profunda e acabamento fosfatizado escuro, os soquetes contam com alojamento para pino e anel de segurança. O conjunto inclui os tamanhos 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22 e 24 mm acomodados em maleta plástica durável com fecho de metal.",
    "composition": [
      "12 Soquetes de impacto 1/2\" sextavados: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24 mm",
      "Maleta plástica com dobradiça e trava metálica reforçada (300 x 180 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300574",
      "referencia": "R63003012",
      "pecas": "12",
      "pesoKg": "1,598 kg",
      "norma": "DIN 3129 / ISO 2725-2"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300574",
          "R63003012",
          "300 x 180 x 52 mm",
          "12",
          "1,598 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300574",
      "Referência: R63003012 (Ref. comercial R62300012)",
      "Encaixe: 1/2\"",
      "Peças: 12 peças (10 a 24 mm contínuo)",
      "Material: Aço Cromo-Molibdênio (Cr-Mo)",
      "Acabamento: Superfície fosfatizada de alta resistência",
      "Peso: 1,598 kg"
    ],
    "properties": [
      "Graduação completa de medidas para montadoras de veículos e concessionárias",
      "Liga de alta resiliência que absorve vibrações de ferramentas de impacto contínuo",
      "Gravação das bitolas a laser e em baixo relevo para identificação eterna na oficina"
    ],
    "instructions": [
      "Trave o pino de segurança no anel de borracha antes de acionar a pistola de impacto.",
      "Evite aplicar forças de alavanca com barras manuais acima da capacidade de ruptura do encaixe de 1/2\"."
    ],
    "application": "Oficinas Mecânicas, Frotistas, Centro de Reparação Automotiva e Linhas de Montagem",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r62300012-1.jpg",
    "images": [
      "/images/products/r62300012-1.jpg"
    ]
  },
  {
    "id": "r63003108",
    "name": "R63003108 JOGO DE SOQUETES DE IMPACTO LONGOS 1/2\" 12 A 23MM 8 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Linha de Impacto",
    "code": "R63003108",
    "technicalCode": "3300709",
    "description": "Jogo de soquetes de impacto longos 1/2\" de 12 a 23mm em cromo-molibdênio para prisioneiros e porcas profundas (8 peças).",
    "detailedDescription": "O Jogo de Soquetes de Impacto Longos 1/2\" GEDORE red R63003108 (Código 3300709) com 8 peças é projetado para fixadores situados sobre prisioneiros compridos ou alojamentos rebaixados de rodas e suspensão. Produzidos em liga especial de Cromo-Molibdênio (Cr-Mo) com paredes reforçadas e acabamento fosfatizado, o perfil longo de 78 mm permite que a rosca do parafuso penetre livremente no corpo do soquete sem travar o fundo do encaixe. Acompanha maleta plástica antichoque.",
    "composition": [
      "8 Soquetes de impacto longos 1/2\" sextavados: 12, 13, 14, 17, 19, 21, 22, 23 mm (comprimento 78 mm)",
      "Maleta plástica com berço sob medida e fecho de metal (280 x 200 x 52 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300709",
      "referencia": "R63003108",
      "pecas": "8",
      "pesoKg": "2,300 kg",
      "norma": "DIN 3129 / ISO 2725-2"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Dimensões Maleta",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300709",
          "R63003108",
          "280 x 200 x 52 mm",
          "8",
          "2,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300709",
      "Referência: R63003108",
      "Formato: Longo (comprimento aproximado de 78 mm)",
      "Encaixe: 1/2\"",
      "Peças: 8 peças (12, 13, 14, 17, 19, 21, 22, 23 mm)",
      "Material: Aço Cromo-Molibdênio (Cr-Mo)",
      "Peso do jogo: 2,300 kg"
    ],
    "properties": [
      "Corpo longo que ultrapassa prisioneiros salientes em amortecedores, eixos e rodas",
      "Excelente retenção de torque em parafusos oxidados com fixação firme",
      "Alojamento com furos transversais para pino elástico e anel de travamento"
    ],
    "instructions": [
      "Certifique-se de que o sextavado esteja totalmente assentado na porca antes do disparo do impacto.",
      "Não utilize soquetes com deformações ou trincas aparentes no encaixe quadrado."
    ],
    "application": "Borracharias, Suspensão, Manutenção de Picapes, SUVs, Vans e Máquinas Agrícolas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r63003108-1.jpg",
    "images": [
      "/images/products/r63003108-1.jpg"
    ]
  },
  {
    "id": "r63043003",
    "name": "R63043003 JOGO DE SOQUETES DE IMPACTO 1/2\" PARA RODAS DE LIGA LEVE 17, 19 E 21MM 3 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Linha de Impacto Automotiva",
    "code": "R63043003",
    "technicalCode": "3300578",
    "description": "Jogo de soquetes de impacto 1/2\" com capa plástica protetora colorida para não riscar rodas esportivas de liga leve (3 peças).",
    "detailedDescription": "O Jogo de Soquetes de Impacto 1/2\" para Rodas de Liga Leve GEDORE red R63043003 (Código 3300578) com 3 peças é obrigatório em oficinas especializadas em pneus, rodas e centros de estética automotiva. Fabricados em aço Cromo-Molibdênio (Cr-Mo) com tratamento térmico especial para alto torque de impacto, cada soquete possui uma capa protetora de plástico externa giratória e um inserto plástico interno que protegem as rodas esportivas de liga leve diamantadas e cromadas contra qualquer arranhão, marca ou atrito metálico durante a troca das porcas.",
    "composition": [
      "1 Soquete de impacto 1/2\" longo 17 mm (Capa Azul protetora)",
      "1 Soquete de impacto 1/2\" longo 19 mm (Capa Amarela protetora)",
      "1 Soquete de impacto 1/2\" longo 21 mm (Capa Vermelha protetora)",
      "Estojo plástico compacto organizador (158 x 138 x 51 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3300578",
      "referencia": "R63043003",
      "pecas": "3",
      "pesoKg": "0,830 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Ref.",
        "Medidas Inclusas",
        "Peças",
        "Peso"
      ],
      "rows": [
        [
          "3300578",
          "R63043003",
          "17 mm (Azul), 19 mm (Amarelo), 21 mm (Vermelho)",
          "3",
          "0,830 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3300578",
      "Referência: R63043003",
      "Encaixe: 1/2\"",
      "Medidas: 17, 19 e 21 mm (as três medidas de parafusos de roda universais)",
      "Material: Aço Cromo-Molibdênio (Cr-Mo) com luva plástica de proteção",
      "Cores: Identificação visual imediata (Azul, Amarelo, Vermelho)",
      "Peso do jogo: 0,830 kg"
    ],
    "properties": [
      "Capa plástica protetora externa que impede o contato do aço do soquete com a pintura da roda",
      "Inserto plástico interno que preserva o acabamento cromado da cabeça do parafuso da roda",
      "Cores vibrantes que permitem ao mecânico selecionar a medida exata num relance visual"
    ],
    "instructions": [
      "Verifique periodicamente o estado da capa plástica para garantir proteção total da roda.",
      "Substitua os parafusos de roda aplicando o torque correto com torquímetro na finalização."
    ],
    "application": "Borracharias Premium, Centros Automotivos, Estética Automotiva, Troca de Pneus e Rodas de Liga Leve",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r63043003-1.jpg",
    "images": [
      "/images/products/r63043003-1.jpg"
    ]
  },
  {
    "id": "r28001004",
    "name": "R28001004 JOGO DE ALICATES UNIVERSAL, CORTE E BICO 3 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Alicates & Forjados",
    "code": "R28001004",
    "technicalCode": "3301189",
    "description": "Jogo de alicates com 3 peças (Universal 8\", Corte Diagonal 6.1/2\" e Bico Meia-Cana 6.1/2\") com cabo ergonômico bicomponente.",
    "detailedDescription": "O Jogo de Alicates GEDORE red R28001004 (Código 3301189) reúne os 3 alicates essenciais para qualquer profissional ou bancada de manutenção. Forjados em aço Cromo-Vanádio de alta tenacidade com arestas de corte temperadas por indução, entregam corte limpo e durabilidade incomparável em arames duros e macios. Possuem cabos ergonômicos bicomponentes em vermelho e preto com abas protetoras que impedem o escorregamento da mão durante a compressão.",
    "composition": [
      "1 Alicate universal 8\" (200 mm) com dentes serrilhados e corte lateral",
      "1 Alicate corte diagonal 6.1/2\" (165 mm) com corte rente de alta precisão",
      "1 Alicate bico meia-cana reto 6.1/2\" (165 mm) para precisão e conformação",
      "Embalagem blister original Gedore Red"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301189",
      "referencia": "R28001004",
      "pecas": "3",
      "pesoKg": "0,750 kg",
      "norma": "DIN ISO 5746 / 5749 / 5745"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Composição",
        "Peso"
      ],
      "rows": [
        [
          "3301189",
          "R28001004",
          "3",
          "Universal 8\", Corte Diagonal 6.1/2\", Bico Meia Cana 6.1/2\"",
          "0,750 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301189",
      "Referência: R28001004",
      "Peças: 3 peças",
      "Material: Aço Cromo-Vanádio forjado a quente",
      "Cabos: Bicomponente ergonômico antiderrapante",
      "Tratamento: Corte temperado por indução de alta frequência",
      "Peso do jogo: 0,750 kg"
    ],
    "properties": [
      "Trio clássico que atende corte de fios, puxamento, prensagem e torção com extrema firmeza",
      "Articulação suave e precisa sem folgas no rebite central",
      "Empunhadura anatômica com abas anti-deslizamento que proporcionam segurança extra"
    ],
    "instructions": [
      "Não utilize os alicates como martelos para bater em pregos ou pinos.",
      "Utilize sempre a capacidade máxima de corte recomendada para cada bitola de arame."
    ],
    "application": "Eletricistas, Oficinas Mecânicas, Montagem de Painéis, Manutenção Industrial e Domiciliar",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r28001004-1.png",
    "images": [
      "/images/products/r28001004-1.png",
      "/images/products/r28001004-2.jpeg"
    ]
  },
  {
    "id": "r27210010",
    "name": "R27210010 ALICATE DE PRESSÃO MORDENTE CURVO 10\" 232MM",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Alicates de Pressão",
    "code": "R27210010",
    "technicalCode": "3301832",
    "description": "Alicate de pressão 10 polegadas (232mm) com mordente curvo forjado, cortador de arame e parafuso de regulagem com alavanca de destrave.",
    "detailedDescription": "O Alicate de Pressão GEDORE red R27210010 (Código 3301832) de 10 polegadas (232 mm) é a ferramenta de fixação por excelência em serralherias, funilarias e mecânica em geral. Fabricado com corpo em chapa de aço de alta resistência e mordentes curvos forjados em aço Cromo-Vanádio, ele trava tubos, perfis redondos, porcas sextavadas e chapas metálicas com pressão contínua e regulável. Possui cortador de arame embutido e alavanca traseira de liberação rápida protegida.",
    "composition": [
      "Alicate de pressão 10\" (232 mm) com mordente curvo forjado",
      "Parafuso de regulagem de pressão micrométrica na extremidade",
      "Alavanca de destravamento rápido com mola de retorno",
      "Cortador de arame integrado na base dos mordentes"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301832",
      "referencia": "R27210010",
      "pecas": "1",
      "pesoKg": "0,526 kg",
      "norma": "Padrão Gedore Red"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Abertura Máxima",
        "Tamanho Pol.",
        "Comprimento mm",
        "Peso"
      ],
      "rows": [
        [
          "3301832",
          "R27210010",
          "29 mm",
          "10\"",
          "232 mm",
          "0,526 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301832",
      "Referência: R27210010",
      "Comprimento total: 232 mm (10\")",
      "Abertura dos mordentes: até 29 mm",
      "Perfil do mordente: Curvo com dentes serrilhados para peças cilíndricas e planas",
      "Material: Corpo em chapa tratada e mordente em aço Cr-V",
      "Peso: 0,526 kg"
    ],
    "properties": [
      "Mordentes forjados que seguram firmemente parafusos espanados para desrosqueamento",
      "Parafuso traseiro com encaixe que permite ajuste fino do aperto antes de travar",
      "Cortador de arames integrado que adiciona praticidade para trabalhos de solda e funilaria"
    ],
    "instructions": [
      "Gire o parafuso traseiro para ajustar a abertura até sentir pressão firme ao fechar as hastes.",
      "Pressione a alavanca de destrave interna para abrir o alicate instantaneamente."
    ],
    "application": "Soldagem, Serralheria, Funilaria, Extração de Parafusos Espanados, Hidráulica e Oficinas",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r27210010-1.jpg",
    "images": [
      "/images/products/r27210010-1.jpg"
    ]
  },
  {
    "id": "r28002104",
    "name": "R28002104 JOGO DE ALICATES PARA ANÉIS ELÁSTICOS 4 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Alicates para Anéis",
    "code": "R28002104",
    "technicalCode": "3301829",
    "description": "Jogo de alicates para anéis de segurança internos e externos com pontas retas e curvas de 90° forjadas (4 peças).",
    "detailedDescription": "O Jogo de Alicates para Anéis GEDORE red R28002104 (Código 3301829) com 4 peças é o conjunto definitivo para montagem e desmontagem de anéis de retenção (trava elástica) de 19 a 60 mm em caixas de câmbio, eixos de transmissão, compressores e motores. Forjados em aço Cromo-Vanádio com pontas usinadas temperadas e acabamento fosfatizado, os alicates contam com molas de abertura suave nos modelos externos e cabos plastificados antiderrapantes em vermelho vivo.",
    "composition": [
      "1 Alicate para anéis internos retos (19 a 60 mm) - Ref. R27704061",
      "1 Alicate para anéis internos curvos 90° (19 a 60 mm) - Ref. R27754061",
      "1 Alicate para anéis externos retos com mola (19 a 60 mm) - Ref. R27604061",
      "1 Alicate para anéis externos curvos 90° com mola (19 a 60 mm) - Ref. R27654061",
      "Embalagem organizadora estruturada"
    ],
    "technicalSpecs": {
      "codigoGedore": "3301829",
      "referencia": "R28002104",
      "pecas": "4",
      "pesoKg": "0,800 kg",
      "norma": "DIN 5254 / DIN 5256"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Capacidade Diâmetro",
        "Peso"
      ],
      "rows": [
        [
          "3301829",
          "R28002104",
          "4",
          "19 a 60 mm (Internos e Externos / Retos e Curvos)",
          "0,800 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3301829",
      "Referência: R28002104",
      "Quantidade: 4 peças",
      "Capacidade dos anéis: Ø 19 a 60 mm",
      "Material: Aço cromo-vanádio GEDORE red",
      "Acabamento: Fosfatizado antiferrugem com pontas usinadas de alta precisão",
      "Peso do jogo: 0,800 kg"
    ],
    "properties": [
      "Cobre as 4 configurações de trabalho: interno reto, interno curvo, externo reto e externo curvo",
      "Pontas torneadas de alta concentricidade que seguram os olhais do anel elástico sem escapar",
      "Mola de retorno nos alicates externos que mantém a abertura ideal pronta para o encaixe"
    ],
    "instructions": [
      "Encaixe as duas pontas do alicate nos furos do anel elástico antes de pressionar as empunhaduras.",
      "Não abra o anel além do limite elástico para não deformar a trava permanentemente."
    ],
    "application": "Câmbios Manuais e Automáticos, Diferenciais, Suspensão, Motores e Cilindros Hidráulicos",
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/r28002104-1.jpg",
    "images": [
      "/images/products/r28002104-1.jpg",
      "/images/products/r28002104-2.jpg",
      "/images/products/r28002104-3.jpg",
      "/images/products/r28002104-4.jpg",
      "/images/products/r28002104-5.jpg"
    ]
  },
  {
      "id": "r99210000",
      "name": "R99210000 APLICADOR DE SELANTES EM ALUMÍNIO",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "automotivo",
      "categoryLabel": "Linha Automotiva",
      "code": "R99210000",
      "technicalCode": "3301753",
      "description": "Aplicador de selantes e silicones profissional tubular GEDORE red em alumínio reforçado (340 x 210 mm).",
      "detailedDescription": "O Aplicador de Selantes GEDORE red R99210000 (Código 3301753) é desenvolvido para uso profissional intensivo em oficinas, funilarias e obras industriais. Seu corpo tubular em alumínio de alta resistência protege o refil contra danos e quedas, ao mesmo tempo em que proporciona leveza e conforto durante jornadas prolongadas de trabalho. Compatível com cartuchos convencionais e tubos sachê, conta com sistema de alavanca com avanço suave para cordões homogêneos e substituição rápida do cartucho.",
      "technicalSpecs": {
          "codigoGedore": "3301753",
          "referencia": "R99210000",
          "pecas": "1",
          "pesoKg": "0,540 kg"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Comprimento (mm)",
              "Altura (mm)",
              "Peso"
          ],
          "rows": [
              [
                  "3301753",
                  "R99210000",
                  "340 mm",
                  "210 mm",
                  "0,540 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3301753",
          "Referência: R99210000",
          "Quantidade: 1 peça",
          "Material do corpo: Tubo cilíndrico em alumínio leve e robusto",
          "Mecanismo: Aço estampado com gatilho e alavanca reforçados",
          "Dimensões: 340 mm de comprimento x 210 mm de altura",
          "Peso aproximado: 0,540 kg"
      ],
      "properties": [
          "Tubo fechado em alumínio reforçado que protege o cartucho contra amassamentos e sujeiras",
          "Substituição simples e rápida de cartuchos e sachês com tampas rosqueáveis",
          "Haste de avanço com cremalheira robusta e gatilho de destravamento rápido para alívio imediato da pressão"
      ],
      "instructions": [
          "Pressione a trava traseira e recue totalmente a haste antes de inserir o cartucho de selante.",
          "Rosqueie firmemente a tampa frontal e acione o gatilho com pressão contínua e uniforme."
      ],
      "application": "Oficinas Mecânicas, Funilaria, Instalação de Pára-brisas, Fixação Automotiva e Construção Civil",
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r99210000-1.jpg",
      "images": [
          "/images/products/r99210000-1.jpg"
      ]
  },
  {
      "id": "r48900025",
      "name": "R48900025 TORQUÍMETRO DE ESTALO 1/4\" 5-25 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R48900025",
      "technicalCode": "3369943",
      "description": "Torquímetro de estalo regulável 1/4\" GEDORE red de 5 a 25 N·m com visor de lupa e certificação DIN EN ISO 6789.",
      "detailedDescription": "O Torquímetro de Estalo GEDORE red R48900025 (Código 3369943) com encaixe quadrado de 1/4\" e capacidade de 5 a 25 N·m é a ferramenta indispensável para apertos críticos de baixa carga em componentes delicados. Possui precisão de disparo de +/- 3%, catraca reversível integrada, visor de lupa de alta legibilidade com divisão de 0,1 N·m e trava de segurança na extremidade da empunhadura para fixação do torque programado, certificado segundo a norma DIN EN ISO 6789.",
      "technicalSpecs": {
          "codigoGedore": "3369943",
          "referencia": "R48900025",
          "pecas": "1",
          "pesoKg": "0,515 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369943",
                  "R48900025",
                  "1/4\"",
                  "5 - 25 N·m",
                  "0,1 N·m",
                  "285 mm",
                  "0,515 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369943",
          "Referência: R48900025",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 1/4\" com esfera de fixação",
          "Faixa de torque: 5 a 25 N·m",
          "Escala de resolução: 0,1 N·m",
          "Precisão de disparo: +/- 3% da escala calibrada",
          "Comprimento total: 285 mm",
          "Norma de fabricação: DIN EN ISO 6789",
          "Peso: 0,515 kg"
      ],
      "properties": [
          "Disparo com sinal sonoro ('clique') e alívio de esforço nítido ao atingir o torque calibrado",
          "Escala dupla com janela de lente de aumento que facilita a leitura rápida sem erro de paralelismo",
          "Sistema de trava positiva na ponta do cabo para travar com segurança a carga ajustada",
          "Mecanismo com catraca reversível para avanço suave das fixações"
      ],
      "instructions": [
          "Puxe o botão de segurança na base, gire a manopla até a escala exata e pressione para travar.",
          "Após a utilização diária, retorne a regulagem ao valor mínimo (5 N·m) para conservar a calibração da mola."
      ],
      "application": "Tampas de Válvulas, Sensores de Motores, Motocicletas, Ciclismo Profissional e Montagens Eletrônicas",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r48900025-1.jpg",
      "images": [
          "/images/products/r48900025-1.jpg",
          "/images/products/r48900025-2.jpg",
          "/images/products/r48900025-3.jpg"
      ]
  },
  {
      "id": "r58900050",
      "name": "R58900050 TORQUÍMETRO DE ESTALO 3/8\" 10-50 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R58900050",
      "technicalCode": "3369938",
      "description": "Torquímetro de estalo regulável 3/8\" GEDORE red de 10 a 50 N·m com escala micrométrica e certificação DIN EN ISO 6789.",
      "detailedDescription": "O Torquímetro de Estalo GEDORE red R58900050 (Código 3369938) com encaixe quadrado de 3/8\" e amplitude de torque de 10 a 50 N·m combina excelente acessibilidade e precisão micrométrica com divisão de 0,25 N·m. Fabricado com estrutura tubular robusta e empunhadura anatômica, dispõe de catraca reversível com botão de engate rápido, tolerância rigorosa de +/- 3% e certificação DIN EN ISO 6789.",
      "technicalSpecs": {
          "codigoGedore": "3369938",
          "referencia": "R58900050",
          "pecas": "1",
          "pesoKg": "0,540 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369938",
                  "R58900050",
                  "3/8\"",
                  "10 - 50 N·m",
                  "0,25 N·m",
                  "335 mm",
                  "0,540 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369938",
          "Referência: R58900050",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 3/8\"",
          "Faixa de torque: 10 a 50 N·m",
          "Escala de resolução: 0,25 N·m",
          "Precisão de disparo: +/- 3%",
          "Comprimento total: 335 mm",
          "Norma: DIN EN ISO 6789",
          "Peso: 0,540 kg"
      ],
      "properties": [
          "Regulagem intuitiva no punho com lente de aumento para leitura clara dos valores N·m",
          "Sinal sonoro instantâneo ao alcançar o torque programado",
          "Bloqueio firme no terminal do cabo que elimina risco de descalibração acidental durante o aperto"
      ],
      "instructions": [
          "Gire o punho até o valor nominal desejado e trave a alavanca de bloqueio.",
          "Nunca use o torquímetro para desaperto forçado de parafusos engripados."
      ],
      "application": "Velas de Ignição, Coletores de Admissão, Cárteres de Alumínio e Transmissões Leves",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r58900050-1.jpg",
      "images": [
          "/images/products/r58900050-1.jpg",
          "/images/products/r58900050-2.jpg",
          "/images/products/r58900050-3.jpg"
      ]
  },
  {
      "id": "r68900100",
      "name": "R68900100 TORQUÍMETRO DE ESTALO 1/2\" 20-100 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R68900100",
      "technicalCode": "3369939",
      "description": "Torquímetro de estalo regulável 1/2\" GEDORE red de 20 a 100 N·m com catraca reversível e calibração DIN EN ISO 6789.",
      "detailedDescription": "O Torquímetro de Estalo GEDORE red R68900100 (Código 3369939) com encaixe de 1/2\" e escala de 20 a 100 N·m é a escolha perfeita para fixações mecânicas cruciais em motores e suspensão automotiva. Com comprimento de 395 mm, proporciona a alavanca correta para controle suave de torque, divisão fina de 0,5 N·m, tolerância de disparo de +/- 3% e conformidade total com a norma DIN EN ISO 6789.",
      "technicalSpecs": {
          "codigoGedore": "3369939",
          "referencia": "R68900100",
          "pecas": "1",
          "pesoKg": "1,176 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369939",
                  "R68900100",
                  "1/2\"",
                  "20 - 100 N·m",
                  "0,5 N·m",
                  "395 mm",
                  "1,176 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369939",
          "Referência: R68900100",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 1/2\" com trava de segurança",
          "Faixa de torque: 20 a 100 N·m",
          "Escala de resolução: 0,5 N·m",
          "Precisão de disparo: +/- 3%",
          "Comprimento total: 395 mm",
          "Norma: DIN EN ISO 6789",
          "Peso: 1,176 kg"
      ],
      "properties": [
          "Sinal sonoro ('clique') perceptível e disparo mecânico de alta precisão",
          "Corpo tubular com acabamento cromado fosco anticorrosivo e escala com lupa de leitura",
          "Trava de segurança na extremidade da manopla garantindo aperto uniforme em múltiplos parafusos"
      ],
      "instructions": [
          "Puxe a trava inferior, gire o cabo até o valor pretendido e reencaixe a trava.",
          "Sempre alivie a mola para a escala mínima de 20 N·m antes de guardar no estojo protetor."
      ],
      "application": "Mancais, Bielas, Discos de Freio, Cubos e Parafusos Estruturais de Veículos Leves",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r68900100-1.jpg",
      "images": [
          "/images/products/r68900100-1.jpg",
          "/images/products/r68900100-2.jpg",
          "/images/products/r68900100-3.jpg"
      ]
  },
  {
      "id": "r68900200",
      "name": "R68900200 TORQUÍMETRO DE ESTALO 1/2\" 40-200 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R68900200",
      "technicalCode": "3369940",
      "description": "Torquímetro de estalo regulável 1/2\" GEDORE red de 40 a 200 N·m com alavanca de 485 mm, ideal para rodas e cabeçotes.",
      "detailedDescription": "O Torquímetro de Estalo GEDORE red R68900200 (Código 3369940) com encaixe quadrado de 1/2\" e ampla capacidade de 40 a 200 N·m é a ferramenta mais utilizada em autocenters, concessionárias e frotas para aperto seguro de porcas e parafusos de rodas, cabeçotes e componentes pesados de suspensão. Possui braço de alavanca de 485 mm, incremento de 1,0 N·m, tolerância de disparo de +/- 3% e certificação técnica DIN EN ISO 6789.",
      "technicalSpecs": {
          "codigoGedore": "3369940",
          "referencia": "R68900200",
          "pecas": "1",
          "pesoKg": "1,350 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369940",
                  "R68900200",
                  "1/2\"",
                  "40 - 200 N·m",
                  "1,0 N·m",
                  "485 mm",
                  "1,350 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369940",
          "Referência: R68900200",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 1/2\"",
          "Faixa de torque: 40 a 200 N·m",
          "Escala de resolução: 1,0 N·m",
          "Precisão de disparo: +/- 3%",
          "Comprimento total: 485 mm",
          "Norma: DIN EN ISO 6789",
          "Peso: 1,350 kg"
      ],
      "properties": [
          "Excelente alavanca de 485 mm que reduz sensivelmente o esforço físico do operador",
          "Mecanismo interno durável com tolerância calibrada de fábrica e certificado individual",
          "Lente de aumento na escala com sistema de trava de empunhadura altamente seguro"
      ],
      "instructions": [
          "Cesse imediatamente a aplicação de torque assim que ouvir o sinal sonoro ('clique').",
          "Nunca utilize para desaperto de porcas travadas ou como alavanca de descolamento."
      ],
      "application": "Porcas de Rodas Automotivas, Parafusos de Cabeçote, Bandejas de Suspensão e Pivôs",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r68900200-1.jpg",
      "images": [
          "/images/products/r68900200-1.jpg",
          "/images/products/r68900200-2.jpg",
          "/images/products/r68900200-3.jpg"
      ]
  },
  {
      "id": "r68900300",
      "name": "R68900300 TORQUÍMETRO DE ESTALO 1/2\" 60-300 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R68900300",
      "technicalCode": "3369942",
      "description": "Torquímetro de estalo regulável 1/2\" GEDORE red de alta capacidade 60 a 300 N·m com alavanca longa de 575 mm e calibração ISO 6789.",
      "detailedDescription": "O Torquímetro de Estalo GEDORE red R68900300 (Código 3369942) com encaixe de 1/2\" entrega elevada potência torsional de 60 a 300 N·m. Equipado com alavanca de 575 mm de comprimento, permite atingir torques elevados em utilitários, vans, pick-ups e tratores com precisão e controle. Atende integralmente a norma DIN EN ISO 6789 com disparo de precisão de +/- 3% e visor micrométrico com lupa.",
      "technicalSpecs": {
          "codigoGedore": "3369942",
          "referencia": "R68900300",
          "pecas": "1",
          "pesoKg": "1,541 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369942",
                  "R68900300",
                  "1/2\"",
                  "60 - 300 N·m",
                  "1,0 N·m",
                  "575 mm",
                  "1,541 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369942",
          "Referência: R68900300",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 1/2\"",
          "Faixa de torque: 60 a 300 N·m",
          "Escala de resolução: 1,0 N·m",
          "Precisão de disparo: +/- 3%",
          "Comprimento total: 575 mm",
          "Norma: DIN EN ISO 6789",
          "Peso: 1,541 kg"
      ],
      "properties": [
          "Alavanca longa de 575 mm balanceada para aplicação firme e progressiva de altos torques",
          "Mecanismo de catraca de alta densidade resistente a elevadas tensões torsionais",
          "Trava traseira ergonômica que assegura a manutenção do ajuste exato"
      ],
      "instructions": [
          "Posicione a mão no centro do punho antiderrapante para leitura correta do torque.",
          "Após o término da operação, desregule a ferramenta para o valor mínimo (60 N·m)."
      ],
      "application": "Caminhonetes, Vans, Utilitários, Maquinário Agrícola e Suspensões Pesadas",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r68900300-1.jpg",
      "images": [
          "/images/products/r68900300-1.jpg",
          "/images/products/r68900300-2.jpg",
          "/images/products/r68900300-3.jpg"
      ]
  },
  {
      "id": "r78900400",
      "name": "R78900400 TORQUÍMETRO DE ESTALO 3/4\" 80-400 Nm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "soquetes-chaves",
      "categoryLabel": "Chaves & Soquetes",
      "code": "R78900400",
      "technicalCode": "3369941",
      "description": "Torquímetro de estalo heavy duty 3/4\" GEDORE red de 80 a 400 N·m com alavanca de 685 mm para frotas pesadas e indústrias.",
      "detailedDescription": "O Torquímetro de Estalo Heavy Duty GEDORE red R78900400 (Código 3369941) com encaixe robusto de 3/4\" e faixa de 80 a 400 N·m é construído para suportar as aplicações mais exigentes da linha diesel, caminhões, ônibus e montagens estruturais pesadas. Com alavanca de 685 mm, catraca integrada reversível e escala micrométrica sob lente com tolerância de +/- 3%, oferece total confiabilidade em conformidade com a norma DIN EN ISO 6789.",
      "technicalSpecs": {
          "codigoGedore": "3369941",
          "referencia": "R78900400",
          "pecas": "1",
          "pesoKg": "2,390 kg",
          "norma": "DIN EN ISO 6789"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Encaixe Quadrado",
              "Faixa (N·m)",
              "Escala (N·m)",
              "Comprimento",
              "Peso"
          ],
          "rows": [
              [
                  "3369941",
                  "R78900400",
                  "3/4\"",
                  "80 - 400 N·m",
                  "1,0 N·m",
                  "685 mm",
                  "2,390 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3369941",
          "Referência: R78900400",
          "Quantidade: 1 peça",
          "Encaixe quadrado: 3/4\" super reforçado",
          "Faixa de torque: 80 a 400 N·m",
          "Escala de resolução: 1,0 N·m",
          "Precisão de disparo: +/- 3%",
          "Comprimento total: 685 mm",
          "Norma: DIN EN ISO 6789",
          "Peso: 2,390 kg"
      ],
      "properties": [
          "Estrutura forjada em aço Cromo-Vanádio para operação pesada ininterrupta",
          "Disparo com estalo sonoro potente e alívio momentâneo de esforço ao atingir a carga programada",
          "Visor com lente resistente a graxas minerais e solventes industriais"
      ],
      "instructions": [
          "Destrave o anel traseiro, selecione o torque exato e trave firmemente antes de aplicar a carga.",
          "Empregue exclusivamente soquetes industriais ou de impacto 3/4\" certificados."
      ],
      "application": "Caminhões Pesados, Frotas de Ônibus, Tratores Agrícolas, Eixos e Fixações Estruturais Industriais",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r78900400-1.jpg",
      "images": [
          "/images/products/r78900400-1.jpg",
          "/images/products/r78900400-2.jpg",
          "/images/products/r78900400-3.jpg"
      ]
  },
  {
      "id": "r17101000",
      "name": "R17101000 CHAVE L PARA BUJÃO DE ÓLEO 8x10mm",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "automotivo",
      "categoryLabel": "Linha Automotiva",
      "code": "R17101000",
      "technicalCode": "3300374",
      "description": "Chave especial em L GEDORE red com pontas quadradas macho de 8 e 10 mm (5/16\" x 3/8\") e ângulo de 115° para bujões de óleo.",
      "detailedDescription": "A Chave tipo L para Bujão de Óleo GEDORE red R17101000 (Código 3300374) é a ferramenta automotiva desenvolvida especificamente para montagem e desmontagem de bujões de drenagem e abastecimento de óleo de cárter e transmissões. Conta com pontas quadradas macho nas medidas de 8 mm e 10 mm (5/16\" x 3/8\"), corpo em aço especial forjado cromado mate acetinado e exclusivo ângulo ergonômico de 115° que afasta a mão do operador do fluxo de óleo quente.",
      "technicalSpecs": {
          "codigoGedore": "3300374",
          "referencia": "R17101000",
          "pecas": "1",
          "pesoKg": "0,330 kg"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Pontas Quadradas",
              "Comprimento",
              "Ângulo",
              "Peso"
          ],
          "rows": [
              [
                  "3300374",
                  "R17101000",
                  "8 mm e 10 mm (5/16\" x 3/8\")",
                  "265 mm",
                  "115°",
                  "0,330 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3300374",
          "Referência: R17101000",
          "Quantidade: 1 peça",
          "Pontas: Quadrados machos de 8 mm e 10 mm (5/16\" x 3/8\")",
          "Comprimento: 265 mm",
          "Ângulo de inclinação: 115°",
          "Material: Aço especial temperado GEDORE red",
          "Acabamento: Cromado mate acetinado antiferrugem",
          "Peso: 0,330 kg"
      ],
      "properties": [
          "Ângulo técnico de 115° que protege o operador contra queimaduras por óleo quente ao desapertar o bujão",
          "Pontas usinadas com tolerância precisa que eliminam folgas e não arredondam os cantos do bujão",
          "Corpo forjado monobloco com acabamento acetinado de alta durabilidade mecânica"
      ],
      "instructions": [
          "Encaixe totalmente o quadrado correspondente (8 ou 10 mm) no bujão antes de aplicar força.",
          "Sempre substitua o anel de vedação do bujão ao concluir a troca de óleo."
      ],
      "application": "Bujões de Cárter de Motor, Caixas de Câmbio e Diferenciais (Renault, Peugeot, Citroën, Fiat, Ford, Nissan)",
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r17101000-1.jpeg",
      "images": [
          "/images/products/r17101000-1.jpeg",
          "/images/products/r17101000-2.jpeg",
          "/images/products/r17101000-3.jpeg",
          "/images/products/r17101000-4.jpeg"
      ]
  },
  {
      "id": "r69023024",
      "name": "R69023024 JOGO DE SOQUETES ESTRIADOS 1/2\" COM CATRACA 24 Peças",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "jogo",
      "itemTypeLabel": "Jogo",
      "category": "jogos-ferramentas",
      "categoryLabel": "Jogos de Ferramentas",
      "code": "R69023024",
      "technicalCode": "3301970",
      "description": "Jogo profissional com 20 soquetes estriados 1/2\" (10 a 32 mm), catraca 72 dentes, 2 extensões, adaptador 3 vias e maleta reforçada (24 peças).",
      "detailedDescription": "O Jogo de Soquetes Estriados GEDORE red R69023024 (Código 3301970) reúne 24 peças forjadas em aço Cromo-Vanádio com encaixe de 1/2\". Seu perfil estriado de 12 faces permite encaixes rápidos a cada 30°, ideal para trabalhar em locais de acesso difícil. Acompanha catraca reversível de 72 dentes de alta velocidade com botão de liberação rápida, duas barras de extensão (125 e 250 mm), adaptador de 3 vias (1/2\"M x 3/8\"F) e maleta de alta resistência com fechos metálicos.",
      "composition": [
          "20 Soquetes estriados 1/2\": 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 30 e 32 mm",
          "1 Catraca reversível 1/2\" com 72 dentes e botão de engate rápido",
          "2 Barras de extensão 1/2\": 125 mm (5\") e 250 mm (10\")",
          "1 Adaptador 3 vias 1/2\"M x 3/8\"F (combina com extensão para formar cabo T)",
          "1 Maleta plástica reforçada GEDORE red com fechos de metal"
      ],
      "technicalSpecs": {
          "codigoGedore": "3301970",
          "referencia": "R69023024",
          "pecas": "24",
          "pesoKg": "4,600 kg"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Peças",
              "Composição",
              "Encaixe",
              "Acabamento"
          ],
          "rows": [
              [
                  "3301970",
                  "R69023024",
                  "24 peças",
                  "20 soquetes estriados 10-32mm + Catraca 72T + 2 Extensões + Adaptador 3 vias",
                  "1/2\"",
                  "Cromado mate acetinado"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3301970",
          "Referência: R69023024",
          "Quantidade: 24 peças",
          "Encaixe: 1/2\" quadrado com retenção esférica",
          "Catraca reversível: 72 dentes com ângulo de trabalho de apenas 5°",
          "Material: Aço Cromo-Vanádio GEDORE red",
          "Acabamento: Cromado mate acetinado de alta resistência ao desgaste",
          "Estojo: Maleta plástica com berço sob medida e fechos metálicos",
          "Peso do jogo: 4,600 kg"
      ],
      "properties": [
          "Perfil estriado (12 faces) que possibilita acoplamento duas vezes mais rápido do que sextavados em locais apertados",
          "Catraca de 72 dentes que viabiliza avanços precisos em espaços exíguos",
          "Adaptador 3 vias inteligente que transforma a extensão em cabo T deslizante de grande torque manual"
      ],
      "instructions": [
          "Utilize o botão superior da catraca para engatar e desengatar soquetes com facilidade e segurança.",
          "Não aplique marretas ou extensores de tubo no punho da catraca."
      ],
      "application": "Oficinas Mecânicas Automotivas, Linha Pesada, Manutenção Industrial e Serviços Mecânicos Gerais",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r69023024-1.jpeg",
      "images": [
          "/images/products/r69023024-1.jpeg",
          "/images/products/r69023024-2.jpeg",
          "/images/products/r69023024-3.jpeg"
      ]
  },
  {
      "id": "r11202000",
      "name": "R11202000 EXTRATOR DE ARTICULAÇÃO ESFÉRICA E PIVÔ",
      "brand": "gedore-red",
      "brandLabel": "Gedore Red",
      "itemType": "peca",
      "itemTypeLabel": "Peça",
      "category": "automotivo",
      "categoryLabel": "Linha Automotiva",
      "code": "R11202000",
      "technicalCode": "3301971",
      "description": "Extrator mecânico profissional GEDORE red para articulações esféricas, pivôs de suspensão e terminais de direção com encaixe de 20 mm, fuso com ponta esférica e corda de segurança antiqueda.",
      "detailedDescription": "O Extrator de Articulação Esférica GEDORE red R11202000 (Código 3301971) é o equipamento específico para desencaixar com segurança pivôs de suspensão e terminais de direção automotivos sem recorrer a golpes de marreta que danificam a manga de eixo ou rasgam as coifas. Fabricado em aço Cromo-Vanádio reforçado com gancho de encaixe de 20 mm e comprimento de 160 mm, seu fuso mecânico conta com ponta esférica de baixo atrito e vem acompanhado de corda de segurança para retenção contra queda durante o desprendimento.",
      "technicalSpecs": {
          "codigoGedore": "3301971",
          "referencia": "R11202000",
          "pecas": "1",
          "pesoKg": "1,200 kg"
      },
      "tableData": {
          "headers": [
              "Código GEDORE",
              "Referência",
              "Abertura do Gancho",
              "Dimensões (mm)",
              "Fuso Mecânico",
              "Peso"
          ],
          "rows": [
              [
                  "3301971",
                  "R11202000",
                  "20 mm",
                  "170 x 65 x 55 mm",
                  "Ponta esférica de baixo atrito",
                  "1,200 kg"
              ]
          ]
      },
      "specs": [
          "Código GEDORE: 3301971",
          "Referência: R11202000",
          "Quantidade: 1 peça",
          "Abertura do garfo: 20 mm",
          "Comprimento: 160 mm",
          "Dimensões totais: 170 x 65 x 55 mm",
          "Material: Aço Cromo-Vanádio forjado de alta tenacidade",
          "Fuso: Rosca tratada com ponta esférica de baixo atrito",
          "Acessório: Corda de ancoragem de segurança inclusa",
          "Peso: 1,200 kg"
      ],
      "properties": [
          "Elimina marretadas na suspensão, preservando os componentes da direção e da manga de eixo",
          "Ponta esférica do fuso que reduz o atrito e preserva as roscas contra deformações",
          "Corda de amarração que garante a proteção do operador contra projeção ou queda da ferramenta no destravamento da junta"
      ],
      "instructions": [
          "Amarre a corda de segurança na barra estabilizadora ou bandeja antes do início do aperto.",
          "Posicione a forquilha de 20 mm sob a junta esférica e gire o fuso progressivamente com chave manual até o desencaixe."
      ],
      "application": "Suspensão Automotiva, Terminais de Direção, Pivôs de Bandejas e Articulações Esféricas",
      "featured": true,
      "priceFormatted": "Consulte Valor",
      "image": "/images/products/r11202000-1.jpeg",
      "images": [
          "/images/products/r11202000-1.jpeg",
          "/images/products/r11202000-2.jpeg",
          "/images/products/r11202000-3.jpeg"
      ]
  },
  {
    "id": "robust-5000r",
    "name": "5000R JOGO DE FERRAMENTAS OFICINA MASTER 178 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "5000R",
    "technicalCode": "060370",
    "description": "Jogo de ferramentas completo Oficina Master ROBUST 5000R com 178 peças em 3 encaixes (1/4\", 3/8\" e 1/2\"), chaves combinadas com catraca, bits e maleta reforçada.",
    "detailedDescription": "O Jogo Oficina Master ROBUST 5000R (Código 060370) do Grupo GEDORE é uma das soluções mais completas do mercado para manutenção mecânica e automotiva. Reúne 178 peças de alta performance que englobam soquetes sextavados, longos, estriados e Torx em 3 encaixes quadrados (1/4\", 3/8\" e 1/2\"), catracas reversíveis de alto rendimento, 12 chaves combinadas com catraca rápida, chaves L hexagonais e Torx, bits especiais e soquetes de impacto para rodas de liga leve, tudo acondicionado em maleta plástica resistente de 500 x 360 x 100 mm.",
    "composition": [
      "Encaixe 1/4\": 13 soquetes sextavados (4 a 14mm), 7 longos (4 a 10mm), 5 Torx (E4 a E8), 33 chaves soquete (Hex, Fenda, PH, Torx e Guia), catraca, 2 extensões, cabo T, cabo quadrado e junta universal",
      "Encaixe 3/8\": 10 soquetes sextavados (10 a 19mm), 6 longos (10 a 15mm), 6 Torx (E10 a E18), soquete para vela 18mm, catraca, extensão 125mm, junta universal e adaptador de bits",
      "Encaixe 1/2\": 17 soquetes sextavados (10 a 32mm), 2 longos (16 e 18mm), 2 Torx (E20 e E24), 3 de impacto para liga leve (17, 19 e 21mm), 2 para vela (16 e 21mm), catraca, 2 extensões, junta e adaptador",
      "24 Bits 5/16\" (Hex, Fenda, PH, Torx e Torx Guia) + 9 Chaves L Hexagonais abauladas (1,5 a 10mm) + 9 Chaves L Torx (T10 a T50)",
      "12 Chaves combinadas com catraca rápida: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 e 19 mm",
      "Maleta plástica organizadora estruturada com fechos de metal reforçados (500 x 360 x 100 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "060370",
      "referencia": "5000R",
      "pecas": "178",
      "dimensoes": "500 x 360 x 100 mm",
      "pesoKg": "11,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Encaixes Quadrados",
        "Dimensões Maleta",
        "Peso"
      ],
      "rows": [
        [
          "060370",
          "5000R",
          "178 peças",
          "1/4\", 3/8\" e 1/2\"",
          "500 x 360 x 100 mm",
          "11,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 060370",
      "Referência: 5000R",
      "Quantidade de peças: 178 peças",
      "Encaixes quadrados: 1/4\", 3/8\" e 1/2\"",
      "Material: Aço Cromo-Vanádio e Aço Especial ROBUST / GEDORE",
      "Acabamento: Cromado e polido com tratamento térmico temperado",
      "Maleta: Estojo plástico de alta densidade 500 x 360 x 100 mm",
      "Peso aproximado: 11,500 kg"
    ],
    "properties": [
      "Conjunto ultra completo Oficina Master cobrindo mais de 95% das manutenções mecânicas veiculares",
      "Inclui 12 chaves combinadas com catraca de acionamento ultrarrápido",
      "3 soquetes de impacto coloridos protegidos para aperto e desaperto em rodas de liga leve sem riscos",
      "Maleta com berço anatômico que mantém cada uma das 178 peças precisamente travada em sua posição"
    ],
    "instructions": [
      "Selecione o encaixe e tamanho exatos do parafuso para evitar folgas ou desgaste das faces.",
      "Limpe e seque as ferramentas após o trabalho e mantenha a maleta fechada com os fechos metálicos travados."
    ],
    "application": "Oficinas Mecânicas Automotivas, Centros Automotivos, Frotas, Indústrias e Manutenção Pesada",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_5000r_1.png",
    "images": [
      "/images/products/robust_5000r_1.png",
      "/images/products/robust_5000r_2.jpg",
      "/images/products/robust_5000r_3.jpg"
    ]
  },
  {
    "id": "s20102001",
    "name": "S20102001 CARRO ABERTO PARA FERRAMENTAS COM 1 GAVETA",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros & Bancadas",
    "code": "S20102001",
    "technicalCode": "3370213",
    "description": "Carro oficina aberto para ferramentas ROBUST com 1 gaveta trancável com corrediças telescópicas, 2 prateleiras reforçadas e 4 rodas robustas.",
    "detailedDescription": "O Carro Aberto para Ferramentas ROBUST S20102001 (Código 3370213) é construído em chapa de aço estrutural reforçada com pintura eletrostática a pó de alta durabilidade. Oferece 1 gaveta central espaçosa com fechadura a chave e corrediças telescópicas com esferas, complementada por 2 amplas bandejas/prateleiras com bordas anti-queda e 4 rodízios reforçados (2 giratórios com freio e 2 fixos) para movimentação ágil e segura em oficinas.",
    "technicalSpecs": {
      "codigoGedore": "3370213",
      "referencia": "S20102001",
      "dimensoes": "761 x 441 x 132 mm (embalagem) / montado ~ 800 x 450 x 860 mm",
      "pesoKg": "21,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Dimensões",
        "Peso"
      ],
      "rows": [
        [
          "3370213",
          "S20102001",
          "Carro Aberto com 1 Gaveta",
          "761 x 441 x 132 mm",
          "21,5 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370213",
      "Referência: S20102001",
      "Quantidade: 1 peça",
      "Gaveta: 1 gaveta com corrediças telescópicas e fechadura com chave",
      "Prateleiras: 2 bandejas reforçadas com bordas de proteção",
      "Rodas: 4 rodas de alto rendimento (2 giratórias com freio e 2 fixas)",
      "Pintura: Eletrostática a pó de alta resistência a riscos e solventes",
      "Peso: 21,500 kg"
    ],
    "properties": [
      "Corrediças telescópicas na gaveta que deslizam suavemente sob carga",
      "Fechamento seguro com chave na gaveta para guarda de ferramentas sensíveis",
      "Puxador ergonômico lateral e rodízios com trava que garantem estabilidade estática em piso irregular"
    ],
    "instructions": [
      "Monte as rodas e prateleiras seguindo o manual com os parafusos devidamente apertados.",
      "Distribua a carga de modo uniforme entre as bandejas e acione a trava das rodas ao trabalhar parado."
    ],
    "application": "Oficinas Mecânicas, Funilaria, Linhas de Montagem, Manutenção Industrial e Garagens Profissionais",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s20102001_1.jpeg",
    "images": [
      "/images/products/robust_s20102001_1.jpeg",
      "/images/products/robust_s20102001_2.jpeg",
      "/images/products/robust_s20102001_3.jpeg",
      "/images/products/robust_s20102001_4.jpeg",
      "/images/products/robust_s20102001_5.jpeg"
    ]
  },
  {
    "id": "s36681239",
    "name": "S36681239 JOGO DE ALICATES UNIVERSAL, CORTE E BICO 3 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Alicates & Oficina",
    "code": "S36681239",
    "technicalCode": "3370086",
    "description": "Jogo de 3 alicates essenciais ROBUST forjados em aço especial composto por alicate universal 8\", corte diagonal 6\" e meia-cana bico reto 6\".",
    "detailedDescription": "O Jogo de Alicates ROBUST S36681239 (Código 3370086) reúne as três ferramentas manuais de corte e preensão mais utilizadas em manutenções em geral: Alicate Universal de 8\", Alicate de Corte Diagonal de 6\" e Alicate Bico Meia-Cana Reto de 6\". Forjados em aço especial temperado por indução nos gumes de corte e equipados com empunhaduras ergonômicas bimatéria com abas protetoras.",
    "composition": [
      "1 Alicate universal 8\" (200 mm)",
      "1 Alicate corte diagonal 6\" (160 mm)",
      "1 Alicate bico meia-cana reto 6\" (160 mm)"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370086",
      "referencia": "S36681239",
      "pecas": "3",
      "pesoKg": "0,695 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Composição",
        "Dimensões Embalagem",
        "Peso"
      ],
      "rows": [
        [
          "3370086",
          "S36681239",
          "3 peças",
          "Universal 8\", Corte 6\", Bico 6\"",
          "250 x 230 x 34 mm",
          "0,695 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370086",
      "Referência: S36681239",
      "Quantidade: 3 peças",
      "Material: Aço especial temperado",
      "Empunhadura: Bimatéria antiderrapante ergonômica com abas protetoras",
      "Tratamento dos gumes: Tratamento térmico por indução",
      "Peso: 0,695 kg"
    ],
    "properties": [
      "Gumes temperados por indução que cortam fios de cobre, arames e cabos elétricos com facilidade",
      "Articulação suave com rebite de precisão que não folga com o uso",
      "Cabos ergonômicos que proporcionam pega firme e proteção para as mãos"
    ],
    "instructions": [
      "Use o alicate adequado para cada diâmetro de fio e nunca martele nos braços da ferramenta.",
      "Mantenha a articulação lubrificada periodicamente com óleo fino para evitar corrosão."
    ],
    "application": "Oficinas Mecânicas, Manutenção Elétrica, Instalações Prediais e Reparos em Geral",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s36681239_1.jpg",
    "images": [
      "/images/products/robust_s36681239_1.jpg",
      "/images/products/robust_s36681239_2.jpeg",
      "/images/products/robust_s36681239_3.jpeg"
    ]
  },
  {
    "id": "s38001004",
    "name": "S38001004 JOGO DE CHAVES DE FENDA E PHILLIPS 4 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Manuais",
    "code": "S38001004",
    "technicalCode": "3370222",
    "description": "Jogo de chaves de fenda simples e cruzada (Phillips) ROBUST com 4 peças em aço cromo-vanádio com ponta magnetizada e cabo ergonômico.",
    "detailedDescription": "O Jogo de Chaves de Fenda e Phillips ROBUST S38001004 (Código 3370222) com 4 peças foi desenvolvido para fornecer torque máximo e conforto ergonômico. Fabricadas com hastes em liga de Cromo-Vanádio de alta tenacidade e pontas imantadas com acabamento escurecido, as chaves garantem encaixe preciso na fenda dos parafusos evitando espanamento.",
    "composition": [
      "2 Chaves de fenda simples: 5x100 mm e 6x150 mm",
      "2 Chaves de fenda cruzada (Phillips): PH1x100 mm e PH2x150 mm"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370222",
      "referencia": "S38001004",
      "pecas": "4",
      "pesoKg": "0,350 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas Inclusas",
        "Material Haste"
      ],
      "rows": [
        [
          "3370222",
          "S38001004",
          "4 peças",
          "Fenda 5x100, 6x150 | PH1x100, PH2x150",
          "Aço Cromo-Vanádio"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370222",
      "Referência: S38001004",
      "Quantidade: 4 peças",
      "Haste: Aço cromo-vanádio temperado com ponta fosfatizada magnética",
      "Cabo: Polipropileno anatômico de alto torque",
      "Peso: 0,350 kg"
    ],
    "properties": [
      "Pontas magnéticas escurecidas que seguram o parafuso facilitando a fixação em locais de difícil acesso",
      "Cabo com perfil anatômico que transmite alto torque com menor esforço manual",
      "Haste cilíndrica com resistência superior à torção"
    ],
    "instructions": [
      "Utilize a ponta que corresponda exatamente à largura e espessura do parafuso.",
      "Não utilize como talhadeira ou pé-de-cabra."
    ],
    "application": "Manutenção Automotiva, Montagem de Móveis, Eletrodomésticos e Serviços Gerais",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s38001004_1.jpg",
    "images": [
      "/images/products/robust_s38001004_1.jpg",
      "/images/products/robust_s38001004_2.jpg",
      "/images/products/robust_s38001004_3.jpg",
      "/images/products/robust_s38001004_4.jpg"
    ]
  },
  {
    "id": "s38001006",
    "name": "S38001006 JOGO DE CHAVES DE FENDA E PHILLIPS 6 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Manuais",
    "code": "S38001006",
    "technicalCode": "3370223",
    "description": "Jogo de chaves de fenda simples e Phillips ROBUST com 6 peças em aço cromo-vanádio com ponta magnetizada e ampla variedade de medidas.",
    "detailedDescription": "O Jogo de Chaves ROBUST S38001006 (Código 3370223) com 6 peças oferece o conjunto essencial completo para profissionais e hobbistas. Composto por 4 chaves de fenda simples e 2 chaves Phillips com hastes forjadas em aço Cromo-Vanádio, pontas magnetizadas de precisão e cabos ergonômicos de alta aderência.",
    "composition": [
      "4 Chaves de fenda simples: 3x75 mm, 5x100 mm, 6x100 mm e 6x150 mm",
      "2 Chaves de fenda cruzada (Phillips): PH1x75 mm e PH2x100 mm"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370223",
      "referencia": "S38001006",
      "pecas": "6",
      "pesoKg": "0,480 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas Inclusas",
        "Material Haste"
      ],
      "rows": [
        [
          "3370223",
          "S38001006",
          "6 peças",
          "Fenda 3x75, 5x100, 6x100, 6x150 | PH1x75, PH2x100",
          "Aço Cromo-Vanádio"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370223",
      "Referência: S38001006",
      "Quantidade: 6 peças",
      "Material da haste: Aço Cromo-Vanádio de alta tenacidade",
      "Pontas: Magnetizadas e escurecidas de alta concentricidade",
      "Cabos: Ergonômicos antiderrapantes com identificação de medida",
      "Peso: 0,480 kg"
    ],
    "properties": [
      "Cobre parafusos pequenos de 3 mm até parafusos estruturais de 6 mm e Phillips PH1/PH2",
      "Magnetização de fábrica para posicionar parafusos sem queda",
      "Cabo anatômico projetado para evitar calos e proporcionar torque uniforme"
    ],
    "instructions": [
      "Mantenha a ponta da chave limpa e sem resíduos de graxa antes do aperto.",
      "Não use em circuitos energizados."
    ],
    "application": "Oficinas Mecânicas, Marcenaria, Eletrodomésticos, Manutenção Predial e Hobby",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s38001006_1.jpg",
    "images": [
      "/images/products/robust_s38001006_1.jpg",
      "/images/products/robust_s38001006_2.jpg",
      "/images/products/robust_s38001006_3.jpg",
      "/images/products/robust_s38001006_4.jpg"
    ]
  },
  {
    "id": "s38990000",
    "name": "S38990000 MAGNETIZADOR E DESMAGNETIZADOR DE CHAVES",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Acessórios de Aperto",
    "code": "S38990000",
    "technicalCode": "3370210",
    "description": "Magnetizador e desmagnetizador compacto ROBUST para chaves de fenda, bits e pontas metálicas com ímãs de neodímio integrados.",
    "detailedDescription": "O Magnetizador e Desmagnetizador ROBUST S38990000 (Código 3370210) é um dispositivo compacto indispensável para qualquer bancada ou caixa de ferramentas. Permite magnetizar instantaneamente chaves de fenda, chaves Torx e bits para reter parafusos, ou desmagnetizá-los quando for trabalhar próximo a componentes eletrônicos sensíveis à atração magnética.",
    "technicalSpecs": {
      "codigoGedore": "3370210",
      "referencia": "S38990000",
      "pecas": "1",
      "pesoKg": "0,120 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Função",
        "Material Corpo",
        "Peso"
      ],
      "rows": [
        [
          "3370210",
          "S38990000",
          "Magnetizar (+) e Desmagnetizar (-)",
          "Termoplástico de alto impacto",
          "0,120 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370210",
      "Referência: S38990000",
      "Quantidade: 1 peça",
      "Mecanismo: Ímãs de alta densidade magnética permanentes (não requer pilhas ou energia)",
      "Corpo: Termoplástico resistente a solventes e quedas",
      "Peso: 0,120 kg"
    ],
    "properties": [
      "Ação imediata: basta passar a haste da chave no canal (+) para magnetizar ou no canal (-) para desmagnetizar",
      "Não consome bateria nem eletricidade; opera com magnetismo permanente",
      "Tamanho de bolso prático para transporte em qualquer maleta ou cinto de ferramentas"
    ],
    "instructions": [
      "Para magnetizar: deslize a ponta da ferramenta repetidamente pela cavidade (+).",
      "Para desmagnetizar: passe a ponta pelas canaletas escalonadas da cavidade (-)."
    ],
    "application": "Montagem de Computadores, Eletrônica Automotiva, Painéis Elétricos e Oficinas",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s38990000_1.jpeg",
    "images": [
      "/images/products/robust_s38990000_1.jpeg",
      "/images/products/robust_s38990000_2.jpeg",
      "/images/products/robust_s38990000_3.jpeg"
    ]
  },
  {
    "id": "s68900210",
    "name": "S68900210 TORQUÍMETRO DE ESTALO 1/2\" 28-210 Nm",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "soquetes-chaves",
    "categoryLabel": "Torquímetros",
    "code": "S68900210",
    "technicalCode": "3370171",
    "description": "Torquímetro de estalo regulável 1/2\" ROBUST com capacidade de 28 a 210 N·m (2,9 a 21,4 kgf·m), catraca reversível e estojo plástico protetor.",
    "detailedDescription": "O Torquímetro de Estalo 1/2\" ROBUST S68900210 (Código 3370171) do Grupo GEDORE é projetado para garantir o aperto com torque exato em rodas automotivas, parafusos de cabeçote, pivôs e mancais mecânicos. Com faixa ampla de 28 a 210 N·m, corpo em aço especial cromado, mecanismo de catraca reversível com alavanca de inversão e trava de ajuste na extremidade do cabo, acompanha estojo tipo estojo rígido para conservação.",
    "technicalSpecs": {
      "codigoGedore": "3370171",
      "referencia": "S68900210",
      "encaixe": "1/2\"",
      "faixaNm": "28 - 210 N·m",
      "dimensoes": "75 x 90 x 495 mm",
      "pesoKg": "1,800 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Encaixe Quadrado",
        "Faixa de Torque",
        "Medidas (mm)",
        "Peso"
      ],
      "rows": [
        [
          "3370171",
          "S68900210",
          "1/2\"",
          "28 a 210 N·m (2,9 a 21,4 kgf·m)",
          "75 x 90 x 495 mm",
          "1,800 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370171",
      "Referência: S68900210",
      "Quantidade: 1 peça",
      "Encaixe quadrado: 1/2\" com esfera de retenção",
      "Faixa de torque: 28 a 210 N·m",
      "Catraca: Reversível integrada para agilizar operações",
      "Estojo: Estojo de plástico rígido sob medida incluso",
      "Peso: 1,800 kg"
    ],
    "properties": [
      "Disparo sonoro e tátil perceptível ('clique') imediatamente ao atingir o torque configurado",
      "Escala gravada no corpo com ajuste micrométrico no punho giratório",
      "Trava de segurança na extremidade da empunhadura para retenção do ajuste"
    ],
    "instructions": [
      "Solte a trava no pomo traseiro, gire a manopla até o torque indicado e trave novamente.",
      "Após o uso, destrave e retorne ao valor mínimo de 28 N·m para preservar a mola interna."
    ],
    "application": "Troca de Pneus, Rodas Automotivas, Suspensão, Motores e Manutenção em Geral",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s68900210_1.jpg",
    "images": [
      "/images/products/robust_s68900210_1.jpg",
      "/images/products/robust_s68900210_2.jpeg",
      "/images/products/robust_s68900210_3.jpeg",
      "/images/products/robust_s68900210_4.jpeg",
      "/images/products/robust_s68900210_5.jpg"
    ]
  },
  {
    "id": "s49001039",
    "name": "S49001039 JOGO DE CHAVES, BITS E SOQUETES 1/4\" 39 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "S49001039",
    "technicalCode": "3370168",
    "description": "Jogo de chaves de fenda, bits e soquetes 1/4\" ROBUST com 39 peças em estojo compacto com catraca de alta velocidade e chaves de precisão.",
    "detailedDescription": "O Jogo ROBUST S49001039 (Código 3370168) com 39 peças é um conjunto multiuso ideal para apertos de precisão em informática, painéis elétricos, eletrodomésticos e mecânica leve. Contém mini catraca reversível para bits e soquetes 1/4\", soquetes sextavados de 4 a 12 mm, chaves de precisão, adaptador e ampla variedade de bits (Fenda, Phillips, Pozidriv e Torx) organizados em estojo transparente rígido.",
    "composition": [
      "Soquetes sextavados 1/4\": 4, 5, 6, 7, 8, 9, 10, 11 e 12 mm",
      "Mini catraca reversível 1/4\" para bits e soquetes",
      "Cabo com quadrado 1/4\" e adaptador para bits",
      "Chaves de fenda de precisão e bits Phillips, Fenda, Pozidriv e Torx",
      "Estojo organizador plástico com tampa transparente e trava"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370168",
      "referencia": "S49001039",
      "pecas": "39",
      "pesoKg": "0,850 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Encaixe Principal",
        "Peso"
      ],
      "rows": [
        [
          "3370168",
          "S49001039",
          "39 peças",
          "1/4\" sextavado e bits",
          "0,850 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370168",
      "Referência: S49001039",
      "Quantidade: 39 peças",
      "Material: Aço Cromo-Vanádio e Aço S2",
      "Estojo: Plástico rígido com compartimentos anatômicos",
      "Peso: 0,850 kg"
    ],
    "properties": [
      "Conjunto ultra versátil que cabe no porta-luvas, gaveta de bancada ou caixa de ferramentas",
      "Mini catraca robusta com ângulo reduzido de manobra para espaços exíguos",
      "Bits e soquetes tratados termicamente contra desgaste dos cantos"
    ],
    "instructions": [
      "Encaixe o bit firmemente no adaptador magnético antes do aperto.",
      "Guarde todas as peças nos compartimentos identificados após o uso."
    ],
    "application": "Montagem de Móveis, Eletrônica, Eletrodomésticos, Ciclismo e Pequenos Reparos",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s49001039_1.jpeg",
    "images": [
      "/images/products/robust_s49001039_1.jpeg",
      "/images/products/robust_s49001039_2.jpeg",
      "/images/products/robust_s49001039_3.jpeg",
      "/images/products/robust_s49001039_4.jpeg"
    ]
  },
  {
    "id": "s28202200",
    "name": "S28202200 ALICATE DESENCAPADOR DE FIOS AUTOMÁTICO 8\"",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Alicates & Elétrica",
    "code": "S28202200",
    "technicalCode": "3370163",
    "description": "Alicate automático desencapador, cortador e crimpador de fios 8\" ROBUST com ajuste automático de bitola para fios de 0,2 a 6,0 mm².",
    "detailedDescription": "O Alicate Desencapador Automático 8\" ROBUST S28202200 (Código 3370163) executa 3 funções fundamentais com extrema rapidez: desencapar, cortar e crimpar terminais. Equipado com mordentes de aço temperado que se ajustam automaticamente à bitola do fio (de 0,2 a 6,0 mm² / 24 a 10 AWG) sem romper os filamentos de cobre, batente de comprimento ajustável e lâmina de corte integrada.",
    "technicalSpecs": {
      "codigoGedore": "3370163",
      "referencia": "S28202200",
      "capacidade": "0,2 a 6,0 mm² (24 a 10 AWG)",
      "comprimento": "8\" (205 mm)",
      "pesoKg": "0,320 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Capacidade de Decapagem",
        "Funções",
        "Tamanho",
        "Peso"
      ],
      "rows": [
        [
          "3370163",
          "S28202200",
          "0,2 a 6,0 mm² (24-10 AWG)",
          "Desencapar, Cortar e Crimpar",
          "8\" (205 mm)",
          "0,320 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370163",
      "Referência: S28202200",
      "Quantidade: 1 peça",
      "Capacidade de decapagem: Fios de 0,2 a 6,0 mm² (24 a 10 AWG)",
      "Crimpagem: Terminais isolados e não isolados de 0,5 a 6,0 mm² (22 a 10 AWG)",
      "Comprimento: 205 mm (8 pol)",
      "Cabo: Ergonômico em termoplástico injetado antiderrapante",
      "Peso: 0,320 kg"
    ],
    "properties": [
      "Desencapa a capa isolante em um único movimento de aperto sem machucar os fios condutores",
      "Batente limitador regulável para decapagens padronizadas na mesma extensão",
      "Crimpa terminais elétricos automotivos comuns com matriz de prensagem integrada no cabo"
    ],
    "instructions": [
      "Ajuste o limitador para o comprimento desejado, insira o fio entre os mordentes e aperte o cabo até o desarme.",
      "Use o parafuso micrométrico superior se for trabalhar com cabos de isolação muito fina ou espessa."
    ],
    "application": "Instalação de Som e Acessórios Automotivos, Elétrica Predial, Chicotes e Painéis de Comando",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s28202200_1.png",
    "images": [
      "/images/products/robust_s28202200_1.png",
      "/images/products/robust_s28202200_2.png",
      "/images/products/robust_s28202200_3.png",
      "/images/products/robust_s28202200_4.png"
    ]
  },
  {
    "id": "s28904260",
    "name": "S28904260 ALICATE REBITADOR MANUAL 9,5\"",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Fixação & Funilaria",
    "code": "S28904260",
    "technicalCode": "3370167",
    "description": "Alicate rebitador manual profissional ROBUST tipo alavanca com 4 bicos intercambiáveis para rebites de repuxo de 2,4 a 4,8 mm e chave de troca.",
    "detailedDescription": "O Alicate Rebitador Manual 9,5\" ROBUST S28904260 (Código 3370167) é a ferramenta ideal para unir chapas metálicas, perfis de alumínio, calhas e peças plásticas através de rebites de repuxo cegos. Forjado em chapa de aço de alta resistência com ponteira tratada e mordentes em aço endurecido, acompanha 4 pontas/bicos intercambiáveis (2,4; 3,2; 4,0 e 4,8 mm) alojadas no próprio corpo e chave de aperto.",
    "technicalSpecs": {
      "codigoGedore": "3370167",
      "referencia": "S28904260",
      "bicos": "2,4 mm, 3,2 mm, 4,0 mm e 4,8 mm",
      "tamanho": "9,5\" (240 mm)",
      "pesoKg": "0,520 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Bicos Inclusos",
        "Comprimento",
        "Material",
        "Peso"
      ],
      "rows": [
        [
          "3370167",
          "S28904260",
          "2,4 mm (3/32\"), 3,2 mm (1/8\"), 4,0 mm (5/32\"), 4,8 mm (3/16\")",
          "9,5\" (240 mm)",
          "Aço estampado reforçado",
          "0,520 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370167",
      "Referência: S28904260",
      "Quantidade: 1 peça",
      "Capacidade de rebites: Diâmetros de 2,4 mm, 3,2 mm, 4,0 mm e 4,8 mm",
      "Comprimento: 240 mm (9,5 pol)",
      "Acessórios: 4 bicos montados no corpo e chave especial de aperto inclusa",
      "Empunhadura: Revestida em vinil plastificado antiderrapante com trava de fechamento",
      "Peso: 0,520 kg"
    ],
    "properties": [
      "Mordentes temperados de alta aderência que puxam o mandril do rebite sem escorregar",
      "Troca rápida dos bicos com a chave acoplada no cabo da ferramenta",
      "Trava na extremidade do cabo que mantém o alicate fechado para transporte seguro"
    ],
    "instructions": [
      "Fure a chapa no diâmetro correto do rebite, instale o bico correspondente no alicate e insira a haste do rebite.",
      "Pressione a alavanca até o rompimento do mandril de repuxo."
    ],
    "application": "Funilaria Automotiva, Esquadrias de Alumínio, Calhas, Toldos e Manutenção Geral",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s28904260_1.jpeg",
    "images": [
      "/images/products/robust_s28904260_1.jpeg",
      "/images/products/robust_s28904260_2.png",
      "/images/products/robust_s28904260_3.png"
    ]
  },
  {
    "id": "s05125008",
    "name": "S05125008 JOGO DE CHAVES FIXAS 8 Peças (6x7 a 20x22 mm)",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Fixas",
    "code": "S05125008",
    "technicalCode": "3370012",
    "description": "Jogo de chaves fixas de duas bocas ROBUST com 8 peças de 6x7 a 20x22 mm forjadas em aço cromo-vanádio com acabamento fosco acetinado.",
    "detailedDescription": "O Jogo de Chaves Fixas ROBUST S05125008 (Código 3370012) com 8 peças é fabricado em aço Cromo-Vanádio de alta qualidade pelo Grupo GEDORE. Cada chave possui duas bocas abertas com inclinação de 15° para facilitar o reposicionamento rápido em parafusos sextavados e quadrados em locais com restrição de giro.",
    "composition": [
      "8 Chaves fixas de duas bocas: 6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19 e 20x22 mm",
      "Suporte organizador plástico tipo estojo com trava"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370012",
      "referencia": "S05125008",
      "pecas": "8",
      "faixaMedidas": "6x7 a 20x22 mm",
      "pesoKg": "0,890 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas",
        "Acabamento"
      ],
      "rows": [
        [
          "3370012",
          "S05125008",
          "8 peças",
          "6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19, 20x22 mm",
          "Cromado mate acetinado"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370012",
      "Referência: S05125008",
      "Quantidade: 8 peças",
      "Medidas: 6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19 e 20x22 mm",
      "Material: Aço Cromo-Vanádio forjado",
      "Acabamento: Cromado fosco acetinado",
      "Peso: 0,890 kg"
    ],
    "properties": [
      "Bocas com perfil plano e inclinação de 15° que agiliza o encaixe e a reversão de giro",
      "Gravação em relevo das medidas em ambas as extremidades para identificação imediata",
      "Acompanha suporte plástico rígido com alça para pendurar em painel"
    ],
    "instructions": [
      "Utilize a medida exata da porca para não arredondar as arestas.",
      "Não prolongue a chave com tubos para evitar ultrapassar o torque nominal do aço."
    ],
    "application": "Oficinas Mecânicas, Tubulações Hidráulicas, Bicicletarias e Manutenção Industrial",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s05125008_1.jpeg",
    "images": [
      "/images/products/robust_s05125008_1.jpeg",
      "/images/products/robust_s05125008_2.jpeg"
    ]
  },
  {
    "id": "s01185008",
    "name": "S01185008 JOGO DE CHAVES ESTRELA 8 Peças (6x7 a 20x22 mm)",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Estrela",
    "code": "S01185008",
    "technicalCode": "3370026",
    "description": "Jogo de chaves estrela de duas bocas estriadas ROBUST com 8 peças de 6x7 a 20x22 mm forjadas em aço cromo-vanádio com cabeças inclinadas.",
    "detailedDescription": "O Jogo de Chaves Estrela ROBUST S01185008 (Código 3370026) reúne 8 chaves com perfil estriado de 12 faces que abraça completamente o parafuso sextavado, distribuindo a força de aperto sem danificar as quinas. Com cabeças rebaixadas e inclinadas em relação ao corpo, protegem as mãos do mecânico contra atrito com a superfície de trabalho.",
    "composition": [
      "8 Chaves estrela: 6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19 e 20x22 mm",
      "Suporte plástico organizador com trava de fixação"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370026",
      "referencia": "S01185008",
      "pecas": "8",
      "faixaMedidas": "6x7 a 20x22 mm",
      "pesoKg": "1,150 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas",
        "Acabamento"
      ],
      "rows": [
        [
          "3370026",
          "S01185008",
          "8 peças",
          "6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19, 20x22 mm",
          "Cromado mate acetinado"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370026",
      "Referência: S01185008",
      "Quantidade: 8 peças",
      "Medidas: 6x7, 8x9, 10x11, 12x13, 14x15, 16x17, 18x19 e 20x22 mm",
      "Perfil: Estriado 12 faces Unit Drive",
      "Material: Aço Cromo-Vanádio forjado",
      "Acabamento: Cromado mate acetinado",
      "Peso: 1,150 kg"
    ],
    "properties": [
      "Cabeças curvadas que desviam a mão de obstáculos planos e componentes quentes",
      "Perfil estriado que permite aperto firme com alto torque em porcas flangeadas e sextavadas",
      "Forjadas com espessura otimizada para entrar em locais de difícil acesso"
    ],
    "instructions": [
      "Encaixe a boca estriada totalmente sobre a porca antes de exercer tração.",
      "Armazene sempre no suporte para manter a identificação de medidas rápida."
    ],
    "application": "Oficinas Mecânicas Automotivas, Linha Pesada, Manutenção Industrial e Agrícola",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s01185008_1.jpeg",
    "images": [
      "/images/products/robust_s01185008_1.jpeg",
      "/images/products/robust_s01185008_2.jpeg"
    ]
  },
  {
    "id": "s09105012",
    "name": "S09105012 JOGO DE CHAVES COMBINADAS 12 Peças (6 a 22 mm)",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Combinadas",
    "code": "S09105012",
    "technicalCode": "3370080",
    "description": "Jogo de chaves combinadas (boca fixa e estrela estriada) ROBUST com 12 peças de 6 a 22 mm forjadas em aço cromo-vanádio.",
    "detailedDescription": "O Jogo de Chaves Combinadas ROBUST S09105012 (Código 3370080) é um clássico de produtividade nas bancadas profissionais. Contém 12 chaves combinadas com uma ponta fixa aberta (para aproximação rápida) e uma ponta estrela estriada (para aperto final de alto torque), cobrindo de 6 mm até 22 mm forjadas em aço Cromo-Vanádio com suporte prático.",
    "composition": [
      "12 Chaves combinadas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22 mm",
      "Suporte plástico organizador com trava para parede ou bancada"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370080",
      "referencia": "S09105012",
      "pecas": "12",
      "faixaMedidas": "6 a 22 mm",
      "pesoKg": "1,100 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas Inclusas",
        "Acabamento"
      ],
      "rows": [
        [
          "3370080",
          "S09105012",
          "12 peças",
          "6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22 mm",
          "Cromado mate acetinado"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370080",
      "Referência: S09105012",
      "Quantidade: 12 peças",
      "Medidas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22 mm",
      "Material: Aço Cromo-Vanádio de alta resistência mecânica",
      "Acabamento: Cromado mate acetinado antiferrugem",
      "Peso: 1,100 kg"
    ],
    "properties": [
      "Combina velocidade na extremidade aberta com máxima segurança de aperto na extremidade estrela",
      "Boca estrela com inclinação de 15° para facilitar o manuseio livre de obstáculos",
      "Comprimento anatômico balanceado para aplicação de torque adequado à bitola do parafuso"
    ],
    "instructions": [
      "Use o lado fixo para rosquear rápido e mude para o lado estrela para o aperto final com torque total.",
      "Não utilize martelos nos cabos das chaves."
    ],
    "application": "Mecânica Automotiva, Motocicletas, Manutenção Predial, Máquinas e Equipamentos",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s09105012_1.jpeg",
    "images": [
      "/images/products/robust_s09105012_1.jpeg",
      "/images/products/robust_s09105012_2.jpeg",
      "/images/products/robust_s09105012_3.jpeg",
      "/images/products/robust_s09105012_4.jpeg"
    ]
  },
  {
    "id": "s09105025",
    "name": "S09105025 JOGO DE CHAVES COMBINADAS 25 Peças (6 a 32 mm)",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "soquetes-chaves",
    "categoryLabel": "Chaves Combinadas",
    "code": "S09105025",
    "technicalCode": "3370081",
    "description": "Jogo completo de chaves combinadas ROBUST com 25 peças cobrindo de 6 a 32 mm forjadas em aço cromo-vanádio com estojo em lona reforçada.",
    "detailedDescription": "O Jogo de Chaves Combinadas ROBUST S09105025 (Código 3370081) é o conjunto mais amplo e completo da linha, oferecendo 25 chaves combinadas em sequência contínua de 6 mm até a medida pesada de 32 mm. Acompanha bolsa/enrolador em lona reforçada com ilhoses metálicos para pendurar na parede da oficina ou enrolar para transporte fácil.",
    "composition": [
      "25 Chaves combinadas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30 e 32 mm",
      "Estojo enrolável em lona reforçada de alta durabilidade com bolsos individuais e ilhoses para fixação"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370081",
      "referencia": "S09105025",
      "pecas": "25",
      "faixaMedidas": "6 a 32 mm",
      "pesoKg": "4,700 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Faixa de Medidas",
        "Estojo Inclusivo",
        "Peso"
      ],
      "rows": [
        [
          "3370081",
          "S09105025",
          "25 peças",
          "6 a 32 mm (sem faltar nenhuma medida comum)",
          "Bolsa em lona reforçada com ilhoses",
          "4,700 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370081",
      "Referência: S09105025",
      "Quantidade: 25 peças",
      "Medidas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30 e 32 mm",
      "Material: Aço Cromo-Vanádio forjado",
      "Acabamento: Cromado mate acetinado",
      "Peso total: 4,700 kg"
    ],
    "properties": [
      "Cobertura total de medidas métricas do 6 ao 32 mm para linhas leve, utilitária e pesada",
      "Estojo de lona lavável com bolsos numerados que evita perda de chaves e facilita a inspeção visual",
      "Extremidade estrela com perfil de 12 pontas inclinado a 15° para torque sem esforço"
    ],
    "instructions": [
      "Mantenha as chaves organizadas na ordem crescente dentro do estojo para ganho de agilidade.",
      "Seque as chaves antes de enrolar o estojo de lona caso tenham entrado em contato com água ou fluidos."
    ],
    "application": "Autocenters, Concessionárias, Frotas de Caminhões, Maquinário Pesado e Indústrias",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s09105025_1.jpeg",
    "images": [
      "/images/products/robust_s09105025_1.jpeg",
      "/images/products/robust_s09105025_2.jpeg",
      "/images/products/robust_s09105025_3.jpeg",
      "/images/products/robust_s09105025_4.jpeg"
    ]
  },
  {
    "id": "s45002094",
    "name": "S45002094 JOGO DE SOQUETES E ACESSÓRIOS 1/4\" E 1/2\" 94 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "S45002094",
    "technicalCode": "3370224",
    "description": "Jogo de soquetes sextavados e acessórios 1/4\" e 1/2\" ROBUST com 94 peças, 2 catracas reversíveis, soquetes longos e maleta de alto impacto.",
    "detailedDescription": "O Jogo de Soquetes 94 Peças ROBUST S45002094 (Código 3370224) do Grupo GEDORE é um dos kits mais consagrados do mercado automotivo. Oferece cobertura dual de encaixes (1/4\" e 1/2\"), soquetes normais de 4 a 32 mm, soquetes longos de parede fina para velas e porcas profundas, chaves soquete e bits, acompanhado de 2 catracas reversíveis de alto rendimento com trava de liberação rápida em estojo termoplástico resistente.",
    "composition": [
      "Encaixe 1/4\": 13 soquetes sextavados (4 a 14mm), 8 longos (6 a 13mm), 18 chaves soquete (Hex, Fenda, PH, PZ e Torx), catraca reversível, 2 extensões (50 e 100mm), extensão flexível, cabo T, cabo com quadrado e junta universal",
      "Encaixe 1/2\": 18 soquetes sextavados (10 a 32mm), 4 longos (14, 15, 17 e 19mm), 2 soquetes para vela (16 e 21mm), catraca reversível, 2 extensões (125 e 250mm), junta universal, adaptador 3 vias e adaptador para bits",
      "15 Bits 5/16\" (Hex, Fenda, PH, PZ e Torx) + 3 Chaves L hexagonais (1,5, 2 e 2,5mm)",
      "Maleta plástica reforçada com dobradiças e fechos de pressão metálicos"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370224",
      "referencia": "S45002094",
      "pecas": "94",
      "dimensoes": "380 x 280 x 75 mm",
      "pesoKg": "6,200 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Encaixes",
        "Dimensões Maleta",
        "Peso"
      ],
      "rows": [
        [
          "3370224",
          "S45002094",
          "94 peças",
          "1/4\" e 1/2\" sextavados",
          "380 x 280 x 75 mm",
          "6,200 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370224",
      "Referência: S45002094",
      "Quantidade de peças: 94 peças",
      "Encaixes quadrados: 1/4\" e 1/2\"",
      "Material: Aço Cromo-Vanádio ROBUST / GEDORE",
      "Acabamento: Cromado mate acetinado",
      "Maleta: Termoplástico de alto impacto com fechos metálicos",
      "Peso: 6,200 kg"
    ],
    "properties": [
      "Duplo sistema de catracas rápidas para serviços leves e pesados em um único conjunto",
      "Soquetes sextavados forjados com paredes reforçadas e perfil antiderrapante nos cantos",
      "Maleta compacta e resistente que organiza perfeitamente todas as 94 ferramentas"
    ],
    "instructions": [
      "Acione o botão traseiro da catraca para desacoplar soquetes e extensões com agilidade.",
      "Não exceda a capacidade mecânica da catraca usando alavancas improvisadas."
    ],
    "application": "Oficinas Mecânicas Automotivas, Autocenters, Manutenção Industrial e Serviços em Campo",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s45002094_1.jpeg",
    "images": [
      "/images/products/robust_s45002094_1.jpeg",
      "/images/products/robust_s45002094_2.jpeg",
      "/images/products/robust_s45002094_3.jpeg",
      "/images/products/robust_s45002094_4.jpeg"
    ]
  },
  {
    "id": "s46002108",
    "name": "S46002108 JOGO DE SOQUETES 1/4\" E 1/2\" COM PERFIL TORX 108 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "S46002108",
    "technicalCode": "3370226",
    "description": "Jogo de soquetes 1/4\" e 1/2\" ROBUST com 108 peças incluindo perfil Torx fêmea (E-Torx), soquetes sextavados longos e normais até 32 mm em maleta.",
    "detailedDescription": "O Jogo de Soquetes 108 Peças ROBUST S46002108 (Código 3370226) traz uma configuração ainda mais abrangente para a mecânica moderna ao incorporar 13 soquetes de perfil E-Torx (E4 a E24), fundamentais em motores de veículos europeus e modernos. Completo com catracas de 1/4\" e 1/2\", soquetes sextavados normais e longos, soquetes para velas, bits e acessórios forjados em aço Cromo-Vanádio.",
    "composition": [
      "Encaixe 1/4\": 13 soquetes sextavados (4 a 14mm), 8 longos (6 a 13mm), 5 E-Torx (E4, E5, E6, E7 e E8), 18 chaves soquete, catraca reversível, 2 extensões, cabo T, cabo quadrado e junta universal",
      "Encaixe 1/2\": 17 soquetes sextavados (10 a 32mm), 5 longos (14, 15, 17, 19 e 22mm), 8 E-Torx (E10 a E24), 2 para vela (16 e 21mm), catraca, 2 extensões, junta universal, adaptador 3 vias e adaptador para bits",
      "17 Bits 5/16\" (Hex, Fenda, PH, PZ e Torx) + 3 Chaves L hexagonais",
      "Maleta plástica reforçada com travas de segurança"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370226",
      "referencia": "S46002108",
      "pecas": "108",
      "dimensoes": "380 x 287 x 76 mm",
      "pesoKg": "6,330 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Destaque da Composição",
        "Dimensões Maleta",
        "Peso"
      ],
      "rows": [
        [
          "3370226",
          "S46002108",
          "108 peças",
          "Inclui 13 Soquetes E-Torx (E4 a E24)",
          "380 x 287 x 76 mm",
          "6,330 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370226",
      "Referência: S46002108",
      "Quantidade de peças: 108 peças",
      "Encaixes quadrados: 1/4\" e 1/2\"",
      "Soquetes especiais inclusos: Perfil Torx Fêmea E4, E5, E6, E7, E8, E10, E11, E12, E14, E16, E18, E20 e E24",
      "Material: Aço Cromo-Vanádio forjado",
      "Peso: 6,330 kg"
    ],
    "properties": [
      "Excelente cobertura para motores modernos e suspensões que utilizam parafusos Torx externos",
      "Soquetes longos de 1/2\" específicos para porcas de rodas e prisioneiros compridos",
      "Mecanismos de catraca reversível precisos e resistentes"
    ],
    "instructions": [
      "Utilize sempre a chave soquete correspondente ao perfil exato (sextavado ou Torx) para evitar desgaste prematuro.",
      "Mantenha o conjunto armazenado na maleta original para controle visual das peças."
    ],
    "application": "Oficinas Mecânicas Automotivas, Linha Leve, Utilitários, SUVs e Manutenção Geral",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s46002108_1.jpeg",
    "images": [
      "/images/products/robust_s46002108_1.jpeg",
      "/images/products/robust_s46002108_2.png",
      "/images/products/robust_s46002108_3.jpeg",
      "/images/products/robust_s46002108_4.png"
    ]
  },
  {
    "id": "s45002138",
    "name": "S45002138 JOGO DE SOQUETES E ACESSÓRIOS 1/4\", 3/8\" E 1/2\" 138 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "S45002138",
    "technicalCode": "3370225",
    "description": "Jogo profissional de soquetes e acessórios ROBUST com 138 peças nos 3 encaixes quadrados (1/4\", 3/8\" e 1/2\"), chaves combinadas e maleta pesada.",
    "detailedDescription": "O Jogo de Soquetes 138 Peças ROBUST S45002138 (Código 3370225) é a opção ideal para mecânicos e equipes de manutenção que necessitam de máxima flexibilidade operacional. Reúne três sistemas de catracas e soquetes (1/4\", 3/8\" e 1/2\"), chaves combinadas, soquetes para velas de ignição, perfil Torx E, bits variados e extensões de trabalho em maleta de alto impacto com fechos metálicos.",
    "composition": [
      "Encaixes 1/4\", 3/8\" e 1/2\" com 3 catracas reversíveis com botão de engate rápido",
      "Ampla variedade de soquetes sextavados curtos e longos cobrindo de 4 a 32 mm",
      "Soquetes de perfil E-Torx em diversas bitolas para motores modernos",
      "Jogo de chaves combinadas forjadas em aço Cromo-Vanádio",
      "Extensões, juntas universais, adaptadores de bits e chaves de vela magnéticas",
      "Maleta plástica reforçada estruturada com dobradiças metálicas"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370225",
      "referencia": "S45002138",
      "pecas": "138",
      "dimensoes": "345 x 280 x 77 mm",
      "pesoKg": "9,700 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Encaixes Quadrados",
        "Dimensões Maleta",
        "Peso"
      ],
      "rows": [
        [
          "3370225",
          "S45002138",
          "138 peças",
          "1/4\", 3/8\" e 1/2\"",
          "345 x 280 x 77 mm",
          "9,700 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370225",
      "Referência: S45002138",
      "Quantidade de peças: 138 peças",
      "Encaixes: 1/4\", 3/8\" e 1/2\"",
      "Material: Aço Cromo-Vanádio forjado de alto rendimento",
      "Acabamento: Cromado fosco acetinado antiferrugem",
      "Peso: 9,700 kg"
    ],
    "properties": [
      "3 catracas independentes permitindo o trabalho em qualquer porte de componente sem adaptações",
      "Combina soquetes com chaves combinadas em um único estojo móvel",
      "Excelente durabilidade mecânica garantida pelo controle de qualidade do Grupo GEDORE"
    ],
    "instructions": [
      "Use a catraca de 1/4\" para torques menores, 3/8\" para intermediários e 1/2\" para apertos pesados.",
      "Mantenha a maleta travada durante o transporte para conservar a disposição das ferramentas."
    ],
    "application": "Oficinas Mecânicas, Manutenção de Frotas, Indústrias, Usinas e Socorro Mecânico Móvel",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s45002138_1.jpeg",
    "images": [
      "/images/products/robust_s45002138_1.jpeg",
      "/images/products/robust_s45002138_2.jpeg",
      "/images/products/robust_s45002138_3.jpeg",
      "/images/products/robust_s45002138_4.jpeg"
    ]
  },
  {
    "id": "robust-d26-22am",
    "name": "D26-22 AM JOGO DE SOQUETES ESTRIADOS 1/2\" 22 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Jogos de Ferramentas",
    "code": "D26-22 AM",
    "technicalCode": "060230",
    "description": "Jogo de soquetes estriados 1/2\" ROBUST com 22 peças (18 soquetes de 10 a 32 mm + 4 acessórios) em estojo metálico de alta resistência.",
    "detailedDescription": "O Jogo de Soquetes Estriados 1/2\" ROBUST D26-22 AM (Código 060230) é o tradicional kit de soquetes de 12 faces com estojo metálico em chapa de aço esmaltada. Composto por 18 soquetes estriados de 10 a 32 mm, catraca reversível de 1/2\", extensão, cabo T e junta universal, foi feito para durar décadas na rotina mais pesada de oficinas mecânicas e indústrias.",
    "composition": [
      "18 Soquetes estriados de 1/2\": 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 27, 28, 30 e 32 mm",
      "1 Catraca reversível de 1/2\"",
      "1 Extensão de 1/2\" de 125 mm (5 pol)",
      "1 Cabo T articulado de 1/2\"",
      "1 Junta universal de 1/2\"",
      "Estojo metálico reforçado em chapa de aço pintada com fecho"
    ],
    "technicalSpecs": {
      "codigoGedore": "060230",
      "referencia": "D26-22 AM",
      "pecas": "22",
      "estojo": "Metálico em chapa de aço",
      "pesoKg": "4,800 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Composição Soquetes",
        "Estojo",
        "Peso"
      ],
      "rows": [
        [
          "060230",
          "D26-22 AM",
          "22 peças",
          "18 estriados 10 a 32 mm + 4 acessórios",
          "Caixa metálica em chapa de aço",
          "4,800 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 060230",
      "Referência: D26-22 AM",
      "Quantidade de peças: 22 peças",
      "Encaixe quadrado: 1/2\"",
      "Perfil dos soquetes: Estriado 12 faces",
      "Material: Aço Cromo-Vanádio forjado",
      "Estojo: Chapa de aço de alta espessura com berço metálico",
      "Peso: 4,800 kg"
    ],
    "properties": [
      "Estojo em chapa de aço de durabilidade incomparável que suporta quedas e solventes sem quebrar",
      "Perfil estriado que agiliza o encaixe em parafusos sextavados a cada 30 graus",
      "Acessórios forjados robustos com excelente resistência a altos torques manuais"
    ],
    "instructions": [
      "Encaixe o soquete firmemente na catraca até o clique da esfera de trava.",
      "Mantenha a caixa fechada e em local seco após o uso."
    ],
    "application": "Oficinas Mecânicas, Manutenção de Máquinas Agrícolas, Caminhões e Linha Industrial",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_d26_22_am_1.jpeg",
    "images": [
      "/images/products/robust_d26_22_am_1.jpeg",
      "/images/products/robust_d26_22_am_2.jpeg",
      "/images/products/robust_d26_22_am_3.jpeg"
    ]
  },
  {
    "id": "s38100619",
    "name": "S38100619 CANETA MAGNÉTICA TELESCÓPICA COM LED",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Especiais",
    "code": "S38100619",
    "technicalCode": "3370182",
    "description": "Pegador magnético telescópico com iluminação LED ROBUST com haste extensível de até 800 mm e capacidade magnética de até 2,2 kg.",
    "detailedDescription": "A Caneta Magnética Telescópica com LED ROBUST S38100619 (Código 3370182) é a ferramenta indispensável para resgatar parafusos, porcas, arruelas e soquetes caídos em locais inacessíveis do motor ou debaixo do chassi. Equipada com haste retrátil de longo alcance (atingindo até 800 mm estendida), ímã de neodímio de alta potência e luz LED brilhante na ponta para iluminar cavidades escuras.",
    "technicalSpecs": {
      "codigoGedore": "3370182",
      "referencia": "S38100619",
      "alcance": "Até 800 mm estendida",
      "capacidadeCarga": "Até 2,2 kg",
      "pesoKg": "0,090 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Alcance Máximo",
        "Capacidade de Atração",
        "Iluminação",
        "Peso"
      ],
      "rows": [
        [
          "3370182",
          "S38100619",
          "Até 800 mm",
          "Até 2,2 kg",
          "LED frontal de alta luminosidade",
          "0,090 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370182",
      "Referência: S38100619",
      "Quantidade: 1 peça",
      "Haste: Aço inoxidável telescópica extensível de 190 a 800 mm",
      "Ímã: Neodímio de alta força de atração (sustenta até 2,2 kg)",
      "Iluminação: 1 LED de alta intensidade na cabeça do ímã (com baterias inclusas)",
      "Empunhadura: Emborrachada anatômica antiderrapante",
      "Peso: 0,090 kg"
    ],
    "properties": [
      "Iluminação LED na ponta que permite enxergar o parafuso caído dentro do cofre do motor ou atrás de painéis",
      "Haste telescópica que se retrai para 19 cm, cabendo no bolso da camisa ou avental com clipe",
      "Ímã potente que resgata até ferramentas pesadas sem soltar"
    ],
    "instructions": [
      "Gire o anel da cabeça para ligar/desligar a lanterna LED.",
      "Puxe suavemente os gomos telescópicos até o comprimento necessário."
    ],
    "application": "Oficinas Mecânicas Automotivas, Elétrica, Funilaria, Linhas de Montagem e Manutenção Doméstica",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s38100619_1.jpeg",
    "images": [
      "/images/products/robust_s38100619_1.jpeg",
      "/images/products/robust_s38100619_2.jpeg",
      "/images/products/robust_s38100619_3.jpeg",
      "/images/products/robust_s38100619_4.jpeg"
    ]
  },
  {
    "id": "s15100001",
    "name": "S15100001 CABO DE TRANSFERÊNCIA DE CARGA 350A 2,5M (CHUPETA)",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Auto Socorro & Elétrica",
    "code": "S15100001",
    "technicalCode": "3370195",
    "description": "Cabo profissional para transferência de carga de bateria (chupeta) ROBUST com capacidade de 350A, 2,5 metros de comprimento, garras totalmente isoladas e bolsa protetora.",
    "detailedDescription": "O Cabo de Transferência de Carga ROBUST S15100001 (Código 3370195) com capacidade nominal de 350 Amperes e extensão de 2,5 metros é o item de emergência automotiva obrigatório em qualquer veículo ou oficina mecânica. Equipado com condutores de alta condutibilidade de cobre e garras tipo jacaré bicolores totalmente isoladas com molas de alta pressão para garantir contato elétrico sem faíscas perigosas, vem em bolsa prática com zíper.",
    "technicalSpecs": {
      "codigoGedore": "3370195",
      "referencia": "S15100001",
      "amperagem": "350 Amperes",
      "comprimento": "2,5 metros",
      "pesoKg": "1,100 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Capacidade Elétrica",
        "Comprimento",
        "Garras",
        "Peso"
      ],
      "rows": [
        [
          "3370195",
          "S15100001",
          "350 Amperes",
          "2,5 metros",
          "Garras tipo jacaré 100% isoladas",
          "1,100 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370195",
      "Referência: S15100001",
      "Quantidade: 1 jogo (cabos positivo vermelho e negativo preto)",
      "Capacidade de corrente: 350 A",
      "Comprimento dos cabos: 2,5 metros",
      "Garras: Cobreadas com isolamento termoplástico e mola de alta retenção",
      "Acompanha: Bolsa redonda com zíper e alça para transporte",
      "Peso: 1,100 kg"
    ],
    "properties": [
      "Condutor com bitola espessa que transfere corrente máxima sem superaquecimento ou perda de carga",
      "Garras robustas que mordem firmemente os polos da bateria evitando solturas acidentais",
      "Bolsa protetora que conserva o cabo organizado no porta-malas sem emaranhados"
    ],
    "instructions": [
      "Conecte a garra vermelha no polo (+) da bateria descarregada e depois no polo (+) da bateria auxiliar.",
      "Conecte a garra preta no polo (-) da auxiliar e a outra ponta em um ponto metálico do motor descarregado (massa).",
      "Dê a partida no veículo auxiliar e depois ligue o veículo que estava sem carga."
    ],
    "application": "Carros de Passeio, SUVs, Pick-ups, Utilitários Leves, Barcos e Frotas de Manutenção",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s15100001_1.jpg",
    "images": [
      "/images/products/robust_s15100001_1.jpg",
      "/images/products/robust_s15100001_2.jpeg",
      "/images/products/robust_s15100001_3.jpeg",
      "/images/products/robust_s15100001_4.jpeg"
    ]
  },
  {
    "id": "s18001002",
    "name": "S18001002 VENTOSA SIMPLES PARA VIDRO E FUNILARIA",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Vidraçaria & Funilaria",
    "code": "S18001002",
    "technicalCode": "3370205",
    "description": "Ventosa simples de sucção manual ROBUST para manuseio de vidros, pára-brisas, chapas lisas e desamassamento leve em funilaria.",
    "detailedDescription": "A Ventosa Simples ROBUST S18001002 (Código 3370205) é a ferramenta de vácuo indicada para movimentar placas de vidro automotivo, cerâmicas, porcelanatos, mármores e chapas metálicas com máxima segurança. Conta com disco de borracha de alta flexibilidade e alavanca plástica de travamento rápido que gera forte aderência sob superfícies limpas e não porosas.",
    "technicalSpecs": {
      "codigoGedore": "3370205",
      "referencia": "S18001002",
      "capacidade": "Até 30 kg na horizontal",
      "pesoKg": "0,280 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Tipo",
        "Capacidade Máxima",
        "Material",
        "Peso"
      ],
      "rows": [
        [
          "3370205",
          "S18001002",
          "Ventosa Simples (1 disco)",
          "Até 30 kg",
          "Polímero ABS e Borracha Vulcanizada",
          "0,280 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370205",
      "Referência: S18001002",
      "Quantidade: 1 peça",
      "Diâmetro da ventosa: 115 mm",
      "Capacidade de sucção: Até 30 kg (em superfícies planas e lisas)",
      "Acionamento: Alavanca de liberação rápida",
      "Peso: 0,280 kg"
    ],
    "properties": [
      "Sucção firme por vácuo gerada com um único movimento da alavanca ergonômica",
      "Borracha de alta maleabilidade que cria vedação estanque imediata",
      "Corpo leve e resistente que não risca nem mancha as superfícies polidas"
    ],
    "instructions": [
      "Certifique-se de que a superfície e a ventosa estejam limpas, secas e isentas de óleo ou poeira.",
      "Pressione a ventosa contra o material e baixe a alavanca de sucção para travar."
    ],
    "application": "Instalação de Pára-brisas Automotivos, Vidraçarias, Instalação de Pisos e Martelinho de Ouro",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s18001002_1.jpeg",
    "images": [
      "/images/products/robust_s18001002_1.jpeg",
      "/images/products/robust_s18001002_2.jpeg",
      "/images/products/robust_s18001002_3.jpeg"
    ]
  },
  {
    "id": "s18001001",
    "name": "S18001001 VENTOSA DUPLA PARA VIDRO E CHAPAS",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Vidraçaria & Funilaria",
    "code": "S18001001",
    "technicalCode": "3370204",
    "description": "Ventosa dupla de alta sucção ROBUST com capacidade de até 60 kg para transporte de vidros grandes, peças automotivas e chapas de aço.",
    "detailedDescription": "A Ventosa Dupla ROBUST S18001001 (Código 3370204) conta com dois discos de sucção de 115 mm articulados em empunhadura central rígida. Oferece capacidade de carga de até 60 kg, permitindo que o operador carregue vidros laterais e pára-brisas de grande porte com precisão de alinhamento e total controle postural.",
    "technicalSpecs": {
      "codigoGedore": "3370204",
      "referencia": "S18001001",
      "capacidade": "Até 60 kg",
      "discos": "2 discos de 115 mm",
      "pesoKg": "0,560 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Tipo",
        "Capacidade Máxima",
        "Diâmetro dos Discos",
        "Peso"
      ],
      "rows": [
        [
          "3370204",
          "S18001001",
          "Ventosa Dupla (2 discos)",
          "Até 60 kg",
          "2 x 115 mm",
          "0,560 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370204",
      "Referência: S18001001",
      "Quantidade: 1 peça",
      "Diâmetro dos discos: 2 x 115 mm",
      "Capacidade de sucção: Até 60 kg",
      "Estrutura: Polímero de alta resistência mecânica com borracha vulcanizada",
      "Peso: 0,560 kg"
    ],
    "properties": [
      "Duplo ponto de fixação que distribui o peso da peça evitando torção durante o transporte",
      "Duas alavancas individuais de travamento pneumático por pressão mecânica",
      "Pegador anatômico grosso que acomoda a mão com luvas de proteção com firmeza"
    ],
    "instructions": [
      "Limpe a peça antes da aplicação, pressione os dois discos e acione ambas as alavancas de trava.",
      "Sempre teste a aderência com leve tração antes de levantar a carga do chão."
    ],
    "application": "Troca de Pára-brisas, Funilarias, Instalação de Portas de Vidro, Painéis Solares e Marcenaria",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s18001001_1.jpeg",
    "images": [
      "/images/products/robust_s18001001_1.jpeg",
      "/images/products/robust_s18001001_2.jpeg",
      "/images/products/robust_s18001001_3.jpeg"
    ]
  },
  {
    "id": "s99200000",
    "name": "S99200000 APLICADOR DE SILICONE TIPO ESQUELETO 9\"",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Aplicadores & Adesivos",
    "code": "S99200000",
    "technicalCode": "3370198",
    "description": "Aplicador manual de silicone e selantes tipo esqueleto 9\" ROBUST em aço reforçado com alívio automático de pressão e alta durabilidade.",
    "detailedDescription": "O Aplicador de Silicone 9\" ROBUST S99200000 (Código 3370198) é a pistola de calafetação em formato esqueleto ideal para aplicação limpa e homogênea de tubos de silicone, cola PU, vedantes e adesivos de montagem padrão de até 300 ml. Fabricada em chapa de aço estampada com pintura protetora, haste dentada de tração firme e lingueta traseira de alívio rápido de pressão para evitar vazamento contínuo.",
    "technicalSpecs": {
      "codigoGedore": "3370198",
      "referencia": "S99200000",
      "tamanho": "9 pol (tubos até 300 ml / 9\")",
      "pesoKg": "0,380 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Capacidade",
        "Tipo Estrutura",
        "Comprimento",
        "Peso"
      ],
      "rows": [
        [
          "3370198",
          "S99200000",
          "Tubos e cartuchos até 300 ml (9\")",
          "Esqueleto em chapa de aço",
          "310 mm",
          "0,380 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370198",
      "Referência: S99200000",
      "Quantidade: 1 peça",
      "Compatibilidade: Cartuchos e tubos convencionais de até 300 ml (9 pol)",
      "Material: Chapa de aço estampada reforçada",
      "Gatilho: Alavanca de avanço progressivo com destravador instantâneo",
      "Peso: 0,380 kg"
    ],
    "properties": [
      "Sistema de alívio rápido por mola que estanca o fluxo de silicone assim que o gatilho é solto",
      "Corpo vazado tipo esqueleto que facilita a troca e visualização do volume restante no cartucho",
      "Haste dentada resistente que empurra o êmbolo mesmo em massas e selantes mais densos"
    ],
    "instructions": [
      "Pressione a trava traseira e puxe a haste totalmente para trás antes de posicionar o cartucho.",
      "Corte a ponta do bico aplicador e pressione o gatilho com cadência constante."
    ],
    "application": "Oficinas Mecânicas, Funilaria, Vedação de Motores, Pára-brisas, Construção Civil e Instalações Hidráulicas",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s99200000_1.jpg",
    "images": [
      "/images/products/robust_s99200000_1.jpg",
      "/images/products/robust_s99200000_2.jpg",
      "/images/products/robust_s99200000_3.jpg",
      "/images/products/robust_s99200000_4.jpg",
      "/images/products/robust_s99200000_5.jpg"
    ]
  },
  {
    "id": "s21702015",
    "name": "S21702015 KIT BOLSA EM LONA COM FERRAMENTAS DIY 15 Peças",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "jogos-ferramentas",
    "categoryLabel": "Kits de Ferramentas",
    "code": "S21702015",
    "technicalCode": "3370212",
    "description": "Kit de ferramentas manuais essenciais DIY ROBUST com 15 peças em bolsa de lona reforçada com alça tiracolo ajustável e múltiplos bolsos.",
    "detailedDescription": "O Kit Bolsa em Lona com Ferramentas ROBUST S21702015 (Código 3370212) foi concebido para quem necessita de um kit móvel e completo para serviços externos, manutenções residenciais, montagem de estruturas e pequenos reparos automotivos. Acompanha bolsa espaçosa em lona de alta resistência com alça e divisórias, alicate universal, martelo, chaves de fenda e Phillips, trena, estilete e acessórios.",
    "composition": [
      "1 Bolsa em lona reforçada com alça de ombro tiracolo e bolsos externos organizadores",
      "1 Alicate universal 8\" com empunhadura ergonômica",
      "1 Martelo de unha com cabo em fibra",
      "1 Trena métrica com trava",
      "1 Estilete retrátil profissional",
      "Chaves de fenda e chaves Phillips essenciais forjadas em Cromo-Vanádio",
      "Chave ajustável e acessórios para manutenção rápida"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370212",
      "referencia": "S21702015",
      "pecas": "15",
      "dimensoesBolsa": "550 x 330 x 55 mm",
      "pesoKg": "3,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Acondicionamento",
        "Dimensões",
        "Peso"
      ],
      "rows": [
        [
          "3370212",
          "S21702015",
          "15 peças",
          "Bolsa em lona reforçada multi-bolsos",
          "550 x 330 x 55 mm",
          "3,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370212",
      "Referência: S21702015",
      "Quantidade de peças: 15 peças",
      "Material das ferramentas: Aço Cromo-Vanádio e Aço Especial forjado",
      "Bolsa: Tecido poliéster/lona de alta tenacidade com costuras duplas e zíper reforçado",
      "Peso: 3,500 kg"
    ],
    "properties": [
      "Bolsa espaçosa que ainda comporta ferramentas extras do profissional",
      "Seleção balanceada de ferramentas para atender as situações mais comuns do dia a dia",
      "Alça de ombro ergonômica que distribui o peso confortavelmente durante caminhadas"
    ],
    "instructions": [
      "Mantenha as ferramentas nos elásticos e bolsos internos para melhor organização.",
      "Limpe as ferramentas antes de guardar na bolsa para preservar o tecido."
    ],
    "application": "Instaladores, Técnicos de Manutenção Predial, Eletricistas, Montadores e Uso Doméstico Avançado",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s21702015_1.jpeg",
    "images": [
      "/images/products/robust_s21702015_1.jpeg",
      "/images/products/robust_s21702015_2.jpeg",
      "/images/products/robust_s21702015_3.jpeg",
      "/images/products/robust_s21702015_4.jpeg",
      "/images/products/robust_s21702015_5.jpeg"
    ]
  },
  {
    "id": "s36680830",
    "name": "S36680830 JOGO DE FORMÕES PARA MADEIRA 4 Peças (1/4\" a 1\")",
    "brand": "gedore-robust",
    "brandLabel": "Robust",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "automotivo",
    "categoryLabel": "Ferramentas Manuais",
    "code": "S36680830",
    "technicalCode": "3370085",
    "description": "Jogo de formões chanfrados profissionais para marcenaria e carpintaria ROBUST com 4 peças (6, 12, 18 e 24 mm / 1/4\" a 1\") em aço cromo-vanádio com capa de proteção.",
    "detailedDescription": "O Jogo de Formões ROBUST S36680830 (Código 3370085) traz 4 lâminas forjadas em aço Cromo-Vanádio de alta retenção de fio de corte para entalhes, encaixes e rebaixos precisos em madeiras duras e macias. Possui cabos ergonômicos bimatéria com batente traseiro em aço que aceita pancadas de macete ou martelo sem quebrar o cabo, acompanhando protetores plásticos individuais de lâmina.",
    "composition": [
      "1 Formão chanfrado 6 mm (1/4\")",
      "1 Formão chanfrado 12 mm (1/2\")",
      "1 Formão chanfrado 18 mm (3/4\")",
      "1 Formão chanfrado 24 mm (1\")",
      "4 Protetores plásticos de lâmina"
    ],
    "technicalSpecs": {
      "codigoGedore": "3370085",
      "referencia": "S36680830",
      "pecas": "4",
      "medidas": "6, 12, 18 e 24 mm",
      "pesoKg": "0,780 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Medidas Inclusas",
        "Material Lâmina",
        "Peso"
      ],
      "rows": [
        [
          "3370085",
          "S36680830",
          "4 peças",
          "6 mm (1/4\"), 12 mm (1/2\"), 18 mm (3/4\"), 24 mm (1\")",
          "Aço Cromo-Vanádio com batente metálico",
          "0,780 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 3370085",
      "Referência: S36680830",
      "Quantidade: 4 peças",
      "Medidas das lâminas: 6 mm, 12 mm, 18 mm e 24 mm",
      "Material: Aço Cromo-Vanádio temperado com lâminas pré-afiadas",
      "Cabo: Bimatéria resistente com reforço metálico na ponta para pancadas de martelo",
      "Peso: 0,780 kg"
    ],
    "properties": [
      "Lâminas chanfradas que facilitam o acesso em cantos vivos e ranhuras de encaixe",
      "Batente de aço reforçado no topo do cabo que suporta impactos sem deformar",
      "Protetores de fio plásticos individuais que preservam a afiação afiada e evitam acidentes"
    ],
    "instructions": [
      "Trabalhe sempre com a lâmina direcionada para longe do corpo e das mãos de apoio.",
      "Reafie periodicamente com pedra de amolar e mantenha uma fina película de óleo protetor sobre a lâmina."
    ],
    "application": "Marcenaria, Carpintaria, Instalação de Portas e Fechaduras, Artesanato e Entalhes em Madeira",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/robust_s36680830_1.jpeg",
    "images": [
      "/images/products/robust_s36680830_1.jpeg",
      "/images/products/robust_s36680830_2.jpeg",
      "/images/products/robust_s36680830_3.jpeg",
      "/images/products/robust_s36680830_4.jpeg"
    ]
  },
  {
    "id": "gedore-007373",
    "name": "2400 A ARMÁRIO AÉREO MODULAR AZUL 750x250x470 mm",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mobiliário Oficina",
    "code": "2400 A",
    "technicalCode": "007373",
    "description": "Armário aéreo modular industrial GEDORE em chapa de aço reforçada com porta basculante equipada com pistão a gás e fechadura central com chave.",
    "detailedDescription": "O Armário Aéreo Modular Azul GEDORE 2400 A (Código 007.373) é parte integrante do renomado sistema de mobiliário modular industrial para oficinas, centros automotivos e indústrias. Fabricado em chapa de aço especial reforçada de alta durabilidade com construção soldada estável, dispõe de porta basculante preta com pistão pneumático a gás suave, puxador ergonômico embutido, fechadura central com duas cópias de chaves e capacidade de carga estática de 30 kg.",
    "technicalSpecs": {
      "codigoGedore": "007.373",
      "referencia": "2400 A",
      "capacidadeCarga": "30 kg distribuídos",
      "dimensoes": "750 x 250 x 470 mm",
      "pesoKg": "15,000 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Capacidade",
        "Peso"
      ],
      "rows": [
        [
          "007.373",
          "2400 A",
          "Armário aéreo Azul",
          "750 mm",
          "250 mm",
          "470 mm",
          "30 kg",
          "15,000 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.373",
      "Referência: 2400 A",
      "Quantidade: 1 peça",
      "Cores: Estrutura em Azul padrão GEDORE e porta basculante em Preto fosco",
      "Dimensões (C x L x A): 750 x 250 x 470 mm",
      "Capacidade de carga distribuída: 30 kg",
      "Segurança: Fechadura com cilindro central e 2 chaves inclusas",
      "Acessórios inclusos: 4 conjuntos de parafusos e buchas para fixação na parede",
      "Peso: 15,000 kg"
    ],
    "properties": [
      "Porta com pistão pneumático a gás que permanece aberta suavemente durante o manuseio das ferramentas",
      "Construção soldada em chapa de aço reforçada com pintura eletrostática a pó anticorrosiva",
      "Compatibilidade modular com bancadas, painéis perfurados e módulos gaveteiros GEDORE"
    ],
    "instructions": [
      "Fixe firmemente em parede de alvenaria nivelada utilizando as 4 buchas e parafusos de ancoragem inclusos.",
      "Respeite o limite máximo de 30 kg distribuídos uniformemente no interior do armário."
    ],
    "application": "Oficinas Mecânicas Industriais, Centros de Treinamento, Concessionárias e Garagens Premium",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007373_1.png",
    "images": [
      "/images/products/gedore_blue_007373_1.png",
      "/images/products/gedore_blue_007373_2.jpeg",
      "/images/products/gedore_blue_007373_3.png",
      "/images/products/gedore_blue_007373_4.png"
    ]
  },
  {
    "id": "gedore-007376",
    "name": "2445 A ARMÁRIO AÉREO MODULAR DE CANTO AZUL",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mobiliário Oficina",
    "code": "2445 A",
    "technicalCode": "007376",
    "description": "Armário aéreo de canto modular industrial GEDORE em chapa de aço soldada para fechamento perfeito em L de bancadas de trabalho.",
    "detailedDescription": "O Armário Aéreo de Canto GEDORE 2445 A (Código 007.376) é desenvolvido para otimizar 100% do espaço superior em cantos de paredes de oficinas e linhas industriais. Integra-se perfeitamente aos armários aéreos 2400 A formando layouts contínuos em formato de 'L', com porta basculante com pistão a gás, fechadura central com chave e estrutura reforçada com capacidade de carga de 30 kg.",
    "technicalSpecs": {
      "codigoGedore": "007.376",
      "referencia": "2445 A",
      "capacidadeCarga": "30 kg",
      "dimensoes": "1350 x 750 x 470 mm",
      "pesoKg": "31,000 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.376",
          "2445 A",
          "Armário aéreo de canto Azul",
          "1350 mm",
          "750 mm",
          "470 mm",
          "31,000 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.376",
      "Referência: 2445 A",
      "Quantidade: 1 peça",
      "Estrutura: Chapa de aço de alta espessura com acabamento Azul GEDORE e porta preta",
      "Dimensões: 1350 x 750 x 470 mm",
      "Capacidade de carga: 30 kg distribuídos",
      "Fechadura: Central com 2 chaves",
      "Peso: 31,000 kg"
    ],
    "properties": [
      "Aproveitamento inteligente de vértices e cantos de paredes sem pontos cegos",
      "Abertura suave basculante assistida por pistão pneumático",
      "Pintura eletrostática a pó de altíssima resistência química a óleos e combustíveis"
    ],
    "instructions": [
      "Realize a fixação em conjunto com os módulos adjacentes para garantir perfeito alinhamento estético.",
      "Mantenha a fechadura trancada ao final do expediente para segurança do ferramental."
    ],
    "application": "Mobiliário Modular Industrial, Oficinas de Concessionárias e Centros Técnicos Automotivos",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007376_1.png",
    "images": [
      "/images/products/gedore_blue_007376_1.png",
      "/images/products/gedore_blue_007376_2.png",
      "/images/products/gedore_blue_007376_3.png",
      "/images/products/gedore_blue_007376_4.png"
    ]
  },
  {
    "id": "gedore-007385",
    "name": "4600 A MÓDULO GAVETEIRO INDUSTRIAL AZUL COM 6 GAVETAS",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mobiliário Oficina",
    "code": "4600 A",
    "technicalCode": "007385",
    "description": "Módulo gaveteiro para bancada de trabalho industrial GEDORE com 6 gavetas com corrediças telescópicas de esferas e fechamento central com chave.",
    "detailedDescription": "O Módulo com 6 Gavetas GEDORE 4600 A (Código 007.385) serve como suporte estrutural de bancadas ou módulo independente para estocagem pesada de ferramentas industriais. Projetado com 6 gavetas de alturas escalonadas montadas sobre trilhos telescópicos de precisão que abrem 100%, estrutura soldada reforçada e fechamento centralizado com chave.",
    "technicalSpecs": {
      "codigoGedore": "007.385",
      "referencia": "4600 A",
      "gavetas": "6 gavetas com corrediças telescópicas",
      "dimensoes": "705 x 600 x 870 mm",
      "pesoKg": "63,600 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.385",
          "4600 A",
          "Módulo Azul com 6 gavetas",
          "705 mm",
          "600 mm",
          "870 mm",
          "63,600 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.385",
      "Referência: 4600 A",
      "Quantidade: 1 peça",
      "Gavetas: 6 gavetas com trilhos telescópicos de rolamentos de esferas de aço",
      "Dimensões externas: 705 x 600 x 870 mm (comprimento x largura x altura)",
      "Capacidade de carga por gaveta: 30 kg distribuídos",
      "Estrutura: Chapa de aço carbono de 0,90 mm a 1,20 mm soldada",
      "Peso: 63,600 kg"
    ],
    "properties": [
      "Abertura total da gaveta facilitando a visualização e retirada de berços e caixas de soquetes",
      "Fechadura central que tranca simultaneamente as 6 gavetas com uma única chave",
      "Suporta tampos de madeira maciça ou chapa de aço para composição de bancadas lineares"
    ],
    "instructions": [
      "Abra apenas uma gaveta carregada por vez para manter o centro de gravidade estável.",
      "Lubrifique as corrediças telescópicas anualmente com spray protetivo neutro."
    ],
    "application": "Bancadas Industriais, Oficinas Mecânicas de Alta Precisão, Salas de Metrologia e Ferramentaria",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007385_1.png",
    "images": [
      "/images/products/gedore_blue_007385_1.png",
      "/images/products/gedore_blue_007385_2.png",
      "/images/products/gedore_blue_007385_3.png",
      "/images/products/gedore_blue_007385_4.png"
    ]
  },
  {
    "id": "gedore-007379",
    "name": "4045 A ARMÁRIO INFERIOR DE CANTO AZUL PARA BANCADA",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mobiliário Oficina",
    "code": "4045 A",
    "technicalCode": "007379",
    "description": "Armário inferior de canto modular GEDORE para bancada com ampla porta, prateleira interna reforçada e fechadura com chave.",
    "detailedDescription": "O Armário Inferior de Canto GEDORE 4045 A (Código 007.379) compõe a base inferior em ângulo para bancadas industriais modulares. Oferece enorme volume interno para armazenamento de ferramentas elétricas volumosas, compressores, galões e caixas pesadas, com prateleira interna ajustável e porta com chave.",
    "technicalSpecs": {
      "codigoGedore": "007.379",
      "referencia": "4045 A",
      "dimensoes": "1310 x 755 x 870 mm",
      "pesoKg": "45,400 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.379",
          "4045 A",
          "Armário inferior de canto Azul",
          "1310 mm",
          "755 mm",
          "870 mm",
          "45,400 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.379",
      "Referência: 4045 A",
      "Quantidade: 1 peça",
      "Dimensões: 1310 x 755 x 870 mm",
      "Acabamento: Estrutura em Azul GEDORE com portas pretas em pintura eletrostática",
      "Prateleira: 1 prateleira interna reforçada",
      "Fechamento: Fechadura com cilindro central e chaves",
      "Peso: 45,400 kg"
    ],
    "properties": [
      "Resolve o canto morto da oficina transformando-o em ampla área útil de guarda",
      "Construção com pés ajustáveis para perfeito nivelamento com bancadas contíguas",
      "Chapa de aço com dobras de rigidez que sustentam cargas pesadas de estocagem"
    ],
    "instructions": [
      "Ajuste os sapatilhos reguláveis antes de fixar o tampo de madeira superior.",
      "Respeite a capacidade de carga estática distribuída sobre a prateleira."
    ],
    "application": "Mobiliário Modular de Alto Padrão, Indústrias Mecânicas e Concessionárias",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007379_1.png",
    "images": [
      "/images/products/gedore_blue_007379_1.png",
      "/images/products/gedore_blue_007379_2.png",
      "/images/products/gedore_blue_007379_3.png",
      "/images/products/gedore_blue_007379_4.jpeg"
    ]
  },
  {
    "id": "gedore-007382",
    "name": "4010 A SUPORTE AZUL (PÉ ESTRUTURAL PARA BANCADA)",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Mobiliário Oficina",
    "code": "4010 A",
    "technicalCode": "007382",
    "description": "Suporte lateral e pé de apoio estrutural em chapa de aço reforçada para montagem de bancadas modulares GEDORE.",
    "detailedDescription": "O Suporte / Pé para Bancada GEDORE 4010 A (Código 007.382) é o elemento de sustentação estrutural para a montagem de bancadas de trabalho modulares. Em conjunto com tampos de madeira (como a Ref. 3150) e gaveteiros, proporciona rigidez absoluta para trabalhos pesados de corte, morsa e conformação mecânica.",
    "technicalSpecs": {
      "codigoGedore": "007.382",
      "referencia": "4010 A",
      "dimensoes": "155 x 870 x 630 mm",
      "pesoKg": "8,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.382",
          "4010 A",
          "Suporte Azul (pé para bancada)",
          "155 mm",
          "630 mm",
          "870 mm",
          "8,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.382",
      "Referência: 4010 A",
      "Quantidade: 1 peça",
      "Dimensões: 155 x 630 x 870 mm",
      "Material: Chapa de aço estrutural soldada de alta resistência",
      "Acabamento: Pintura eletrostática a pó na cor Azul GEDORE",
      "Peso: 8,500 kg"
    ],
    "properties": [
      "Perfuração pré-moldada para fixação rápida do tampo superior e travessas inferiores",
      "Sapata reforçada que distribui a carga estática sem marcar o piso da oficina",
      "Tratamento superficial antiferrugem duradouro"
    ],
    "instructions": [
      "Parafuse firmemente ao tampo de madeira na posição de borda especificada no projeto da bancada.",
      "Verifique o prumo e o nível do piso durante a montagem."
    ],
    "application": "Montagem de Bancadas Industriais, Mesas de Trabalho Pesado e Áreas de Ajustagem Mecânica",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007382_1.png",
    "images": [
      "/images/products/gedore_blue_007382_1.png",
      "/images/products/gedore_blue_007382_2.png",
      "/images/products/gedore_blue_007382_3.png",
      "/images/products/gedore_blue_007382_4.png"
    ]
  },
  {
    "id": "gedore-007388",
    "name": "3750 A CHAPA PERFURADA AZUL 750x540x30 mm",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Painéis & Bancadas",
    "code": "3750 A",
    "technicalCode": "007388",
    "description": "Painel de chapa perfurada industrial GEDORE com furação quadrada padronizada para fixação de ganchos e organização vertical de ferramentas.",
    "detailedDescription": "A Chapa Perfurada Azul GEDORE 3750 A (Código 007.388) é o painel de ferramentas essencial para organização visual (metodologia 5S) sobre bancadas industriais. Confeccionada em chapa de aço com furações quadradas padronizadas GEDORE para suporte de ganchos rápidos, permite que todas as chaves e soquetes fiquem visíveis e ao alcance imediato das mãos do mecânico.",
    "technicalSpecs": {
      "codigoGedore": "007.388",
      "referencia": "3750 A",
      "dimensoes": "750 x 30 x 540 mm",
      "pesoKg": "4,300 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.388",
          "3750 A",
          "Chapa perfurada azul",
          "750 mm",
          "30 mm",
          "540 mm",
          "4,300 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.388",
      "Referência: 3750 A",
      "Quantidade: 1 peça",
      "Dimensões: 750 x 30 x 540 mm",
      "Furação: Quadrada padronizada para ganchos e suportes GEDORE",
      "Acabamento: Azul clássico GEDORE em pintura a pó",
      "Peso: 4,300 kg"
    ],
    "properties": [
      "Dobra perimetral rígida que afasta a chapa da parede facilitando o encaixe e remoção dos ganchos",
      "Superfície plana de alta resistência que não deforma sob o peso de chaves pesadas",
      "Encaixe modular perfeito abaixo dos armários aéreos 2400 A"
    ],
    "instructions": [
      "Parafuse na parede ou nas colunas verticais da bancada com buchas adequadas.",
      "Distribua os ganchos conforme a rotina operacional da oficina."
    ],
    "application": "Organização de Ferramentas, Gestão Visual 5S, Concessionárias, Linhas de Montagem e Oficinas",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007388_1.png",
    "images": [
      "/images/products/gedore_blue_007388_1.png",
      "/images/products/gedore_blue_007388_2.png",
      "/images/products/gedore_blue_007388_3.png",
      "/images/products/gedore_blue_007388_4.png"
    ]
  },
  {
    "id": "gedore-007389",
    "name": "3450 A CHAPA PERFURADA DE CANTO AZUL",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Painéis & Bancadas",
    "code": "3450 A",
    "technicalCode": "007389",
    "description": "Painel de chapa perfurada de canto angular GEDORE para fechamento contínuo em bancadas modulares de canto.",
    "detailedDescription": "A Chapa Perfurada de Canto GEDORE 3450 A (Código 007.389) proporciona acabamento e aproveitamento perfeito do vértice de parede quando a bancada é montada em formato de 'L'. Possui as mesmas furações padronizadas da chapa 3750 A, garantindo estética impecável e suporte contínuo para ganchos.",
    "technicalSpecs": {
      "codigoGedore": "007.389",
      "referencia": "3450 A",
      "dimensoes": "290 x 50 x 520 mm",
      "pesoKg": "1,550 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Altura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.389",
          "3450 A",
          "Chapa perfurada de canto Azul",
          "290 mm",
          "50 mm",
          "520 mm",
          "1,550 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.389",
      "Referência: 3450 A",
      "Quantidade: 1 peça",
      "Dimensões: 290 x 50 x 520 mm",
      "Acabamento: Pintura eletrostática Azul GEDORE",
      "Furação: Padronizada para ganchos GEDORE",
      "Peso: 1,550 kg"
    ],
    "properties": [
      "Geometria angular projetada para encaixe suave entre os módulos laterais",
      "Aproveita o canto da parede para pendurar alicates, chaves de vela e acessórios leves",
      "Fácil higienização e alta durabilidade mecânica"
    ],
    "instructions": [
      "Instale nivelada com os painéis 3750 A para criar uma linha contínua de ferramentas.",
      "Não sobrecarregue com ferramentas excessivamente pesadas além da capacidade dos ganchos."
    ],
    "application": "Bancadas de Canto Modulares, Oficinas de Concessionárias e Centros Técnicos",
    "featured": false,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007389_1.jpeg",
    "images": [
      "/images/products/gedore_blue_007389_1.jpeg",
      "/images/products/gedore_blue_007389_2.jpeg",
      "/images/products/gedore_blue_007389_3.jpeg",
      "/images/products/gedore_blue_007389_4.png"
    ]
  },
  {
    "id": "gedore-007341",
    "name": "3150 TAMPO MODULAR DE MADEIRA MACIÇA 1500x700x30 mm",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Tampos & Bancadas",
    "code": "3150",
    "technicalCode": "007341",
    "description": "Tampo modular de madeira maciça tratada GEDORE de 1500 x 700 x 30 mm para bancadas industriais de trabalho pesado.",
    "detailedDescription": "O Tampo Modular de Madeira GEDORE 3150 (Código 007.341) é o tampo de alta resistência indicado para absorver impactos mecânicos, martelamento, montagem de morsas e trabalho com peças pesadas. Confeccionado em lâminas de madeira de alta densidade coladas sob alta pressão com 30 mm de espessura e acabamento impermeabilizado com verniz especial que resiste a óleos e graxas.",
    "technicalSpecs": {
      "codigoGedore": "007.341",
      "referencia": "3150",
      "dimensoes": "1500 x 700 x 30 mm",
      "pesoKg": "20,600 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Comprimento (mm)",
        "Largura (mm)",
        "Espessura (mm)",
        "Peso"
      ],
      "rows": [
        [
          "007.341",
          "3150",
          "Tampo em madeira maciça",
          "1500 mm",
          "700 mm",
          "30 mm",
          "20,600 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.341",
      "Referência: 3150",
      "Quantidade: 1 peça",
      "Dimensões: 1500 mm de comprimento x 700 mm de profundidade x 30 mm de espessura",
      "Material: Madeira maciça de alta densidade selecionada e tratada",
      "Tratamento superficial: Verniz impermeabilizante resistente a produtos químicos leves",
      "Peso: 20,600 kg"
    ],
    "properties": [
      "Absorve vibrações e impactos diretos protegendo componentes usinados delicados",
      "Espessura robusta de 30 mm que aceita furação e fixação de tornos de bancada (morsas)",
      "Acabamento selado que não absorve óleos lubrificantes de forma imediata"
    ],
    "instructions": [
      "Fixe sobre os pés estruturais 4010 A ou gaveteiros 4600 A com parafusos de madeira apropriados.",
      "Limpe com pano seco ou umedecido com água e sabão neutro; evite solventes clorados abrasivos."
    ],
    "application": "Bancadas Industriais de Ajustagem, Montagem de Motores, Ferramentarias e Oficinas Automotivas",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007341_1.png",
    "images": [
      "/images/products/gedore_blue_007341_1.png",
      "/images/products/gedore_blue_007341_2.png",
      "/images/products/gedore_blue_007341_3.png",
      "/images/products/gedore_blue_007341_4.png"
    ]
  },
  {
    "id": "gedore-001155",
    "name": "L 900 12 LANTERNA MAGNÉTICA LED RECARREGÁVEL 12W SLIM",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Iluminação Profissional",
    "code": "L 900 12",
    "technicalCode": "001155",
    "description": "Lanterna automotiva e industrial ultrafina LED recarregável 12W GEDORE com base magnética articulada de 360°, dimmer rotativo e gancho de suspensão.",
    "detailedDescription": "A Lanterna Magnética LED Recarregável 12W GEDORE L 900 12 (Código 001.155) é a referência absoluta em iluminação para mecânicos automotivos e inspetores industriais. Possui perfil 'slim' ultrafino com lâmpada COB LED de 12 Watts de alta intensidade luminosa (ajustável por dimmer giratório), bateria recarregável de íons de lítio via USB, base com potente ímã articulado em 360° e gancho superior para fixação no capô ou sob o elevador.",
    "technicalSpecs": {
      "codigoGedore": "001.155",
      "referencia": "L 900 12",
      "potencia": "12 W LED COB",
      "dimensoes": "510 x 43 x 43 mm",
      "pesoKg": "0,500 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Potência",
        "Articulação",
        "Dimensões (mm)",
        "Peso"
      ],
      "rows": [
        [
          "001.155",
          "L 900 12",
          "12 W (LED regulável)",
          "Base magnética 360°",
          "510 x 43 x 43 mm",
          "0,500 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 001.155",
      "Referência: L 900 12",
      "Quantidade: 1 peça",
      "Potência: 12 Watts com tecnologia LED COB de alta durabilidade",
      "Controle: Dimmer rotativo para ajuste fino de fluxo luminoso (de suave a ultrabrilhante)",
      "Fixação: Base magnética com articulação esférica de 360° e gancho giratório escamoteável",
      "Bateria: Íons de lítio recarregável via cabo USB (incluso)",
      "Dimensões: 510 mm de comprimento x 43 mm x 43 mm",
      "Peso: 0,500 kg"
    ],
    "properties": [
      "Corpo esguio de apenas alguns milímetros de espessura que penetra em frestas profundas do motor",
      "Ímã poderoso na base que fixa firmemente em qualquer longarina ou lataria sem cair",
      "Luz branca uniforme e brilhante que não cansa a visão do mecânico durante horas de serviço"
    ],
    "instructions": [
      "Recarregue completamente a bateria antes do primeiro uso com o cabo USB fornecido.",
      "Não aponte a luz diretamente para os olhos."
    ],
    "application": "Inspeção Automotiva, Manutenção de Câmbio e Suspensão, Linhas de Produção e Socorro Noturno",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_001155_1.jpg",
    "images": [
      "/images/products/gedore_blue_001155_1.jpg",
      "/images/products/gedore_blue_001155_2.jpg",
      "/images/products/gedore_blue_001155_3.jpg",
      "/images/products/gedore_blue_001155_4.jpg"
    ]
  },
  {
    "id": "gedore-007402",
    "name": "1584-7P GI CARRO PARA FERRAMENTAS VEÍCULOS HÍBRIDOS E ELÉTRICOS 69 Peças VDE",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros VDE & Elétricos",
    "code": "1584-7P GI",
    "technicalCode": "007402",
    "description": "Carro para ferramentas GEDORE de 7 gavetas equipado com jogo profissional de 69 peças isoladas 1000V (VDE / NR-10) para manutenção em veículos híbridos e elétricos.",
    "detailedDescription": "O Carro com Ferramentas para Veículos Híbridos e Elétricos GEDORE 1584-7P GI (Código 007.402) é a solução topo de linha da engenharia alemã para a nova era da mobilidade elétrica. Composto por um carro de ferramentas reforçado de 7 gavetas com berços em EVA personalizados e um sortimento de 69 ferramentas rigorosamente isoladas até 1000 Volts (em total conformidade com a norma internacional EN/IEC 60900 e NR-10): chaves fixas, estrela, soquetes isolados, alicates VDE, catracas e equipamentos de proteção.",
    "composition": [
      "Carro para ferramentas estrutural de 7 gavetas com capacidade estática para 300 kg",
      "69 Ferramentas isoladas 1000V certificadas EN 60900 / NR-10 distribuídas em berços de EVA de alta densidade bicolores",
      "Soquetes e catracas isoladas 1000V, extensões e cabos T",
      "Chaves fixas e chaves estrela isoladas de alta segurança",
      "Alicates universais, de bico e corte VDE 1000V",
      "Acessórios de sinalização e ferramentas específicas para desconexão de baterias de alta tensão"
    ],
    "technicalSpecs": {
      "codigoGedore": "007.402",
      "referencia": "1584-7P GI",
      "pecas": "69 ferramentas isoladas VDE + Carro 7 gavetas",
      "normas": "EN 60900 / IEC 60900 / NR-10",
      "capacidadeCarga": "300 kg estáticos (20 kg por gaveta)",
      "pesoKg": "70,000 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Peças",
        "Isolação",
        "Capacidade Total",
        "Peso"
      ],
      "rows": [
        [
          "007.402",
          "1584-7P GI",
          "69 peças + Carro 7 gavetas",
          "1000V AC / 1500V DC (VDE EN 60900)",
          "300 kg estáticos",
          "70,000 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.402",
      "Referência: 1584-7P GI",
      "Quantidade: 69 ferramentas isoladas + Carro 7 gavetas",
      "Certificação: Testadas individualmente a 10.000V para trabalho seguro em até 1.000V AC e 1.500V DC conforme EN/IEC 60900",
      "Carro: 7 gavetas com corrediças telescópicas, trava individual e fechadura central",
      "Berços: EVA bicolor que evidencia instantaneamente a falta de qualquer ferramenta",
      "Peso total: 70,000 kg"
    ],
    "properties": [
      "Equipamento homologado pelas principais montadoras para manutenção em veículos elétricos e híbridos",
      "Protege a vida do técnico contra arcos elétricos e choques em barramentos de alta voltagem",
      "Rodas de alta resistência de 125 mm que deslizam suavemente com sistema de freio total"
    ],
    "instructions": [
      "Inspecione visualmente o isolamento das ferramentas antes de cada uso em circuitos de alta tensão.",
      "Utilize sempre os EPIs e EPCs adequados conforme a NR-10."
    ],
    "application": "Concessionárias de Veículos Elétricos e Híbridos, Oficinas Especializadas, Linhas de Trem, Metrô e Subestações de Energia",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007402_1.png",
    "images": [
      "/images/products/gedore_blue_007402_1.png",
      "/images/products/gedore_blue_007402_2.png",
      "/images/products/gedore_blue_007402_3.png",
      "/images/products/gedore_blue_007402_4.png"
    ]
  },
  {
    "id": "gedore-041008",
    "name": "921P REBITADOR INDUSTRIAL TIPO TESOURA / ALAVANCA 21\"",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "automotivo",
    "categoryLabel": "Fixação & Funilaria Pesada",
    "code": "921P",
    "technicalCode": "041008",
    "description": "Rebitador manual industrial pesado tipo tesoura 21\" GEDORE para rebites de repuxo de até 6,4 mm em aço inox e alumínio com reservatório de mandris.",
    "detailedDescription": "O Rebitador Industrial 21\" GEDORE 921P (Código 041.008) é a ferramenta de máxima potência para rebitagem manual pesada. Seu sistema de alavancas articuladas tipo tesoura multiplica enormemente a força aplicada, permitindo romper mandris de rebites grossos de até 6,4 mm (1/4\") em aço e aço inoxidável com mínimo esforço do operador. Possui reservatório plástico coletor de mandris descartados.",
    "technicalSpecs": {
      "codigoGedore": "041.008",
      "referencia": "921 P",
      "comprimento": "540 mm (21 pol)",
      "dimensoes": "540 x 45 x 180 mm",
      "pesoKg": "1,730 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Capacidade Máxima",
        "Dimensões (mm)",
        "Tipo Alavanca",
        "Peso"
      ],
      "rows": [
        [
          "041.008",
          "921 P",
          "Rebites até 6,4 mm (alumínio e inox)",
          "540 x 45 x 180 mm",
          "Tesoura mecânica de alta potência",
          "1,730 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 041.008",
      "Referência: 921 P",
      "Quantidade: 1 peça",
      "Comprimento: 540 mm (21 pol)",
      "Capacidade: Rebites de 3,2 mm, 4,0 mm, 4,8 mm e 6,4 mm (inclusive em aço inoxidável)",
      "Acessórios: 4 bicos de diferentes medidas, chave de ajuste e copo coletor de mandril",
      "Peso: 1,730 kg"
    ],
    "properties": [
      "Mecanismo de alavanca de longo braço que rompe rebites de aço inox sem fadiga muscular",
      "Recipiente coletor transparente que recolhe as hastes cortadas evitando acidentes no piso da fábrica",
      "Corpo em liga especial de alumínio forjado de alta leveza e tenacidade"
    ],
    "instructions": [
      "Escolha o bico adequado ao diâmetro do rebite e aperte com a chave fornecida.",
      "Esvazie periodicamente o copo coletor de mandris para evitar entupimento do canal de ejeção."
    ],
    "application": "Implementos Rodoviários, Fabricação de Ônibus, Caldeiraria, Indústria Náutica e Estruturas Metálicas",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_041008_1.jpg",
    "images": [
      "/images/products/gedore_blue_041008_1.jpg",
      "/images/products/gedore_blue_041008_2.jpg",
      "/images/products/gedore_blue_041008_3.png",
      "/images/products/gedore_blue_041008_4.png"
    ]
  },
  {
    "id": "gedore-001114",
    "name": "1560 A CARRO AZUL PARA FERRAMENTAS COM SUPORTE PARA MORSA",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros Industriais",
    "code": "1560 A",
    "technicalCode": "001114",
    "description": "Carro oficina aberto para ferramentas GEDORE com 3 bandejas reforçadas, suporte rebatível para torno de bancada (morsa) e capacidade estática de 300 kg.",
    "detailedDescription": "O Carro para Ferramentas GEDORE 1560 A (Código 001.114) é o consagrado carro de 3 prateleiras do Grupo GEDORE, equipado com um exclusivo suporte lateral reforçado desenvolvido especificamente para ancoragem de torno de bancada (morsa). Construído em chapa de aço estrutural soldada, oferece capacidade de carga estática de 300 kg e rodas de alto rendimento.",
    "technicalSpecs": {
      "codigoGedore": "001.114",
      "referencia": "1560 A",
      "capacidadeCarga": "300 kg estáticos",
      "pesoKg": "24,400 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Descrição",
        "Bandejas",
        "Capacidade de Carga",
        "Peso"
      ],
      "rows": [
        [
          "001.114",
          "1560 A",
          "Carro azul com suporte para morsa",
          "3 bandejas com bordas",
          "300 kg estáticos",
          "24,400 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 001.114",
      "Referência: 1560 A",
      "Quantidade: 1 peça",
      "Estrutura: 3 bandejas em chapa de aço especial com rebites de alta resistência",
      "Suporte: Base especial preparada para montagem de morsa de bancada",
      "Rodas: 4 rodas de 100 mm (2 fixas e 2 giratórias)",
      "Capacidade de carga estática: 300 kg distribuídos",
      "Peso: 24,400 kg"
    ],
    "properties": [
      "Permite levar uma mini estação de usinagem e ajustagem com morsa diretamente ao lado do veículo ou máquina",
      "Bandejas com bordas profundas que evitam a queda de peças e fluidos no chão",
      "Pintura padrão Azul GEDORE de longa durabilidade"
    ],
    "instructions": [
      "Monte a morsa firmemente no suporte lateral utilizando parafusos e porcas autobravantes.",
      "Distribua as ferramentas mais pesadas na bandeja inferior para abaixar o centro de gravidade."
    ],
    "application": "Oficinas Mecânicas Automotivas, Manutenção em Pátio, Ferramentaria e Indústrias",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_001114_1.jpeg",
    "images": [
      "/images/products/gedore_blue_001114_1.jpeg",
      "/images/products/gedore_blue_001114_2.jpeg",
      "/images/products/gedore_blue_001114_3.jpeg",
      "/images/products/gedore_blue_001114_4.jpeg"
    ]
  },
  {
    "id": "gedore-007258",
    "name": "1585-8P CARRO PARA FERRAMENTAS COM 8 GAVETAS PRETO/AZUL",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros Industriais",
    "code": "1585-8P",
    "technicalCode": "007258",
    "description": "Carro fechado para ferramentas industrial GEDORE com 8 gavetas telescópicas (7 pequenas e 1 grande), topo de polímero com porta-objetos e capacidade para 300 kg.",
    "detailedDescription": "O Carro para Ferramentas GEDORE 1585-8P (Código 007.258) oferece altíssima capacidade de compartimentação com 8 gavetas montadas sobre guias telescópicas com esferas. Seu tampo superior de trabalho em ABS moldado de alta resistência conta com divisórias para parafusos e soquetes, rodízios de alta performance com freio e sistema de travamento central com chave cilíndrica escamoteável.",
    "technicalSpecs": {
      "codigoGedore": "007.258",
      "referencia": "1585 - 8 P",
      "gavetas": "8 gavetas (7 pequenas e 1 grande)",
      "capacidadeCarga": "300 kg estáticos (20 kg por gaveta)",
      "pesoKg": "70,000 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Gavetas",
        "Composição Gavetas",
        "Capacidade",
        "Peso"
      ],
      "rows": [
        [
          "007.258",
          "1585 - 8 P",
          "8 gavetas",
          "7 gavetas pequenas (75mm) + 1 grande (153mm)",
          "300 kg estáticos",
          "70,000 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 007.258",
      "Referência: 1585-8P",
      "Quantidade: 1 peça",
      "Gavetas: 7 pequenas (615 x 345 x 75 mm) e 1 grande (615 x 345 x 153 mm)",
      "Guias: Corrediças telescópicas de rolamentos de esferas de aço",
      "Capacidade: 20 kg por gaveta / 300 kg estáticos totais",
      "Rodas: 4 rodízios de 125 mm de baixo atrito (2 giratórios com freio)",
      "Peso: 70,000 kg"
    ],
    "properties": [
      "8 gavetas que acomodam os mais variados berços de ferramentas organizados por tipo",
      "Tampo em termoplástico que resiste a óleos e serve como bancada de apoio imediato",
      "Puxador lateral integrado na estrutura que proporciona manobrabilidade precisa"
    ],
    "instructions": [
      "Abra apenas uma gaveta por vez quando o carro estiver carregado para evitar risco de tombamento.",
      "Mantenha sempre travado durante o transporte entre setores."
    ],
    "application": "Oficinas Mecânicas de Concessionárias, Aviação, Centros de Manutenção Industrial e Autocenters",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_007258_1.jpg",
    "images": [
      "/images/products/gedore_blue_007258_1.jpg",
      "/images/products/gedore_blue_007258_2.jpg",
      "/images/products/gedore_blue_007258_3.jpg",
      "/images/products/gedore_blue_007258_4.jpg"
    ]
  },
  {
    "id": "gedore-001566",
    "name": "1586-6A CARRO PARA FERRAMENTAS COM 6 GAVETAS E PORTA LATERAL",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros Industriais",
    "code": "1586-6A",
    "technicalCode": "001566",
    "description": "Carro para ferramentas industrial GEDORE com 6 gavetas telescópicas e armário com porta lateral com chave para itens compridos e volumosos.",
    "detailedDescription": "O Carro para Ferramentas GEDORE 1586-6A (Código 001.566) une a conveniência de 6 gavetas telescópicas à versatilidade de um compartimento vertical com porta trancável com chave. Ideal para armazenar torquímetros longos, chaves de cano, ferramentas pneumáticas, sprays e itens que não cabem em gavetas convencionais.",
    "technicalSpecs": {
      "codigoGedore": "001.566",
      "referencia": "1586 - 6 A",
      "gavetas": "6 gavetas + 1 compartimento vertical com porta",
      "capacidadeCarga": "300 kg estáticos",
      "pesoKg": "67,200 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Gavetas",
        "Compartimentos",
        "Capacidade",
        "Peso"
      ],
      "rows": [
        [
          "001.566",
          "1586 - 6 A",
          "6 gavetas",
          "6 gavetas telescópicas + 1 armário lateral com porta",
          "300 kg estáticos",
          "67,200 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 001.566",
      "Referência: 1586-6A",
      "Quantidade: 1 peça",
      "Gavetas: 3 pequenas (461 x 345 x 75 mm) e 3 grandes (461 x 345 x 153 mm)",
      "Porta lateral: Compartimento vertical com fechadura independente para itens altos",
      "Tampo superior: Emborrachado antiderrapante com bordas de contenção",
      "Rodas: 4 rodas reforçadas (2 fixas e 2 giratórias com freio)",
      "Peso: 67,200 kg"
    ],
    "properties": [
      "Porta lateral exclusiva para guardar torquímetros, estojos longos e produtos químicos em pé",
      "Construção soldada robusta em chapa de aço especial na clássica cor Azul GEDORE",
      "Chaves independentes para gavetas e armário lateral"
    ],
    "instructions": [
      "Certifique-se de que a porta lateral esteja travada durante o deslocamento do carro.",
      "Não sobrecarregue gavetas individuais acima do limite de 20 kg."
    ],
    "application": "Oficinas Mecânicas de Precisão, Ferramentaria, Indústrias Metalúrgicas e Manutenção Predial",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_001566_1.jpg",
    "images": [
      "/images/products/gedore_blue_001566_1.jpg",
      "/images/products/gedore_blue_001566_2.jpg",
      "/images/products/gedore_blue_001566_3.jpg",
      "/images/products/gedore_blue_001566_4.jpg"
    ]
  },
  {
    "id": "gedore-001099",
    "name": "1335E CAIXA METÁLICA TIPO SANFONA COM 5 GAVETAS E 2 ALÇAS",
    "brand": "gedore-blue",
    "brandLabel": "Gedore Industrial",
    "itemType": "peca",
    "itemTypeLabel": "Peça",
    "category": "maletas-carrinhos",
    "categoryLabel": "Caixas Sanfona",
    "code": "1335E",
    "technicalCode": "001099",
    "description": "Caixa para ferramentas em chapa de aço esmaltada tipo sanfona GEDORE com 5 gavetas desdobráveis, 2 alças articuladas e orifício para cadeado.",
    "detailedDescription": "A Caixa Sanfona GEDORE 1335E (Código 001.099) é a ferramenta de transporte portátil mais famosa e durável da história das oficinas brasileiras. Construída em chapa de aço reforçada de 0,60 mm com pintura azul clássica e tratamento anticorrosivo, abre-se em sanfona revelando 5 compartimentos simultaneamente com acesso imediato a todas as ferramentas.",
    "technicalSpecs": {
      "codigoGedore": "001.099",
      "referencia": "1335 E",
      "gavetas": "5 compartimentos desdobráveis",
      "capacidadeCarga": "25 kg distribuídos",
      "pesoKg": "4,154 kg"
    },
    "tableData": {
      "headers": [
        "Código",
        "Referência",
        "Gavetas",
        "Capacidade de Carga",
        "Material",
        "Peso"
      ],
      "rows": [
        [
          "001.099",
          "1335 E",
          "5 gavetas (sanfona)",
          "25 kg distribuídos",
          "Chapa de aço esmaltada azul",
          "4,154 kg"
        ]
      ]
    },
    "specs": [
      "Código GEDORE: 001.099",
      "Referência: 1335E",
      "Quantidade: 1 peça",
      "Compartimentos: 1 gaveta inferior grande e 4 gavetas superiores desdobráveis",
      "Alças: 2 alças tubulares articuladas que facilitam o transporte equilibrado",
      "Segurança: Olhal reforçado integrado na tampa para fechamento com cadeado",
      "Acabamento: Pintura eletrostática na clássica cor Azul GEDORE",
      "Peso: 4,154 kg"
    ],
    "properties": [
      "Abertura total tipo sanfona que permite visualizar e pegar qualquer ferramenta sem precisar esvaziar os níveis",
      "Duas alças que ao se encontrarem fecham a caixa naturalmente evitando abertura acidental",
      "Resistência lendária à deformação e amassados no transporte em caçambas de veículos"
    ],
    "instructions": [
      "Utilize um cadeado no olhal central se for transportar em locais públicos ou canteiros de obras.",
      "Mantenha as articulações dos braços pantográficos lubrificadas com óleo fino."
    ],
    "application": "Manutenção Volante, Mecânicos, Eletricistas, Encanadores e Uso Profissional Contínuo",
    "featured": true,
    "priceFormatted": "Consulte Valor",
    "image": "/images/products/gedore_blue_001099_1.png",
    "images": [
      "/images/products/gedore_blue_001099_1.png",
      "/images/products/gedore_blue_001099_2.png",
      "/images/products/gedore_blue_001099_3.png",
      "/images/products/gedore_blue_001099_4.png"
    ]
  }
];
