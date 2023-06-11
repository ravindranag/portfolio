import { Metadata } from "next"
import React, { PropsWithChildren } from "react"
import '../styles/globals.css'
import AppThemeProvider from "@/theme/AppThemeProvider"
import GlobalStyledBackground from "@/components/GlobalStyledBackground/GlobalStyledBackground"


export const metadata: Metadata = {
	title: 'Ravindra Nag',
	icons: '/favicon/favicon.ico'
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body>
				<AppThemeProvider>
					<GlobalStyledBackground>
						{children}
					</GlobalStyledBackground>
				</AppThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout