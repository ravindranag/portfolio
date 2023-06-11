import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";


declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		h1: false
		h2: false
		h3: false
		h4: false
		h5: false
		h6: false
		subtitle1: false
		subtitle2: false
		body1: false
		body2: false
		caption: false
		overline: false

		displayLarge: true
		displayMedium: true
		displaySmall: true

		headlineLarge: true
		headlineMedium: true
		headlineSmall: true

		titleLarge: true
		titleMedium: true
		titleSmall: true

		labelLarge: true
		labelMedium: true
		labelSmall: true

		bodyLarge: true
		bodyMedium: true
		bodySmall: true

		spaceGrotesk: true
	}
}

declare module "@mui/material/styles" {
	interface TypographyVariants {
		displayLarge: CSSProperties
		displayMedium: CSSProperties
		displaySmall: CSSProperties

		headlineLarge: CSSProperties
		headlineMedium: CSSProperties
		headlineSmall: CSSProperties

		titleLarge: CSSProperties
		titleMedium: CSSProperties
		titleSmall: CSSProperties

		labelLarge: CSSProperties
		labelMedium: CSSProperties
		labelSmall: CSSProperties

		bodyLarge: CSSProperties
		bodyMedium: CSSProperties
		bodySmall: CSSProperties

		spaceGrotesk: CSSProperties
	}
	interface TypographyVariantsOptions {
		displayLarge?: CSSProperties
		displayMedium?: CSSProperties
		displaySmall?: CSSProperties

		headlineLarge?: CSSProperties
		headlineMedium?: CSSProperties
		headlineSmall?: CSSProperties

		titleLarge?: CSSProperties
		titleMedium?: CSSProperties
		titleSmall?: CSSProperties

		labelLarge?: CSSProperties
		labelMedium?: CSSProperties
		labelSmall?: CSSProperties

		bodyLarge?: CSSProperties
		bodyMedium?: CSSProperties
		bodySmall?: CSSProperties

		spaceGrotesk?: CSSProperties
	}
}


const getTypographyOptions = (palette: Palette): TypographyOptions => ({
	fontFamily: 'Space Grotesk',
	allVariants: {
		color: palette.text.primary
	},
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 600,
	displayLarge: {
		fontFamily: 'Righteous',
		fontSize: '57px',
		lineHeight: '64px',
		letterSpacing: '-0.25px',
		fontWeight: 400
	},
	displayMedium: {
		fontFamily: 'Righteous',
		fontSize: '45px',
		lineHeight: '52px',
		letterSpacing: '0px',
		fontWeight: 400
	},
	displaySmall: {
		fontFamily: 'Righteous',
		fontSize: '36px',
		lineHeight: '44px',
		letterSpacing: '0px',
		fontWeight: 400
	},

	headlineLarge: {
		fontFamily: 'Righteous',
		fontSize: '32px',
		lineHeight: '40px',
		letterSpacing: '0px',
		fontWeight: 400
	},
	headlineMedium: {
		fontFamily: 'Righteous',
		fontSize: '28px',
		lineHeight: '36px',
		letterSpacing: '0px',
		fontWeight: 400
	},
	headlineSmall: {
		fontFamily: 'Righteous',
		fontSize: '24px',
		lineHeight: '32px',
		letterSpacing: '0px',
		fontWeight: 400
	},

	titleLarge: {
		fontSize: '22px',
		lineHeight: '28px',
		letterSpacing: '0px',
		fontWeight: 400
	},
	titleMedium: {
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
		fontWeight: 500
	},
	titleSmall: {
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 500
	},

	labelLarge: {
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 500
	},
	labelMedium: {
		fontSize: '12px',
		lineHeight: '16px',
		letterSpacing: '0.5px',
		fontWeight: 500
	},
	labelSmall: {
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.5px',
		fontWeight: 500
	},

	bodyLarge: {
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.5px',
		fontWeight: 400
	},
	bodyMedium: {
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.25px',
		fontWeight: 400
	},
	bodySmall: {
		fontSize: '12px',
		lineHeight: '16px',
		letterSpacing: '0px',
		fontWeight: 400
	},
	button: {
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 500
	},
	spaceGrotesk: {
		fontSize: 'inherit',
		fontFamily: 'Space Grotesk',
		fontWeight: 'inherit',
		letterSpacing: 'inherit'
	}
})

export default getTypographyOptions