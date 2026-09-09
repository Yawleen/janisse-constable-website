import { ElementType } from 'react';
import {
  CalendarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import VoteInfo from '../VoteInfo';
import { SMS_VOTE_IDF } from '@/constants/vote';
import LinkButton from '../LinkButton';

export const smsLink = `sms:${SMS_VOTE_IDF.number}?body=${encodeURIComponent(SMS_VOTE_IDF.keyword)}`;

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
          <strong>Cliquez sur le bouton &quot;Voter&quot;</strong> pour me
          soutenir.
        </p>
        <p className="hidden md:flex flex-col gap-2">
          <span>
            Envoyez <strong>{SMS_VOTE_IDF.keyword}</strong>
          </span>
          au
          <span>
            <strong className="block mb-2">{SMS_VOTE_IDF.number}</strong>{' '}
            <span className="region">
              Valable en <strong>France métropolitaine</strong> et dans les{' '}
              <strong>DOM-TOM</strong>.
            </span>
          </span>
        </p>
      </>
    ),
    info: `1 SMS = 1 vote ; jusqu'à 50 votes / jour ; ${SMS_VOTE_IDF.price} + coût d’un SMS selon votre opérateur`,
  },
  {
    icon: CalendarIcon,
    title: 'Date limite',
    description: (
      <>
        Les votes sont ouverts jusqu&apos;au{' '}
        <strong> dimanche 20 septembre à 12h</strong>.
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
      <div
        id="vote"
        className="flex justify-center md:invisible md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <LinkButton isExternal href={smsLink}>
          <span className="text-base font-bold">Voter</span>
        </LinkButton>
      </div>
    </section>
  );
};

export default Vote;
