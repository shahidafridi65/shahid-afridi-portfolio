"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import Navigation from "@/components/Navigation";
import Loading from "@/components/Loading";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<ThemeProvider>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<Navigation />
					{children}
				</>
			)}
		</ThemeProvider>
	);
}