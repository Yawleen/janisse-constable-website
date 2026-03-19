import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-20">
      <div className="relative w-full self-center max-w-md aspect-3/4 md:min-w-sm">
        <Image
          src="/images/who-i-am.jpg"
          fill
          objectFit="cover"
          alt="Janisse Constable portrait"
          loading="lazy"
        />
      </div>
      <div className="max-w-xl">
        <p className="subtitle">À propos</p>
        <h2>Qui suis-je ?</h2>
        <div className="space-y-5">
          <p>
            J&apos;ai 25 ans et j&apos;ai grandi entre cultures guyanaise et
            polonaise, avec un parcours universitaire en France et en Floride.
            Diplômée d&apos;un master en droit et éthique des affaires, je
            travaille aujourd&apos;hui en Compliance.
          </p>
          <p>
            Originaire du Val d&apos;Oise et installée dans les Hauts-de-Seine,
            je serais fière de représenter une région dynamique, riche par sa
            diversité et son énergie et où je m&apos;y sens merveilleusement
            bien.
          </p>
          <p>
            Ma candidature est le reflet d&apos;un chemin personnel rempli de
            quêtes de discipline, de confiance en soi et de découverte. Animée
            par l&apos;envie d&apos;avoir un impact positif, je souhaite avant
            tout inspirer, partager et m&apos;engager.
          </p>
          <p>
            Plus qu&apos;un titre, je vois cette aventure comme une opportunité
            de représenter avec sincérité, défendre des causes qui me tiennent à
            cœur et montrer qu&apos;on peut aller loin en restant fidèle à
            soi-même.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
