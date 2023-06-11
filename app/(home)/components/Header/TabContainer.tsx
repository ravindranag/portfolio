import { Stack, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { navItems } from "./Header"
import useHomeTabStore from "@/stores/useHomeTabStore"


const TabContainer = () => {
	const [
		activeTab,
		setActiveTab,
		tabIndicatorTranslateX,
		setTabIndicatorTranslateX
	] = useHomeTabStore(state => [
		state.activeTab, 
		state.setActiveTab, 
		state.tabIndicatorTranslateX, 
		state.setTabIndicatorTranslateX
	])

	return (
		<Stack
			sx={{
				position: 'absolute',
				bottom: 0,
				left: '50%',
				transform: 'translateX(-50%)'
			}}
		>
			<Tabs 
				value={activeTab}
				TabIndicatorProps={{
					sx: {
						maxWidth: 20,
						height: 3,
						borderRadius: '100px 100px 0 0',
						transform: `translateX(${tabIndicatorTranslateX}px)`
					}
				}}
				onChange={(e, newTab) => {
					const tx = (e.currentTarget.getBoundingClientRect().width / 2) - 10
					setTabIndicatorTranslateX(tx)
					setActiveTab(newTab)
				}}
			>
				{navItems.map((t, idx) => <Tab label={t.label} key={`tab-${t.label}`} />)}
			</Tabs>
		</Stack>
	)
}

export default TabContainer