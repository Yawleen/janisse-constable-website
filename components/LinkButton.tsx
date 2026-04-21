import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  href: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
};

const LinkButton = ({
  href,
  children,
  external = false,
  onClick,
  variant = 'solid',
}: ButtonProps) => {
  return (
    <Link
      onClick={onClick}
      className={`btn ${variant === 'solid' ? 'btn-primary' : 'btn-outline'}`}
      href={href}
      target={external ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
