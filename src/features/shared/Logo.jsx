/* eslint-disable no-unused-vars */
import { styled } from "@/styled-system/jsx";

/**
 * @type {import("react").FC<import("react").SVGProps>}
 *
 */
const Logo = ({ width = 12, height = 12, color = "fuchsia.600" }) => {
	return (
		<styled.svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			color={color}
			transform={`rotateZ(45deg)`}
		>
			<title>Diamond</title>
			<path d="M3 3h18v18H3z" fill="currentcolor" />
		</styled.svg>
	);
};

export default Logo;
