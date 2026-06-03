import { Instagram, X } from 'lucide-react';
import { galleryImage } from '@/data/gallery-images';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import CarouselImage from './CarouselImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Link from 'next/link';

type galleryCarouselProps = {
  setIsCarouselOpen: Dispatch<SetStateAction<boolean>>;
  images: galleryImage[];
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
  currentImageIndex: number;
};

const GalleryCarousel = ({
  setIsCarouselOpen,
  images,
  setCurrentImageIndex,
  currentImageIndex,
}: galleryCarouselProps) => {
  const initialImageIndexRef = useRef(currentImageIndex);
  const [api, setApi] = useState<CarouselApi>();
  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    if (!api) return;

    api.scrollTo(initialImageIndexRef.current, true);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentImageIndex(api.selectedScrollSnap());
    };

    handleSelect();
    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api, setCurrentImageIndex]);

  return (
    <div className="fixed py-8 inset-0 bg-black/85 flex flex-col items-center min-w-[320px] z-50">
      <div className="grow flex flex-col justify-center w-full lg:max-w-150">
        <button
          onClick={closeCarousel}
          className="ml-auto mr-2 mb-4 text-xs tracking-wider uppercase flex items-center gap-1 text-primary-text cursor-pointer lg:text-sm lg:mb-6"
          aria-label="Quitter le carrousel"
        >
          <span>Fermer</span>
          <X size={16} />
        </button>
        <Carousel
          setApi={setApi}
          className="flex flex-col justify-center grow w-full min-h-75 max-h-250"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem className="relative" key={image.path}>
                <CarouselImage image={image} currentImageIndex={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="h-4">
            {images[currentImageIndex]?.photoCredit &&
              images[currentImageIndex]?.instagramUrl && (
                <small className="flex justify-center items-center gap-1 text-xs text-primary-text">
                  Crédit photo —
                  <Link
                    href={images[currentImageIndex]?.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-1"
                  >
                    <Instagram size={15} strokeWidth={2.5} />
                    {images[currentImageIndex]?.photoCredit}
                  </Link>
                </small>
              )}
          </div>
          {images.length > 1 && (
            <>
              <p className="text-sm text-primary-text text-center font-bold lg:text-base mt-4 lg:mt-6">
                {currentImageIndex + 1} <span className="font-normal">/</span>{' '}
                {images.length}
              </p>
              <div className="flex gap-10 text-primary-text justify-between px-4 lg:px-0">
                <CarouselPrevious
                  className="group bg-transparent flex items-center gap-2 cursor-pointer"
                  aria-label="Photo précédente"
                />
                <CarouselNext
                  className="group shrink bg-transparent min-w-0 flex items-center gap-1 cursor-pointer"
                  aria-label="Photo suivante"
                />
              </div>
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default GalleryCarousel;
