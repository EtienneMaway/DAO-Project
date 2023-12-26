/** @format */
"use client";

import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

// const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

const getLibrary = async (provider: any) => {
	return new Web3Provider(provider);
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased dark:bg-[#262936]",
					fontSans.variable
				)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className='relative flex flex-col h-screen'>
						<main className='container mx-auto min-w-7xl px-6 flex-grow'>
							{/* <Web3ReactProvider getLibrary={getLibrary}> */}
							<Navbar />
							{children}
							{/* </Web3ReactProvider> */}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
