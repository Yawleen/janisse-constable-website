import Button from '../ui/LinkButton';
import EventInfo from '../ui/EventInfo';
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { ElementType } from 'react';

const eventInfo: {
  icon: ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: MapPinIcon,
    title: 'Lieu',
    description:
      'Salle Jean-Renoir Cinéma - Théâtre, Villa des Aubépines, Bois-Colombes, France',
  },
  {
    icon: CalendarIcon,
    title: 'Date',
    description: 'Samedi 18 avril 2026',
  },
  {
    icon: ClockIcon,
    title: 'Heure',
    description: 'De 18h15 à 22h45',
  },
];

const Event = () => {
  return (
    <section className="text-center">
      <p className="subtitle">Événement</p>
      <h2>
        Envie d&apos;assister{' '}
        <span className="block italic">à l&apos;élection ?</span>
      </h2>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:items-start md:gap-2 max-w-4xl mx-auto mb-18 md:mb-20 mt-12 md:mt-20">
        {eventInfo.map((info, index) => {
          const Icon = info.icon;

          return (
            <EventInfo
              key={index}
              icon={<Icon className="icon" />}
              title={info.title}
              description={info.description}
            />
          );
        })}
      </div>
      <div className="mb-10 md:mb-12">
        <Button
          href="https://www.billetweb.fr/election-miss-hauts-de-seine-2026"
          external
        >
          <span className="font-normal uppercase text-sm md:text-base tracking-[0.2em]">
            Réserver ma place
          </span>
        </Button>
      </div>
      <p className="text-sm md:texte-base italic">
        * Les places sont limitées, réservez dès maintenant pour garantir votre
        présence à cet événement exceptionnel.
      </p>
    </section>
  );
};

export default Event;
