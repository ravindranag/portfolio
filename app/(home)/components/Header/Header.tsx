'use client'

import Logo from "@/components/Logo/Logo"
import { AppBar, Button, Container, IconButton, Stack, Theme, Toolbar, useMediaQuery } from "@mui/material"
import TabContainer from "./TabContainer"
import UserActions from "./UserActions"
import { Menu } from "@mui/icons-material"
import useDrawerStore from "@/stores/useDrawerStore"
import NavigationDrawer from "./NavigationDrawer"

type NavItem = {
	label: string
	href?: string
}

export const navItems: NavItem[] = [
	{
		label: 'Home'
	},
	{
		label: 'Works'
	},
	{
		label: 'Contact'
	},
]

const Header = () => {
	const isMobileDevice = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
	const [toggleDrawerOpen] = useDrawerStore(state => [state.toggleDrawerOpen])

	return (
		<Container maxWidth='md'>
			<AppBar
				color="transparent"
				position="sticky"
			>
				<Toolbar>
					<Stack
						direction='row' 
						padding='10px 24px' 
						width='100%'
						alignItems='center'
						justifyContent='space-between'
						borderBottom='1px solid'
						borderColor='outlineVariant'
						position='relative'
					>
						<Logo />
						{ !isMobileDevice && <UserActions /> }
						{ isMobileDevice && (
							<IconButton onClick={() => toggleDrawerOpen()}>
								<Menu />
							</IconButton>
						) }
						{isMobileDevice && <NavigationDrawer />}
					</Stack>
				</Toolbar>
			</AppBar>
		</Container>
	)
}

export default Header