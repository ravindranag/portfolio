'use client'

import { Stack } from "@mui/material"
import { PropsWithChildren } from "react"

const HomeLayout = ({children}: PropsWithChildren) => {
	return (
		<Stack flexGrow={1}>
			Home layout
			{children}
		</Stack>
	)
}

export default HomeLayout