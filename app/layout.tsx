import type { Metadata, Viewport } from "next";
import { Noto_Sans_Georgian, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Coinhub",
	description: "Cryptocurrency news and information",
};

export const viewport: Viewport = {
	userScalable: false,
	initialScale: 1,
};

const font = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
