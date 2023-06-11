import { Stack, Button } from "@mui/material"
import TabContainer from "./TabContainer"
import Link from "next/link"

const UserActions = () => {
	return (
		<Stack flexGrow={1} direction='row' justifyContent='end'>
			<TabContainer />
			<Link href='mailto:ravindranag52@gmail.com' target='_blank'>
				<Button variant='contained' color='primaryContainer'>
					Hire Me
				</Button>
			</Link>
		</Stack>
	)
}

export default UserActions