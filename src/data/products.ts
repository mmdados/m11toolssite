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
  { id: 'all', label: 'Todas as Categorias', count: 36 },
  { id: 'jogos-ferramentas', label: 'Jogos de Ferramentas & Soquetes', count: 3 },
  { id: 'soquetes-chaves', label: 'Chaves de Aperto, Estrela & Tubos', count: 21 },
  { id: 'maletas-carrinhos', label: 'Carros, Bancadas & Mochilas', count: 9 },
  { id: 'automotivo', label: 'Linha Automotiva & Oficina', count: 3 },
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
    "name": "R21560101 CARRO PARA FERRAMENTAS GEDORE RED ESSENCIAL COM FERRAMENTAS 101 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21560101",
    "technicalCode": "3301669",
    "description": "Carro para ferramentas com 6 gavetas equipado com 101 peças essenciais: chaves combinadas, chaves biela, alicates e soquetes.",
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
    "name": "R21562101 CARRO PARA FERRAMENTAS GEDORE RED ESSENCIAL BLACK EDITION COM FERRAMENTAS 101 Peças",
    "brand": "gedore-red",
    "brandLabel": "Gedore Red",
    "itemType": "jogo",
    "itemTypeLabel": "Jogo",
    "category": "maletas-carrinhos",
    "categoryLabel": "Carros e Bancadas",
    "code": "R21562101",
    "technicalCode": "3301671",
    "description": "Edição Black Edition do carro Essencial 6 gavetas completo com 101 ferramentas essenciais para a oficina mecânica.",
    "detailedDescription": "O Carro para Ferramentas GEDORE red Essencial Black Edition com Ferramentas R21562101 (Código 3301671) traz o acabamento preto acetinado exclusivo com o consagrado kit de ferramentas Essencial. São 101 peças de alto giro para o dia a dia: chaves combinadas, chaves biela, soquetes, alicates para anéis, fendas, phillips e martelo bola, organizados em um carro de 6 gavetas com capacidade estática para 300 kg.",
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
    "image": "/images/products/r09115016-1.jpeg",
    "images": [
      "/images/products/r09115016-1.jpeg"
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
    "image": "/images/products/r07105005-1.jpeg",
    "images": [
      "/images/products/r07105005-1.jpeg"
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
    "image": "/images/products/r09105015-1.jpeg",
    "images": [
      "/images/products/r09105015-1.jpeg",
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
    "image": "/images/products/r09105024-1.jpeg",
    "images": [
      "/images/products/r09105024-1.jpeg",
      "/images/products/r09105024-2.jpeg"
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
    "image": "/images/products/r01185008-1.jpeg",
    "images": [
      "/images/products/r01185008-1.jpeg",
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
    "image": "/images/products/r01185012-1.jpeg",
    "images": [
      "/images/products/r01185012-1.jpeg",
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
    "image": "/images/products/r01195008-1.jpeg",
    "images": [
      "/images/products/r01195008-1.jpeg",
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
    "image": "/images/products/r05125008-1.jpeg",
    "images": [
      "/images/products/r05125008-1.jpeg",
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
    "image": "/images/products/r05125012-1.jpeg",
    "images": [
      "/images/products/r05125012-1.jpeg",
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
];
