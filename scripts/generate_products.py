import json, os

with open('/Users/lucasribeirocoelho/.gemini/antigravity-ide/brain/626b1334-c1a5-4013-afd3-03feb09c92a5/scratch/scraped_products_with_images.json') as f:
    scraped = json.load(f)

# Map by ref
items_map = {p['ref']: p for p in scraped}

products = [
  # 1. R46023100
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
      "headers": ["Código", "Referência", "Comprimento maleta", "Largura maleta", "Altura maleta", "Peças", "Peso"],
      "rows": [["3300246", "R46023100", "525 mm", "380 mm", "110 mm", "100", "11 kg"]]
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
    "featured": True,
    "application": "Automotivo, Oficinas Mecânicas, Linha Pesada e Manutenção Geral",
    "priceFormatted": "Consulte Valor"
  },

  # 2. R45603172
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
    "composition": items_map['R45603172']['composition'],
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
      "headers": items_map['R45603172']['table_headers'],
      "rows": items_map['R45603172']['table_rows']
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
    "image": items_map['R45603172']['local_images'][0],
    "images": items_map['R45603172']['local_images'],
    "featured": True,
    "application": "Oficinas Mecânicas, Centros Automotivos, Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },

  # 3. R49003016
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
    "composition": items_map['R49003016']['composition'],
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
      "headers": items_map['R49003016']['table_headers'],
      "rows": items_map['R49003016']['table_rows']
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
    "image": items_map['R49003016']['local_images'][0],
    "images": items_map['R49003016']['local_images'],
    "featured": False,
    "application": "Manutenção Leve, Elétrica Automotiva, Motocicletas, Montagens",
    "priceFormatted": "Consulte Valor"
  },

  # 4. R19352000
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
    "composition": items_map['R19352000']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301876",
      "referencia": "R19352000",
      "larguraMaleta": "475 mm",
      "comprimentoMaleta": "1020 mm",
      "alturaMaleta": "120 mm",
      "pesoKg": "4,6 kg"
    },
    "tableData": {
      "headers": items_map['R19352000']['table_headers'],
      "rows": items_map['R19352000']['table_rows']
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
    "image": items_map['R19352000']['local_images'][0],
    "images": items_map['R19352000']['local_images'],
    "featured": True,
    "application": "Oficinas Mecânicas, Centros de Troca de Óleo, Concessionárias, Garagens",
    "priceFormatted": "Consulte Valor"
  },

  # 5. R19352002
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
    "composition": items_map['R19352002']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301878",
      "referencia": "R19352002",
      "alturaMaleta": "46,5 cm",
      "pesoKg": "4,5 kg"
    },
    "tableData": {
      "headers": items_map['R19352002']['table_headers'],
      "rows": items_map['R19352002']['table_rows']
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
    "image": items_map['R19352002']['local_images'][0],
    "images": items_map['R19352002']['local_images'],
    "featured": False,
    "application": "Oficinas Mecânicas, Borracharias, Detalhamento Estético (Detailing), Indústrias",
    "priceFormatted": "Consulte Valor"
  },

  # 6. R20662000
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
    "composition": items_map['R20662000']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301969",
      "referencia": "R20662000",
      "dimensoes": "36 x 18 x 47 cm",
      "capacidade": "30 L / 20 kg",
      "pesoKg": "1,93 kg"
    },
    "tableData": {
      "headers": items_map['R20662000']['table_headers'],
      "rows": items_map['R20662000']['table_rows']
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
    "image": items_map['R20662000']['local_images'][0],
    "images": items_map['R20662000']['local_images'],
    "featured": True,
    "application": "Técnicos de Manutenção Externa, Eletricistas, Instaladores de Climatização, Mecânicos de Campo",
    "priceFormatted": "Consulte Valor"
  },

  # 7. R19101006
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
      "headers": items_map['R19101006']['table_headers'],
      "rows": items_map['R19101006']['table_rows']
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
    "image": items_map['R19101006']['local_images'][0],
    "images": items_map['R19101006']['local_images'],
    "featured": False,
    "application": "Instaladores de Som e Acessórios, Tapeçaria Automotiva, Funilaria e Pintura, Manutenção Geral",
    "priceFormatted": "Consulte Valor"
  },

  # 8. R20150005
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
    "composition": items_map['R20150005']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301653",
      "referencia": "R20150005",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": items_map['R20150005']['table_headers'],
      "rows": items_map['R20150005']['table_rows']
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
    "image": items_map['R20150005']['local_images'][0],
    "images": items_map['R20150005']['local_images'],
    "featured": True,
    "application": "Oficinas Mecânicas de Alta Performance, Concessionárias, Linhas de Montagem, Manutenção Industrial",
    "priceFormatted": "Consulte Valor"
  },

  # 9. R21560241
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
      "headers": items_map['R21560241']['table_headers'],
      "rows": items_map['R21560241']['table_rows']
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
    "image": items_map['R21560241']['local_images'][0],
    "images": items_map['R21560241']['local_images'],
    "featured": True,
    "application": "Oficinas Mecânicas Premium, Concessionárias Automotivas, Centros de Manutenção Pesada, Aviação Leve",
    "priceFormatted": "Consulte Valor"
  },

  # 10. R20152005
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
    "composition": items_map['R20152005']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301648",
      "referencia": "R20152005",
      "comprimentoMaleta": "743 mm",
      "larguraMaleta": "413 mm",
      "alturaMaleta": "921 mm",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": items_map['R20152005']['table_headers'],
      "rows": items_map['R20152005']['table_rows']
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
    "image": items_map['R20152005']['local_images'][0],
    "images": items_map['R20152005']['local_images'],
    "featured": False,
    "application": "Oficinas Mecânicas de Alta Performance, Estética Automotiva Premium, Centros Técnicos de Treinamento",
    "priceFormatted": "Consulte Valor"
  },

  # 11. R21561241
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
      "headers": items_map['R21561241']['table_headers'],
      "rows": items_map['R21561241']['table_rows']
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
    "image": items_map['R21561241']['local_images'][0],
    "images": items_map['R21561241']['local_images'],
    "featured": True,
    "application": "Oficinas de Veículos Importados, Centros de Customização, Preparadoras de Motores, Concessionárias",
    "priceFormatted": "Consulte Valor"
  },

  # 12. R21560101
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
      "headers": items_map['R21560101']['table_headers'],
      "rows": items_map['R21560101']['table_rows']
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
    "image": items_map['R21560101']['local_images'][0],
    "images": items_map['R21560101']['local_images'],
    "featured": False,
    "application": "Oficinas Mecânicas Gerais, Autocenters, Frotistas, Setores de Manutenção Fabril",
    "priceFormatted": "Consulte Valor"
  },

  # 13. R21562101
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
      "headers": items_map['R21562101']['table_headers'],
      "rows": items_map['R21562101']['table_rows']
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
    "image": items_map['R21562101']['local_images'][0],
    "images": items_map['R21562101']['local_images'],
    "featured": False,
    "application": "Oficinas Automotivas, Garagens Custom, Frotas de Transporte, Linhas de Montagem",
    "priceFormatted": "Consulte Valor"
  },

  # 14. R20400000
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
    "composition": items_map['R20400000']['composition'],
    "technicalSpecs": {
      "codigoGedore": "3301670",
      "referencia": "R20400000",
      "dimensoes": "1200 x 700 x 860 mm",
      "capacidade": "500 kg",
      "pesoKg": "46,3 kg"
    },
    "tableData": {
      "headers": items_map['R20400000']['table_headers'],
      "rows": items_map['R20400000']['table_rows']
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
    "image": items_map['R20400000']['local_images'][0],
    "images": items_map['R20400000']['local_images'],
    "featured": True,
    "application": "Oficinas Mecânicas Pesadas, Retíficas de Motores, Indústrias Metalúrgicas, Centros de Usinagem",
    "priceFormatted": "Consulte Valor"
  }
]

# Generate typescript file
ts_content = '''import { Product } from '@/types';

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
  { id: 'all', label: 'Todas as Categorias', count: 14 },
  { id: 'jogos-ferramentas', label: 'Jogos de Ferramentas & Soquetes', count: 3 },
  { id: 'maletas-carrinhos', label: 'Carros, Bancadas & Mochilas', count: 8 },
  { id: 'automotivo', label: 'Linha Automotiva & Oficina', count: 3 },
] as const;

export const PRODUCTS: Product[] = ''' + json.dumps(products, indent=2, ensure_ascii=False) + ''';
'''

with open('/Users/lucasribeirocoelho/Documents/PROJETOS/M11tools/src/data/products.ts', 'w', encoding='utf-8') as f_out:
    f_out.write(ts_content)

print(f'Successfully wrote {len(products)} products to src/data/products.ts!')
