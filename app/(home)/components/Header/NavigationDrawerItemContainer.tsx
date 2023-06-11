import { Button, Stack } from "@mui/material"
import { navItems } from "./Header"
import useHomeTabStore from "@/stores/useHomeTabStore"
import { MouseEventHandler } from "react"

type NavigationDrawerItemProps = {
	active: boolean
	label: string
	onClick: MouseEventHandler<HTMLButtonElement>
}

const NavigationDrawerItem = ({active, label, onClick}: NavigationDrawerItemProps) => {
	return (
		<Button
			variant={active ? 'contained' : 'text'}
			sx={{
				padding: '16px 24px',
				justifyContent: 'start',
				color: active ? 'secondaryContainer.contrastText' : 'text.secondary'
			}}
			color='secondaryContainer'
			onClick={onClick}
		>
			{label}
		</Button>
	)
}

const NavigationDrawerItemContainer = () => {
	const [activeTab, setActiveTab] = useHomeTabStore(state => [state.activeTab, state.setActiveTab])

	return (
		<Stack>
			{navItems.map((n, idx) => (
				<NavigationDrawerItem 
					key={`nav-item-${n.label}`}
					active={idx === activeTab}
					label={n.label}
					onClick={() => setActiveTab(idx)}
				/>
			))}
		</Stack>
	)
}

export default NavigationDrawerItemContainer