export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  description: string;
  featured: boolean;
  stock: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export const brands: Brand[] = [
  {
    id: "1",
    name: "Dior",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Chanel",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    id: "3",
    name: "MAC",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    id: "4",
    name: "Clinique",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    id: "5",
    name: "Estée Lauder",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    id: "6",
    name: "Lancôme",
    logo: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Juego de Sábanas de Algodón Premium",
    brand: "UNILEVER",
    price: 89.00,
    category: "Dormitorio",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Juego de sábanas de algodón 100% premium con diseño elegante y suave al tacto.",
    featured: true,
    stock: 25,
  },
  {
    id: "2",
    name: "Base de Maquillaje Luminosa",
    brand: "MAC",
    price: 45.00,
    category: "Maquillaje",
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Base de maquillaje de cobertura completa con acabado luminoso. Duración de 16 horas.",
    featured: true,
    stock: 30
  },
  {
    id: "3",
    name: "Crema Hidratante Anti-Edad",
    brand: "Clinique",
    price: 85.00,
    category: "Cuidado facial",
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Crema hidratante con retinol y ácido hialurónico para combatir los signos del envejecimiento.",
    featured: false,
    stock: 20
  },
  {
    id: "4",
    name: "Labial Mate Terciopelo",
    brand: "Chanel",
    price: 38.00,
    category: "Maquillaje",
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Labial mate de larga duración con textura aterciopelada. Disponible en 12 tonos.",
    featured: true,
    stock: 40
  },
  {
    id: "5",
    name: "Serum Vitamina C",
    brand: "Estée Lauder",
    price: 68.00,
    category: "Cuidado facial",
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Serum concentrado con vitamina C para iluminar y proteger la piel del daño ambiental.",
    featured: false,
    stock: 15
  },
  {
    id: "6",
    name: "Máscara de Pestañas Volumen",
    brand: "Lancôme",
    price: 32.00,
    category: "Maquillaje",
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Máscara de pestañas que proporciona volumen y longitud extremos. Fórmula resistente al agua.",
    featured: true,
    stock: 35
  },
  {
    id: "7",
    name: "Agua Micelar Suave",
    brand: "Clinique",
    price: 25.00,
    category: "Cuidado facial",
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Agua micelar para todo tipo de piel. Limpia y desmaquilla sin irritar.",
    featured: false,
    stock: 50
  },
  {
    id: "8",
    name: "Perfume Floral Primavera",
    brand: "Chanel",
    price: 180.00,
    category: "Perfumes",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Fragancia fresca y floral con notas de bergamota, peonía y cedro blanco.",
    featured: false,
    stock: 18
  },
  {
    id: "9",
    name: "Paleta de Sombras Nude",
    brand: "MAC",
    price: 55.00,
    category: "Maquillaje",
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Paleta de 12 sombras en tonos nude mate y shimmer. Perfecta para looks naturales.",
    featured: true,
    stock: 28
  },
  {
    id: "10",
    name: "Crema Corporal Hidratante",
    brand: "Dior",
    price: 42.00,
    category: "Cuidado corporal",
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Crema corporal con manteca de karité y aceite de almendras. Hidratación profunda 24h.",
    featured: false,
    stock: 32
  },
  {
    id: "11",
    name: "Rubor Compacto Natural",
    brand: "Estée Lauder",
    price: 35.00,
    category: "Maquillaje",
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Rubor compacto con acabado natural. Fórmula sedosa que se difumina fácilmente.",
    featured: false,
    stock: 22
  },
  {
    id: "12",
    name: "Perfume Masculino Woody",
    brand: "Lancôme",
    price: 165.00,
    category: "Perfumes",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Fragancia masculina con notas amaderadas y especiadas. Elegante y sofisticado.",
    featured: true,
    stock: 12
  },
  
  
];

export const priceRanges = [
  { label: "Menos de Bs30", min: 0, max: 30 },
  { label: "Bs30 - Bs60", min: 30, max: 60 },
  { label: "Bs60 - Bs100", min: 60, max: 100 },
  { label: "Más de Bs100", min: 100, max: 1000 }
];