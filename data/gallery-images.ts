export type Category =
  | 'Tout'
  | 'Authentique'
  | 'Portraits'
  | 'Univers Miss'
  | 'Éditorial';

export const categories: Category[] = [
  'Tout',
  'Authentique',
  'Portraits',
  'Univers Miss',
  'Éditorial',
];

export type galleryImage = {
  path: string;
  category: Exclude<Category, 'Tout'>;
  photoCredit?: string;
  instagramUrl?: string;
  light?: boolean;
};

export const images: galleryImage[] = [
  {
    path: '/images/image-gallery-32.webp',
    category: 'Éditorial',
  },
  {
    path: '/images/image-gallery-29.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
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
    path: '/images/image-gallery-33.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-25.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-24.webp', category: 'Univers Miss' },
  { path: '/images/image-gallery-23.webp', category: 'Authentique' },
  { path: '/images/image-gallery-22.webp', category: 'Authentique' },
  {
    path: '/images/image-gallery-21.webp',
    category: 'Éditorial',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-20.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-19.webp', category: 'Authentique' },
  { path: '/images/image-gallery-18.webp', category: 'Authentique' },
  { path: '/images/image-gallery-17.webp', category: 'Univers Miss' },
  { path: '/images/image-gallery-16.webp', category: 'Univers Miss' },
  {
    path: '/images/image-gallery-15.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
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
    light: true,
  },
  {
    path: '/images/image-gallery-12.webp',
    category: 'Univers Miss',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  { path: '/images/image-gallery-11.webp', category: 'Authentique' },
  { path: '/images/image-gallery-10.webp', category: 'Authentique' },
  { path: '/images/image-gallery-9.webp', category: 'Authentique' },
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
    path: '/images/image-gallery-6.webp',
    category: 'Portraits',
    photoCredit: 'deep_focuss_',
    instagramUrl:
      'https://www.instagram.com/deep_focuss_?igsh=MTlzaGFybmx3M201bg%3D%3D',
    light: true,
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
