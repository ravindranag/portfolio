import { Container, Stack, Typography } from "@mui/material"
import SocialLinks from "./SocialLinks"

const Footer = () => {
	return (
		<Container
			maxWidth='md'
			sx={{
				borderTop: '1px solid',
				borderColor: 'divider'
			}}
		>
			<Stack direction='row' justifyContent='space-between' padding='64px 16px'>
				<Typography variant='bodyMedium'>&copy; {(new Date()).getFullYear()} All rights reserved.</Typography>
				<SocialLinks />
			</Stack>
		</Container>
	)
}

export default Footer