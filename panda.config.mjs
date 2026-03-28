import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	globalFontface: {
		CabinetGrotesk: {
			src: 'url(/fonts/CabinetGrotesk-Variable.woff2) format(woff2)',
			fontStyle: 'normal',
			fontDisplay: 'swap'
		}
	},

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {},
			semanticTokens: {}
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
	prefix: {
		className: "rv",
		cssVar: "rv",
	},

	globalVars: {
		'--rv-font-family': 'CabinetGrotesk, sans-serif'
	},

	globalCss: {
		html: {
			fontFamily: 'var(--rv-font-family), sans-serif',
			
		},
		'p,h1,h2,h3,h4,h5,h6': {
			color: 'var(--rv-colors-gray-950)'
		}
	},

	jsxFramework: 'react'
});
