const Hero = () => {
  return (
    <section className="relative py-18 md:py-26 text-primary-text min-h-screen bg-[url(/images/hero-bg.jpg)] bg-cover bg-center flex flex-col justify-end">
      <div className="image-overlay-dark"></div>
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3">
        Candidate n°1 - Miss Hauts-de-Seine
      </p>
      <h1 className="relative z-1">
        Janisse <span className="block italic">Constable</span>
      </h1>
      <p className="tracking-wide">
        « Avec simplicité, élégance et le cœur de représenter. »
      </p>
    </section>
  );
};

export default Hero;
