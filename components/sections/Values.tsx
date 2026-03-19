import { ElementType } from 'react';
import { SunIcon, HeartIcon, GiftIcon } from '@heroicons/react/24/outline';
import Value from '../ui/Value';

const values: { icon: ElementType; title: string; description: string }[] = [
  {
    icon: SunIcon,
    title: 'Positive',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: HeartIcon,
    title: 'Bienveillante',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: GiftIcon,
    title: 'Altruiste',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Values = () => {
  return (
    <section className="bg-[#ebe6df] text-center">
      <h2>
        Ce que mes proches disent <span className="block italic">de moi</span>
      </h2>
      <div className="grid max-w-6xl mx-auto gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-12 md:mt-20">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <Value
              key={value.title}
              icon={<Icon className="icon" />}
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
