import Image from 'next/image';

const Engagement = () => {
  return (
    <section className="relative bg-[url('/images/engagement-background.png')] bg-cover bg-position-[50%_40%] min-h-[90vh] overflow-hidden">
      <div className="absolute px-4 md:max-w-lg w-full mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-3">
        <p className="text-primary-text/80 subtitle mb-4 md:mb-6">
          Mon engagement
        </p>
        <Image
          src="/images/engagement-text.svg"
          alt="Janisse Constable, candidate n°1 - Miss Hauts-de-Seine"
          width={900}
          height={900}
          className="w-full"
          loading="lazy"
        />
      </div>
      <div className="absolute size-full inset-0 bg-black/60 z-1"></div>
    </section>
  );
};

export default Engagement;
