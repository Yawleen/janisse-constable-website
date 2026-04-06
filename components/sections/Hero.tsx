import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative py-18 md:py-26 text-primary-text min-h-screen flex flex-col justify-end">
      <Image
        src="/images/hero-bg.jpeg"
        fill
        objectPosition="center 15%"
        objectFit="cover"
        alt="Janisse Constable, candidate n°1 - Miss Hauts-de-Seine"
        className="z-0"
        priority
      />
      <div className="image-overlay-dark"></div>
      <p className="text-base md:text-lg uppercase tracking-[0.3em] mb-3 z-2">
        Candidate n°1 - Miss Hauts-de-Seine
      </p>
      <h1 className="relative z-2">
        Janisse <span className="block italic">Constable</span>
      </h1>
    </section>
  );
};

export default Hero;
