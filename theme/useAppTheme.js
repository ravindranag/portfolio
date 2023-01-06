import { createTheme } from "@mui/material";
import typographyOptions from "./options/typographyOptions";

const useAppTheme = () => {
	const theme = createTheme({
		typography: typographyOptions
	})

	return theme
}

export default useAppTheme;