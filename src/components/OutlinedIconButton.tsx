import { IconButton, IconButtonProps } from "@mui/material"
import { PropsWithChildren } from "react"

const OutlinedIconButton = ({children, ...others}: PropsWithChildren<IconButtonProps>) => {
	return (
		<IconButton
			sx={{
				width: 40,
				height: 40,
				border: '1px solid',
				borderColor: 'divider'
			}}
			{...others}
		>
			{children}
		</IconButton>
	)
}	

export default OutlinedIconButton