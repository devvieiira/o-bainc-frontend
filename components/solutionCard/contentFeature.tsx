import type { ReactNode } from 'react';
import Image from 'next/image';

export interface FeatureProps {
  children: ReactNode;
  icon: string;
}

export function Feature({ children, icon }: FeatureProps) {
  return (
    <li className="flex w-full items-center justify-start gap-x-4">
      <Image src={icon} alt="Ícone da feature" width={55} height={55} />
      <span>{children}</span>
    </li>
  );
}
