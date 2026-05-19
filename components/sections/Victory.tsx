import Image from 'next/image';

export default function Victory() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 lg:mb-20">
          <p className="subtitle">Le sacre — 18 avril 2026</p>
          <h2>
            Retour sur <span className="italic">une nuit</span>
            <br />
            qui a tout changé
          </h2>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 mb-16 lg:mb-24">
          <div className="relative aspect-3/4 lg:w-[25%] lg:h-150">
            <Image
              src="/images/image-victory-5.png"
              alt="Janisse couronnée Miss Hauts-de-Seine"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover lg:object-top"
              loading="lazy"
            />
          </div>

          <div className="flex gap-3 grow lg:flex-col lg:gap-5">
            <div className="relative grow aspect-square overflow-hidden lg:h-[60%]">
              <Image
                src="/images/image-victory-1.png"
                alt="Janisse marchant sur scène avant le couronnement"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover object-[center_-30%] scale-150 lg:object-[center_20px] lg:scale-125"
                loading="lazy"
              />
            </div>
            <div className="relative grow aspect-square overflow-hidden lg:h-[40%]">
              <Image
                src="/images/image-victory-2.png"
                alt="Janisse sur scène attendant les résultats"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover object-[center_-10px] scale-125"
                loading="lazy"
              />
            </div>
          </div>

          <div className="relative aspect-3/4 lg:w-[45%] lg:h-150">
            <Image
              src="/images/image-victory-4.png"
              alt="Janisse sur scène avec son bouquet de fleurs, entourée des 1ère et 2ème dauphines"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[52.5%_center]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:flex lg:gap-14">
          <div>
            <blockquote className="font-serif text-2xl italic leading-[1.2] lg:text-3xl">
              « Une éternelle gratitude. »
            </blockquote>
            <div className="w-12 h-px bg-primary my-8" />
          </div>

          <div className="space-y-6 leading-relaxed max-w-2xl">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 lg:text-sm lg:mb-5">
              Mon retour d&apos;expérience
            </p>
            <p>
              Ce jour fût un voyage à travers différentes émotions, passant par
              le stress, le plaisir, la satisfaction puis la fierté à
              l&apos;annonce des résultats. Il marque une toute première
              expérience que je n&apos;oublierai jamais mais aussi le reflet de
              deux mois d&apos;aventure avec une promotion inoubliable.
            </p>
            <p>
              Mais avant tout, j&apos;ai ressenti et je ressentirai
              éternellement de la gratitude auprès de mon comité, de mes amis et
              de ma famille, qui ont fait en sorte, tous autant qu&apos;ils
              sont, que j&apos;emprunte ce chemin et que je passe cette porte.
              Sans vous, rien n&apos;aurait été possible !
            </p>
            <p>
              Ce que je retiens, c&apos;est qu&apos;il faut profiter de chaque
              instant tout en faisant en sorte de rien regretter : si je donne
              le meilleur de moi-même et si je reflète ce que j&apos;ai envie de
              refléter, je n&apos;aurai aucun regret, qu&apos;importe le
              résultat.
            </p>
            <p className="mb-10 lg:mb-14">
              Merci à vous ! Je suis fière d&apos;être la 8ème ambassadrice des
              Hauts-De-Seine et les représenterai dignement !
            </p>

            <div className="flex flex-col gap-6 pt-8 border-t lg:flex-row lg:gap-10">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-2 lg:text-sm">
                  Date
                </p>
                <p className="font-serif text-lg lg:text-xl italic">
                  18 avril 2026
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-2 lg:text-sm">
                  Lieu
                </p>
                <p className="font-serif text-lg lg:text-xl italic">
                  Salle Jean-Renoir — Bois-Colombes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
