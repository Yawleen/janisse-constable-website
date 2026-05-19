'use client';

import { Fragment, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TimelineSeparator from '../TimelineSeparator';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps: {
    year: string;
    title: string;
    description: string;
  }[] = [
    {
      year: '2000',
      title: 'Les racines',
      description:
        'Je suis née à Pontoise et j’ai grandi à Cergy, dans le Val d’Oise, entre culture francilienne et guyanaise. C’est dans cet environnement que se sont construites mes valeurs, mon parcours scolaire et mon ambition, jusqu’à l’obtention de mon master en Droit et en Éthique des Affaires à l’âge de 24 ans.',
    },
    {
      year: '2025',
      title: 'Un nouveau départ',
      description:
        "J'ai finalisé mes études aux Etats-Unis, en Floride, où j'ai vécu une expérience exceptionnelle riche en rencontres et en moments uniques.\n\nPuis je suis rentrée en France avec l'envie de m'installer près de Paris pour y débuter ma carrière professionnelle. C'est là que je me suis installée dans les Hauts-De-Seine, à Nanterre, avec ma petite sœur, puis j'ai intégré un cabinet de consulting où je suis aujourd'hui consultante spécialisée en éthique des affaires.",
    },
    {
      year: '2026',
      title: 'Un rêve qui devient réalité',
      description:
        "Je me suis vite sentie merveilleusement bien dans les Hauts-De-Seine, et j'ai ressenti l'envie de voir plus loin et de réaliser de nouveaux projets. J'ai donc enfin tenté de concrétiser un rêve longtemps considéré comme inatteignable. J'ai approché le Comité Miss Hauts-de-Seine qui m'a sélectionnée pour le casting et l'élection, qui ont conduit à me nommer Miss Hauts-De-Seine 2026.\n\nMon parcours est le reflet d'un chemin personnel rempli de quêtes de discipline, de confiance et de résilience à travers les épreuves de la jeunesse. Je souhaite avant tout être une Miss engagée avec le cœur, la sincérité et la bienveillance, capable d'aider, d'encourager, de motiver et d'avoir un impact positif sur les personnes que je représente.\n\nCette aventure est l'opportunité d'utiliser un titre à bon escient, là où il y en a besoin. C'est aussi l'occasion de s'améliorer, se surpasser, s'ouvrir à de nouveaux horizons et vous faire rêver à travers cette expérience !",
    },
  ];

  const changeActiveIndex = (index: number) => setActiveIndex(index);

  const goPrev = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? steps.length - 1 : prevIndex - 1
    );

  const goNext = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === steps.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <section className="text-center">
      <p className="subtitle">Mon parcours</p>
      <h2 className="mb-15 md:mb-20">
        Un chemin, <span className="block italic">une histoire</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-6 md:mb-8">
          {steps.map(({ year }, index) => (
            <Fragment key={year}>
              <button
                onClick={() => changeActiveIndex(index)}
                className={`font-serif text-lg tracking-wider relative px-2 md:px-4 py-3 cursor-pointer transition-all duration-700 md:text-xl ${
                  activeIndex === index
                    ? 'text-primary scale-120'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Année ${year}`}
              >
                {year}
              </button>
              {index < steps.length - 1 && <TimelineSeparator />}
            </Fragment>
          ))}
        </div>
        <div key={activeIndex} className="fade-in">
          <p className="font-serif italic text-lg text-primary tracking-wider mb-6 md:mb-8 md:text-xl">
            Chapitre {activeIndex + 1} / {steps.length}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl italic mb-6 leading-tight">
            {steps[activeIndex].title}
          </h3>
          <div className="leading-relaxed space-y-4 mb-12 md:mb-16">
            {steps[activeIndex].description
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-10">
          <button
            onClick={goPrev}
            className="group flex items-center gap-2 hover:text-primary transition-colors duration-500 cursor-pointer"
            aria-label="Étape précédente"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
            <span className="text-xs tracking-[0.3em] uppercase md:text-sm">
              Précédent
            </span>
          </button>
          <span className="h-px w-10 md:w-16 bg-secondary" />
          <button
            onClick={goNext}
            className="group flex items-center gap-2 hover:text-primary transition-colors duration-500 cursor-pointer"
            aria-label="Étape suivante"
          >
            <span className="text-xs tracking-[0.3em] uppercase md:text-sm">
              Suivant
            </span>
            <ChevronRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
