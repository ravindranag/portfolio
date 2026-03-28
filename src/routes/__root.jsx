import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import Header from "@/features/shared/Header";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</React.Fragment>
	);
}
