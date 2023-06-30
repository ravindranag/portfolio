import { Square } from "@mui/icons-material"
import { AppBar, Button, Container, Stack, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Logo = () => {
	return (
		<Stack direction='row' gap='12px' alignItems='center'>
			<Square 
				sx={{
					color: 'primary.main',
					width: '12px',
					height: '12px',
					transform: 'rotateZ(45deg)'
				}}
			/>
			<Typography variant='titleMedium'>/</Typography>
			<Typography variant='titleMedium'>~</Typography>
		</Stack>
	)
}


const Header = () => {
	return (
		<AppBar
			position='sticky'
			color='surface'
		>
			<Toolbar>
				<Container
					maxWidth='md'
					sx={{
						borderBottom: '1px solid',
						borderColor: 'divider'
					}}
				>
					<Stack direction='row' padding='16px' justifyContent='space-between'>
						<Logo />
						<Link to='mailto:ravindranag52@gmail.com' target='_blank'>
							<Button
								variant='contained'
								color='neutral'
							>
								Get in touch
							</Button>
						</Link>
					</Stack>
				</Container>
			</Toolbar>
		</AppBar>
	)
}

export default Header