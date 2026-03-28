import { createFileRoute, Link } from "@tanstack/react-router";
import { css } from "@/styled-system/css";
import { page } from "@/ui/common";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={css(page)}>
			<h1 className={css({ fontSize: 96 })}>Hello "/projects"!</h1>
			<Link to="/">Home</Link>
		</div>
	);
}
