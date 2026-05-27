import Image from 'next/image';
import { useState } from 'react';
import { galleryImage } from '@/data/gallery-images';

const CarouselImage = ({
  image,
  currentImageIndex,
}: {
  image: galleryImage;
  currentImageIndex: number;
}) => {
  const [loadedImage, setLoadedImage] = useState(false);

  return (
    <Image
      src={image.path}
      onLoad={() => setLoadedImage(true)}
      alt={`Photo ${currentImageIndex + 1} de la catégorie ${image.category}`}
      fill
      sizes="(max-width: 768px) 85vw, 40vw"
      className={`object-contain transition-opacity duration-700 ${
        loadedImage ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

export default CarouselImage;
