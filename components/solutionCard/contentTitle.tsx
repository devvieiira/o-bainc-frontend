import type { ReactNode } from "react";

export interface TitleProps {
	children: ReactNode;
}

export function Title({ children }: TitleProps) {
	return <h2 className="text-xl font-medium mt-8">{children}</h2>;
}
