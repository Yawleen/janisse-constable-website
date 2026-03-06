import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-20">
      <div className="relative w-full self-center max-w-md aspect-3/4 md:min-w-sm md:self-auto">
        <Image
          src="/images/who-i-am.jpg"
          fill
          objectFit="cover"
          alt="Janisse Constable portrait"
          loading="lazy"
        />
      </div>
      <div className="max-w-xl">
        <p className="text-xs tracking-[0.3em] uppercase mb-4">À propos</p>
        <h2>Qui suis-je ?</h2>
        <div className="space-y-5">
          <p>
            Je m’appelle Janisse, j’ai 25 ans, j’ai grandi dans un environnement
            multi-culturel, entre origines guyanaises et polonaises et un
            parcours universitaire en Floride. Je suis diplômée d’un master en
            droit et en éthique des affaires et je travaille depuis deux ans
            dans le domaine de la Compliance.
          </p>
          <p>
            Originaire du Val d’Oise, je suis fière d’être francilienne et
            d’habiter depuis un an dans les Hauts‑de‑Seine, pour l&apos;attractivité
            économique, culturelle, la qualité de vie, et la proximité avec
            Paris. Je m’y sens merveilleusement bien.
          </p>
          <p>
            Même s’il est loin d&apos;être terminé, mon parcours jusqu&apos;à
            cette candidature représente l’aboutissement d’un long chemin
            personnel, l’apprentissage de valeurs, la quête de confiance en soi
            et surtout, de la discipline, de la connaissance de soi-même et du
            monde qui nous entoure.
          </p>
          <p>
            Animée par l’altruisme, ce qui me tient à cœur est l’impact que l’on
            peut avoir sur les autres. J’aspire à vivre une expérience unique à
            travers la rencontre de nouveaux horizons, de nouvelles personnes,
            l’engagement, le partage, et la diffusion d’énergies positives
            capables d’apporter un sourire, même dans les moments les plus
            simples.
          </p>
          <p>
            Plus qu’une couronne, c’est l’opportunité de servir, de représenter
            dignement et sincèrement, inspirer, défendre des causes qui nous
            tiennent à coeur et rendre fiers ceux que je représenterai, tout en
            restant simplement moi-même et en montrant que l’on peut aller aussi
            loin que l’on souhaite en restant fidèle à soi-même.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
