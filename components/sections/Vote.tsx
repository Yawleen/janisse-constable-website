import { ElementType } from 'react';
import {
  CalendarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import VoteInfo from '../ui/VoteInfo';
import Button from '../ui/LinkButton';
import { SMS_VOTE } from '@/constants/vote';

const smsLink = `sms:${SMS_VOTE.number}?body=${encodeURIComponent(SMS_VOTE.keyword)}`;

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
        Envoyez <strong>{SMS_VOTE.keyword}</strong> par SMS au{' '}
        <strong>{SMS_VOTE.number}</strong> pour me soutenir.
      </>
    ),
    info: `1 SMS = 1 vote ; ${SMS_VOTE.price} + coût d’un SMS selon votre opérateur`,
  },
  {
    icon: CalendarIcon,
    title: 'Date limite',
    description: (
      <>
        Les votes sont ouverts jusqu&apos;au <strong>18 avril</strong>.
      </>
    ),
    // info: "Chaque vote compte, ne tardez pas !"
  },
];

const Vote = () => {
  return (
    <section className="text-center">
      <p className="subtitle">Soutien</p>
      <h2>Comment voter ?</h2>
      <p className="mb-12 md:mb-20">
        Votre vote compte énormément. <br /> Chaque SMS est un pas de plus vers
        la couronne.
      </p>
      <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto md:grid-cols-2 mb-16 md:mb-20">
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
      <div className="flex justify-center md:hidden">
        <Button href={smsLink}>
          Envoyer <span>{SMS_VOTE.keyword}</span> au{' '}
          <span>{SMS_VOTE.number}</span>
        </Button>
      </div>
    </section>
  );
};

export default Vote;
