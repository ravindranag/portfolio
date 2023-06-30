import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { forwardRef, useEffect, useRef } from "react"
import SocialLinks from "../../root/components/SocialLinks"
import { Link } from "react-router-dom"

const Intro = forwardRef(() => {
	return (
		<Container 
			maxWidth='md'
		>
			<Stack padding='80px 16px' gap='32px' justifyContent='space-between' alignItems='center' overflow='hidden'>
				<Stack
					position='relative'
				>
					<Typography
						variant="cursive"
						fontSize={128}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							filter: 'blur(14px)',
							background: 'linear-gradient(#ADE0FE, #9756EE85, #E537C076, #FE180069, #FE90AF35)',
							backgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							pointerEvents: 'none'
						}}
					>
						ravindra
					</Typography>
					<Box
						component='img'
						src='/images/headshot.png'
						width={200}
						height={200}
						sx={{
							borderRadius: '300px',
							filter: 'grayscale(100%)',
							'&:hover': {
								filter: 'grayscale(30%)'
							},
							transition: 'filter 300ms',
						}}
					/>
				</Stack>
				<Stack id='about' gap='32px'>
					<Stack gap='8px' maxWidth='500px' id='intro' alignItems='center'>
						<Typography variant='displaySmall' textAlign='center'>
							Hi, I am Ravindra
						</Typography>
						<Typography variant='titleLarge' textAlign='center'>
							A CS undergrad & Full Stack developer based in India looking for full-time opportunities.
						</Typography>
					</Stack>
					<Stack id='socials' gap='8px' alignItems='center' direction='row' justifyContent='center'>
						<Button variant="contained" color="neutral" href='#work'>
							See my work
						</Button>
						<SocialLinks />
					</Stack>
				</Stack> 
			</Stack>
		</Container>
	)
})

export default Intro