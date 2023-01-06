import { Card, Modal, Stack } from "@mui/material";

const Loader = ({
	open
}) => {
	return (
		<Modal
			open={open}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Card>
				Loading
			</Card>
		</Modal>
	);
}

export default Loader;