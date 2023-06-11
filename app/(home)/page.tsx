'use client'

import { Button, Container, Typography, Stack } from "@mui/material"
import Link from "next/link"

const RootPage = () => {
	return (
		<Container maxWidth='md' sx={{ border: '1px solid' }}>
			<Typography>Hi Rv</Typography>
			<Button variant="contained">Contact</Button>
			<Link href='/project/678'>project detail</Link>
		</Container>
	)
}

export default RootPage