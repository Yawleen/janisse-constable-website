import Link from 'next/link';
import Image from 'next/image';

const partners: { name: string; instagram: string; logo?: string }[] = [
  {
    name: 'Christophe Guillarme',
    instagram:
      'https://www.instagram.com/christopheguillarme?igsh=MTh5aDJhMzh4ZjNhaQ%3D%3D',
  },
  {
    name: 'Pimp My Derm',
    instagram:
      'https://www.instagram.com/pimpmyderm_facialiste?igsh=MWhsMmJxZnR3d2V1ZA%3D%3D',
  },
  {
    name: 'Gigi Esthetic',
    instagram: 'https://www.instagram.com/gigiesthetic_institut/',
    logo: '/logos/gigi-esthetic.png',
  },
  {
    name: 'Boudoir du Regard Rueil',
    instagram:
      'https://www.instagram.com/boudoirduregardrueil?igsh=a29vdHkxMWl2MWdu',
    logo: '/logos/boudoir-du-regard.png',
  },
];

const loopedPartners = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="text-center overflow-hidden">
      <p className="subtitle">Ils me soutiennent</p>
      <h2 className="mb-12 md:mb-16">
        Mes <span className="italic">partenaires</span>
      </h2>

      <div className="flex animate-scroll-gallery w-max">
        {loopedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="shrink-0 flex items-center mx-8 md:mx-14"
          >
            <Link
              href={partner.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label={`Voir le compte Instagram de ${partner.name}`}
            >
              {partner.logo && (
                <div className="relative size-15 md:size-20">
                  <Image
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="font-serif text-2xl md:text-3xl italic tracking-wide whitespace-nowrap opacity-80 hover:text-primary hover:opacity-100 transition-all duration-500">
                {partner.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
