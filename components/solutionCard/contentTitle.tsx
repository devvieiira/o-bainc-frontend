import type { ReactNode } from 'react';

export interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h2 className="mt-8 text-xl font-medium">{children}</h2>;
}
