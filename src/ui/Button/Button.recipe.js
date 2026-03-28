import { cva } from "@/styled-system/css";

const button = cva({
	base: {
		padding: "8px 16px",
	},
	variants: {
		variant: {
			outlined: {
				borderWidth: 1,
				borderColor: "neutral.600",
			},
		},
	},
	defaultVariants: {
		variant: "outlined",
	},
});

export default button;
