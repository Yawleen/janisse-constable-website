import { ReactNode } from 'react';

type voteInfoProps = {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  info?: string;
};

const VoteInfo = ({ icon, title, description, info }: voteInfoProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex justify-center items-center size-16 rounded-full border border-accent/20 mb-6">
        {icon}
      </div>
      <p className="text-xl md:text-2xl font-bold mb-3">{title}</p>
      <p className="text-sm md:text-base mb-3">{description}</p>
      {info && <p className="italic text-xs">{info}</p>}
    </div>
  );
};

export default VoteInfo;
