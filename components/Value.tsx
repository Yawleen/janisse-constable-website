import Image from 'next/image';

type valuesProps = {
  image: string;
  quality: string;
  testimonial: string;
  author: string;
  relation: string;
};

const Value = ({
  image,
  quality,
  testimonial,
  author,
  relation,
}: valuesProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-24 md:size-28 rounded-full overflow-hidden mb-4 md:mb-6 border-2 border-transparent transition-all duration-500 ease-out">
        <Image
          src={image}
          alt={`Photo de ${author}, ${relation.toLowerCase()} de Janisse`}
          fill
          objectFit="cover"
        />
      </div>
      <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-primary mb-2 md:mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
        {quality}
      </span>
      <blockquote className="text-sm md:text-base leading-relaxed max-w-sm mb-6">
        « {testimonial} »
      </blockquote>
      <div className="mt-auto">
        <p className="text-sm font-bold">{author}</p>
        <p className="text-xs">{relation}</p>
      </div>
    </div>
  );
};

export default Value;
