import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortIntro: string;
  explanation: string;
  whatYouGet: string[];
  benefits: string[];
  priceRange: string;
  iconName: string;
}

export interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  whyItHelps: string;
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoSection {
  title: string;
  content: string[];
  bullets: string[];
}
