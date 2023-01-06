import { Stack, Typography } from "@mui/material"

const Home = () => {
	return (
		<Stack
			minHeight='100vh'
			justifyContent='center'
			alignItems='center'
			padding='32px'
		>
			<Typography>
				Hi, I'm
			</Typography>
			<Typography
				variant='display.large.semiBold'
				textAlign='center'
			>
				Ravindra Nag
			</Typography>
		</Stack>
	)
}

export default Home