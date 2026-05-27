'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { categories, Category, images } from '@/data/gallery-images';
import GalleryCarousel from '../GalleryCarousel';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const filteredImages = useMemo(() => {
    return activeCategory === 'Tout'
      ? images
      : images.filter((image) => image.category === activeCategory);
  }, [activeCategory]);
  const numberOfImages = filteredImages.length;

  const changeActiveCategory = (category: Category) => {
    setActiveCategory(category);
    setCurrentImageIndex(0);
  };

  const openCarousel = () => setIsCarouselOpen(true);

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    openCarousel();
  };

  useEffect(() => {
    document.body.style.overflow = isCarouselOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCarouselOpen]);

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <p className="subtitle">Mes univers</p>
        <h2>
          Galerie <span className="italic">éditoriale</span>
        </h2>

        <div className="flex flex-wrap mb-12 gap-y-2 lg:mb-16">
          {categories.map((category) => {
            const count =
              category === 'Tout'
                ? images.length
                : images.filter((image) => image.category === category).length;

            return (
              <button
                key={category}
                onClick={() => changeActiveCategory(category)}
                className={`relative border-b text-xs uppercase tracking-wider py-2 px-4 cursor-pointer transition-all duration-700 lg:py-3 lg:px-6 lg:text-sm ${
                  activeCategory === category
                    ? 'text-primary border-primary'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`Catégorie ${category}`}
              >
                {category}
                <sup className="ml-1 text-[9px] tracking-normal">{count}</sup>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-10 lg:grid-cols-4 lg:gap-5 lg:mb-14">
          {filteredImages.slice(0, 4).map((image, index) => {
            const animationClass = loadedImages[image.path]
              ? `fade-in-${index + 1}`
              : '';

            return (
              <button
                key={`${activeCategory}-${image.path}`}
                onClick={() => selectImage(index)}
                className="group relative aspect-3/4 cursor-pointer overflow-hidden"
                aria-label={`Agrandir l'image ${index + 1} de la catégorie ${image.category}`}
              >
                <Image
                  src={image.path}
                  onLoad={() => {
                    if (!loadedImages[image.path]) {
                      setLoadedImages((prev) => ({
                        ...prev,
                        [image.path]: true,
                      }));
                    }
                  }}
                  alt={`Photo n°${index + 1} de la catégorie ${image.category}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`group-hover:scale-105 transition-transform duration-700 object-cover opacity-0 ${animationClass}`}
                />
              </button>
            );
          })}
        </div>

        {numberOfImages > 4 && (
          <button
            onClick={openCarousel}
            className="btn btn-primary mx-auto gap-2"
          >
            Découvrir la galerie
            <span className="text-[10px] lg:text-[11px]">
              ({numberOfImages})
            </span>
          </button>
        )}
      </div>

      {isCarouselOpen && (
        <GalleryCarousel
          setIsCarouselOpen={setIsCarouselOpen}
          currentImage={filteredImages[currentImageIndex]}
          currentImageIndex={currentImageIndex}
          numberOfImages={numberOfImages}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
