import { ReactNode } from "react";

export interface CardRootProps {
	children: ReactNode;
}
export function CardRoot({ children }: CardRootProps) {
	return (
		<div className="w-full xl:max-w-6xl md:max-w-xl gap-x-5  h-full block xl:grid grid-cols-3 border border-space-dark/40 rounded-3xl p-5">
			{children}
		</div>
	);
}
