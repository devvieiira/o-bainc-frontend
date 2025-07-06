import { ReactNode } from "react";

export interface CardImageProps {
	children: ReactNode;
}

export function CardImage({ children }: CardImageProps) {
	return <div className="w-full col-span-1">{children}</div>;
}
