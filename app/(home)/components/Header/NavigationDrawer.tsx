import useDrawerStore from "@/stores/useDrawerStore"
import { Close } from "@mui/icons-material"
import { Button, Divider, Drawer, IconButton, Stack } from "@mui/material"
import NavigationDrawerItemContainer from "./NavigationDrawerItemContainer"
import Link from "next/link"

const DRAWER_MAX_WIDTH = 400

const NavigationDrawer = () => {
	const [drawerOpen, toggleDrawerOpen] = useDrawerStore(state => [state.drawerOpen, state.toggleDrawerOpen])

	return (
		<Drawer
			variant="temporary"
			open={drawerOpen}
			onClose={() => toggleDrawerOpen()}
			sx={{
				width: '100%',
				maxWidth: DRAWER_MAX_WIDTH,
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: DRAWER_MAX_WIDTH,
					bgcolor: 'surface.2'
				}
			}}
			anchor="right"
			keepMounted
		>
			<Stack padding='0 24px'>
				<Stack padding='20px 0' alignItems='end'>
					<IconButton onClick={() => toggleDrawerOpen()}>
						<Close />
					</IconButton>
				</Stack>
				<NavigationDrawerItemContainer />
				<Divider 
					flexItem
					variant="middle"
					sx={{
						borderColor: 'outlineVariant'
					}}
				/>
				<Stack padding='20px 0' alignItems='end'>
					<Link href='mailto:ravindranag52@gmail.com' target="_blank">
						<Button
							variant='contained'
						>
							Hire Me
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Drawer>
	)
}

export default NavigationDrawer