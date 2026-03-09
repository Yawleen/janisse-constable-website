import { ReactNode } from 'react';

type eventInfoProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const EventInfo = ({ icon, title, description }: eventInfoProps) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-sm">
      <div className="mb-4">{icon}</div>
      <p className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-1">
        {title}
      </p>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default EventInfo;
