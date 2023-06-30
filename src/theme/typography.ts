import { Palette } from "@mui/material";
import { CSSProperties, TypographyOptions } from "@mui/material/styles/createTypography";

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

		cursive: true
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

		cursive: CSSProperties
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

		cursive?: CSSProperties
	}
}

const typographyOptions = (palette: Palette): TypographyOptions => ({
	fontFamily: 'Satoshi',
	allVariants: {
		color: palette.text.primary,
		fontFamily: 'Satoshi'
	},
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 900,
	displayLarge: {
		fontFamily: 'Satoshi',
		fontSize: '57px',
		lineHeight: '64px',
		letterSpacing: '-0.25px',
		fontWeight: 900,
		color: palette.text.primary,
	},
	displayMedium: {
		fontFamily: 'Satoshi',
		fontSize: '45px',
		lineHeight: '52px',
		letterSpacing: '0px',
		fontWeight: 900,
		color: palette.text.primary,
	},
	displaySmall: {
		fontFamily: 'Satoshi',
		fontSize: '36px',
		lineHeight: '44px',
		letterSpacing: '0px',
		fontWeight: 900,
		color: palette.text.primary,
	},

	headlineLarge: {
		fontFamily: 'Satoshi',
		fontSize: '32px',
		lineHeight: '40px',
		letterSpacing: '0px',
		fontWeight: 700,
		color: palette.text.primary,
	},
	headlineMedium: {
		fontFamily: 'Satoshi',
		fontSize: '28px',
		lineHeight: '36px',
		letterSpacing: '0px',
		fontWeight: 700,
		color: palette.text.primary,
	},
	headlineSmall: {
		fontFamily: 'Satoshi',
		fontSize: '24px',
		lineHeight: '32px',
		letterSpacing: '0px',
		fontWeight: 700,
		color: palette.text.primary,
	},

	titleLarge: {
		fontFamily: 'Satoshi',
		fontSize: '22px',
		lineHeight: '28px',
		letterSpacing: '0px',
		fontWeight: 400,
		color: palette.text.primary,
	},
	titleMedium: {
		fontFamily: 'Satoshi',
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
		fontWeight: 600,
		color: palette.text.primary,
	},
	titleSmall: {
		fontFamily: 'Satoshi',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 600,
		color: palette.text.primary,
	},

	labelLarge: {
		fontFamily: 'Satoshi',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 600,
		color: palette.text.primary,
	},
	labelMedium: {
		fontFamily: 'Satoshi',
		fontSize: '12px',
		lineHeight: '16px',
		letterSpacing: '0.5px',
		fontWeight: 600,
		color: palette.text.primary,
	},
	labelSmall: {
		fontFamily: 'Satoshi',
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.5px',
		fontWeight: 600,
		color: palette.text.primary,
	},

	bodyLarge: {
		fontFamily: 'Satoshi',
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.5px',
		fontWeight: 400,
		color: palette.text.secondary,
	},
	bodyMedium: {
		fontFamily: 'Satoshi',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.25px',
		fontWeight: 400,
		color: palette.text.secondary,
	},
	bodySmall: {
		fontFamily: 'Satoshi',
		fontSize: '12px',
		lineHeight: '16px',
		letterSpacing: '0px',
		fontWeight: 400,
		color: palette.text.secondary,
	},
	button: {
		fontFamily: 'Satoshi',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.1px',
		fontWeight: 600,
		color: palette.text.primary,
	},
	cursive: {
		fontFamily: 'Meddon',
	}
})

export default typographyOptions