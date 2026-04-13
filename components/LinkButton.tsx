import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  href: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
};

const Button = ({
  href,
  children,
  external = false,
  onClick,
  variant = 'solid',
}: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      className={`btn ${variant === 'solid' ? 'btn-primary' : 'btn-outline'}`}
      href={href}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
