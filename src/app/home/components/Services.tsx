import { Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

type ServiceCardProps = {
title: string
	description: string
}

const ServiceCard = ({title, description}: ServiceCardProps) => {
	return (
		<Grid xs={12} sm={6} md={4} maxWidth='333.33px'>
			<Stack 
				padding='16px' 
				gap='16px'
				sx={{
					height: '100%',
					outline: '1px solid',
					outlineColor: theme => theme.palette.surfaceVariant.main
				}}
			>
				<Typography variant='titleLarge'>{title}</Typography>
				<Typography variant='bodyLarge'>{description}</Typography>
			</Stack>
		</Grid>
	)
}

const services = [
	{
		title: 'Web & App',
		description: 'Building dynamic websites & applications using the latest technologies prioritizing the best user experience.'
	},
	{
		title: 'UI & UX',
		description: 'Designing easy-to-use, beautiful, and enjoyable interfaces.'
	},
	{
		title: 'RESTful APIs',
		description: 'Brewing easy-to-integrate, secure and efficient APIs.'
	}
]


const Services = () => {
	return (
		<Container
			maxWidth='md'
		>
			<Stack padding='80px 16px' gap='20px'>
				<Typography variant='titleMedium' textAlign='center'>
					My skills
				</Typography>
				<Grid container justifyContent='center'>
					{services.map(s => (
						<ServiceCard 
							title={s.title}
							description={s.description}
							key={s.title}
						/>
					))}
				</Grid>
			</Stack>
		</Container>
	)
}

export default Services