import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  href: string;
  children: ReactNode;
  external?: boolean;
};

const Button = ({
  href,
  children,
  external = false,
  variant = 'solid',
}: ButtonProps) => {
  return (
    <a
      className={`btn ${variant === 'solid' ? 'btn-primary' : 'btn-outline'}`}
      href={href}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
