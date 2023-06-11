'use client'

import { Stack } from "@mui/material"
import { PropsWithChildren } from "react"
import Header from "./components/Header/Header"

const HomeLayout = ({children}: PropsWithChildren) => {
	return (
		<Stack flexGrow={1}>
			<Header />
			{children}
		</Stack>
	)
}

export default HomeLayout