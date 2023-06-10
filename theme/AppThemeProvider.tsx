'use client'

import { ThemeProvider, createTheme } from "@mui/material"
import { PropsWithChildren, useEffect } from "react"
import getTypographyOptions from "./typography"
import useAppThemeStore, { ThemeMode } from "@/stores/useAppThemeStore"



declare module "@mui/material" {
	interface Palette {
		onPrimary: Palette['primary']
		primaryContainer: Palette['primary']
		onPrimaryContainer: Palette['primary']

		onSecondary: Palette['primary']
		secondaryContainer: Palette['primary']
		onSecondaryContainer: Palette['primary']

		tertiary: Palette['primary']
		onTertiary: Palette['primary']
		tertiaryContainer: Palette['primary']
		onTertiaryContainer: Palette['primary']

		surface: Array<string>
	}

	interface PaletteOptions {
		onPrimary?: PaletteOptions['primary']
		primaryContainer?: PaletteOptions['primary']
		onPrimaryContainer?: PaletteOptions['primary']

		onSecondary?: PaletteOptions['primary']
		secondaryContainer?: PaletteOptions['primary']
		onSecondaryContainer?: PaletteOptions['primary']

		tertiary?: PaletteOptions['primary']
		onTertiary?: PaletteOptions['primary']
		tertiaryContainer?: PaletteOptions['primary']
		onTertiaryContainer?: PaletteOptions['primary']

		surface?: Array<string>
	}
}

const AppThemeProvider = ({children}: PropsWithChildren) => {
	const [setThemeMode] = useAppThemeStore(state => [state.setThemeMode])

	useEffect(() => {
		const localThemeMode = localStorage.getItem('themeMode')
		if(localThemeMode) {
			setThemeMode(localThemeMode as ThemeMode)
		}
	}, [setThemeMode])

	const theme = createTheme({
		typography: (palette) => getTypographyOptions(palette)
	})

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default AppThemeProvider