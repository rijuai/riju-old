import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: [vitePreprocess(), mdsvex({ layout: "./src/lib/components/BlogLayout.svelte" })],
	kit: {
		adapter: adapter(),
		alias: { $lib: "./src/lib" }
	},
	extensions: [".svelte", ".svx"]
};

export default config;
