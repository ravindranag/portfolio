'use client'

import { GlobalStyles, Stack, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

const GlobalStyledBackground = ({children}: PropsWithChildren) => {
	const theme = useTheme()

	return (
		<Stack width='100%' minHeight='100vh' bgcolor='surface.1'>
			<GlobalStyles 
				styles={{
					'*::selection': {
						backgroundColor: theme.palette.primary[600],
						color: theme.palette.primary.contrastText
					}
				}}
			/>
			{children}
		</Stack>
	)
}

export default GlobalStyledBackground