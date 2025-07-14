import { ReactNode } from 'react';

export interface CardRootProps {
  children: ReactNode;
}
export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="border-space-dark/40 block h-full w-full grid-cols-3 gap-x-5 rounded-3xl border p-5 md:max-w-2xl xl:grid xl:max-w-6xl">
      {children}
    </div>
  );
}
