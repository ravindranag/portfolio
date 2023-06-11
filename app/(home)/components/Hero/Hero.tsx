import { Container, Divider, Stack } from "@mui/material"
import About from "./About"
import Image from "next/image"

const Hero = () => {
	return (
		<Container maxWidth='md'>
			<Stack
				direction={{
					xs: 'column',
					sm: 'row'
				}}
				borderBottom='1px solid'
				borderColor='outlineVariant'
				justifyContent='center'
			>
				<About />
				<Divider 
					variant="fullWidth" 
					orientation="vertical"
					flexItem
					sx={{
						borderColor: 'outlineVariant'
					}}
				/>
				<Stack padding='72px 32px' alignItems='center' justifyContent='center' width={{ xs: '100%', sm: '50%' }}>
					<Image
						width={275}
						height={275}
						src='/headshot-rounded.png'
						alt='Ravindra Nag'
						style={{
							aspectRatio: 1,
							maxWidth: 275,
							minWidth: 100
						}}
					/>
				</Stack>
			</Stack>
		</Container>
	)
}

export default Hero