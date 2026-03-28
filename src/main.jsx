import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.js";

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	defaultViewTransition: {
		types: ({ fromLocation, toLocation }) => {
			let direction = "none";

			if (fromLocation) {
				const fromIndex = fromLocation.state.__TSR_index;
				const toIndex = toLocation.state.__TSR_index;

				direction = fromIndex > toIndex ? "backward" : "forward";
			}

			return [`slide-${direction}`];
		},
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
