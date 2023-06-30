import { Stack } from "@mui/material"
import GitHubIcon from "../../../icons/GitHub"
import OutlinedIconButton from "../../../components/OutlinedIconButton"
import DribbbleIcon from "../../../icons/Dribbble"
import LinkedInIcon from "../../../icons/LinkedIn"
import { Link } from "react-router-dom"

const SocialLinks = () => {
	return (
		<Stack direction='row' gap='8px'>
			<Link to='https://github.com/ravindranag' target="_blank">
				<OutlinedIconButton>
					<GitHubIcon
						sx={{
							fill: theme => theme.palette.surfaceVariant.contrastText
						}}
					/>
				</OutlinedIconButton>
			</Link>
			<OutlinedIconButton>
				<DribbbleIcon 
					sx={{
						fill: theme => theme.palette.surfaceVariant.contrastText
					}}
				/>
			</OutlinedIconButton>
			<Link to='https://linkedin.com/in/ravindranag' target='_blank'>
				<OutlinedIconButton>
					<LinkedInIcon
						sx={{
							fill: theme => theme.palette.surfaceVariant.contrastText
						}}
					/>
				</OutlinedIconButton>
			</Link>
		</Stack>
	)
}

export default SocialLinks