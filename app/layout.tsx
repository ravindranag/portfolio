import { Metadata } from "next"
import React, { PropsWithChildren } from "react"
import '../styles/globals.css'
import AppThemeProvider from "@/theme/AppThemeProvider"


export const metadata: Metadata = {
	title: 'Ravindra Nag',
	icons: '/favicon/favicon.ico'
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body>
				<AppThemeProvider>
					{children}
				</AppThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout