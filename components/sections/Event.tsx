import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { ElementType } from 'react';
import EventInfo from '../EventInfo';

const eventInfo: {
  icon: ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: MapPinIcon,
    title: 'Lieu',
    description: 'Espace Pierre Bachelet, Dammarie-les-Lys (77)',
  },
  {
    icon: CalendarIcon,
    title: 'Date',
    description: 'Dimanche 20 septembre 2026',
  },
  {
    icon: ClockIcon,
    title: 'Heure',
    description: '16h30',
  },
];

const Event = () => {
  return (
    <section className="text-center">
      <p className="subtitle">Événement</p>
      <h2>
        Élection <span className="block italic">Miss Île-de-France 2026</span>
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
    </section>
  );
};

export default Event;
