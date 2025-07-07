import { ReactNode } from 'react';

export interface CardImageProps {
  children: ReactNode;
}

export function CardImage({ children }: CardImageProps) {
  return <div className="col-span-1 w-full">{children}</div>;
}
