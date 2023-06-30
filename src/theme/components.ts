import { Components } from "@mui/material";

const componentOverrides: Components = {
	MuiButton: {
		defaultProps: {
			fullWidth: false,
			disableElevation: true,
			disableRipple: true
		},
		styleOverrides: {
			root: {
				padding: '10px 24px',
				textTransform: 'none'
			}
		}
	},
	MuiContainer: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiToolbar: {
		defaultProps: {
			disableGutters: true
		}
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				borderRadius: 0
			}
		}
	},
	MuiBreadcrumbs: {
		styleOverrides: {
			separator: {
				margin: '0 4px'
			}
		}
	}
}

export default componentOverrides

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		neutral: true
	}
}

declare module "@mui/material/AppBar" {
	interface AppBarPropsColorOverrides {
		surface: true
	}
}