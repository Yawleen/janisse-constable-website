import { ElementType } from 'react';
import {
  CalendarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import VoteInfo from '../VoteInfo';
import VoteByRegion from '../VoteByRegion';
import { SMS_VOTE } from '@/constants/vote';

const voteInfo: {
  icon: ElementType;
  title: string;
  description: React.ReactNode;
  info?: string;
}[] = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Votez par SMS',
    description: (
      <>
        <p className="md:hidden">
          <strong>Sélectionnez votre région ci-dessous</strong> et{' '}
          <strong>cliquez sur le bouton &quot;Voter&quot;</strong> pour me
          soutenir.
        </p>
        <p className="hidden md:flex flex-col gap-2">
          <span>
            Envoyez <strong>{SMS_VOTE.keyword}</strong>
          </span>
          au
          <span className="flex gap-6">
            <span className="max-w-25">
              <strong>{SMS_VOTE.regions.france.number}</strong>{' '}
              <span className="region">
                pour voter depuis la{' '}
                <strong>{SMS_VOTE.regions.france.label}</strong>
              </span>
            </span>
            <span className="max-w-25">
              <strong>{SMS_VOTE.regions.reunion.number}</strong>{' '}
              <span className="region">
                pour voter depuis la{' '}
                <strong>{SMS_VOTE.regions.reunion.label}</strong>
              </span>
            </span>
            <span className="max-w-25">
              <strong>{SMS_VOTE.regions.antilles.number}</strong>{' '}
              <span className="region">
                pour voter depuis les{' '}
                <strong>{SMS_VOTE.regions.antilles.label}</strong>
              </span>
            </span>
          </span>
        </p>
      </>
    ),
    info: `1 SMS = 1 vote ; jusqu'à 50 votes / jour ; ${SMS_VOTE.price} + coût d’un SMS selon votre opérateur`,
  },
  {
    icon: CalendarIcon,
    title: 'Date limite',
    description: (
      <>
        Les votes sont ouverts jusqu&apos;au{' '}
        <strong>samedi 18 avril, 20h</strong>.
      </>
    ),
  },
];

const Vote = () => {
  return (
    <section className="relative text-center">
      <p className="subtitle">Soutien</p>
      <h2>Comment voter ?</h2>
      <p className="mb-12 md:mb-20">
        Votre vote compte énormément. <br /> Un petit vote peut faire la
        différence.
      </p>
      <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto md:grid-cols-2 mb-14 md:mb-20">
        {voteInfo.map((info, index) => {
          const Icon = info.icon;

          return (
            <VoteInfo
              key={index}
              icon={<Icon className="icon" />}
              title={info.title}
              description={info.description}
              info={info.info}
            />
          );
        })}
      </div>
      <VoteByRegion />
    </section>
  );
};

export default Vote;
