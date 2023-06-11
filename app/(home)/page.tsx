'use client'

import { Button, Container, Typography, Stack } from "@mui/material"
import Link from "next/link"
import Hero from "./components/Hero/Hero"

const RootPage = () => {
	return (
		<Stack flexGrow={1}>
			<Hero />
		</Stack>
	)
}

export default RootPage