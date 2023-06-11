'use client'

import { PaletteColor, ThemeProvider, createTheme } from "@mui/material"
import { PropsWithChildren, useEffect } from "react"
import getTypographyOptions from "./typography"
import useAppThemeStore, { ThemeMode } from "@/stores/useAppThemeStore"
import lightPalette from "./palette.light"
import darkPalette from "./palette.dark"
import componentOverrides from "./components"

declare module "@mui/material" {
	interface Palette {
		primaryContainer: Palette['primary']
		secondaryContainer: Palette['primary']
		tertiary: Palette['primary']
		tertiaryContainer: Palette['primary']
		surface: Array<string>
	}

	interface PaletteOptions {
		primaryContainer?: PaletteOptions['primary']
		secondaryContainer?: PaletteOptions['primary']
		tertiary?: PaletteOptions['primary']
		tertiaryContainer?: PaletteOptions['primary']
		surface?: Record<string, string>
	}
}

const AppThemeProvider = ({children}: PropsWithChildren) => {
	const [setThemeMode, themeMode] = useAppThemeStore(state => [state.setThemeMode, state.themeMode])

	useEffect(() => {
		console.log(themeMode)
		const localThemeMode = localStorage.getItem('themeMode')
		if(localThemeMode === 'LIGHT' || localThemeMode === 'DARK') {
			console.log('local', localThemeMode)
			setThemeMode(localThemeMode as ThemeMode)
		}
	}, [setThemeMode,themeMode])

	const theme = createTheme({
		typography: (palette) => getTypographyOptions(palette),
		palette: themeMode === 'LIGHT' ? lightPalette : darkPalette,
		components: componentOverrides,
		shape: {
			borderRadius: 100
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 1000,
				lg: 1200,
				xl: 1536
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default AppThemeProvider