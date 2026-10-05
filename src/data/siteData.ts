import type { InvestmentBenefit } from '../types';

export const HERO_SLIDES = [
  '/hero 1.jpg',
  '/hero 2.jpg'
];

export const INVESTMENT_BENEFITS: InvestmentBenefit[] = [
  {
    id: 'shared-investment',
    title: 'Shared Investment',
    description: 'Invest only half the project cost while Evoltek contributes the other half.',
    iconSrc: '/icon_3d_shared_investment.jpg'
  },
  {
    id: 'hassle-free',
    title: 'Hassle-Free Operations',
    description: 'Evoltek handles setup, operations and station maintenance.',
    iconSrc: '/icon_3d_hassle_free.jpg'
  },
  {
    id: 'flexible-returns',
    title: 'Flexible Returns',
    description: 'Choose between percentage-based or fixed-return options.',
    iconSrc: '/icon_3d_flexible_returns.jpg'
  },
  {
    id: 'long-term',
    title: 'Long-Term Agreement',
    description: '5 or 10-year agreement options with renewal availability.',
    iconSrc: '/icon_3d_long_term.jpg'
  },
  {
    id: 'digital-transparency',
    title: 'Digital Transparency',
    description: 'Monitor station performance through the Evoltek mobile app.',
    iconSrc: '/icon_3d_digital_transparency.jpg'
  },
  {
    id: 'scalable-network',
    title: 'Scalable Network',
    description: 'Build a growing EV charging network across strategic locations.',
    iconSrc: '/icon_3d_scalable_network.jpg'
  }
];

export const COMPARISON_ITEMS = [
  { traditional: 'Standalone charging points', evoltek: 'Connected charging network' },
  { traditional: 'Individual locations', evoltek: 'City → Highway → Destination' },
  { traditional: 'Limited charging options', evoltek: 'Multiple power options (60–480 kW)' },
  { traditional: 'Basic highway charging', evoltek: 'Highway charging destinations' },
  { traditional: 'Limited traveller amenities', evoltek: 'Complete highway experience' },
  { traditional: 'Basic digital experience', evoltek: 'Smart charging experience' },
  { traditional: 'General EV charging', evoltek: 'Passenger + fleet solutions' },
  { traditional: 'Fixed capacity', evoltek: 'Built to scale' }
];
