import { Instagram } from 'lucide-react';

const actions: {
  category: string;
  value: string;
  title: string;
  subtitle: string;
  description: string;
  instagram?: {
    name: string;
    url: string;
  };
}[] = [
  {
    category: 'Santé',
    value: 'Sororité',
    title: 'Lutte contre les cancers féminins',
    subtitle: 'Informer pour sauver',
    description:
      'Je porte la voix des femmes face au manque d’information et d’accès aux soins de prévention liés aux cancers féminins. Je veux contribuer à lever les tabous, rendre l’information plus accessible et encourager chacune à prendre soin de sa santé.',
    instagram: {
      name: 'Pour Elles',
      url: 'https://www.instagram.com/pourelles_afrique/?hl=en',
    },
  },
  {
    category: 'Éducation',
    value: 'Bienveillance',
    title: 'Lutte contre le harcèlement scolaire',
    subtitle: 'Écouter et protéger',
    description:
      'Je m’engage auprès des plus jeunes dans la lutte contre le harcèlement scolaire et le cyberharcèlement. À travers des rencontres dans les collèges et lycées, je veux créer des espaces de dialogue et d’écoute et sensibiliser les jeunes.',
  },
];

const Actions = () => {
  return (
    <section className="text-center">
      <p className="subtitle">Engagements</p>
      <h2>
        Mes actions <span className="block italic">en tant que Miss</span>
      </h2>

      <div className="grid max-w-6xl mx-auto gap-20 mt-12 md:gap-20 md:grid-cols-2 md:mt-20">
        {actions.map((action) => (
          <article key={action.title}>
            <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-2 md:mb-3">
              {action.category}
            </p>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-2 border border-primary/30 px-4 py-1.5 rounded-full md:text-sm md:mb-3">
              {action.value}
            </span>
            <h3 className="text-2xl md:text-3xl mb-2 leading-tight md:mb-3">
              {action.title}
            </h3>
            <span className="block text-sm italic mb-4">{action.subtitle}</span>
            <p className="text-sm leading-relaxed md:text-base">
              {action.description}
            </p>
            {action.instagram && (
              <a
                href={action.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex justify-center items-center gap-1 text-xs mt-4"
              >
                <Instagram size={15} strokeWidth={2.5} />
                {action.instagram.name}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Actions;
