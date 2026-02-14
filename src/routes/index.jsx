import { createFileRoute } from "@tanstack/react-router";
import { css } from "@/styled-system/css";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1 className={css({ fontSize: 96, fontOpticalSizing: "auto" })}>
				Ravindra Nag
			</h1>
		</div>
	);
}
