import { ElementType } from 'react';
import {
  SparklesIcon,
  CheckBadgeIcon,
  SunIcon,
  FaceSmileIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Value from '../ui/Value';

const values: { icon: ElementType; title: string; description: string }[] = [
  {
    icon: SparklesIcon,
    title: 'Authenticité',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Engagement',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: SunIcon,
    title: 'Positivité',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Joie de vivre',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: UserGroupIcon,
    title: 'Ouverture aux autres',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Discipline',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Résilience',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: HeartIcon,
    title: 'Courtoisie',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Values = () => {
  return (
    <section className="bg-[#ebe6df] text-center">
      <p className="subtitle">Mes valeurs</p>
      <h2>
        Pourquoi voter <span className="block italic">pour moi ?</span>
      </h2>
      <div className="grid max-w-6xl mx-auto gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-12 md:mt-20">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <Value
              key={value.title}
              icon={
                <Icon className="size-7 md:size-9 text-primary stroke-[1.2px]" />
              }
              text={value.title}
              description={value.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Values;
