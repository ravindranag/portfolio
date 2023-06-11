'use client'

import { Stack, Typography } from "@mui/material"
import Link from "next/link"

const ProjectDetail = () => {
	return (
		<Stack>
			<Typography>Project detail page</Typography>
			<Link href='/'>Home</Link>
		</Stack>
	)
}

export default ProjectDetail