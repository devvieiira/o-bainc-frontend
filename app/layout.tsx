import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({});
export const metadata: Metadata = {
	title: "O Bainc",
	description: "O Futuro do crédito começa aqui",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}  antialiased h-svh w-svw md:h-screen md:w-screen dark`}
			>
				{children}
			</body>
		</html>
	);
}
