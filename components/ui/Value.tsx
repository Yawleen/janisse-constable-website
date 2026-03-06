import { ReactNode } from 'react';

type valuesProps = {
  icon: ReactNode;
  text: string;
  description: string;
};

const Value = ({ icon, text, description }: valuesProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-y-3">
      {icon}
      <p className="text-xl md:text-2xl">{text}</p>
      <p className="text-sm md:text-base max-w-xs">{description}</p>
    </div>
  );
};

export default Value;
