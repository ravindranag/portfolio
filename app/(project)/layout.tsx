'use client'

import { Stack } from "@mui/material"
import { PropsWithChildren } from "react"

const Projectlayout = ({children}: PropsWithChildren) => {
	return (
		<Stack>
			Project layout
			{children}
		</Stack>
	)
}	

export default Projectlayout