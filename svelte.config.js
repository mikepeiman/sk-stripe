import adapter from '@sveltejs/adapter-auto';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vite: {
		resolve: {
			alias: {
				$components: path.resolve('./src/components'),
				$lib: path.resolve('./src/lib'),
				$stores: path.resolve('./src/stores'),
				$api: path.resolve('./src/routes/api'),
				$static: path.resolve('./static')
			}
		},
	},
};

export default config;
