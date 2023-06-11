import { Components } from "@mui/material";

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		primaryContainer: true
		secondaryContainer: true
	}
}

const componentOverrides: Components = {
	MuiButton: {
		defaultProps: {
			disableElevation: true
		},
		styleOverrides: {
			root: {
				padding: '10px 24px',
				textTransform: 'none',
			}
		}
	},
	MuiContainer: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiTypography: {
		defaultProps: {
			variant: 'bodyLarge'
		}
	},
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiDrawer: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiBackdrop: {
		styleOverrides: {
			root: {
				backdropFilter: 'blur(2px)'
			}
		}
	},
	MuiToolbar: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiTab: {
		defaultProps: {
			disableRipple: true
		},
		styleOverrides: {
			root: {
				fontSize: '14px',
				lineHeight: '20px',
				letterSpacing: '0.1px',
				fontWeight: 500,
				textTransform: 'none',
			}
		}
	}
}

export default componentOverrides