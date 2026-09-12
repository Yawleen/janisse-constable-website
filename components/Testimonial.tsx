import Image from 'next/image';

type valuesProps = {
  image: string;
  quality: string;
  testimonial: string;
  author: string;
  relation: string;
};

const Testimonial = ({
  image,
  quality,
  testimonial,
  author,
  relation,
}: valuesProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-24 rounded-full overflow-hidden mb-4 md:mb-6 md:size-28">
        <Image
          src={image}
          alt={`Photo de ${author}, ${relation.toLowerCase()} de Janisse`}
          fill
          sizes="(max-width: 768px) 96px, 112px"
          className="object-cover"
        />
      </div>
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-2 border border-primary/30 px-4 py-1.5 rounded-full md:mb-4 md:text-sm">
        {quality}
      </span>
      <blockquote className="text-sm leading-relaxed max-w-sm mb-6 md:text-base">
        « {testimonial} »
      </blockquote>
      <div>
        <p className="text-sm font-bold">{author}</p>
        <p className="text-xs">{relation}</p>
      </div>
    </div>
  );
};

export default Testimonial;
