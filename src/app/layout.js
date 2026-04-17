import Header from "@/features/shared/Header";
import "@/index.css";

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
	title: "Ravindra Nag",
	description:
		"Hi, I'am Ravindra Nag. I'm a Software Engineer with a passion for awesome digital interactions. Check out my featured projects and career journey.",
	icons: {
		icon: "/favicon/favicon.ico",
		apple: "/favicon/apple-touch-icon.png",
	},
	manifest: "/favicon/site.webmanifest",
	keywords: ["Ravindra Nag", "Ravindra", "Nag", "Odisha", "Software Engineer"],
	other: {
		"google-adsense-account": "ca-pub-7669599904915438",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body id="root">
				<Header />
				{children}
			</body>
		</html>
	);
}
