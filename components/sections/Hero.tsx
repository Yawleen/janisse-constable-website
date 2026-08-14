import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-5 p-0 bg-white w-full min-h-[95vh] md:flex-row md:justify-center md:gap-15 md:p-5">
      <div className="absolute flex flex-col justify-end top-0 left-0 right-0 bottom-0 text-primary-text text-center px-5 py-10 z-2 md:text-secondary-text md:static md:justify-center md:p-0 md:text-right">
        <p className="font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] mb-3">
          Miss Hauts-de-Seine 2026
        </p>
        <p className="opacity-80 uppercase tracking-[0.3em] mb-4">
          Candidate n°3 <span className="hidden md:inline">—</span>{' '}
          <span className="block md:inline">Miss Île-de-France</span>
        </p>
        <h1>
          Janisse <span className="block italic">Constable</span>
        </h1>
      </div>
      <div className="relative w-full min-h-150 h-[95vh] md:min-w-100 md:w-115">
        <Image
          src="/images/hero-bg.webp"
          fill
          sizes="(min-width: 768px) 460px, 100vw"
          alt="Janisse Constable, Miss Hauts-de-Seine 2026 et candidate n°3 pour Miss Île-de-France"
          className="object-cover object-[50%_20%]"
          priority
        />
        <div className="image-overlay-dark"></div>
      </div>
    </section>
  );
};

export default Hero;
