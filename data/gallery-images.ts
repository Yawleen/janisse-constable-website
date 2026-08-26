export type Category =
  | 'Tout'
  | 'Authentique'
  | 'Portraits'
  | 'Univers Miss'
  | 'Éditorial'
  | 'Road to Miss Île-de-France';

export const categories: Category[] = [
  'Tout',
  'Road to Miss Île-de-France',
  'Univers Miss',
  'Éditorial',
  'Portraits',
  'Authentique',
];

export type galleryImage = {
  path: string;
  category: Exclude<Category, 'Tout'>;
  photoCredit?: string;
  instagramUrl?: string;
};

export const images: galleryImage[] = [
  {
    path: '/images/image-gallery-36.webp',
    category: 'Road to Miss Île-de-France',
  },
  {
    path: '/images/image-gallery-40.webp',
    category: 'Portraits',
    photoCredit: 'estelleoff',
    instagramUrl: 'https://www.instagram.com/estelleoff/?hl=en',
  },
  {
    path: '/images/image-gallery-29.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-9.webp',
    category: 'Authentique',
    photoCredit: 'estelleoff',
    instagramUrl: 'https://www.instagram.com/estelleoff/?hl=en',
  },
  {
    path: '/images/image-gallery-34.webp',
    category: 'Road to Miss Île-de-France',
  },
  {
    path: '/images/image-gallery-32.webp',
    category: 'Éditorial',
  },
  {
    path: '/images/image-gallery-31.webp',
    category: 'Authentique',
    photoCredit: 'bdm_photographe',
    instagramUrl: 'https://www.instagram.com/bdm_photographe/?hl=en',
  },
  {
    path: '/images/image-gallery-30.webp',
    category: 'Univers Miss',
  },
  {
    path: '/images/image-gallery-39.webp',
    category: 'Portraits',
    photoCredit: 'estelleoff',
    instagramUrl: 'https://www.instagram.com/estelleoff/?hl=en',
  },
  {
    path: '/images/image-gallery-35.webp',
    category: 'Road to Miss Île-de-France',
  },
  {
    path: '/images/image-gallery-33.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-37.webp',
    category: 'Road to Miss Île-de-France',
  },
  {
    path: '/images/image-gallery-25.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-41.webp',
    category: 'Portraits',
    photoCredit: 'estelleoff',
    instagramUrl: 'https://www.instagram.com/estelleoff/?hl=en',
  },
  {
    path: '/images/image-gallery-38.webp',
    category: 'Road to Miss Île-de-France',
    photoCredit: 'chloehautier',
    instagramUrl: 'https://www.instagram.com/chloehautier/?hl=en',
  },
  {
    path: '/images/image-gallery-42.webp',
    category: 'Portraits',
    photoCredit: 'estelleoff',
    instagramUrl: 'https://www.instagram.com/estelleoff/?hl=en',
  },
  {
    path: '/images/image-gallery-43.webp',
    category: 'Road to Miss Île-de-France',
  },
  { path: '/images/image-gallery-24.webp', category: 'Univers Miss' },
  { path: '/images/image-gallery-23.webp', category: 'Authentique' },
  {
    path: '/images/image-gallery-21.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-22.webp', category: 'Authentique' },
  {
    path: '/images/image-gallery-20.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-19.webp', category: 'Authentique' },
  { path: '/images/image-gallery-17.webp', category: 'Univers Miss' },
  { path: '/images/image-gallery-18.webp', category: 'Authentique' },
  { path: '/images/image-gallery-16.webp', category: 'Univers Miss' },
  {
    path: '/images/image-gallery-15.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-6.webp', category: 'Authentique' },
  {
    path: '/images/image-gallery-14.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-13.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-12.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-11.webp', category: 'Authentique' },
  { path: '/images/image-gallery-10.webp', category: 'Authentique' },
  { path: '/images/image-gallery-8.webp', category: 'Authentique' },
  {
    path: '/images/image-gallery-7.webp',
    category: 'Éditorial',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  {
    path: '/images/image-gallery-26.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-5.webp',
    category: 'Éditorial',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  {
    path: '/images/image-gallery-1.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-27.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-4.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-3.webp',
    category: 'Éditorial',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  {
    path: '/images/image-gallery-28.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-2.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
];
