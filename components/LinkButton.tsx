import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'solid' | 'outline';
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  onClick?: () => void;
};

const LinkButton = ({
  href,
  children,
  isExternal = false,
  onClick,
  variant = 'solid',
}: ButtonProps) => {
  if (isExternal) {
    return (
      <a
        onClick={onClick}
        className={`btn ${variant === 'solid' ? 'btn-primary' : 'btn-outline'}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      onClick={onClick}
      className={`btn ${variant === 'solid' ? 'btn-primary' : 'btn-outline'}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
