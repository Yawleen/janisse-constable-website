import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-center md:text-left py-10 md:py-26 text-primary-text min-h-screen flex flex-col justify-end">
      <Image
        src="/images/hero-bg.png"
        fill
        sizes="100vw"
        alt="Janisse Constable, Miss Hauts-de-Seine 2026 pour Miss Île-de-France"
        className="z-0 object-cover object-[50%_15%]"
        priority
      />
      <div className="image-overlay-dark"></div>
      <p className="font-bold uppercase tracking-[0.4em] mb-3 z-2">
        Miss Hauts-de-Seine 2026
      </p>
      <p className="opacity-80 uppercase tracking-[0.3em] mb-4 z-2">
        Candidate n°3 <span className="hidden md:inline">—</span>{' '}
        <span className="block md:inline">Miss Île-de-France</span>
      </p>
      <h1 className="z-2">
        Janisse <span className="block italic">Constable</span>
      </h1>
    </section>
  );
};

export default Hero;
