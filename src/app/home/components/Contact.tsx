import { Button, Container, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Contact = () => {
	return (
		<Container
			maxWidth='md'
		>
			<Stack padding='80px 16px' gap='20px' alignItems='center'>
				<Typography variant='titleMedium'>
					I'm also interested in freelance opportunities
				</Typography>
				<Link to='mailto:ravindranag52@gmail.com' target='_blank'>
					<Button
						variant='contained'
						color='neutral'
					>
						Tell me about your project
					</Button>
				</Link>
			</Stack>
		</Container>
	)
}

export default Contact