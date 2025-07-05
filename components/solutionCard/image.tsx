import { ReactNode } from "react";

export interface CardImageProps {
	children: ReactNode;
}

export function CardImage({ children }: CardImageProps) {
	return <>{children}</>;
}
