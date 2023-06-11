import { Components } from "@mui/material";

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
	}
}

export default componentOverrides