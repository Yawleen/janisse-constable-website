import { ChevronLeft, ChevronRight, Instagram, X } from 'lucide-react';
import Link from 'next/link';
import { galleryImage } from '@/data/gallery-images';
import { Dispatch, SetStateAction } from 'react';
import CarouselImage from './CarouselImage';

type galleryCarouselProps = {
  setIsCarouselOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
  currentImage: galleryImage;
  currentImageIndex: number;
  numberOfImages: number;
};

const GalleryCarousel = ({
  setIsCarouselOpen,
  setCurrentImageIndex,
  currentImage,
  currentImageIndex,
  numberOfImages,
}: galleryCarouselProps) => {
  const closeCarousel = () => setIsCarouselOpen(false);

  const goPrev = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? numberOfImages - 1 : prevIndex - 1
    );

  const goNext = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === numberOfImages - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="fixed py-8 inset-0 bg-black/85 flex flex-col items-center min-w-[320px] z-50">
      <div className="grow w-full flex flex-col lg:max-w-150">
        <button
          onClick={closeCarousel}
          className="ml-auto mr-2 mb-4 text-xs tracking-wider uppercase flex items-center gap-1 text-primary-text cursor-pointer lg:text-sm lg:mb-6"
          aria-label="Quitter le carrousel"
        >
          <span>Fermer</span>
          <X size={16} />
        </button>
        <div className="grow w-full relative z-10 mb-3 lg:mb-4">
          <CarouselImage
            key={currentImage.path}
            image={currentImage}
            currentImageIndex={currentImageIndex}
          />
        </div>
        {currentImage.photoCredit && currentImage.instagramUrl && (
          <small className="flex justify-center items-center gap-1 text-xs text-primary-text mb-4 lg:mb-6">
            Crédit photo —
            <Link
              href={currentImage.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-1"
            >
              <Instagram size={15} strokeWidth={2.5} />
              {currentImage.photoCredit}
            </Link>
          </small>
        )}
        {numberOfImages > 1 && (
          <div className="flex gap-10 text-primary-text justify-between px-4 lg:px-0">
            <button
              onClick={goPrev}
              className="group flex items-center gap-2 cursor-pointer"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
              <span className="text-xs tracking-[0.3em] uppercase lg:text-sm">
                Précédent
              </span>
            </button>
            <p className="text-sm text-nowrap font-bold lg:text-base">
              {currentImageIndex + 1} <span className="font-normal">/</span>{' '}
              {numberOfImages}
            </p>
            <button
              onClick={goNext}
              className="group min-w-0 flex items-center gap-2 cursor-pointer"
              aria-label="Étape suivante"
            >
              <span className="truncate text-xs tracking-[0.3em] uppercase lg:text-sm">
                Suivant
              </span>
              <ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCarousel;
