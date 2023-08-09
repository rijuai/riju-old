import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// appDir: 'dashboard',
		paths: {
			base: '/dashboard',
			assets: '/dashboard'
		},
	}
};

export default config;
