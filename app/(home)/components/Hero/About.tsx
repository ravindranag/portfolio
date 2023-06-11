import { Button, IconButton, Stack, Typography } from "@mui/material"
import Link from "next/link"

const About = () => {
	return (
		<Stack gap='16px' padding='72px 32px' justifyContent='center' width={{ xs: '100%', sm: '50%' }}>
			<Stack>
				<Typography variant='displayMedium' color='primary.600'>
					<Typography variant='spaceGrotesk' color='text.primary' fontWeight={600}>Hey! I am{' '}</Typography>
					Ravindra
				</Typography>
				<Typography variant='titleLarge'>
					A Full Stack Developer based in India
				</Typography>
			</Stack>
			<Typography variant='titleMedium'>
				A CS Undergrad and a passionate developer dedicated to crafting exceptional user experiences through a comprehensive skill set and meticulous attention to detail.
			</Typography>
			<Stack direction='row' gap='10px'>
				<Link href='mailto:ravindranag52@gmail.com' target="_blank">
					<Button
						variant='contained'
					>
						Contact
					</Button>
				</Link>
			</Stack>
		</Stack>
	)
}

export default About