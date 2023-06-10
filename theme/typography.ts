import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const getTypographyOptions = (palette: Palette): TypographyOptions => ({
	fontFamily: 'Space Grotesk',
	allVariants: {
		color: palette.text.primary
	}
})

export default getTypographyOptions