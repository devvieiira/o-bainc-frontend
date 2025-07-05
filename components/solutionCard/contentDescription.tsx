import type { ReactNode } from "react";

export interface DescriptionProps {
	children: ReactNode;
}

export function Description({ children }: DescriptionProps) {
	return <p>{children}</p>;
}
