'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const images: {
  path: string;
  photoCredit?: string;
  instagramUrl?: string;
  light?: boolean;
}[] = [
  {
    path: '/images/image-gallery-1.png',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-2.png',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-3.png',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  {
    path: '/images/image-gallery-4.png',
    photoCredit: 'donhovann_visuals',
    instagramUrl: 'https://www.instagram.com/donhovann_visuals/?hl=en',
  },
  {
    path: '/images/image-gallery-5.png',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  {
    path: '/images/image-gallery-6.png',
    photoCredit: 'deep_focuss_',
    instagramUrl:
      'https://www.instagram.com/deep_focuss_?igsh=MTlzaGFybmx3M201bg%3D%3D',
    light: true,
  },
  {
    path: '/images/image-gallery-7.png',
    photoCredit: 'Ledockernoir',
    instagramUrl: 'https://www.instagram.com/ledockernoir/?hl=en',
  },
  { path: '/images/image-gallery-8.png' },
  { path: '/images/image-gallery-9.png' },
  { path: '/images/image-gallery-10.png' },
  { path: '/images/image-gallery-11.png' },
];

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="bg-[#ebe6df]">
      <div className="max-w-4xl mx-auto">
        <p className="subtitle">Portfolio</p>
        <h2>
          Galerie <span className="italic">éditoriale</span>
        </h2>
      </div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-2xl mx-auto mt-10 md:mt-14"
      >
        <CarouselContent>
          {images.map((photoInfo, index) => (
            <CarouselItem key={index}>
              <div className="relative max-h-162.5 mx-auto aspect-3/4">
                <Image
                  src={photoInfo.path}
                  alt={`Photo n°${index + 1} Janisse Constable`}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
                {photoInfo?.instagramUrl && photoInfo?.photoCredit && (
                  <Link
                    href={photoInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`absolute right-2 bottom-2 ${photoInfo?.light ? 'text-secondary-text' : 'text-primary-text'} font-bold flex items-center gap-1`}
                  >
                    <Instagram size={15} strokeWidth={2.5} />
                    <p className="text-[8px] md:text-base">
                      {photoInfo.photoCredit}
                    </p>
                  </Link>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:size-10 cursor-pointer" />
        <CarouselNext className="-right-4 md:size-10 cursor-pointer" />
      </Carousel>
      <p className="mt-4 md:mt-8 font-bold text-center text-sm md:text-base">
        {current} <span className="font-normal">sur</span> {count}
      </p>
    </section>
  );
};

export default Gallery;
