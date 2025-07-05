import { ReactNode } from "react";

export interface CardRootProps {
	children: ReactNode;
}
export function CardRoot({ children }: CardRootProps) {
	return (
		<div className="w-full border border-space-dark/40 rounded-3xl p-5">
			{children}
		</div>
	);
}
