import Image from 'next/image';

const Engagement = () => {
  return (
    <section className="relative bg-[url('/images/engagement.jpeg')] bg-cover bg-center min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div className="absolute md:max-w-6xl mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-3">
        <p className="text-primary-text subtitle -mb-10">Mon engagement</p>
        <Image
          src="/images/engagement-janisse.svg"
          alt="Janisse Constable, candidate n°1 - Miss Hauts-de-Seine"
          width={900}
          height={900}
          className="min-w-150"
          loading="lazy"
        />
      </div>
      <div className="image-overlay-dark"></div>
    </section>
  );
};

export default Engagement;
