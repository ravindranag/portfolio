import { Stack, Typography } from "@mui/material"
import Image from "next/image"

const Logo = () => {
	return (
		<Stack direction='row' gap='8px'>
			<Stack width={24} height={24} justifyContent='center' alignItems='center'>
				<Image
					width={12}
					height={12}
					src='/favicon/android-chrome-512x512.png'
					alt='Diamond'
				/>
			</Stack>
			<Typography variant="titleMedium">Ravindra Nag</Typography>
		</Stack>
	)
}

export default Logo