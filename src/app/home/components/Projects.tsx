import { Box, Breadcrumbs, Container, Grid, Stack, Typography } from "@mui/material"
// import Grid from "@mui/material/Unstable_Grid2/Grid2"

type Project = {
	name: string
	stack: Array<string>
	image: string
	description: string
}

type ProjectCardProps = {
	project: Project
}

const projects: Project[] = [
	{
		name: 'Firechat',
		stack: ['React.js', 'Material UI', 'Socket.io'],
		image: '/images/firechat-shot.png',
		description: 'A real-time chat application with end-to-end encryption connecting you to your friends and family.'
	},
	{
		name: 'Attend 75',
		stack: ['Flutter', 'Firebase'],
		image: '/images/attend75-shot.png',
		description: 'An attendance tracking app for students.'
	},
	{
		name: 'Write It',
		stack: ['Next.js', 'Material UI', 'Express.js', 'Postgresql'],
		image: '/images/write-it-shot.png',
		description: 'A blog website with a rich text editor enabling blog authors to write and share their work with their followers.'
	},
]

const ProjectCard = ({project}: ProjectCardProps) => {
	return (
		<Grid xs={12} sm={6} md={4} maxWidth='333.33px'
			sx={{
				'&:hover': {
					zIndex: theme => theme.zIndex.mobileStepper
				}
			}}
		>
			<Stack
				padding='16px' 
				gap='24px'
				sx={{
					height: '100%',
					outline: '1px solid',
					outlineColor: theme => theme.palette.surfaceVariant.main,
					'&:hover': {
						outlineWidth: '2px',
						outlineColor: theme => theme.palette.surface.contrastText,
					},
					transition: 'all 100ms'
				}}
			>
				<Stack>
					<Typography variant='headlineSmall'>
						{project.name}
					</Typography>
					<Breadcrumbs separator='|'>
						{project.stack.map(s => (
							<Typography
								key={`${project.name}-${s}`}
								variant='labelSmall'
								color={theme => theme.palette.surfaceVariant.contrastText}
							>
								{s}
							</Typography>
						))}
					</Breadcrumbs>
				</Stack>
				<Box 
					component='img'
					sx={{
						width: '100%',
						aspectRatio: '800 / 600',
						// bgcolor: 'divider'
					}}
					src={project.image}
				/>
				<Typography
					variant='labelLarge'
					color={theme => theme.palette.surfaceVariant.contrastText}
				>
					{project.description}
				</Typography>
			</Stack>
		</Grid>
	)
}


const Projects = () => {
	return (
		<Container
			maxWidth='md'
			id="work"
		>
			<Stack gap='20px' padding='80px 16px'>
				<Typography variant='titleMedium' textAlign='center'>
					My best works
				</Typography>
				<Grid container justifyContent='center'>
					{projects.map(p => <ProjectCard project={p} key={p.name}/>)}
				</Grid>
			</Stack>
		</Container>
	)
}

export default Projects