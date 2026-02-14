import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			disableTypes: true,
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
	resolve: {
		alias: {
			"@/": path.resolve(__dirname, "./src/"),
			"@/styled-system": path.resolve(__dirname, "./styled-system"),
		},
	},
	server: {
		port: 4000,
	},
});
