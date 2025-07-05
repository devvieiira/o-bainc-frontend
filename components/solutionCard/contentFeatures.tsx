import type { ReactNode } from "react";

export interface FeaturesProps {
	children: ReactNode;
}

export function Features({ children }: FeaturesProps) {
	return <ul className="w-full space-y-3">{children}</ul>;
}
