import { Stack } from "@mui/material"
import { PropsWithChildren } from "react"

const Background = ({children}: PropsWithChildren) => {
	return (
		<Stack width='100%' minHeight='100vh' bgcolor='surface.main'>
			{children}
		</Stack>
	)
}

export default Background