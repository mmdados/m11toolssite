import { Product } from '@/types';

export const BRANDS = [
  { id: 'all', label: 'Todas as Marcas' },
  { id: 'gedore-red', label: 'Gedore Red', color: '#e5242a' },
  { id: 'gedore-blue', label: 'Gedore Industrial / Blue', color: '#005baa' },
  { id: 'tekbond', label: 'Tekbond Químicos', color: '#00a651' },
] as const;

export const CATEGORIES = [
  { id: 'all', label: 'Todas as Categorias', count: 12 },
  { id: 'soquetes-chaves', label: 'Chaves & Soquetes', count: 3 },
  { id: 'torquimetros', label: 'Torquímetros & Aperto', count: 2 },
  { id: 'alicates', label: 'Alicates & Corte', count: 2 },
  { id: 'maletas-carrinhos', label: 'Maletas & Armazenamento', count: 2 },
  { id: 'adesivos-quimicos', label: 'Adesivos & Trava-Roscas', count: 2 },
  { id: 'selantes-silicones', label: 'Silicones & Selantes', count: 2 },
  { id: 'sprays-lubrificantes', label: 'Sprays & Desengraxantes', count: 2 },
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
    detailedDescription: 'O Jogo de Soquetes e Acessórios GEDORE Red R45603172 é a solução definitiva em aperto mecânico. Desenvolvido para atender desde montagens industriais até manutenções automotivas severas, reúne 172 ferramentas com encaixes de 1/4", 3/8" e 1/2". Forjado em aço cromo-vanádio com acabamento acetinado fosco, proporciona alta resistência ao torque e máxima proteção contra oxidação.',
    properties: [
      'Aço Cromo-Vanádio GEDORE red de alta tenacidade mecânica',
      'Catracas reversíveis de 72 dentes com ângulo de retorno de apenas 5°',
      'Perfil sextavado com cantos arredondados (Unit Drive) que evita desgaste do parafuso',
      'Maleta em polietileno de alta densidade antichoque com travas de aço reforçadas'
    ],
    specs: [
      'Quantidade de peças: 172 ferramentas',
      'Encaixes: 1/4", 3/8" e 1/2"',
      'Soquetes curtos: 4 a 32 mm',
      'Soquetes longos: 4 a 22 mm',
      'Soquetes perfil Torx: E4 a E24',
      'Chaves catraca: 1/4", 3/8" e 1/2" com botão de desengate rápido',
      'Extensões, juntas universais e adaptadores inclusos'
    ],
    instructions: [
      'Utilize sempre o soquete correspondente à medida exata do fixador.',
      'Não utilize tubos ou extensões improvisadas como alavancas sobre a catraca.',
      'Mantenha as catracas limpas e lubrificadas para garantir o perfeito engate dos 72 dentes.',
      'Guarde as peças organizadas nos berços da maleta para evitar perdas e avarias.'
    ],
    image: '/images/gedore-red.jpg',
    images: [
      '/images/gedore-red.jpg',
      '/images/gedore-red-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: true,
    application: 'Automotivo, Linha Pesada, Centros de Usinagem e Manutenção Industrial'
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
    detailedDescription: 'Projetadas para proporcionar aperto firme e seguro com máxima área de contato, as chaves combinadas GEDORE Red contam com cabeça inclinada a 15º na extremidade fixa e perfil estrela Unit Drive, que transfere a força pelas faces planas da porca e não pelos cantos.',
    properties: [
      'Fabricadas em aço Cromo-Vanádio sob rigorosa norma DIN 3113 forma A',
      'Cabeça estrela com inclinação ergonômica de 15° para facilitar o manuseio',
      'Acabamento cromado mate acetinado que impede o escorregamento com as mãos sujas de óleo'
    ],
    specs: [
      'Medidas inclusas: 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19 e 22 mm',
      'Acompanha suporte plástico de alta resistência para bancada ou parede',
      'Norma técnica: DIN 3113 / ISO 3318'
    ],
    instructions: [
      'Nunca bata com martelo na haste da chave combinada.',
      'Para soltar porcas muito travadas, utilize o lado estrela para maior área de contato.'
    ],
    image: '/images/hero-tools.jpg',
    images: [
      '/images/hero-tools.jpg',
      '/images/gedore-red-detail.jpg',
      '/images/gedore-red.jpg'
    ],
    featured: true,
    application: 'Oficinas Mecânicas, Montagens Industriais e Manutenção Predial'
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
    detailedDescription: 'Ferramenta de alta precisão para controle de aperto controlado no sentido horário. Possui escala micrômetrica dupla em N.m e lbf.pé gravada a laser, mecanismo de estalo de disparo nítido e punho ergonômico com trava de segurança para impedir desregulagem durante a operação.',
    properties: [
      'Precisão de aperto garantida de ±3% do valor ajustado (DIN EN ISO 6789:2017)',
      'Escala dupla calibrada: N.m e lbf.pé de alta visibilidade',
      'Sinal tátil e sonoro ao atingir o torque pré-ajustado',
      'Catraca reversível com encaixe quadrado de 1/2"'
    ],
    specs: [
      'Capacidade de torque: 40 a 200 N.m (30 a 150 lbf.pé)',
      'Subdivisão da escala: 1 N.m',
      'Encaixe quadrado: 1/2" (12,7 mm)',
      'Comprimento total: 485 mm',
      'Acompanha estojo protetor e certificado de calibração de fábrica'
    ],
    instructions: [
      'Após o uso, retorne sempre o ajuste de torque para a escala mínima (40 N.m) para preservar a mola interna.',
      'Não utilize o torquímetro para desapertar parafusos travados nem como alavanca comum.'
    ],
    image: '/images/gedore-torque-detail.jpg',
    images: [
      '/images/gedore-torque-detail.jpg',
      '/images/hero-tools.jpg',
      '/images/gedore-red.jpg'
    ],
    featured: true,
    application: 'Aperto Crítico Automotivo, Motores, Cabeçotes e Eixos Industriais'
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
    detailedDescription: 'O alicate universal isolado GEDORE Red é fabricado em aço forjado de alta liga com tratamento térmico especial nas arestas de corte temperadas por indução. Suas abas protetoras no cabo evitam o contato acidental das mãos com a parte metálica.',
    properties: [
      'Isolação elétrica até 1.000V em corrente alternada conforme NBR 9699 / EN 60900',
      'Arestas de corte temperadas por indução para máxima durabilidade do fio',
      'Zonas de preensão para materiais planos e redondos'
    ],
    specs: [
      'Comprimento nominal: 200 mm (8")',
      'Capacidade de corte em arame duro: até 2,0 mm',
      'Empunhadura em dois componentes antideslizante'
    ],
    instructions: [
      'Inspecione periodicamente o cabo isolado antes de realizar trabalhos sob tensão elétrica.',
      'Não utilize ferramentas isoladas que apresentem cortes ou danos na camada plástica.'
    ],
    image: '/images/gedore-red.jpg',
    images: [
      '/images/gedore-red.jpg',
      '/images/gedore-red-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: false,
    application: 'Instalações Elétricas, Quadros de Comando, Manutenção Predial e Industrial'
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
    detailedDescription: 'Armazenamento seguro e organização profissional para oficinas mecânicas e concessionárias. Construção monobloco reforçada com 7 gavetas telescópicas, capacidade estática de até 450 kg e rodas de alta rodagem com trava nas frontais.',
    properties: [
      'Estrutura em chapa de aço reforçada com pintura epóxi anticorrosiva',
      'Trilhos telescópicos com esferas para abertura 100% suave das gavetas',
      'Trava de segurança individual em cada gaveta contra abertura acidental em movimento',
      'Fechamento centralizado com chave escamoteável'
    ],
    specs: [
      '7 gavetas: 5 gavetas com 75 mm de altura e 2 gavetas com 150 mm',
      'Capacidade de carga por gaveta: 35 kg',
      'Carga estática total: 450 kg',
      'Dimensões: 980 x 700 x 480 mm'
    ],
    instructions: [
      'Distribua as ferramentas mais pesadas nas gavetas inferiores.',
      'Trave as rodas dianteiras sempre que o carrinho estiver estacionado.'
    ],
    image: '/images/gedore-red.jpg',
    images: [
      '/images/gedore-red.jpg',
      '/images/hero-tools.jpg',
      '/images/gedore-red-detail.jpg'
    ],
    featured: true,
    application: 'Concessionárias, Oficinas de Alta Produtividade e Linhas Industriais'
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
    detailedDescription: 'O torquímetro Dremometer da GEDORE é uma obra-prima da engenharia alemã. O corpo em liga leve forjada garante extrema resistência contra quedas e esforços laterais. Seu sistema mecânico patenteado opera por alavanca com desarme suave que não causa impacto nos pulsos do operador.',
    properties: [
      'Precisão de ±3% calibrado e rastreável pelo Inmetro/RBC',
      'Construção em alumínio aeronáutico monobloco com pintura azul Gedore',
      'Princípio de alavanca com desarme livre: o ponto de aplicação da força não interfere no valor do torque',
      'Encaixe quadrado de 1/2" intercambiável'
    ],
    specs: [
      'Capacidade: 20 a 120 N.m (15 a 90 lbf.pé)',
      'Graduação da escala: 1 N.m',
      'Comprimento: 460 mm',
      'Peso aproximado: 1,5 kg',
      'Acompanha certificado de calibração RBC individual de fábrica'
    ],
    instructions: [
      'Pode ser operado segurando em qualquer ponto da alavanca sem alterar o torque final.',
      'Recomenda-se recalibração a cada 5.000 ciclos ou 12 meses.'
    ],
    image: '/images/gedore-torque-detail.jpg',
    images: [
      '/images/gedore-torque-detail.jpg',
      '/images/hero-tools.jpg',
      '/images/gedore-red.jpg'
    ],
    featured: true,
    application: 'Indústria Aeroespacial, Petroquímica, Manutenção Pesada e Energia Eólica'
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
    detailedDescription: 'A clássica Chave Sueca GEDORE 12" é usinada com tolerâncias rigorosas para proporcionar ajuste firme e sem folgas. Corpo forjado em aço Gedore-Vanadium de alta ductilidade mecânica.',
    properties: [
      'Aço Gedore-Vanadium forjado e temperado',
      'Escala milimétrica gravada a laser na cabeça para pré-ajuste da abertura',
      'Acabamento niquelado e cromado com cabeça polida'
    ],
    specs: [
      'Comprimento nominal: 305 mm (12")',
      'Abertura máxima dos mordentes: 36 mm',
      'Norma: ISO 6787'
    ],
    instructions: [
      'Aplique a força sempre na direção do mordente móvel para evitar fadiga mecânica prematura.'
    ],
    image: '/images/hero-tools.jpg',
    images: [
      '/images/hero-tools.jpg',
      '/images/gedore-torque-detail.jpg',
      '/images/gedore-red.jpg'
    ],
    featured: false,
    application: 'Usinagem, Tubulações Industriais, Caldeiraria e Manutenção Geral'
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
    detailedDescription: 'O alicate de pressão GEDORE 137-10 oferece potência incomparável de travamento. Mordentes curvos com dentes profundos agarram com segurança parafusos danificados, canos e perfis metálicos.',
    properties: [
      'Mordentes em aço Gedore-Vanadium forjado com alta dureza superficial',
      'Parafuso de ajuste com orifício hexagonal para torque extra via chave allen',
      'Gatilho de desarmamento rápido com destravamento instantâneo'
    ],
    specs: [
      'Comprimento: 250 mm (10")',
      'Abertura máxima: 48 mm',
      'Acabamento niquelado brilhante anticorrosão'
    ],
    instructions: [
      'Ajuste o parafuso traseiro antes de travar a alavanca para obter a pressão exata sem sobrecarregar a estrutura.'
    ],
    image: '/images/hero-tools.jpg',
    images: [
      '/images/hero-tools.jpg',
      '/images/gedore-red.jpg',
      '/images/gedore-red-detail.jpg'
    ],
    featured: true,
    application: 'Serralheria, Soldagem, Funilaria e Travamento Mecânico'
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
    detailedDescription: 'Chaves hexagonais de braço longo GEDORE 42 KEL. A ponta abaulada esférica permite apertos e desapertos com inclinação de até 25° em relação ao eixo do parafuso, ideal para acessos confinados.',
    properties: [
      'Aço Gedore-Vanadium com tratamento térmico integral',
      'Acabamento escurecido químico de altíssima resistência ao desgaste',
      'Ponta esférica de precisão milimétrica'
    ],
    specs: [
      '9 peças: 1,5; 2; 2,5; 3; 4; 5; 6; 8 e 10 mm',
      'Suporte plástico compacto com indicação permanente das medidas',
      'Norma DIN ISO 2936'
    ],
    instructions: [
      'Utilize o lado curto da chave para aplicar o torque de aperto final e o lado longo esférico para aproximação rápida.'
    ],
    image: '/images/hero-tools.jpg',
    images: [
      '/images/hero-tools.jpg',
      '/images/gedore-torque-detail.jpg',
      '/images/gedore-red.jpg'
    ],
    featured: false,
    application: 'Manutenção de Máquinas CNC, Robótica, Moldes e Ferramentaria'
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
    detailedDescription: 'O Tekbond 793 é o cianoacrilato multiuso mais vendido e respeitado do Brasil. Formulado com média viscosidade (80 a 120 cP), não escorre facilmente e penetra nas microfissuras das superfícies. Garante colagem forte, limpa e quase instantânea em borrachas sintéticas, plásticos rígidos, EVA, couro e metais.',
    properties: [
      'Base química: Etilcianoacrilato de cura por umidade atmosférica',
      'Média viscosidade (80 a 120 cP) para excelente controle de fluxo sem escorrimento',
      'Tempo de fixação inicial entre 5 e 20 segundos',
      'Bico aplicador anti-entupimento de precisão milimétrica'
    ],
    specs: [
      'Aparência: Líquido incolor transparente',
      'Resistência à temperatura: -55°C até +80°C',
      'Preenchimento de folgas: até 0,10 mm',
      'Cura total: 24 horas',
      'Embalagens disponíveis: Frascos de 20g e 100g'
    ],
    instructions: [
      'Limpe e desengraxe completamente as superfícies antes da aplicação.',
      'Aplique uma quantidade mínima em apenas uma das partes a serem unidas.',
      'Mantenha as peças pressionadas sob contato firme por 15 a 30 segundos.',
      'Após o uso, limpe o bico e tampe o frasco, armazenando em local fresco e seco.'
    ],
    image: '/images/tekbond-793-detail.jpg',
    images: [
      '/images/tekbond-793-detail.jpg',
      '/images/tekbond.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: true,
    application: 'Linhas de Montagem, Indústria Moveleira, Reparos Rápidos e Manutenção'
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
    detailedDescription: 'O adesivo anaeróbico Tekbond 177 é formulado para fixação permanente de conjuntos roscados submetidos a vibrações severas e cargas dinâmicas. Cura na ausência de ar e em contato com superfícies metálicas ativas, eliminando a necessidade de arruelas de pressão mecânicas.',
    properties: [
      'Alta resistência ao cisalhamento e desmontagem permanente',
      'Comportamento tixotrópico: não escorre após a aplicação na rosca',
      'Excelente resistência contra óleos industriais, combustíveis e água'
    ],
    specs: [
      'Torque de quebra: 26 a 36 N.m',
      'Faixa de temperatura: -60°C a +150°C',
      'Folga máxima preenchida: 0,25 mm',
      'Tempo de cura inicial: 20 minutos / Cura total: 24 horas'
    ],
    instructions: [
      'Aplique gotas suficientes cobrindo toda a extensão do filete de rosca do parafuso.',
      'Monte e aperte com o torque especificado pelo fabricante do equipamento.',
      'Para desmontagem futura, aplique calor localizado (cerca de 250°C) com soprador térmico.'
    ],
    image: '/images/tekbond.jpg',
    images: [
      '/images/tekbond.jpg',
      '/images/tekbond-793-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: true,
    application: 'Blocos de Motor, Suspensões Pesadas, Caixas de Câmbio e Prensas Industriais'
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
    detailedDescription: 'Formador de juntas oxímico especialmente formulado para a indústria automotiva e motores de alta performance. Por possuir cura neutra, não libera ácido acético, sendo 100% seguro para sensores de oxigênio (sonda lambda) e componentes eletrônicos.',
    properties: [
      'Cura neutra oxímica não corrosiva aos metais e componentes eletrônicos',
      'Resistência contínua até 260°C com picos intermitentes até 315°C',
      'Resistente a óleos de motor, fluídos de arrefecimento e transmissão'
    ],
    specs: [
      'Formação de película: 10 a 20 minutos',
      'Velocidade de cura: 3 mm a cada 24 horas',
      'Dureza Shore A: 30 a 40',
      'Embalagem: Cartucho de 280g para aplicador manual'
    ],
    instructions: [
      'Remova resíduos de juntas antigas e desengraxe completamente as faces do flange.',
      'Aplique um cordão contínuo e uniforme de 2 a 3 mm ao redor dos furos dos parafusos.',
      'Una as superfícies antes da formação de película e aperte os parafusos manualmente.'
    ],
    image: '/images/tekbond.jpg',
    images: [
      '/images/tekbond.jpg',
      '/images/tekbond-793-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: true,
    application: 'Cárteres, Tampas de Válvulas, Termostatos, Caixas de Marcha e Flanges'
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
    detailedDescription: 'O desengripante aerossol Tekbond possui ação capilar ultrarrápida que penetra nas menores folgas entre filetes oxidados de roscas. Desbloqueia mecanismos emperrados, protege contra a umidade e previne novas formações de ferrugem.',
    properties: [
      'Poderoso agente penetrante que rompe a ferrugem e a corrosão',
      'Repele a umidade em sistemas elétricos e ignições',
      'Válvula com aplicação precisa e tubinho prolongador para locais de difícil alcance'
    ],
    specs: [
      'Aparência: Líquido âmbar claro aerossol',
      'Volume: 300 ml / 200 g (também disponível em 400 ml)',
      'Livre de CFCs (não agride a camada de ozônio)'
    ],
    instructions: [
      'Agite bem a lata antes de usar.',
      'Pulverize a uma distância de aproximadamente 20 cm da área desejada.',
      'Em peças fortemente emperradas, aguarde 2 minutos para que o produto penetre antes de forçar o desaperto.'
    ],
    image: '/images/tekbond.jpg',
    images: [
      '/images/tekbond.jpg',
      '/images/tekbond-793-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: false,
    application: 'Oficinas, Máquinas Agrícolas, Barcos, Indústrias Metalúrgicas e Manutenção'
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
    detailedDescription: 'Solução rápida e limpa para limpeza e restauração de condutividade em circuitos elétricos e eletrônicos. Evapora rapidamente sem deixar películas ou resíduos graxos que possam atrair poeira.',
    properties: [
      'Secagem ultrarrápida com evaporação instantânea',
      'Restaura a condutividade elétrica e reduz resistência de contato',
      'Compatível com a grande maioria dos plásticos de componentes eletrônicos'
    ],
    specs: [
      'Volume: 300 ml / 200 g',
      'Rigidez dielétrica elevada',
      'Não inflamável após evaporação do propelente'
    ],
    instructions: [
      'Desligue sempre os aparelhos elétricos antes de aplicar o spray.',
      'Aplique jatos curtos diretamente sobre os conectores e deixe evaporar por 1 a 2 minutos antes de religar a energia.'
    ],
    image: '/images/tekbond.jpg',
    images: [
      '/images/tekbond.jpg',
      '/images/tekbond-793-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: false,
    application: 'Painéis Elétricos, Alternadores, Centrais Eletrônicas, Relés e Chicotes'
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
    detailedDescription: 'O selante de silicone acético Tekbond é ideal para vedações em ambientes úmidos e externos. Possui aditivo antifungo especial que previne manchas escuras e mofo em banheiros, cozinhas e esquadrias de alumínio.',
    properties: [
      'Cura acética com fungicida de longa duração',
      'Excelente resistência contra radiação solar (raios UV) e intempéries',
      'Flexibilidade e elasticidade permanente'
    ],
    specs: [
      'Cartucho: 280 g',
      'Alongamento na ruptura: > 350%',
      'Cores disponíveis: Transparente, Branco, Preto e Cinza'
    ],
    instructions: [
      'Aplique em superfícies secas e isentas de pó.',
      'Faça o acabamento com espátula úmida em água e sabão neutro logo após a aplicação.'
    ],
    image: '/images/tekbond.jpg',
    images: [
      '/images/tekbond.jpg',
      '/images/tekbond-793-detail.jpg',
      '/images/hero-tools.jpg'
    ],
    featured: false,
    application: 'Boxes de Banheiro, Esquadrias de Alumínio, Pias, Vitrines e Vedação Geral'
  }
];
