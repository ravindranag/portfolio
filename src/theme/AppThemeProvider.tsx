import { ThemeProvider, createTheme } from "@mui/material"
import { PropsWithChildren } from "react"
import typographyOptions from "./typography"
import lightPalette from "./palette.light"
// import darkPalette from "./palette.dark"
import componentOverrides from "./components"

declare module "@mui/material/styles" {
	interface Palette {
		primaryContainer: Palette['primary']
		surface: Palette['primary']
		neutral: Palette['primary']
		surfaceVariant: Palette['primary']
	}

	interface PaletteOptions {
		primaryContainer?: PaletteOptions['primary']
		surface?: PaletteOptions['primary']
		neutral?: PaletteOptions['primary']
		surfaceVariant?: PaletteOptions['primary']
	}
}

const AppThemeProvider = ({children}: PropsWithChildren) => {
	const theme = createTheme({
		typography: typographyOptions,
		palette: lightPalette,
		components: componentOverrides,
		shape: {
			borderRadius: 0
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 1000,
				lg: 1280,
				xl: 1536
			}
		},
		mixins: {
			toolbar: {
				minHeight: 0
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