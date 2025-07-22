// components/ui/Button.tsx
import React from 'react';
import { cn } from '@/utils/cn';

type ButtonProps = {
  variant?: 'primary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  as = 'button',
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-[#0DD3F5] text-[#222] hover:bg-[#0bbdd6] hover:text-[#222] active:text-white',
  };

  const sizes = {
    sm: 'px-10 py-2 text-lg rounded-full font-roboto-medium ',
    md: 'px-12 py-2 text-lg  rounded-full font-roboto-medium',
    lg: 'px-14 py-3 text-lg rounded-full font-roboto-medium',
    xl: 'px-32 py-3 rounded-full text-[clamp(16px,1.1vw,20px)]',
  };

  const finalClass = cn(baseStyles, variants[variant], sizes[size], className);

  return as === 'a' ? (
    <a className={finalClass} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={finalClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
