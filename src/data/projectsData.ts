export interface ProjectModel {
  id: string;
  name: string;
  category: 'A-Frame' | 'Suíço' | 'Nórdico' | 'Vila';
  tagline: string;
  area: number; // m2
  bedrooms: number;
  bathrooms: number;
  constructionDays: number;
  estimatedPrice: string;
  highlight: string;
  image: string;
  secondaryImage: string;
  description: string;
  features: string[];
  specs: {
    peDireito: string;
    estrutura: string;
    vidros: string;
    deck: string;
    isolamento: string;
    cobertura: string;
  };
}

export const PROJECTS_DATA: ProjectModel[] = [
  {
    id: 'aframe-imperial',
    name: 'A-Frame Imperial',
    category: 'A-Frame',
    tagline: 'O ícone supremo da arquitetura alpina contemporânea',
    area: 98,
    bedrooms: 2,
    bathrooms: 2,
    constructionDays: 75,
    estimatedPrice: 'A partir de R$ 238.000',
    highlight: 'Fachada frontal 100% em pele de vidro com pé direito duplo de 7 metros',
    image: '/images/hero_chalet_panoramic_1792124265445.jpg',
    secondaryImage: '/images/chalet_model_aframe_1792124266074.jpg',
    description: 'Projetado para integrar o horizonte verde à vida interior. Conta com mezanino master privativo com banheira de imersão panorâmica, sala de estar com lareira suspensa a lenha e deck suspenso em balanço com ofurô de cedro.',
    features: [
      'Pele de vidro structural glazing duplo laminado com proteção solar',
      'Mezanino master com hidromassagem e claraboia para observação celeste',
      'Deck em Cumaru nobre com fire pit em aço corten',
      'Lareira suspensa central de alto rendimento térmico',
      'Cozinha gourmet integrada com ilha em granito escovado'
    ],
    specs: {
      peDireito: '7,20 metros no vão central',
      estrutura: 'Pilares em vigas laminadas coladas (Glulam) tratadas em autoclave',
      vidros: 'Vidro duplo acústico laminado 8+8mm com filtro UV',
      deck: 'Madeira maciça nobre Cumaru tratada com verniz marítimo fosco',
      isolamento: 'Lã de rocha basáltica de alta densidade 75mm (paredes e forro)',
      cobertura: 'Telha shingle americana asfáltica multicamadas na cor chumbo'
    }
  },
  {
    id: 'nordic-sanctuary',
    name: 'Cabana Nórdica Loft',
    category: 'Nórdico',
    tagline: 'Linhas retas puras, minimalismo escandinavo e calor acolhedor',
    area: 72,
    bedrooms: 1,
    bathrooms: 1,
    constructionDays: 60,
    estimatedPrice: 'A partir de R$ 185.000',
    highlight: 'Conceito loft aberto de alto padrão com integração total e deck SPA',
    image: '/images/chalet_model_nordic_1792124267944.jpg',
    secondaryImage: '/images/chalet_deck_sunset_1792124269626.jpg',
    description: 'Inspirada nos retiros dos fiordes escandinavos, a Cabana Nórdica privilegia a luz natural, tons terrosos orgânicos e uma experiência sensorial inesquecível de refúgio.',
    features: [
      'Janelão panorâmico de canto sem montantes intermediários',
      'Deck com ofurô aquecido a gás e pergolado integrado',
      'Piso aquecido no banheiro da suíte',
      'Revestimento externo em madeira carbonizada nobre Shou Sugi Ban',
      'Sistema acústico que silencia temporais e isola o frio serrano'
    ],
    specs: {
      peDireito: '4,50 metros em declive assimétrico',
      estrutura: 'Madeira nobre tratada aliada a perfis de aço estrutural corten',
      vidros: 'Paineis temperados 10mm com câmara de argônio',
      deck: 'Deck em cumaru suspenso sobre sapatas ecológicas',
      isolamento: 'Painel térmico termo-acústico PIR e manta reflexiva dupla',
      cobertura: 'Chapa de aço galvanizado zipada termoacústica'
    }
  },
  {
    id: 'suico-alpino',
    name: 'Chalé Suíço Moderno',
    category: 'Suíço',
    tagline: 'O aconchego das vilas de Zermatt adaptado ao terroir brasileiro',
    area: 125,
    bedrooms: 3,
    bathrooms: 2,
    constructionDays: 90,
    estimatedPrice: 'A partir de R$ 320.000',
    highlight: 'Espaço para famílias e grupos exigentes com varanda gourmet panorâmica',
    image: '/images/chalet_interior_living_1792124268757.jpg',
    secondaryImage: '/images/hero_chalet_panoramic_1792124265445.jpg',
    description: 'Traduz a herança dos chalés alpinos suíços com uma reinterpretação brutalista e contemporânea: base em pedra natural moledo, pilares robustos e aberturas envidraçadas generosas.',
    features: [
      'Três suítes privativas, incluindo master com closet e hidro de imersão',
      'Varanda gourmet com churrasqueira embutida e adega climatizada',
      'Lareira de pedras naturais do local com duto cerâmico',
      'Esquadrias de alumínio preto com ruptura de ponte térmica',
      'Infraestrutura completa para energia solar fotovoltaica e aquecedor solar'
    ],
    specs: {
      peDireito: '6,00 metros na sala de estar e jantar integrada',
      estrutura: 'Madeira pesada tratada em autoclave e esteios maciços aparentes',
      vidros: 'Esquadrias minimalistas de perfil estreito e vidros laminados',
      deck: 'Varanda e deck integrados totalizando 45m² de área externa',
      isolamento: 'Lã de vidro de alta densidade revestida com drywall hidro-repelente',
      cobertura: 'Telha shingle importada de alta resistência a ventos de até 150 km/h'
    }
  },
  {
    id: 'vila-alpine-master',
    name: 'Vila Mantiqueira Master',
    category: 'Vila',
    tagline: 'A máxima expressão de luxo sustentável em refúgios de montanha',
    area: 168,
    bedrooms: 4,
    bathrooms: 4,
    constructionDays: 110,
    estimatedPrice: 'A partir de R$ 440.000',
    highlight: 'Piscina aquecida com borda infinita de vidro conectada ao deck principal',
    image: '/images/chalet_deck_sunset_1792124269626.jpg',
    secondaryImage: '/images/chalet_interior_living_1792124268757.jpg',
    description: 'Uma referência de composição para quem deseja ambientes amplos e espaços de convivência. Combina duas alas privativas, living central monumental com claraboia e automação residencial total.',
    features: [
      'Piscina spa aquecida suspensa com vista infinita para a serra',
      'Quatro amplas suítes com varandas exclusivas voltadas ao nascer do sol',
      'Living com adega walk-in envidraçada para 200 rótulos',
      'Automação residencial completa via smartphone (iluminação, som, climatização)',
      'Paisagismo nativo sustentável com pedras da região e vegetação alpina'
    ],
    specs: {
      peDireito: '7,80 metros com estrutura exposta de madeira nobre',
      estrutura: 'Sistema híbrido Light Steel Frame + Madeira laminada certificada',
      vidros: 'Vidro duplo temperado termo-refletivo Guardian SunGuard',
      deck: 'Deck flutuante em balanço estruturado em perfis metálicos pesados',
      isolamento: 'Barreira térmica quádrupla para conforto térmico absoluto de -5°C a 35°C',
      cobertura: 'Cobertura shingle premium com calhas ocultas integradas'
    }
  }
];

export const COMPANY_CONTACT = {
  phone: '+55 (47) 99663-4941',
  phoneFormatted: '(47) 99663-4941',
  whatsappNumber: '5547996634941',
  whatsappUrl: 'https://wa.me/5547996634941?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20de%20um%20chal%C3%A9%20da%20FH%20Chal%C3%A9s.',
  instagram: 'https://www.instagram.com/fhchales/',
  instagramHandle: '@fhchales',
  email: '',
  hours: 'Consulte a equipe pelo WhatsApp',
  regionsServed: 'Consulte a disponibilidade para sua cidade',
};
