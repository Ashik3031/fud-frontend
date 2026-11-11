export type Locale = 'en' | 'ar';

export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: {
    en: string;
    ar: string;
  };
  name: {
    en: string;
    ar: string;
    ml?: string; // Malayalam traditional name
  };
  subtitle: {
    en: string;
    ar: string;
  };
  packSize: {
    en: string;
    ar: string;
  };
  pieces?: number;
  weightGrams: number;
  shelfLife: {
    en: string;
    ar: string;
  };
  storageTemp: string; // e.g. "-18°C or below"
  hsCode: string;
  moq: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  ingredients: {
    en: string;
    ar: string;
  };
  cookingInstructions: {
    en: string[];
    ar: string[];
  };
  dietary: {
    isHalal: boolean;
    isVegetarian: boolean;
    isVegan: boolean;
    noPreservatives: boolean;
    noAddedColours: boolean;
    noAddedFlavours: boolean;
  };
  nutritionPer100g: {
    energyKcal: number;
    proteinG: number;
    carbsG: number;
    fatG: number;
    fiberG?: number;
  };
  image: string;
  cataloguePage: number;
  isBestSeller?: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon: string;
  accentColor: string;
  heroImage: string;
  pageNumber: number;
  itemCount: number;
}

export interface BlogPost {
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  metaTitle: {
    en: string;
    ar: string;
  };
  metaDescription: {
    en: string;
    ar: string;
  };
  date: string;
  author: string;
  readTime: string;
  category: string;
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  tableOfContents?: {
    id: string;
    title: { en: string; ar: string };
  }[];
  relatedProducts?: string[]; // product slugs
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'products' | 'wholesale' | 'logistics' | 'certifications';
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

export interface UAECityInfo {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  coverageTag: {
    en: string;
    ar: string;
  };
  deliveryFrequency: {
    en: string;
    ar: string;
  };
  hubLocation: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  popularProducts: string[];
}
