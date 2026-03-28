import { cva } from "@/styled-system/css";

const surface = cva({
	base: {
		width: "100%",
		bg: "gray.50",
		padding: "4",
	},
	variants: {
		variant: {
			outlined: {
				border: "1px solid",
				borderColor: "gray.300",
			},
			contained: {},
		},
		shape: {
			rounded: {
				borderRadius: "16px",
			},
			rectangle: {
				borderRadius: 0,
			},
		},
	},
	defaultVariants: {
		shape: "rounded",
		variant: "outlined",
	},
});

export default surface;
