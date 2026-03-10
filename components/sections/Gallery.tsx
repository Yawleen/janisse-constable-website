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

const photoUrls: string[] = [
  '/images/hero-bg.jpg',
  '/images/image-gallery-1.jpg',
  '/images/who-i-am.jpg',
  '/images/who-i-am.jpg',
  '/images/who-i-am.jpg',
  '/images/who-i-am.jpg',
  '/images/who-i-am.jpg',
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
        className="w-full max-w-2xl mx-auto mt-10 md:mt-14"
      >
        <CarouselContent>
          {photoUrls.map((url, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-3/4">
                <Image
                  src={url}
                  alt={`Photo n°${index + 1} Janisse Constable`}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-20 md:size-10 cursor-pointer" />
        <CarouselNext className="-right-4 md:-right-20 md:size-10 cursor-pointer" />
      </Carousel>
      <p className="mt-4 md:mt-8 font-bold text-center text-sm md:text-base">
        {current} <span className="font-normal">sur</span> {count}
      </p>
    </section>
  );
};

export default Gallery;
